---
name: code-review
description: |-
  Automated code quality analysis and improvement suggestions with agent orchestration.
  
  Provides comprehensive code review combining multiple specialized perspectives
  for enterprise-grade quality assurance and improvement recommendations.
  
  Agent Orchestration:
  - backend-architect-enhanced: Architecture patterns and system design analysis
  - frontend-developer-enhanced: UI/UX patterns and performance optimization
  - test-writer-fixer-enhanced: Testing coverage and quality validation
  - devops-automator-enhanced: Security, deployment, and operational concerns
  
  Performance Budget: <60s comprehensive multi-agent code review with actionable insights
  Quality Gates: >95% professional standards, security compliance, performance validation

parameters:
  - name: target
    description: "File, directory, or commit to review"
    required: true
  - name: focus
    description: "Review focus (security, performance, architecture, testing, all)"
    required: false
    default: "all"
  - name: level
    description: "Review depth (quick, standard, comprehensive)"
    required: false
    default: "standard"
  - name: format
    description: "Output format (markdown, json, summary)"
    required: false
    default: "markdown"

examples:
  - description: "Comprehensive review of current changes"
    command: "/code-review . --level comprehensive"
  - description: "Security-focused review of API endpoints"
    command: "/code-review src/api --focus security"
  - description: "Quick performance review of component"
    command: "/code-review src/components/UserList.tsx --focus performance --level quick"
---

# 🔍 Multi-Agent Code Review System

## Enhanced Quality Analysis with Agent Orchestration

I'll coordinate multiple specialized enhanced agents to provide comprehensive code review coverage across architecture, security, performance, and testing dimensions.

### Agent-Specific Review Capabilities

#### Backend Architecture Review (backend-architect-enhanced)
- **System Design Patterns**: Microservices, modularity, separation of concerns
- **Database Design**: Query optimization, schema design, data integrity
- **API Design**: RESTful patterns, GraphQL optimization, versioning strategies
- **Infrastructure Integration**: Scalability, reliability, operational excellence

#### Frontend Excellence Review (frontend-developer-enhanced)
- **User Experience**: Accessibility (WCAG 2.1 AA), responsive design, performance
- **Component Architecture**: Reusability, maintainability, state management
- **Performance Optimization**: Bundle size, loading patterns, rendering efficiency
- **Browser Compatibility**: Cross-platform consistency and optimization

#### Testing Quality Review (test-writer-fixer-enhanced)
- **Test Coverage Analysis**: Unit, integration, end-to-end testing completeness
- **Test Quality**: Risk-based testing, edge case coverage, maintainability
- **Quality Metrics**: Code coverage, mutation testing, performance benchmarks
- **Bug Prevention**: Common error patterns, defensive programming practices

#### DevOps & Security Review (devops-automator-enhanced)
- **Security Analysis**: Vulnerability assessment, compliance validation, threat modeling
- **Deployment Safety**: CI/CD integration, rollback procedures, monitoring setup
- **Operational Concerns**: Logging, monitoring, alerting, incident response
- **Infrastructure Impact**: Resource utilization, scaling patterns, cost optimization

### Professional Review Process

#### 1. Automated Analysis (0-20s)
- Static code analysis with security and performance scanning
- Dependency vulnerability assessment and update recommendations
- Code complexity metrics and maintainability scoring
- Framework-specific best practice validation

#### 2. Multi-Agent Coordination (20-40s)
- Route code sections to appropriate enhanced agents based on domain expertise
- Parallel analysis across architecture, security, performance, and testing dimensions
- Cross-agent validation for consistency and comprehensive coverage
- Professional communication standards for all recommendations

#### 3. Synthesis & Recommendations (40-60s)
- Prioritized improvement recommendations with business impact assessment
- Implementation guidance with step-by-step improvement procedures
- Risk assessment with mitigation strategies and timeline considerations
- Professional documentation suitable for technical and business stakeholders

### Review Output Standards

#### Executive Summary
- **Overall Quality Score**: Quantified assessment with industry benchmarks
- **Critical Issues**: High-priority security and performance concerns
- **Business Impact**: User experience, maintainability, and operational implications
- **Investment Recommendations**: Development effort prioritization with ROI analysis

#### Technical Analysis
- **Architecture Assessment**: Design patterns, scalability, and maintainability evaluation
- **Performance Analysis**: Bottlenecks, optimization opportunities, and benchmark comparisons
- **Security Review**: Vulnerability assessment, compliance gaps, and remediation procedures
- **Testing Evaluation**: Coverage analysis, quality metrics, and improvement recommendations

#### Implementation Roadmap
- **Immediate Actions**: Critical fixes requiring immediate attention
- **Short-term Improvements**: 1-2 sprint enhancements with measurable impact
- **Long-term Architecture**: Strategic improvements for sustainable development velocity
- **Team Development**: Knowledge transfer and capability building recommendations

**Performance Budget**: Complete multi-agent code review with professional recommendations delivered within 60 seconds, providing enterprise-grade quality assurance with actionable improvement strategies.