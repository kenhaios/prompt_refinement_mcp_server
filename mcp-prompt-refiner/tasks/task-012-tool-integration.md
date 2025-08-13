# Task 012: Tool Integration

**Status:** pending
**Estimated Time:** 2 hours
**Dependencies:** Tasks 009-011

## Objective
Integrate analyzer, refiner, and comparator into MCP server.

## Requirements
- [ ] Wire analyze_prompt handler to analyzer module
- [ ] Wire refine_prompt handler to refiner module
- [ ] Wire compare_prompts handler to comparator module
- [ ] Ensure responses follow defined interfaces
- [ ] Confirm server exports all three tools

## Acceptance Criteria
- [ ] Server routes requests to correct handlers
- [ ] TypeScript build passes with integrated modules

## Files to Create/Modify
- `src/index.ts`
- `src/analyzer.ts`
- `src/refiner.ts`
- `src/comparator.ts`

## Notes
Run through basic manual tests after integration.
