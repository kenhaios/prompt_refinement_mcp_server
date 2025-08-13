# Task 010: Comparison Report

**Status:** pending
**Estimated Time:** 2 hours
**Dependencies:** Task 009

## Objective
Enhance comparator with detailed reporting and recommendations.

## Requirements
- [ ] Provide breakdown of scores by criteria
- [ ] Support configurable criteria weights
- [ ] Generate recommendation string explaining result
- [ ] Handle ties gracefully in output
- [ ] Include error handling for invalid input

## Acceptance Criteria
- [ ] Output includes winner, scores, breakdown, and recommendation
- [ ] Handles missing or malformed prompts without crashing

## Files to Create/Modify
- `src/comparator.ts`
- `config.json`

## Notes
Reuses analyzer for scoring each prompt.
