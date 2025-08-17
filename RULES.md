# ⛔ BLOCKING RULES - Non-Negotiable Behavioral Enforcement

## RULE #0: ⛔ AUTOMATIC AGENT DELEGATION (UNIVERSAL ENFORCEMENT)

### 🤖 MANDATORY PRE-ACTION PROTOCOL
**BEFORE ANY RESPONSE - SCAN FOR AGENT APPLICABILITY:**

```
STEP 1: KEYWORD ANALYSIS
- Scan user request for agent trigger keywords
- Match request context to agent specializations
- Identify task complexity and domain requirements

STEP 2: AGENT SELECTION MATRIX
IF utility_domain_detected: USE_MANDATORY_UTILITY_AGENT
ELIF single_domain_task: USE_SPECIALIZED_AGENT  
ELIF cross_domain_task: USE_STUDIO_COACH_ORCHESTRATION
ELSE: PROCEED_WITH_DIRECT_TOOLS

STEP 3: AUTO-DELEGATION
- Spawn appropriate agent(s) with task context
- ONLY use direct tools if NO agent matches or agent fails
- Document agent selection reasoning if non-obvious
```

### 🎯 TRIGGER KEYWORD MATRIX
**Utility Agents (MANDATORY)**:
- file creation, directory, template → file-creator
- git, commit, branch, merge, push → git-workflow
- date, time, schedule, timestamp → date-checker
- docs, readme, documentation → context-fetcher  
- search, research, readwise, web → knowledge-fetcher

**Domain Specialists**:
- mobile, android, ios, app → mobile-app-builder
- web, react, frontend, ui → frontend-developer
- api, backend, server, database → backend-architect
- test, testing, bug, debug → test-writer-fixer
- design, interface, ux → ui-designer
- deploy, deployment, production → devops-automator

**Cross-Domain Coordination**:
- complex, multi-step, coordinate → studio-coach
- analyze, investigate, research → appropriate domain + sequential-thinking

### ⚡ ENFORCEMENT HIERARCHY
1. **RULE #0 SUPERSEDES ALL**: Automatic agent delegation takes precedence over direct tool usage
2. **NO MANUAL OVERRIDE**: Cannot bypass agent delegation without explicit agent failure
3. **CONTEXT PRESERVATION**: Every agent delegation preserves conversation context through fresh spawns
4. **QUALITY ASSURANCE**: Agent expertise delivers superior results over general-purpose tool usage

## RULE #0.5: ⚡ INTELLIGENT ROUTING (HYBRID APPROACH)

### 🎯 TASK CLASSIFICATION MATRIX
**BEFORE ANY RESPONSE - CLASSIFY TASK TYPE:**

```
STEP 1: TASK ANALYSIS
- Analyze request complexity and domain requirements
- Identify if task is utility vs expertise-driven
- Check user preference indicators

STEP 2: ROUTING DECISION
IF utility_operation: USE_COMMAND (when available)
ELIF complex_analysis: USE_SPECIALIZED_AGENT
ELIF multi_domain: USE_STUDIO_COACH_ORCHESTRATION
ELIF user_preference: HONOR_PREFERENCE
ELSE: DEFAULT_TO_AGENT_DELEGATION

STEP 3: EXECUTION
- Execute via optimal path
- Preserve context isolation
- Maintain quality standards
```

### 🔧 UTILITY OPERATIONS (Command-First)
**Use commands for these simple, well-defined tasks:**
- git operations: /git for simple commits, pushes, branches
- code analysis: /analyze for quick security scans  
- test execution: /test for running test suites
- code cleanup: /cleanup for formatting and organization

### 🧠 EXPERTISE OPERATIONS (Agent-First)  
**Use agents for these complex, quality-critical tasks:**
- system architecture: backend-architect agent
- UI/UX design: ui-designer + ux-researcher agents
- marketing strategy: growth-hacker + content-creator agents
- complex debugging: appropriate domain agent + sequential-thinking
- multi-domain projects: studio-coach orchestration

### 👤 USER PREFERENCE OVERRIDE
**Honor explicit user preferences:**
- "Use [agent-name] agent for..." → Use specified agent
- "Run /command-name..." → Use specified command  
- "I prefer commands/agents for..." → Learn and apply preference

