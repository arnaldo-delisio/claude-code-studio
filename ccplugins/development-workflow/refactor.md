---
name: refactor
description: |-
  Intelligent code restructuring with safety validation and agent orchestration.
  
  Provides comprehensive code refactoring with architectural analysis, impact assessment,
  and systematic improvement strategies while maintaining functionality and quality.
  
  Agent Orchestration:
  - backend-architect-enhanced: System architecture and design pattern optimization
  - frontend-developer-enhanced: Component architecture and performance optimization
  - test-writer-fixer-enhanced: Test coverage and regression prevention analysis
  - devops-automator-enhanced: Deployment safety and operational impact assessment
  
  Performance Budget: <180s comprehensive refactoring analysis with safety validation
  Quality Gates: Zero regression risk, improved maintainability, enhanced performance

parameters:
  - name: target
    description: "File, class, function, or directory to refactor"
    required: true
  - name: type
    description: "Refactoring type (extract, inline, rename, restructure, optimize, all)"
    required: false
    default: "optimize"
  - name: scope
    description: "Refactoring scope (function, class, module, system)"
    required: false
    default: "module"
  - name: safety
    description: "Safety level (conservative, standard, aggressive)"
    required: false
    default: "standard"
  - name: preview
    description: "Generate preview without applying changes"
    required: false
    default: "true"

examples:
  - description: "Comprehensive refactoring analysis for component"
    command: "/refactor src/components/UserProfile.tsx --type all --scope class"
  - description: "Safe performance optimization for service"
    command: "/refactor src/services/DataService.js --type optimize --safety conservative"
  - description: "System-wide architecture refactoring preview"
    command: "/refactor src/ --type restructure --scope system --preview true"
---

# 🔄 Multi-Agent Code Refactoring System

## Enhanced Code Restructuring with Safety Validation

I'll coordinate specialized enhanced agents to provide comprehensive code refactoring analysis, combining architectural optimization, performance enhancement, and safety validation for systematic code improvement without regression risk.

### Agent-Orchestrated Refactoring Capabilities

#### Architecture Optimization (backend-architect-enhanced)
- **Design Pattern Implementation**: SOLID principles, architectural patterns, modularity enhancement
- **System Architecture**: Service separation, dependency injection, interface abstraction
- **Performance Architecture**: Caching strategies, database optimization, resource management
- **Scalability Enhancement**: Horizontal scaling patterns, load distribution, fault tolerance

#### Component Restructuring (frontend-developer-enhanced)
- **Component Architecture**: React/Vue/Angular optimization, state management, lifecycle optimization
- **Performance Optimization**: Bundle size reduction, rendering efficiency, memory management
- **User Experience Enhancement**: Accessibility improvements, responsive optimization, interaction patterns
- **Code Quality**: TypeScript integration, prop validation, error boundary implementation

#### Test Coverage & Safety (test-writer-fixer-enhanced)
- **Regression Prevention**: Comprehensive test coverage for refactored code areas
- **Impact Analysis**: Change impact assessment with risk evaluation and mitigation
- **Quality Validation**: Code quality metrics improvement and technical debt reduction
- **Safety Protocols**: Automated testing, rollback procedures, and validation frameworks

#### Operational Safety (devops-automator-enhanced)
- **Deployment Safety**: Zero-downtime refactoring strategies and rollback procedures
- **Infrastructure Impact**: Resource utilization, performance monitoring, system stability
- **Security Validation**: Security implications assessment and compliance maintenance
- **Monitoring Enhancement**: Performance tracking, error detection, and alerting optimization

### Professional Refactoring Process

#### 1. Comprehensive Code Analysis (0-60s)
```yaml
Analysis Framework:
├─ Static Analysis: Code complexity, dependencies, coupling, cohesion metrics
├─ Architecture Assessment: Design patterns, SOLID principles, architectural debt
├─ Performance Profiling: Bottlenecks, resource usage, optimization opportunities
├─ Security Review: Vulnerability assessment, compliance validation, best practices
├─ Test Coverage: Existing tests, coverage gaps, regression risk evaluation
└─ Impact Assessment: Change scope, dependency analysis, risk evaluation
```

