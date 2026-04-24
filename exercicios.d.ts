export type ProvedorAssetVideo = 'mux' | 'legacy';

export type PoliticaPlaybackAssetVideo = 'public' | 'signed';

export type StatusAssetVideo =
  | 'uploading'
  | 'processing'
  | 'ready'
  | 'erro'
  | 'archived';

export type DificuldadeExercicio = 'beginner' | 'intermediate' | 'advanced';

export interface MaterialResumo {
  id: number;
  nome: string;
}

export interface ExercicioResumo {
  id: number;
  slug: string;
  nome: string;
}

export interface AssetVideoExercicioResumo {
  id: number;
  provider: ProvedorAssetVideo;
  playback_id: string | null;
  status: StatusAssetVideo;
  thumbnail_url: string | null;
  duration_seconds: number | null;
}

export interface AssetVideoExercicio {
  id: number;
  exercise_id: number;
  exerciseSlug: string;
  provider: ProvedorAssetVideo;
  provider_asset_id: string | null;
  playback_id: string | null;
  playback_policy: PoliticaPlaybackAssetVideo;
  status: StatusAssetVideo;
  thumbnail_url: string | null;
  source_url: string | null;
  duration_seconds: number | null;
  resolution: string | null;
  version: number;
  is_primary: boolean;
  legacyVideoId: number | null;
  created_at: string;
  updated_at: string;
}

export interface ExercicioDetalhe extends ExercicioResumo {
  descricao: string | null;
  dificuldade: DificuldadeExercicio;
  partes_do_corpo: string[];
  condicoes: string[];
  is_active: boolean;
  categoria: number | null;
  patologia: number | null;
  materiais: MaterialResumo[];
  primaryVideo: AssetVideoExercicio | null;
  created_at: string;
  updated_at: string;
}

export interface VideoResolvidoExercicio {
  asset_id: number;
  provider: ProvedorAssetVideo;
  playback_id: string | null;
  playback_policy: PoliticaPlaybackAssetVideo;
  status: StatusAssetVideo;
  thumbnail_url: string | null;
  duration_seconds: number | null;
}

export interface VideoExercicioPaciente {
  id: number;
  nome: string;
  video_url: string;
  thumbnail_url: string | null;
  duration_seconds: number;
  exercise_id: number | null;
  exercise_slug: string | null;
  resolved_video: VideoResolvidoExercicio | null;
  materiais: MaterialResumo[];
}
