export type StatusReuniao =
  | 'scheduled'
  | 'in_progress'
  | 'completed'
  | 'cancelled'
  | 'agendada'
  | 'em_andamento'
  | 'concluida'
  | 'cancelada';

export type StatusRsvp = 'pending' | 'accepted' | 'confirmed' | 'declined';

export type StatusProposta =
  | 'none'
  | 'pending_patient'
  | 'accepted'
  | 'rejected'
  | 'declined'
  | null;

export interface ParticipanteReuniaoResumo {
  id: number;
  nome: string;
  sobrenome?: string;
  crefito?: string | null;
  email?: string | null;
}

export interface ReuniaoResumo {
  id: number;
  paciente?: ParticipanteReuniaoResumo | null;
  fisioterapeuta?: ParticipanteReuniaoResumo | null;
  data_hora: string;
  call_status: StatusReuniao;
  patient_rsvp_status: StatusRsvp;
  patient_rsvp_at?: string | null;
  physio_rsvp_status: StatusRsvp;
  physio_rsvp_at?: string | null;
  proposed_data_hora: string | null;
  proposal_status: StatusProposta;
  proposed_by: 'patient' | 'physio' | null;
  video_url: string | null;
  concluida: boolean;
  reschedule_proposal_count?: number;
  created_at?: string;
}

export interface SlotDisponivel {
  time: string;
  starts_at: string;
  duration_minutes: number;
  available: boolean;
  unavailable_reason: 'busy' | 'past' | null;
}