#### 2. Multi-Agent Refactoring Strategy (60-120s)
- **Parallel Analysis**: Multiple agents assess different refactoring dimensions simultaneously
- **Strategy Coordination**: Cross-agent validation for comprehensive improvement approach
- **Risk Assessment**: Safety evaluation with mitigation strategies and rollback procedures
- **Professional Planning**: Enterprise-grade refactoring roadmap with measurable outcomes

#### 3. Implementation & Validation (120-180s)
- **Safe Implementation**: Incremental changes with continuous validation and testing
- **Quality Assurance**: Automated testing, performance validation, and regression detection
- **Documentation Update**: Code comments, architecture documentation, and change logs
- **Monitoring Setup**: Performance tracking and error detection for post-refactoring validation

### Comprehensive Refactoring Strategies

#### Extract Method Refactoring
```typescript
// Before: Complex method with multiple responsibilities
class UserService {
  async processUserRegistration(userData: UserData): Promise<User> {
    // Input validation
    if (!userData.email || !userData.password) {
      throw new Error('Missing required fields');
    }
    if (!this.isValidEmail(userData.email)) {
      throw new Error('Invalid email format');
    }
    
    // Password security
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    
    // Database operations
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('User already exists');
    }
    
    // User creation
    const newUser = await this.userRepository.create({
      ...userData,
      password: hashedPassword,
      createdAt: new Date()
    });
    
    // Email notification
    await this.emailService.sendWelcomeEmail(newUser.email, newUser.name);
    
    // Audit logging
    await this.auditService.logUserCreation(newUser.id, userData.ipAddress);
    
    return newUser;
  }
}

// After: Refactored with extracted methods and improved architecture
class UserService {
  async processUserRegistration(userData: UserData): Promise<User> {
    await this.validateUserInput(userData);
    await this.checkUserExists(userData.email);
    
    const secureUserData = await this.prepareSecureUserData(userData);
    const newUser = await this.createUser(secureUserData);
    
    await this.handlePostRegistrationTasks(newUser, userData.ipAddress);
    
    return newUser;
  }
  
  private async validateUserInput(userData: UserData): Promise<void> {
    const validator = new UserInputValidator();
    await validator.validate(userData);
  }
  
  private async checkUserExists(email: string): Promise<void> {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new DuplicateUserError('User already exists');
    }
  }
  
  private async prepareSecureUserData(userData: UserData): Promise<SecureUserData> {
    const passwordService = new PasswordSecurityService();
    return await passwordService.secureUserData(userData);
  }
  
  private async createUser(secureData: SecureUserData): Promise<User> {
    return await this.userRepository.create(secureData);
  }
  
  private async handlePostRegistrationTasks(user: User, ipAddress: string): Promise<void> {
    const tasks = [
      this.emailService.sendWelcomeEmail(user.email, user.name),
      this.auditService.logUserCreation(user.id, ipAddress)
    ];
    
    await Promise.all(tasks);
  }
}
```

#### Component Architecture Refactoring
- **State Management**: Redux/Zustand optimization, context API restructuring, state normalization
- **Component Composition**: Higher-order components, render props, custom hooks implementation
- **Performance Optimization**: Memoization strategies, lazy loading, code splitting implementation
- **Accessibility Enhancement**: ARIA attributes, keyboard navigation, screen reader optimization

#### System Architecture Refactoring
- **Microservices Migration**: Monolith decomposition, service boundaries, communication patterns
- **Database Optimization**: Query optimization, indexing strategies, caching layer implementation
- **API Restructuring**: RESTful design, GraphQL integration, versioning strategies
- **Infrastructure Modernization**: Containerization, cloud migration, DevOps optimization

### Safety Validation Framework

