import { AnalyzePromptInput, AnalysisResult, ScoreBreakdown } from './types';

const MAX_PROMPT_LENGTH = 10000;

export function analyzePrompt(input: AnalyzePromptInput): AnalysisResult {
  if (!input || typeof input.prompt !== 'string') {
    throw new Error('Invalid input: prompt is required');
  }

  const prompt = input.prompt.trim();
  if (prompt.length === 0) {
    throw new Error('Invalid input: prompt is empty');
  }

  if (prompt.length > MAX_PROMPT_LENGTH) {
    throw new Error(`Prompt exceeds maximum length of ${MAX_PROMPT_LENGTH}`);
  }

  const scores: ScoreBreakdown = {
    clarity: 0,
    specificity: 0,
    context: 0,
    structure: 0,
    completeness: 0
  };

  const total = Object.values(scores).reduce((sum, s) => sum + s, 0);
  const average = total / Object.keys(scores).length;

  return {
    score: average,
    strengths: [],
    weaknesses: [],
    scores,
    suggestions: []
  };
}
