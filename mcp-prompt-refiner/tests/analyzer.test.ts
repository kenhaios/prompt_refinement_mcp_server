import assert from 'assert';
import { analyzePrompt } from '../src/analyzer';

function testClarity() {
  const prompt = 'Write a list and include details. Provide results.';
  const result = analyzePrompt({ prompt });
  assert.strictEqual(result.scores.clarity, 10);
}

function testSpecificity() {
  const prompt = 'Provide 3 items in JSON format with exactly 3 entries, for example include edge cases.';
  const result = analyzePrompt({ prompt });
  assert.strictEqual(result.scores.specificity, 10);
}

function testContext() {
  const prompt = 'Explain steps for a web app for developers so that they can deploy, for example, assuming Node environment.';
  const result = analyzePrompt({ prompt });
  assert.strictEqual(result.scores.context, 10);
}

function testStructure() {
  const prompt = '1. First, do this.\n\n2. Next, do that.';
  const result = analyzePrompt({ prompt });
  assert.strictEqual(result.scores.structure, 10);
}

function testCompleteness() {
  const prompt = 'The program must include success criteria when done. Describe input and output assuming valid data and note it depends on configuration.';
  const result = analyzePrompt({ prompt });
  assert.strictEqual(result.scores.completeness, 10);
}

function testEmptyPrompt() {
  assert.throws(() => analyzePrompt({ prompt: '   ' }));
}

function testLongPrompt() {
  const longPrompt = 'a'.repeat(10001);
  assert.throws(() => analyzePrompt({ prompt: longPrompt }));
}

try {
  testClarity();
  testSpecificity();
  testContext();
  testStructure();
  testCompleteness();
  testEmptyPrompt();
  testLongPrompt();
  console.log('All analyzer tests passed');
} catch (err) {
  console.error('Analyzer tests failed');
  console.error(err);
  process.exit(1);
}
