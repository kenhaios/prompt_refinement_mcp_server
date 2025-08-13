export interface AnalyzePromptInput {
  prompt: string;
  task_type?: string;
}

export interface ScoreBreakdown {
  clarity: number;
  specificity: number;
  context: number;
  structure: number;
  completeness: number;
}

export interface AnalysisResult {
  score: number;
  strengths: string[];
  weaknesses: string[];
  scores: ScoreBreakdown;
  suggestions?: string[];
}

export interface RefinePromptInput {
  original_prompt: string;
  focus_areas?: string[];
  task_type?: string;
}

export interface RefineResult {
  refined_prompt: string;
  changes_made: string[];
  improvement_score: number;
  original_score: number;
  refined_score: number;
}

export interface ComparePromptsInput {
  prompt_a: string;
  prompt_b: string;
  criteria?: string[];
}

export interface CompareResult {
  winner: 'prompt_a' | 'prompt_b' | 'tie';
  score_a: number;
  score_b: number;
  comparison_details: Record<string, unknown>;
  recommendation: string;
}

export interface ScoringWeights {
  clarity: number;
  specificity: number;
  context: number;
  structure: number;
  completeness: number;
}

export interface ServerSettings {
  port: number;
  max_prompt_length: number;
  rate_limit: number;
}

export interface Config {
  scoring_weights: ScoringWeights;
  server: ServerSettings;
}

