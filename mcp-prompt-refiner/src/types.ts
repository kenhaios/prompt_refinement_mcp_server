export interface AnalysisResult {
  score: number;
  strengths: string[];
  weaknesses: string[];
  clarity_score: number;
  specificity_score: number;
  context_score: number;
  structure_score: number;
  completeness_score: number;
  suggestions?: string[];
}

export interface RefineResult {
  refined_prompt: string;
  changes_made: string[];
  improvement_score: number;
  original_score: number;
  refined_score: number;
}

export interface CompareResult {
  winner: string;
  score_a: number;
  score_b: number;
  comparison_details: Record<string, unknown>;
  recommendation: string;
}
