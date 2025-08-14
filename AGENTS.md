# Codex Instructions for MCP Prompt Refinement Server

## Project Overview
Build a minimal MCP (Model Context Protocol) server for prompt refinement with three core tools: analyze_prompt, refine_prompt, and compare_prompts. Keep it simple and working before scaling up.

## Your Role and Workflow

### 1. Initial Setup
1. Read the full `PLAN.md` file to understand the complete project scope
2. Break down the plan into small, achievable tasks (10-20 bullet points each)
3. Create individual task files in the `tasks/` folder following the template
4. Work on tasks sequentially, updating status as you progress

### 2. Task Management Rules
- Each task file must follow the exact template format provided
- Limit each task to 5-7 bullet points maximum
- Update task status: `pending` → `in_progress` → `completed` → `verified`
- Always update the main README.md with simple progress notes

### 3. Task File Template
```markdown
# Task [NUMBER]: [TASK_NAME]

**Status:** [pending/in_progress/completed/verified]
**Estimated Time:** [X hours]
**Dependencies:** [List any prerequisite tasks]

## Objective
[Brief description of what this task accomplishes]

## Requirements
- [ ] Bullet point 1
- [ ] Bullet point 2
- [ ] ...
- [ ] [Max 7 bullet points]

## Acceptance Criteria
- [ ] [2-3 clear success criteria]

## Files to Create/Modify
- `path/to/file1.ts`
- `path/to/file2.json`

## Notes
[Any additional context or considerations]
```

### 4. Progress Tracking
- Update task status immediately when starting/completing work
- Add simple one-line updates to README.md under "Progress Log"
- Format: `[DATE TIME] - [Simple description of what was completed]`

### 5. Code Quality Standards
- Use TypeScript for all source code
- Follow the project structure defined in PLAN.md
- Write clean, well-commented code
- Include basic error handling
- Test each tool individually before moving to next task

### 6. Communication Style
- Keep commit messages clear and concise
- Use present tense: "Add prompt analyzer" not "Added prompt analyzer"
- Reference task numbers in commits: "Task 3: Implement prompt scoring logic"

## Project Structure to Follow
```
mcp-prompt-refiner/
├── README.md
├── PLAN.md
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts
│   ├── analyzer.ts
│   ├── refiner.ts
│   ├── comparator.ts
│   └── types.ts
├── tasks/
│   ├── task-001-project-setup.md
│   ├── task-002-analyzer-implementation.md
│   └── [other task files]
└── tests/ (optional for MVP)
```

## Key Technical Requirements
- Use `@modelcontextprotocol/sdk` for MCP implementation
- Implement rule-based scoring (no LLM required for MVP)
- Target response time: <500ms for analysis
- Handle prompts up to 10,000 characters
- Return JSON responses matching the spec format

## Success Criteria for Completion
- [ ] All three tools (analyze, refine, compare) are working
- [ ] MCP server starts and responds correctly
- [ ] Basic error handling implemented
- [ ] README.md documents how to run the server
- [ ] All tasks marked as "verified"

## Important Notes
- Prioritize working code over perfect code
- Test each component individually
- Keep it simple - avoid over-engineering
- Focus on the three core tools first
- Document any assumptions or limitations

## When You're Stuck
- Break the current task into smaller sub-tasks
- Focus on one bullet point at a time
- Test frequently with simple inputs
- Update task status and notes about any blockers

Start by reading PLAN.md, then create your first task file for project setup.
