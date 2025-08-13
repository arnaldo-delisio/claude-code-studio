# /assess-publish - Generate Immutable Project Artifacts

Creates permanent, version-controlled documentation artifacts from codebase assessment results.

## Syntax
```
/assess-publish [path] [options]
```

## Parameters
- `path` (optional): Target directory for analysis (defaults to current)
- `--template=minimal|standard|comprehensive`: Documentation depth
- `--format=markdown|json|pdf`: Output format for artifacts
- `--commit`: Automatically commit generated files to git
- `--update`: Update existing artifacts instead of creating new ones

## Generated Artifacts

### Core Documentation Files

#### `ARCHITECTURE-DECISIONS.md`
- **Purpose**: Formal Architecture Decision Records (ADRs)
- **Content**: Technology choices, pattern selections, trade-offs
- **Format**: Standard ADR template with context, decision, consequences
- **Immutability**: Append-only, decisions never deleted

#### `RULES-OF-ENGAGEMENT.md`
- **Purpose**: Team development guidelines and standards
- **Content**: Coding standards, practices, workflow requirements
- **Format**: Structured guidelines with examples and rationale
- **Usage**: Onboarding reference, development standards

#### `TECHNICAL-DEBT.md`
- **Purpose**: Comprehensive technical debt inventory
- **Content**: TODOs, deprecated code, refactoring opportunities
- **Format**: Prioritized list with effort estimates
- **Tracking**: Links to issues, progress indicators

#### `PROJECT-ASSESSMENT.md`
- **Purpose**: Complete codebase analysis summary
- **Content**: All assessment results in readable format
- **Format**: Multi-section report with metrics and insights
- **Audience**: Stakeholders, new team members, auditors

### Optional Artifacts (Template-Dependent)

#### `SECURITY-REVIEW.md` (Standard+)
- Security assessment results
- Vulnerability inventory
- Compliance checklist
- Remediation roadmap

#### `PERFORMANCE-BASELINE.md` (Standard+)
- Performance metrics
- Optimization opportunities
- Monitoring recommendations
- Benchmark targets

#### `DEPENDENCY-AUDIT.md` (Comprehensive)
- Full dependency analysis
- License compliance
- Update recommendations
- Security advisories

#### `API-DOCUMENTATION.md` (Comprehensive)
- Auto-discovered endpoints
- Request/response examples
- Authentication requirements
- Rate limiting policies

## Templates

### Minimal Template
```
/assess-publish --template=minimal
```
**Generates:**
- `ARCHITECTURE-DECISIONS.md`
- `RULES-OF-ENGAGEMENT.md`
- `TECHNICAL-DEBT.md`

**Use Case:** Small projects, quick setup, minimal overhead

### Standard Template (Default)
```
/assess-publish --template=standard
```
**Generates:**
- All Minimal files plus:
- `PROJECT-ASSESSMENT.md`
- `SECURITY-REVIEW.md`
- `PERFORMANCE-BASELINE.md`

**Use Case:** Most projects, balanced documentation, team collaboration

### Comprehensive Template
```
/assess-publish --template=comprehensive
```
**Generates:**
- All Standard files plus:
- `DEPENDENCY-AUDIT.md`
- `API-DOCUMENTATION.md`
- `DEPLOYMENT-GUIDE.md`
- `MONITORING-SETUP.md`

**Use Case:** Enterprise projects, compliance requirements, full documentation

## Examples

### Initial Project Setup
```bash
# Generate complete project documentation
/assess-publish --template=standard --commit

# Update existing documentation
/assess-publish --update --template=standard
```

### Pre-Release Documentation
```bash
# Generate comprehensive release documentation
/assess-publish --template=comprehensive --format=pdf

# Quick security and debt review
/assess-publish --template=minimal
```

### Team Onboarding
```bash
# Create new team member package
/assess-publish --template=standard --format=markdown

# Focus on standards and practices
/assess-publish --template=minimal
```

## Git Integration

### Automatic Commits (`--commit`)
```bash
/assess-publish --commit
```
- Stages all generated files
- Creates commit with standardized message
- Includes assessment metadata in commit
- Preserves existing git history

### Commit Message Format
```
docs: generate project assessment artifacts

- Architecture decisions documented
- Rules of engagement established  
- Technical debt inventory created
- Assessment completed: [timestamp]

🤖 Generated with Claude Code Studio Universal Meta-Assessor
```

### Update Workflow (`--update`)
```bash
/assess-publish --update --commit
```
- Preserves existing ADR entries (append-only)
- Updates metrics and recommendations
- Maintains version history
- Creates incremental commit

## Immutability Guarantees

### Architecture Decisions
- **Never Modified**: Existing ADRs remain unchanged
- **Only Appended**: New decisions added to end
- **Status Updates**: ADR status can be updated (accepted → superseded)
- **Traceability**: Full decision history maintained

### Rules of Engagement  
- **Version Controlled**: All changes tracked in git
- **Change Approval**: Updates require code review
- **Historical Access**: Previous versions available via git
- **Impact Assessment**: Changes include impact analysis

### Technical Debt
- **Progress Tracking**: Completed items marked as resolved
- **Priority Evolution**: Priorities updated based on current state
- **Effort Estimation**: Time estimates refined over time
- **Success Metrics**: Resolution rate and time tracking

## Integration Workflows

### CI/CD Integration
```yaml
# .github/workflows/assessment.yml
name: Project Assessment
on:
  schedule:
    - cron: '0 9 * * 1' # Weekly Monday 9am
  workflow_dispatch:

jobs:
  assess:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Generate Assessment
        run: |
          npx @claude-code-studio/assessor --publish --update --commit
      - name: Create Pull Request
        uses: peter-evans/create-pull-request@v3
        with:
          title: 'docs: weekly project assessment update'
          branch: assessment/weekly-update
```

### Pre-Commit Hook
```bash
#!/bin/sh
# .git/hooks/pre-commit
if [ -n "$(git diff --cached --name-only | grep -E '\.(js|ts|py|php|go)$')" ]; then
  echo "Updating technical debt inventory..."
  /assess-publish --template=minimal --update
  git add TECHNICAL-DEBT.md
fi
```

### Release Process
```bash
# Pre-release assessment
/assess-publish --template=comprehensive --commit

# Tag release with assessment
git tag -a v1.0.0 -m "Release v1.0.0 with full assessment"

# Post-release cleanup
/assess-publish --template=minimal --update --commit
```

## Best Practices

1. **Regular Updates**: Run weekly or monthly assessments
2. **Version Control**: Always commit generated artifacts  
3. **Team Review**: Include artifacts in code review process
4. **Immutable History**: Never modify existing ADRs
5. **Template Consistency**: Use same template across team
6. **Automation**: Integrate into CI/CD pipelines
7. **Stakeholder Access**: Share artifacts with non-technical stakeholders

## Artifact Maintenance

### Quarterly Review Process
1. **Assessment Update**: Run comprehensive assessment
2. **ADR Review**: Evaluate decision outcomes
3. **Debt Prioritization**: Update technical debt priorities
4. **Standards Evolution**: Update rules of engagement
5. **Team Alignment**: Review artifacts with full team

### Metrics Tracking
- **Assessment Frequency**: How often artifacts are updated
- **Debt Resolution Rate**: Technical debt items resolved
- **Decision Velocity**: New ADRs created per quarter
- **Standards Compliance**: Team adherence to RoE guidelines

The publishing system ensures your project maintains living, accurate documentation that evolves with your codebase while preserving the historical context of all architectural decisions and technical evolution.