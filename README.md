# MCP Prompt Refinement Server

A minimal MCP server for analyzing, refining, and comparing prompts to improve their quality and effectiveness.

## Features
- **analyze_prompt**: Score and analyze prompt quality
- **refine_prompt**: Generate improved versions of prompts  
- **compare_prompts**: Compare two prompts side-by-side

## Quick Start
```bash
npm install
npm run build
npm start
```

## Progress Log
<!-- Codex: Add simple one-line updates here as you complete tasks -->
[DATE] - Project structure created
<!-- Example entries:
[2024-01-15] - Basic MCP server setup completed
[2024-01-15] - Prompt analyzer with rule-based scoring implemented
[2024-01-16] - Refinement tool working with improvement suggestions
[2024-01-16] - Comparison tool completed, all three tools integrated
-->

## Task Status
<!-- Codex: Update this as tasks are completed -->
- [ ] Tasks created and broken down
- [ ] Project setup and dependencies
- [ ] Basic MCP server structure  
- [ ] Prompt analysis implementation
- [ ] Prompt refinement logic
- [ ] Prompt comparison tool
- [ ] Integration and testing
- [ ] Documentation complete

## Usage
The server provides three MCP tools for prompt improvement:

### analyze_prompt
Analyzes a prompt and returns quality scores and suggestions.

### refine_prompt  
Takes a prompt and generates an improved version.

### compare_prompts
Compares two prompts and determines which is better.

## Configuration
Edit `config.json` to adjust scoring weights and server settings.

## Development
Run in development mode:
```bash
npm run dev
```

## Notes
<!-- Codex: Add any important notes or limitations here -->
- Built with rule-based scoring (no LLM required)
- Handles prompts up to 10,000 characters
- Target response time: <500ms
