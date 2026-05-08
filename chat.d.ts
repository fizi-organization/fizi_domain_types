export type DirecaoMensagem = 'incoming' | 'outgoing';

export interface Conversa {
  id: number;
  patient_name: string;
  patient_email: string;
  last_message: string | null;
  last_message_at: string | null;
  unread_count: number;
}

export interface Mensagem {
  id: number;
  conversation: number;
  sender_role: 'patient' | 'physio';
  content: string;
  created_at: string;
}
