export interface PacienteResumo {
  id: number;
  nome: string;
  email: string;
  programa_ativo_titulo: string | null;
  programas_paciente_publicados_count: number;
}

export interface PacienteFisioResumo extends PacienteResumo {
  sobrenome: string;
  telefone: string;
  cidade: string | null;
  uf: string | null;
  dias_treino: number[] | null;
  proxima_reuniao_data_hora?: string | null;
  sessoes_concluidas: number;
  sessoes_total: number;
  adesao_pct: number | null;
  dor_eva_ultimo: number | null;
}
