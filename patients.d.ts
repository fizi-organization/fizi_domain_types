export interface PacienteResumo {
  id: number;
  nome: string;
  email: string;
  programa_ativo_titulo: string | null;
  programas_paciente_publicados_count: number;
}
