# Task 008: Refinement Algorithm

**Status:** pending
**Estimated Time:** 2 hours
**Dependencies:** Task 007

## Objective
Enhance refinement logic with change tracking and scoring.

## Requirements
- [ ] Track list of changes made during refinement
- [ ] Calculate improvement score using analyzer
- [ ] Preserve original and refined scores in response
- [ ] Support optional focus areas to guide changes
- [ ] Ensure output respects max prompt length

## Acceptance Criteria
- [ ] Response includes refined_prompt, changes_made, and scores
- [ ] Improvement score is greater than or equal to original

## Files to Create/Modify
- `src/refiner.ts`
- `src/analyzer.ts`

## Notes
Reuse analyzer functions to evaluate prompts.
