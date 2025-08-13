# MCP Prompt Refinement Server - Complete Project Plan

## Project Goal
Create a working MCP server that provides three tools for prompt refinement: analysis, refinement, and comparison. Keep it simple and functional before adding complexity.

## Technical Architecture

### Core Components
1. **MCP Server** (`src/index.ts`)
   - Main server entry point
   - Handle tool registration and requests
   - Route requests to appropriate handlers
   - Return formatted MCP responses

2. **Prompt Analyzer** (`src/analyzer.ts`)
   - Implement rule-based scoring system
   - Calculate clarity, specificity, context, structure scores
   - Identify strengths and weaknesses
   - Generate overall quality score (1-10)

3. **Prompt Refiner** (`src/refiner.ts`)
   - Apply improvement strategies based on analysis
   - Generate refined prompt versions
   - Track changes made
   - Calculate improvement scores

4. **Prompt Comparator** (`src/comparator.ts`)
   - Compare two prompts side-by-side
   - Score each prompt independently
   - Determine winner based on criteria
   - Provide detailed comparison breakdown

5. **Type Definitions** (`src/types.ts`)
   - Define interfaces for all inputs/outputs
   - Tool request/response types
   - Scoring criteria structures
   - Configuration types

## Detailed Feature Requirements

### Tool 1: analyze_prompt
**Input Interface:**
- `prompt: string` (required, max 10,000 chars)
- `task_type?: string` (optional: "coding", "writing", "analysis", etc.)

**Scoring Logic:**
- **Clarity (1-10):** Check for clear instructions, action verbs, unambiguous language
- **Specificity (1-10):** Look for concrete requirements, constraints, format specs
- **Context (1-10):** Evaluate background info, examples, domain context
- **Structure (1-10):** Assess organization, formatting, logical flow
- **Completeness (1-10):** Check if all necessary info is provided

**Output Interface:**
- `score: number` (1-10, weighted average)
- `strengths: string[]` (positive aspects found)
- `weaknesses: string[]` (areas needing improvement)
- `clarity_score: number` (1-10)
- `specificity_score: number` (1-10)
- `suggestions?: string[]` (optional improvement hints)

### Tool 2: refine_prompt
**Input Interface:**
- `original_prompt: string` (required)
- `focus_areas?: string[]` (optional: ["clarity", "specificity", "examples", etc.])
- `task_type?: string` (optional context)

**Refinement Strategies:**
- Add specific language/framework when missing
- Include concrete examples if absent
- Break down complex requests into steps
- Add format specifications
- Clarify ambiguous terms
- Add constraints and edge cases

**Output Interface:**
- `refined_prompt: string` (improved version)
- `changes_made: string[]` (list of improvements)
- `improvement_score: number` (expected improvement)
- `original_score: number` (baseline score)
- `refined_score: number` (new predicted score)

### Tool 3: compare_prompts
**Input Interface:**
- `prompt_a: string` (required)
- `prompt_b: string` (required)
- `criteria?: string[]` (optional comparison criteria)

**Comparison Logic:**
- Analyze both prompts using same scoring system
- Compare across all criteria
- Determine winner (or tie)
- Provide detailed breakdown

**Output Interface:**
- `winner: string` ("prompt_a" | "prompt_b" | "tie")
- `score_a: number` (overall score for A)
- `score_b: number` (overall score for B)
- `comparison_details: object` (breakdown by criteria)
- `recommendation: string` (which to use and why)

## Implementation Strategy

### Phase 1: Foundation (Tasks 1-3)
1. Project setup with proper dependencies
2. Basic MCP server structure
3. Type definitions and interfaces

### Phase 2: Core Analysis (Tasks 4-6)
4. Implement basic prompt analyzer
5. Build scoring algorithms
6. Test with sample prompts

### Phase 3: Refinement Logic (Tasks 7-9)
7. Create prompt refinement strategies
8. Implement improvement algorithms
9. Build change tracking system

### Phase 4: Comparison Tool (Tasks 10-11)
10. Implement prompt comparison logic
11. Create detailed comparison reports

### Phase 5: Integration & Testing (Tasks 12-14)
12. Integrate all tools into MCP server
13. End-to-end testing
14. Documentation and cleanup

## Rule-Based Scoring Details

### Clarity Scoring Rules
- Clear action verbs (+2 points)
- Specific instructions (+2 points)
- No ambiguous terms (+2 points)
- Logical sentence structure (+2 points)
- Appropriate length (+2 points)

### Specificity Scoring Rules
- Concrete requirements listed (+2 points)
- Format specifications provided (+2 points)
- Constraints mentioned (+2 points)
- Examples included (+2 points)
- Edge cases addressed (+2 points)

### Context Scoring Rules
- Domain/background provided (+2 points)
- Target audience specified (+2 points)
- Use case explained (+2 points)
- Examples given (+2 points)
- Prerequisites mentioned (+2 points)

### Structure Scoring Rules
- Logical organization (+2 points)
- Proper formatting (+2 points)
- Clear sections/steps (+2 points)
- Good use of whitespace (+2 points)
- Professional tone (+2 points)

### Completeness Scoring Rules
- All requirements stated (+2 points)
- Success criteria defined (+2 points)
- Input/output specified (+2 points)
- Assumptions clarified (+2 points)
- Dependencies mentioned (+2 points)

## Configuration System
Create configurable scoring weights:
```json
{
  "scoring_weights": {
    "clarity": 0.25,
    "specificity": 0.25,
    "context": 0.20,
    "structure": 0.15,
    "completeness": 0.15
  },
  "server": {
    "port": 3000,
    "max_prompt_length": 10000,
    "rate_limit": 100
  }
}
```

## Testing Strategy
- Unit tests for each scoring function
- Integration tests for MCP tool responses
- Sample prompts for manual testing
- Edge case validation (empty prompts, very long prompts)

## Success Metrics
- Server starts without errors
- All three tools respond correctly
- Response time <500ms
- Scores are consistent and logical
- Refinements actually improve prompts
- Comparisons make sense

## Potential Extensions (Post-MVP)
- LLM integration for advanced analysis
- Custom scoring models
- Prompt template library
- A/B testing capabilities
- Performance analytics

## File Organization
```
mcp-prompt-refiner/
├── README.md (progress tracking)
├── PLAN.md (this file)
├── package.json
├── tsconfig.json
├── config.json (scoring weights)
├── src/
│   ├── index.ts (MCP server)
│   ├── analyzer.ts (analysis logic)
│   ├── refiner.ts (refinement logic)
│   ├── comparator.ts (comparison logic)
│   ├── types.ts (interfaces)
│   └── utils.ts (helper functions)
├── tasks/ (task breakdown files)
└── examples/ (sample prompts for testing)
```

## Key Dependencies
- `@modelcontextprotocol/sdk`: MCP framework
- `typescript`: Type safety
- `@types/node`: Node.js types
- Basic Node.js built-ins (no external AI libraries for MVP)

This plan prioritizes getting a working system quickly while maintaining code quality and extensibility.
