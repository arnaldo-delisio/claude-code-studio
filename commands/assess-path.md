# /assess-path - Targeted Path Analysis

Performs focused assessment on specific directories or file patterns within a codebase.

## Syntax
```
/assess-path <target> [options]
```

## Parameters
- `target`: Specific path, glob pattern, or file type to analyze
- `--include=pattern`: Additional patterns to include
- `--exclude=pattern`: Patterns to exclude from analysis
- `--recursive`: Recursively analyze subdirectories
- `--format=json|markdown`: Output format

## Examples
```
/assess-path src/components
/assess-path "**/*.ts" --recursive
/assess-path api/ --exclude=node_modules
/assess-path . --include="*.js,*.jsx" --format=json
```

## Use Cases

### Component Analysis
```
/assess-path src/components --recursive
```
- React/Vue component structure
- Props and state usage patterns
- Component reusability metrics
- Styling approach consistency

### API Endpoint Assessment
```
/assess-path api/routes --include="*.js,*.ts"
```
- REST endpoint patterns
- Authentication implementation
- Error handling consistency
- Response format standardization

### Configuration Review
```
/assess-path . --include="*.config.*,*.json" 
```
- Configuration file inventory
- Environment variable usage
- Build tool configuration
- Package dependencies analysis

### Test Coverage Analysis
```
/assess-path tests/ --recursive --include="*.test.*,*.spec.*"
```
- Test file organization
- Testing framework usage
- Coverage gap identification
- Test quality metrics

### Database Layer Assessment
```
/assess-path src/models --include="*.model.*"
```
- ORM/ODM usage patterns
- Schema design analysis
- Migration file review
- Data access layer consistency

## Pattern Matching

### Glob Patterns
- `*.js` - All JavaScript files
- `**/*.test.js` - All test files recursively
- `src/{components,utils}/**` - Multiple directories
- `!node_modules/**` - Exclusion patterns

### File Type Filtering
- `--include="*.ts,*.tsx"` - TypeScript files only
- `--include="*.php"` - PHP files only  
- `--include="*.py"` - Python files only
- `--include="*.go"` - Go files only

### Directory Targeting
- `src/` - Source code directory
- `test/,tests/,__tests__/` - Test directories
- `config/,configs/` - Configuration directories
- `docs/,documentation/` - Documentation directories

## Analysis Depth

### Surface Analysis (Default)
- File structure and organization
- Import/export patterns
- Basic code metrics
- Framework usage detection

### Deep Analysis (`--recursive`)
- Function/class definitions
- Dependency relationships
- Code complexity metrics
- Pattern consistency analysis

## Output Customization

### Focused Reporting
- Only relevant sections for target
- Path-specific recommendations
- Targeted architecture insights
- Contextual best practices

### Integration Insights
- How target integrates with broader codebase
- Dependency analysis
- Interface compliance
- Architecture pattern adherence

## Example Workflows

### New Feature Assessment
```bash
# Assess feature branch changes
/assess-path src/features/user-auth --recursive --format=json

# Review API changes
/assess-path api/v2/ --include="*.js" --exclude="*.test.js"
```

### Refactoring Planning
```bash
# Identify refactoring candidates
/assess-path src/ --include="*.js" --recursive

# Focus on specific components
/assess-path src/components/legacy --recursive
```

### Security Review
```bash
# Review authentication logic
/assess-path src/auth --recursive

# Check API security
/assess-path api/ --include="*.js" --exclude="node_modules"
```

### Performance Optimization
```bash
# Analyze large files
/assess-path . --include="*.js,*.ts" --recursive

# Review asset optimization
/assess-path public/,static/ --recursive
```

## Integration with Full Assessment

Path-specific assessments complement full codebase assessments:

1. **Full Assessment**: `/assess` for overall architecture
2. **Targeted Analysis**: `/assess-path` for specific areas
3. **Focused Improvements**: Address path-specific issues
4. **Re-assessment**: Verify improvements with targeted analysis

## Best Practices

1. **Start Broad**: Use `/assess` first for context
2. **Focus Areas**: Use `/assess-path` for problem areas
3. **Regular Checks**: Assess changed paths in code reviews
4. **Pattern Detection**: Look for inconsistencies across similar paths
5. **Incremental Improvement**: Focus on one path at a time

The targeted path analysis enables precise codebase insights, perfect for focused improvements and area-specific architectural decisions.