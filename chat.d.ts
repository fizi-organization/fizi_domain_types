export type DirecaoMensagem = 'incoming' | 'outgoing';

export interface Conversa {
  id: number;
  patient_name: string;
  patient_email: string;
  last_message: string | null;
  last_message_at: string | null;
  unread_count: number;
}

export interface ConversaFisio {
  id: number;
  patientName: string;
  physioName: string;
  physioSubtitle: string;
  patientStatus: string;
  lastMessagePreview: string;
  updatedAt: string;
  unreadCount: number;
}

export interface Mensagem {
  id: number;
  conversation: number;
  sender_role: 'patient' | 'physio';
  content: string;
  created_at: string;
}

export interface MensagemFisio {
  id: number;
  authorName: string;
  direction: DirecaoMensagem;
  body: string;
  sentAt: string;
}
