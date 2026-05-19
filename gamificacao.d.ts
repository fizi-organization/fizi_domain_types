export interface CheckIn {
  id: number;
  data: string;
  playlist_nome: string;
  avaliacao: number | null;
  dor_eva: number | null;
  comentario: string | null;
  duracao_minutos: number;
}

export interface EvaHistoricoItem {
  data: string;
  dor_eva: number;
}

export interface SentimentoHistoricoItem {
  data: string;
  avaliacao: number;
}
