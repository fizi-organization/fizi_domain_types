#!/usr/bin/env python3
"""Scanner de IOC do incidente Fizi (crypto-RAT / backdoor remote-eval).

Varre o repositorio por:
1. Assinatura do RAT ofuscado (`global['!']=` / `global.i=`).
2. Backdoor remote-eval (`atob(...)` seguido de `eval(`).
3. Arquivos de fonte (.woff2/.woff/.ttf/.eot/.otf) cujo conteudo nao bate
   com a assinatura binaria esperada para o formato — o disfarce usado nas
   duas infeccoes anteriores era um payload JS salvo com extensao de fonte.
4. `.vscode/tasks.json` com execucao automatica (`runOn: folderOpen` ou
   `task.allowAutomaticTasks` em `settings.json`).

Sai com status 1 e lista os achados se qualquer IOC for encontrado.
"""
import os
import re
import sys

ROOT = os.environ.get("SCAN_ROOT", ".")
SKIP_DIRS = {".git", "node_modules"}
SELF_PATH = os.path.abspath(__file__)

RAT_SIGNATURE = re.compile(r"global\['!'\]\s*=|global\.i\s*=")
REMOTE_EVAL = re.compile(r"atob\(")

FONT_MAGIC = {
    ".woff2": b"wOF2",
    ".woff": b"wOFF",
    ".ttf": (b"\x00\x01\x00\x00", b"true", b"ttcf"),
    ".otf": b"OTTO",
    ".eot": None,  # formato legado sem magic bytes curto e confiavel; nao valida
}

findings = []

for dirpath, dirnames, filenames in os.walk(ROOT):
    dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
    for name in filenames:
        path = os.path.join(dirpath, name)
        if os.path.abspath(path) == SELF_PATH:
            continue
        rel = os.path.relpath(path, ROOT)
        ext = os.path.splitext(name)[1].lower()

        if ext in FONT_MAGIC:
            magic = FONT_MAGIC[ext]
            if magic is None:
                continue
            try:
                with open(path, "rb") as f:
                    head = f.read(8)
            except OSError:
                continue
            expected = magic if isinstance(magic, tuple) else (magic,)
            if not any(head.startswith(m) for m in expected):
                findings.append(f"{rel}: extensao de fonte ({ext}) mas magic bytes nao batem — possivel payload disfarcado")
            continue

        if ext in {".js", ".ts", ".tsx", ".jsx", ".mjs", ".cjs", ".md", ".html", ".json", ".py"}:
            try:
                with open(path, "r", encoding="utf-8", errors="ignore") as f:
                    text = f.read()
            except OSError:
                continue
            if RAT_SIGNATURE.search(text):
                findings.append(f"{rel}: assinatura do RAT ofuscado encontrada")
            if REMOTE_EVAL.search(text) and "eval(" in text:
                findings.append(f"{rel}: padrao atob(...)+eval( encontrado")

tasks_json = os.path.join(ROOT, ".vscode", "tasks.json")
if os.path.exists(tasks_json):
    with open(tasks_json, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    if "folderOpen" in content:
        findings.append(".vscode/tasks.json: runOn folderOpen (execucao automatica ao abrir a pasta)")

settings_json = os.path.join(ROOT, ".vscode", "settings.json")
if os.path.exists(settings_json):
    with open(settings_json, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    if "allowAutomaticTasks" in content and "true" in content:
        findings.append(".vscode/settings.json: task.allowAutomaticTasks pode estar habilitado")

if findings:
    print("IOCs encontrados:")
    for item in findings:
        print(f"  - {item}")
    sys.exit(1)

print("Nenhum IOC conhecido encontrado.")
sys.exit(0)
