import { AnalyzePromptInput, AnalysisResult, ScoreBreakdown, ScoringWeights } from './types';
import { loadConfig, clampScore } from './utils';

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
    clarity: scoreClarity(prompt),
    specificity: scoreSpecificity(prompt),
    context: scoreContext(prompt),
    structure: scoreStructure(prompt),
    completeness: scoreCompleteness(prompt)
  };

  const weights: ScoringWeights = loadConfig().scoring_weights;
  const weightedTotal =
    scores.clarity * weights.clarity +
    scores.specificity * weights.specificity +
    scores.context * weights.context +
    scores.structure * weights.structure +
    scores.completeness * weights.completeness;
  const weightSum =
    weights.clarity +
    weights.specificity +
    weights.context +
    weights.structure +
    weights.completeness;
  const average = weightedTotal / weightSum;

  return {
    score: Number(average.toFixed(2)),
    strengths: [],
    weaknesses: [],
    scores,
    suggestions: []
  };
}

function scoreClarity(prompt: string): number {
  let score = 0;
  if (/\b(write|generate|create|list|explain|describe|summarize)\b/i.test(prompt)) score += 2;
  if (/\b(should|must|include|provide|use)\b/i.test(prompt)) score += 2;
  if (!/\b(stuff|things|something|whatever)\b/i.test(prompt)) score += 2;
  if (/[.?!]/.test(prompt)) score += 2;
  const words = prompt.trim().split(/\s+/).length;
  if (words >= 5 && words <= 200) score += 2;
  return clampScore(score);
}

function scoreSpecificity(prompt: string): number {
  let score = 0;
  if (/\b\d+(\.\d+)?\b/.test(prompt)) score += 2;
  if (/\b(json|list|table|format|markdown)\b/i.test(prompt)) score += 2;
  if (/\b(limit|at least|no more than|exactly|minimum|max)\b/i.test(prompt)) score += 2;
  if (/\b(e\.g\.|for example)\b/i.test(prompt)) score += 2;
  if (/\b(edge cases?|error handling|exceptions)\b/i.test(prompt)) score += 2;
  return clampScore(score);
}

function scoreContext(prompt: string): number {
  let score = 0;
  if (/\bfor (?:a|an|the)\b/i.test(prompt)) score += 2;
  if (/\bfor (beginners|experts|children|students|developers)\b/i.test(prompt)) score += 2;
  if (/\bso that|in order to|to (?:help|allow|enable)\b/i.test(prompt)) score += 2;
  if (/\b(e\.g\.|for example)\b/i.test(prompt)) score += 2;
  if (/\bassuming|given\b/i.test(prompt)) score += 2;
  return clampScore(score);
}

function scoreStructure(prompt: string): number {
  let score = 0;
  if (/\d+\.\s|\n-\s/.test(prompt)) score += 2;
  if (/```|\n\n/.test(prompt)) score += 2;
  if (/\b(step\s\d+|first|next|finally)\b/i.test(prompt)) score += 2;
  if (prompt.includes('\n')) score += 2;
  if (!/\b(lol|omg|wtf)\b/i.test(prompt)) score += 2;
  return clampScore(score);
}

function scoreCompleteness(prompt: string): number {
  let score = 0;
  if (/\b(must|should|include|provide)\b/i.test(prompt)) score += 2;
  if (/\b(success|criteria|done)\b/i.test(prompt)) score += 2;
  if (/\binput|output|return\b/i.test(prompt)) score += 2;
  if (/\bassume|assuming|based on\b/i.test(prompt)) score += 2;
  if (/\bdepends on|requires\b/i.test(prompt)) score += 2;
  return clampScore(score);
}
