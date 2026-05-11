import type { AssetVideoExercicioResumo, ExercicioResumo, VideoExercicioPaciente } from './exercicios';

export type StatusDiaProgramaSemanal = 'scheduled' | 'review' | 'done';

export type StatusProgramaPaciente = 'rascunho' | 'publicado' | 'arquivado';

export type StatusDiaProgramaPaciente = 'agendado' | 'rascunho';

export interface DiaProgramaSemanalLeitura {
  id: number;
  weekday: string;
  title: string;
  activities: string[];
  status: StatusDiaProgramaSemanal;
}

export interface ProgramaSemanalResumoLeitura {
  id: number;
  patientName: string;
  focus: string;
  adherenceLabel: string;
  updatedAt: string;
}

export interface ProgramaSemanalDetalheLeitura {
  id: number;
  patientName: string;
  focus: string;
  notes: string;
  days: DiaProgramaSemanalLeitura[];
}

export interface ProgramaPresetAtividade {
  id: number;
  exercicio: ExercicioResumo;
  series: number | null;
  repeticoes: number | null;
  tempo_descanso_segundos: number | null;
  observacoes: string | null;
  ordem: number;
}

export interface ProgramaPresetDia {
  id: number;
  weekday: string;
  dia_da_semana: number;
  titulo: string;
  ordem: number;
  atividades: ProgramaPresetAtividade[];
}

export interface ProgramaPresetResumo {
  id: number;
  titulo: string;
  descricao: string | null;
  foco: string | null;
  is_padrao: boolean;
  ativo: boolean;
  fisioterapeuta_nome: string | null;
  can_edit: boolean;
  updated_at: string;
}

export interface ProgramaPresetDetalhe {
  id: number;
  titulo: string;
  descricao: string | null;
  foco: string | null;
  is_padrao: boolean;
  ativo: boolean;
  fisioterapeuta_nome: string | null;
  can_edit: boolean;
  dias: ProgramaPresetDia[];
  created_at: string;
  updated_at: string;
}

export interface ProgramaPresetAtividadeWriteInput {
  exercicio: number;
  series?: number | null;
  repeticoes?: number | null;
  tempo_descanso_segundos?: number | null;
  observacoes?: string | null;
  ordem?: number;
}

export interface ProgramaPresetDiaWriteInput {
  dia_da_semana: number;
  titulo: string;
  ordem?: number;
  atividades: ProgramaPresetAtividadeWriteInput[];
}

export interface ProgramaPresetWriteInput {
  titulo: string;
  descricao: string | null;
  foco: string | null;
  is_padrao?: boolean;
  ativo: boolean;
  dias?: ProgramaPresetDiaWriteInput[];
}

export interface ProgramaPacienteAtividade {
  id: number;
  exercicio: ExercicioResumo;
  asset_video: AssetVideoExercicioResumo | null;
  series: number | null;
  repeticoes: number | null;
  tempo_descanso_segundos: number | null;
  observacoes: string | null;
  ordem: number;
}

export interface ProgramaPacienteDia {
  id: number;
  weekday: string;
  dia_da_semana: number;
  data_agendada: string | null;
  titulo: string;
  status: StatusDiaProgramaPaciente;
  ordem: number;
  atividades: ProgramaPacienteAtividade[];
}

export interface ProgramaPacienteResumo {
  id: number;
  titulo: string;
  foco: string | null;
  status: StatusProgramaPaciente;
  data_agendada: string | null;
  treino_status: StatusDiaProgramaPaciente;
  paciente_nome: string;
  preset_origem_titulo: string | null;
  updated_at: string;
  atividades_count?: number;
  atividades_concluidas_count?: number;
}

export interface ProgramaPacienteDetalhe {
  id: number;
  titulo: string;
  foco: string | null;
  observacoes: string | null;
  status: StatusProgramaPaciente;
  data_agendada: string | null;
  treino_status: StatusDiaProgramaPaciente;
  paciente: number;
  paciente_nome: string;
  preset_origem: number | null;
  dias: ProgramaPacienteDia[];
  created_at: string;
  updated_at: string;
}

export interface ProgressoVideoModulo {
  concluido: boolean;
  completions_count: number;
  last_completed_at: string | null;
}

export interface ItemVideoModuloPaciente {
  id: number;
  ordem: number;
  series: number | null;
  repeticoes: number | null;
  tempo_descanso_segundos: number | null;
  progresso: ProgressoVideoModulo;
  video: VideoExercicioPaciente;
}

export interface ModuloPacienteDetalhe {
  id: number;
  titulo: string;
  nivel: 1 | 2 | 3;
  ordem: number;
  status: 'ativo' | 'pausado' | 'concluido' | 'cancelado';
  total_duration_seconds: number;
  videos: ItemVideoModuloPaciente[];
}