### ⚖️ ROUTING QUALITY GATES
**Commands must meet quality standards or escalate to agents:**
- If command fails or produces subpar results → Escalate to appropriate agent
- If task complexity exceeds command scope → Route to specialized agent
- If multi-step workflow needed → Use studio-coach orchestration
- Context preservation always takes precedence

## RULE #1: ⛔ AGENT-FIRST ENFORCEMENT (COGNITIVE STOP)

### 🚫 FORBIDDEN WITHOUT AGENTS
**STOP IMMEDIATELY if attempting these operations directly:**

- **file-creator** MANDATORY for: File creation (Write tool), Directory creation, Template application, Batch file operations
- **git-workflow** MANDATORY for: All git commands (commit, push, branch, merge), Repository operations, Version control workflows
- **context-fetcher** MANDATORY for: Documentation retrieval (Read tool for docs), Internal knowledge base access, Technical reference lookup
- **knowledge-fetcher** MANDATORY for: External research (Readwise, Context7), Web search operations, Knowledge synthesis from multiple sources
- **date-checker** MANDATORY for: Date/time calculations, Scheduling queries, Timestamp analysis

### ⛔ ENFORCEMENT PROTOCOL
```
BEFORE ANY TOOL USE:
1. PAUSE - Does an agent exist for this domain?
2. CHECK - Is this a utility agent mandatory domain?
3. REDIRECT - Use agent instead of direct tool
4. ONLY PROCEED with direct tools if NO AGENT EXISTS or AGENT FAILS
```

## RULE #2: ⛔ FILE SAFETY ENFORCEMENT

**MANDATORY Read-Before-Write Protocol:**
- Read tool MUST precede Write/Edit operations
- Absolute paths ONLY - no relative paths permitted
- Never auto-commit without explicit user permission

**MANDATORY Commit Message Standards:**
- Never reference "Claude", "AI", "assistant", or similar terms
- Use active voice and technical descriptions
- Focus on what changed, not who/what made the change
- Examples:
  - ✅ "Add automatic agent delegation protocol"  
  - ✅ "Optimize configuration token consumption by 18%"
  - ✅ "Enhance skin tone filter selection logic"
  - ❌ "Claude added automatic agent delegation"
  - ❌ "AI optimized the configuration files"
  - ❌ "Assistant enhanced the skin tone filter"
- **Enforcement**: git-workflow agent MUST validate and rewrite non-compliant messages
- **Auto-correction**: Replace AI references with appropriate technical descriptions

## RULE #3: ⛔ CODEBASE CHANGE ENFORCEMENT

**MANDATORY Discovery-Before-Change Protocol:**
- Complete project-wide discovery before ANY changes
- Search ALL file types for ALL variations of target terms
- Document all references with context and impact assessment
- Execute changes in coordinated manner following plan

# ✅ OPERATIONAL GUIDELINES - Best Practices & Standards

## Task Execution Standards

### Validation Protocols
- Always validate before execution, verify after completion
- Run lint/typecheck before marking tasks complete
- Maintain ≥90% context retention across operations
- Use batch tool calls when possible, sequential only when dependencies exist

### Framework Compliance
- Check package.json/requirements.txt before using libraries
- Follow existing project patterns and conventions
- Use project's existing import styles and organization
- Respect framework lifecycles and best practices

## Quality Assurance Pipeline

### Validation Sequence
1. **Syntax Check**: Language parsers and intelligent suggestions
2. **Type Validation**: Type compatibility and context-aware suggestions
3. **Code Quality**: Linting rules and refactoring suggestions
4. **Security Review**: Vulnerability assessment and compliance
5. **Testing**: Coverage analysis and validation
6. **Performance**: Benchmarking and optimization suggestions
7. **Documentation**: Completeness validation and accuracy verification
8. **Integration**: Deployment validation and compatibility verification

### Evidence Requirements
- **Quantitative**: Performance/quality/security metrics, coverage percentages
- **Qualitative**: Code quality improvements, security enhancements, UX improvements
- **Documentation**: Change rationale, test results, performance benchmarks

## Operational Safety Protocols

### ✅ ALWAYS Execute
- Agent-first approach for ALL operations
- Specialized agents for domain-specific tasks
- Batch operations for efficiency
- Complete discovery before codebase changes
- Verify completion with evidence

### ⛔ NEVER Execute
- Direct tools when agents are available (violates agent-first mandate)
- File modifications without Read operations
- Relative paths in file operations
- Framework pattern violations
- Changes without discovery phase
- Task completion without verification