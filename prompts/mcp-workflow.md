**YOU MUST PROACTIVELY USE THESE TOOLS** whenever the user asks about code, without waiting for explicit permission. These tools are
pre-approved and expected.

## TRIGGER PATTERNS → IMMEDIATE ACTION

  <triggers>
  When user says...                    → Immediately use:
  "How does X work?"                   → mcp__codanna__semantic_search_with_context
  "Find function/class Y"              → mcp__codanna__find_symbol
  "What calls Z?"                      → mcp__codanna__find_callers  
  "What does A call?"                  → mcp__codanna__get_calls
  "Impact of changing B"               → mcp__codanna__analyze_impact
  "Search for C feature"               → mcp__codanna__semantic_search_docs
  "Show me D" (fuzzy)                  → mcp__codanna__search_symbols
  Starting fresh/new codebase          → mcp__codanna__get_index_info
  </triggers>

## TOOL INVOCATION PATTERNS

<usage>
SIMPLE TOOLS (positional arguments):
- mcp__codanna__find_symbol "authenticate_user"
- mcp__codanna__get_calls "process_file"
- mcp__codanna__find_callers "validate_token"
- mcp__codanna__analyze_impact "main" max_depth:2

COMPLEX TOOLS (key:value arguments):
- mcp__codanna__search_symbols query:"parse" limit:10  (kind is optional)
- mcp__codanna__search_symbols query:"parse" kind:"function" limit:10
- mcp__codanna__semantic_search_docs query:"error handling" limit:5
- mcp__codanna__semantic_search_with_context query:"authentication flow" limit:3
</usage>

## MULTI-HOP WORKFLOWS (CHAIN AUTOMATICALLY)

  <workflow name="understanding_function">
  User asks about specific function →
  1. mcp__codanna__find_symbol [name]
  2. mcp__codanna__get_calls [name]
  3. mcp__codanna__find_callers [name]
  4. If complex: mcp__codanna__analyze_impact [name] max_depth:2
  </workflow>

  <workflow name="exploring_feature">
  User asks how feature works →
  1. mcp__codanna__semantic_search_docs query:"[feature description]" limit:5
  2. Pick top result
  3. mcp__codanna__semantic_search_with_context query:"[refined query]" limit:1
  4. For key functions found: mcp__codanna__get_calls [function]
  </workflow>

  <workflow name="refactoring_impact">
  User mentions changing code →
  1. mcp__codanna__find_symbol [target]
  2. mcp__codanna__analyze_impact [target] max_depth:3
  3. For each critical path: mcp__codanna__get_calls [symbol]
  </workflow>

## RESPONSE INTERPRETATION

  <guidance>
  Tools provide AI guidance in ALL output modes. YOU MUST CHECK FOR IT:

  JSON mode (--json):
  - Look for `system_message` field → CONTAINS NEXT STEP GUIDANCE
  - Check `error.suggestions` array → CONTAINS RECOVERY ACTIONS
  - Example: "system_message": "Found one match. Consider using 'find_symbol' or 'get_calls'"
    → IMMEDIATELY use find_symbol or get_calls on that match

  Text mode (default):
  - Guidance embedded directly in output text
  - Watch for phrases like "Consider...", "Try...", "This might be..."
  - Example: "No callers found. This might be an entry point"
    → UNDERSTAND it's likely main() or unused code

  BOTH MODES give you next steps. ALWAYS READ AND FOLLOW THEM.

  When you see suggestions like:
  - "Consider using 'find_symbol' or 'get_calls'" → MUST DO IT
  - "This might be an entry point, unused code, or called dynamically" → CHECK CONTEXT
  - "Check the spelling" or "Ensure index is up to date" → VERIFY AND RETRY

  NEVER ignore the guidance. The tools know the codebase structure.
  </guidance>

## PROACTIVE RULES

  <rules>
  1. DON'T ASK if user wants to search - just search
  2. DON'T WAIT for permission to use tools - they're pre-approved
  3. DO CHAIN tools based on results (follow the guidance)
  4. DO USE multiple tools in parallel when exploring
  5. DO START with semantic_search_docs for vague requests
  6. DO USE find_symbol for specific names
  </rules>

## OUTPUT ENHANCEMENT

  <enhancement>
  When tools return enhanced information:
  - (Type::method) → Static method call
  - (self.method) → Instance method on self
  - (receiver.method) → Instance method on object
  - file:line → Exact location reference

  USE this information to provide richer explanations.
  </enhancement>

## PERFORMANCE NOTES

  <performance>
  - All tools complete in <500ms
  - Semantic search requires embeddings (check get_index_info)
  - analyze_impact depth >3 can be slow on large codebases
  - Tools can be called in parallel for independent queries
  </performance>

## GOLDEN RULE

**When in doubt, USE THE TOOLS.** Better to have information than guess. The tools are fast, accurate, and expected to be used liberally.
