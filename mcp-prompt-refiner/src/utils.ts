import fs from 'fs';
import path from 'path';
import { Config } from './types';

let cachedConfig: Config | null = null;

export function loadConfig(): Config {
  if (cachedConfig) return cachedConfig;
  const configPath = path.join(__dirname, '..', 'config.json');
  const raw = fs.readFileSync(configPath, 'utf-8');
  cachedConfig = JSON.parse(raw) as Config;
  return cachedConfig;
}

export function clampScore(value: number): number {
  return Math.min(10, Math.max(1, value));
}