#### Automated Safety Checks
```yaml
Pre-Refactoring Validation:
├─ Test Coverage Analysis: Minimum 80% coverage requirement for refactored areas
├─ Dependency Impact: Downstream service and component impact assessment
├─ Performance Baseline: Current performance metrics for comparison validation
├─ Security Audit: Security implications assessment and compliance validation
└─ Rollback Planning: Comprehensive rollback procedures and validation testing

During Refactoring:
├─ Incremental Validation: Step-by-step testing with immediate rollback capability
├─ Continuous Integration: Automated testing with every incremental change
├─ Performance Monitoring: Real-time performance impact assessment and validation
├─ Error Detection: Automated error detection with immediate intervention protocols
└─ Quality Gates: Code quality metrics validation at each refactoring checkpoint

Post-Refactoring Validation:
├─ Comprehensive Testing: Full test suite execution with regression detection
├─ Performance Validation: Performance improvement verification and benchmark comparison
├─ Security Verification: Security audit and compliance validation post-changes
├─ User Acceptance: Stakeholder validation and user experience confirmation
└─ Documentation Update: Architecture documentation and change log completion
```

#### Risk Mitigation Strategies
- **Blue-Green Refactoring**: Parallel implementation with seamless switching capability
- **Feature Flag Integration**: Gradual rollout with immediate rollback capability
- **Canary Deployment**: Limited scope testing with progressive rollout validation
- **Automated Rollback**: Trigger-based automatic reversion with monitoring integration

### Professional Refactoring Output

#### Executive Summary
- **Improvement Metrics**: Code quality improvement, performance gains, maintainability enhancement
- **Business Impact**: Development velocity improvement, bug reduction, operational efficiency
- **Risk Assessment**: Change scope, mitigation strategies, and success probability evaluation
- **Timeline & Resources**: Implementation phases, team allocation, and milestone validation

#### Technical Implementation Plan
- **Refactoring Strategy**: Step-by-step implementation with safety validation checkpoints
- **Architecture Changes**: Design pattern improvements, structural modifications, optimization strategies
- **Testing Strategy**: Comprehensive test coverage, regression prevention, and quality validation
- **Deployment Plan**: Safe implementation procedures, monitoring setup, and rollback protocols

#### Quality Assurance Report
- **Code Quality Metrics**: Complexity reduction, coupling improvement, cohesion enhancement
- **Performance Analysis**: Speed improvements, resource optimization, scalability enhancement
- **Security Validation**: Security implications assessment, compliance maintenance, best practices
- **Maintainability Assessment**: Code readability, documentation quality, team knowledge transfer

#### Knowledge Transfer Documentation
- **Architecture Documentation**: Updated system design, patterns, and decision rationale
- **Implementation Guidelines**: Best practices, patterns, and maintenance procedures
- **Team Training**: Knowledge sharing sessions, capability development, and skill enhancement
- **Continuous Improvement**: Refactoring methodology enhancement, tool optimization, process improvement

### Advanced Refactoring Features

#### Intelligent Refactoring Recommendations
- **AI-Powered Analysis**: Machine learning for optimal refactoring strategy identification
- **Pattern Recognition**: Automatic detection of refactoring opportunities and anti-patterns
- **Impact Prediction**: Predictive analysis for refactoring benefits and risk assessment
- **Continuous Learning**: Refactoring effectiveness analysis and methodology improvement

#### Collaborative Refactoring
- **Team Coordination**: Multi-developer refactoring with conflict resolution and coordination
- **Code Review Integration**: Automated code review with refactoring quality assessment
- **Knowledge Sharing**: Best practice dissemination and team capability development
- **Mentoring Support**: Junior developer guidance with expert refactoring consultation

**Performance Budget**: Complete multi-agent refactoring analysis with comprehensive safety validation, architectural optimization, and professional implementation planning delivered within 180 seconds, providing zero-regression refactoring strategies with measurable code quality improvement and enhanced system performance.