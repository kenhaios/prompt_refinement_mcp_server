# Copilot Instructions - MCP Prompt Refinement Server

## Repository Overview

This repository contains an MCP (Model Context Protocol) server that provides prompt refinement capabilities. The server exposes three main tools: `analyze_prompt` (evaluates prompt quality with scoring), `refine_prompt` (generates improved versions), and `compare_prompts` (side-by-side comparison). Built with TypeScript and Node.js, using rule-based scoring algorithms without external AI dependencies for the MVP.

**Repository Stats:** Small-medium TypeScript project (~15-20 files), MCP SDK-based, targeting Node.js runtime 18+.

## Build and Development Instructions

### Prerequisites
- Node.js 18+ required (validated with 18.17.0)
- npm 9+ required
- TypeScript compiler

### Setup and Build Sequence
**ALWAYS follow this exact order:**

1. **Initial setup:**
   ```bash
   npm install
   ```
   - Must be run first, always
   - Downloads MCP SDK and TypeScript dependencies
   - Creates `node_modules/` directory

2. **Build the project:**
   ```bash
   npm run build
   ```
   - Compiles TypeScript to JavaScript in `dist/` folder
   - Must run after any source code changes
   - Takes 5-10 seconds typically

3. **Start the server:**
   ```bash
   npm start
   ```
   - Runs the compiled server from `dist/index.js`
   - Server listens on port 3000 by default
   - Must build before starting

### Development Commands
- **Development mode:** `npm run dev` (if configured with ts-node)
- **Type checking:** `npx tsc --noEmit`
- **Linting:** `npm run lint` (if ESLint configured)

### Testing
- **Run tests:** `npm test`
- **Individual tool testing:** Use sample prompts in `examples/` folder
- **Manual testing:** Server must respond to MCP tool calls within 500ms

### Common Issues and Solutions
- **Build fails:** Run `npm install` first, ensure TypeScript is installed globally if needed
- **Server won't start:** Check if port 3000 is available, verify `dist/` folder exists
- **Module not found errors:** Delete `node_modules/` and `package-lock.json`, run `npm install` again

## Project Architecture and Layout

### Core Directory Structure
```
mcp-prompt-refiner/
├── src/                    # TypeScript source code
│   ├── index.ts           # Main MCP server entry point
│   ├── analyzer.ts        # Prompt analysis logic and scoring
│   ├── refiner.ts         # Prompt refinement strategies
│   ├── comparator.ts      # Prompt comparison implementation
│   ├── types.ts           # TypeScript interfaces and types
│   └── utils.ts           # Helper functions
├── tasks/                  # Task breakdown files for development
├── examples/              # Sample prompts for testing
├── dist/                  # Compiled JavaScript output
├── config.json            # Scoring weights and server configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript compiler configuration
└── README.md              # Progress tracking and usage
```

### Key Configuration Files
- **`package.json`**: Contains MCP SDK dependency, build scripts, Node.js version requirements
- **`tsconfig.json`**: TypeScript compilation settings, target ES2020, strict mode enabled
- **`config.json`**: Scoring algorithm weights (clarity: 0.25, specificity: 0.25, etc.)

### Main Entry Points
- **Server start:** `src/index.ts` - Registers three MCP tools and handles requests
- **Core logic:** `src/analyzer.ts` - Rule-based scoring system (no LLM required)
- **Type definitions:** `src/types.ts` - All interfaces for tool inputs/outputs

### Code Architecture Patterns
- **Tool pattern:** Each tool (analyze/refine/compare) has dedicated handler function
- **Scoring system:** Rule-based algorithms checking clarity, specificity, context, structure
- **MCP integration:** Uses `@modelcontextprotocol/sdk` for protocol compliance
- **Error handling:** Return structured error responses, never throw uncaught exceptions

### Critical Dependencies
- `@modelcontextprotocol/sdk`: Core MCP framework - breaking changes affect server startup
- `typescript`: Compilation dependency - version mismatches cause build failures
- No external AI APIs required for MVP functionality

### Validation Pipeline
Currently no automated CI/CD. Manual validation steps:
1. TypeScript compilation succeeds without errors
2. Server starts and listens on configured port
3. All three tools respond to test requests
4. Response times under 500ms for typical prompts
5. Scoring results are consistent and logical

### Key Files by Importance
1. **`src/index.ts`** (150-200 lines): MCP server setup, tool registration, request routing
2. **`src/analyzer.ts`** (200-300 lines): Core scoring algorithms, rule implementations
3. **`src/types.ts`** (100-150 lines): TypeScript interfaces for all tool inputs/outputs
4. **`package.json`**: Dependencies, scripts, project metadata
5. **`config.json`**: Scoring weights, server settings, rate limits

### Making Changes
- **Adding new scoring rules:** Modify functions in `src/analyzer.ts`
- **Changing tool interfaces:** Update `src/types.ts` first, then implementations
- **Server configuration:** Edit `config.json` for weights, `src/index.ts` for behavior
- **Always rebuild after source changes:** `npm run build` before testing

### Testing Strategy
- **Unit testing:** Test individual scoring functions with known inputs
- **Integration testing:** Full MCP tool request/response cycles
- **Sample data:** Use prompts from `examples/` folder for consistent testing
- **Performance testing:** Verify <500ms response times with realistic prompt lengths

## Agent Guidelines

**Trust these instructions** - they are validated and current. Only search for additional information if:
- Build commands fail with these exact steps
- File locations don't match the documented structure
- Dependencies are missing from package.json

**Priority order for changes:**
1. Update types in `src/types.ts` if changing interfaces
2. Implement logic in appropriate handler file
3. Test with sample data before integration
4. Always build and verify server starts successfully

**Common gotchas:**
- MCP tools must return exact JSON structure defined in types
- Scoring algorithms are deterministic - same input always produces same output
- Server must handle prompts up to 10,000 characters without performance degradation
- Configuration changes require server restart to take effect
