export type TipoNotificacao =
  | 'appointment'
  | 'chat'
  | 'patient'
  | 'program'
  | 'generic';

export type CanalNotificacao = 'internal' | 'email';

export interface NotificacaoFisio {
  id: number;
  title: string;
  body: string;
  is_read: boolean;
  created_at: string;
  targetType: TipoNotificacao | null;
  targetId: number | null;
}

export interface NotificacaoPaciente {
  id: number;
  title: string;
  body: string;
  is_read: boolean;
  created_at: string;
  targetType: 'appointment' | 'chat' | 'program' | null;
  targetId: number | null;
}
