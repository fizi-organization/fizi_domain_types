export type RoleFisio = 'physio' | 'admin';

export interface FisioterapeutaResumo {
  id: number;
  nome: string;
  crefito: string | null;
  email: string | null;
}

export interface SessaoFisioterapeuta {
  id?: number | null;
  nome?: string | null;
  crefito?: string | null;
  email?: string | null;
  firebase_uid?: string | null;
  role?: RoleFisio | string | null;
  is_authenticated: boolean;
}
