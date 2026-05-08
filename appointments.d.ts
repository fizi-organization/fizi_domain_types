export type StatusReuniao =
  | 'scheduled'
  | 'in_progress'
  | 'completed'
  | 'cancelled';

export type StatusRsvp = 'pending' | 'accepted' | 'declined';

export type StatusProposta = 'pending_patient' | 'accepted' | 'declined' | null;

export interface ReuniaoResumo {
  id: number;
  data_hora: string;
  call_status: StatusReuniao;
  patient_rsvp_status: StatusRsvp;
  physio_rsvp_status: StatusRsvp;
  proposed_data_hora: string | null;
  proposal_status: StatusProposta;
  proposed_by: 'patient' | 'physio' | null;
  video_url: string | null;
  concluida: boolean;
  reschedule_proposal_count: number;
}

export interface SlotDisponivel {
  time: string;
  starts_at: string;
  duration_minutes: number;
  available: boolean;
  unavailable_reason: 'busy' | 'past' | null;
}
