# /assess - Universal Codebase Assessment

Performs comprehensive analysis of any codebase with instant architecture decisions and Rules of Engagement generation.

## Syntax
```
/assess [path] [options]
```

## Parameters
- `path` (optional): Target directory path (defaults to current directory)
- `--format=json|markdown`: Output format (default: markdown)
- `--deep`: Enable deep analysis with extended scanning
- `--publish`: Generate immutable RoE files (ADR, debt reports)
- `--output=file`: Save results to file instead of console

## Examples
```
/assess
/assess ./src --format=json
/assess ~/projects/myapp --deep --publish
/assess . --output=report.md
```

## Analysis Features

### Multi-Language Support
- JavaScript/TypeScript (React, Vue, Angular, Node.js)
- Python (Django, Flask, FastAPI)
- PHP (Laravel, Symfony, CodeIgniter)
- Java (Spring Boot, Maven, Gradle)
- C# (.NET, ASP.NET)
- Go, Rust, Ruby, Swift, Kotlin

### Architecture Patterns
- MVC (Model-View-Controller)
- Microservices architecture
- Serverless functions
- Single Page Applications (SPA)
- API-first design
- Monorepo structures
- Layered architecture

### Security Assessment
- Vulnerable code patterns detection
- Exposed sensitive files identification
- Security best practices compliance
- Dependency vulnerability scanning
- OWASP compliance checks

### Performance Analysis
- Bundle size optimization
- Large file detection
- Code complexity metrics
- Performance bottleneck identification
- Caching strategy analysis

### Quality Metrics
- Lines of code analysis
- Cyclomatic complexity
- Code duplication detection
- Test coverage assessment
- Technical debt quantification

### DevOps Integration
- CI/CD pipeline detection
- Deployment strategy analysis
- Container configuration review
- Infrastructure as Code assessment
- Monitoring and logging setup

## Output Sections

### 📊 Overview
- Project metadata and statistics
- Primary languages and frameworks
- Architecture pattern identification
- Technology stack summary

### 🏗️ Architecture Analysis
- Detected architectural patterns
- Code organization structure
- Modularity and coupling assessment
- Scalability considerations

### 🛡️ Security Report
- Security score (0-100)
- Identified vulnerabilities
- Security recommendations
- Compliance gap analysis

### 📈 Performance Insights
- Performance bottlenecks
- Optimization opportunities
- Resource usage analysis
- Scalability concerns

### 🎯 Architecture Decisions (ADRs)
- Auto-generated ADRs for key decisions
- Technology choice rationale
- Pattern selection justification
- Trade-off analysis

### 📋 Rules of Engagement
- Development standards
- Best practices guidelines
- Workflow requirements
- Quality gates definition

## Immutable Artifacts

When using `--publish`, generates:
- `ARCHITECTURE-DECISIONS.md`: Formal ADR documentation
- `RULES-OF-ENGAGEMENT.md`: Team development guidelines
- `TECHNICAL-DEBT.md`: Comprehensive debt inventory

## Integration with Claude Code

The assessor integrates seamlessly with Claude Code workflows:

```javascript
// Use in agent workflows
const assessment = await assess('./src', { format: 'json', deep: true });

// Chain with other tools
await assess('./api').then(refactor).then(test);

// Generate documentation
await assess('.', { publish: true, format: 'markdown' });
```

## Best Practices

1. **Regular Assessment**: Run monthly on active projects
2. **Team Alignment**: Share RoE files with all team members
3. **Decision Tracking**: Maintain ADRs for architectural changes
4. **Debt Management**: Address high-priority technical debt items
5. **Security Focus**: Review security recommendations immediately

## Technical Implementation

- Zero dependencies for maximum compatibility
- Supports all major programming languages
- Framework-agnostic analysis engine
- Git integration for repository insights
- Extensible pattern detection system
- Performance-optimized file scanning
- Configurable analysis depth and scope

The Universal Meta-Assessor provides instant codebase intelligence, enabling informed architectural decisions and establishing clear development guidelines for any project.