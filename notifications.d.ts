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
  description: string;
  createdAt: string;
  channel: CanalNotificacao;
  read: boolean;
  kind: TipoNotificacao | 'message';
  targetType: TipoNotificacao | null;
  targetId: number | null;
}

export interface NotificacaoPaciente {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  channel: CanalNotificacao;
  read: boolean;
  kind: 'appointment' | 'chat' | 'message' | 'program' | 'generic';
  targetType: 'appointment' | 'chat' | 'program' | null;
  targetId: number | null;
}
