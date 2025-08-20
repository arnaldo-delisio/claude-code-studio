---
name: init-project
description: |-
  Intelligent project scaffolding with framework detection and agent orchestration.
  
  Automatically detects project type, sets up appropriate structure, and coordinates
  with specialized agents for optimal project initialization.
  
  Agent Orchestration:
  - rapid-prototyper-enhanced: Architecture planning and MVP scaffolding
  - frontend-developer-enhanced: Frontend framework setup and optimization
  - backend-architect-enhanced: Backend architecture and infrastructure design
  - devops-automator-enhanced: CI/CD pipeline and deployment configuration
  
  Performance Budget: <30s complete project initialization with professional structure
  Quality Gates: Framework-specific best practices, security configuration, professional documentation

parameters:
  - name: project_type
    description: "Project type (auto-detected if not specified)"
    required: false
  - name: framework
    description: "Specific framework preference"
    required: false
  - name: template
    description: "Template to use (enterprise, startup, prototype)"
    required: false
    default: "enterprise"

examples:
  - description: "Initialize a new React TypeScript project"
    command: "/init-project --framework react-typescript"
  - description: "Set up enterprise Node.js backend"
    command: "/init-project backend --template enterprise"
  - description: "Auto-detect and initialize current directory"
    command: "/init-project"
---

# 🚀 Intelligent Project Scaffolding System

## Agent-Orchestrated Project Initialization

I'll coordinate with specialized enhanced agents to create a comprehensive, production-ready project structure tailored to your specific requirements.

### Framework Detection & Agent Selection
- **Frontend Projects** → frontend-developer-enhanced agent (React, Vue, Angular optimization)
- **Backend Systems** → backend-architect-enhanced agent (scalable architecture design)
- **Full-Stack Applications** → rapid-prototyper-enhanced agent (MVP architecture planning)
- **DevOps Integration** → devops-automator-enhanced agent (CI/CD and deployment setup)

### Enterprise-Grade Initialization Features
- **Intelligent Framework Detection**: Analyzes existing files and dependencies
- **Security-First Configuration**: Built-in security best practices and compliance
- **Professional Documentation**: Comprehensive README, API docs, and setup guides
- **Development Workflow**: Pre-configured linting, testing, and deployment pipelines
- **Performance Optimization**: Framework-specific performance configurations
- **Team Collaboration**: Git hooks, code review templates, and development standards

### Initialization Process
1. **Project Analysis** (5s): Detect framework, dependencies, and requirements
2. **Agent Coordination** (10s): Route to appropriate enhanced agents for specialized setup
3. **Structure Generation** (10s): Create optimized directory structure and configuration
4. **Quality Validation** (5s): Ensure professional standards and security compliance

**Performance Budget**: Complete professional project initialization in under 30 seconds with enhanced agent orchestration for superior architecture and configuration quality.