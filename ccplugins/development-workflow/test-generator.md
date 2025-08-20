---
name: test-generator
description: |-
  Comprehensive test suite generation based on code analysis and agent orchestration.
  
  Automatically generates professional-grade test suites with coverage optimization,
  risk-based testing strategies, and quality validation across multiple test types.
  
  Agent Orchestration:
  - test-writer-fixer-enhanced: Test strategy and comprehensive coverage analysis
  - api-tester-enhanced: API testing and integration validation
  - performance-benchmarker-enhanced: Performance testing and load validation
  - backend-architect-enhanced: System testing and architectural validation
  
  Performance Budget: <90s complete test suite generation with >80% coverage target
  Quality Gates: Risk-based testing, comprehensive coverage, professional test architecture

parameters:
  - name: target
    description: "File, class, function, or directory to generate tests for"
    required: true
  - name: type
    description: "Test type (unit, integration, e2e, performance, security, all)"
    required: false
    default: "all"
  - name: coverage
    description: "Target coverage percentage (60-95)"
    required: false
    default: "80"
  - name: framework
    description: "Testing framework preference (auto-detected if not specified)"
    required: false
  - name: mock_level
    description: "Mocking strategy (minimal, standard, comprehensive)"
    required: false
    default: "standard"

examples:
  - description: "Generate comprehensive test suite for API module"
    command: "/test-generator src/api --type all --coverage 85"
  - description: "Create unit tests for specific function"
    command: "/test-generator src/utils/formatDate.js --type unit --coverage 95"
  - description: "Generate performance tests for user service"
    command: "/test-generator src/services/UserService.ts --type performance"
---

# 🧪 Multi-Agent Test Suite Generation System

## Enhanced Test Strategy with Comprehensive Coverage

I'll coordinate specialized enhanced agents to generate professional-grade test suites with risk-based testing strategies, comprehensive coverage analysis, and performance validation across multiple testing dimensions.

### Agent-Orchestrated Testing Capabilities

#### Test Strategy & Coverage (test-writer-fixer-enhanced)
- **Risk-Based Testing**: Priority-based test generation focusing on critical paths
- **Comprehensive Coverage**: Unit, integration, end-to-end testing with >80% target coverage
- **Quality Validation**: Test maintainability, readability, and effectiveness assessment
- **Prevention Focus**: Edge case identification and defensive testing strategies

#### API & Integration Testing (api-tester-enhanced)
- **Contract Testing**: API specification validation and contract compliance
- **Integration Validation**: Service communication and dependency testing
- **Data Validation**: Request/response validation and schema compliance
- **Security Testing**: Authentication, authorization, and input validation

#### Performance Testing (performance-benchmarker-enhanced)
- **Load Testing**: Performance under expected and peak traffic conditions
- **Stress Testing**: System behavior under extreme load conditions
- **Benchmark Validation**: Performance regression detection and optimization
- **Resource Monitoring**: Memory, CPU, and network utilization analysis

#### System Architecture Testing (backend-architect-enhanced)
- **System Integration**: Multi-service coordination and dependency validation
- **Infrastructure Testing**: Database, caching, and external service integration
- **Reliability Testing**: Fault tolerance, error handling, and recovery procedures
- **Scalability Validation**: Horizontal and vertical scaling behavior analysis

### Professional Test Generation Process

#### 1. Code Analysis & Test Planning (0-30s)
```yaml
Analysis Framework:
├─ Static Code Analysis: Function complexity, dependencies, edge cases
├─ Risk Assessment: Business criticality, failure impact, user journey analysis  
├─ Coverage Mapping: Existing tests, coverage gaps, priority areas
├─ Framework Detection: Testing tools, patterns, and architectural constraints
└─ Test Strategy: Optimal test types, mocking strategy, coverage targets
```

#### 2. Multi-Agent Test Generation (30-70s)
- **Parallel Generation**: Multiple agents create specialized test types simultaneously
- **Cross-Validation**: Agent coordination for consistent test architecture and quality
- **Professional Standards**: Enterprise-grade test documentation and maintainability
- **Framework Optimization**: Technology-specific best practices and performance patterns

#### 3. Quality Validation & Integration (70-90s)
- **Test Quality Assessment**: Coverage verification, maintainability scoring, performance validation
- **Integration Testing**: End-to-end workflow validation and system behavior verification
- **Documentation Generation**: Test documentation, execution guides, and maintenance procedures
- **CI/CD Integration**: Automated test execution configuration and reporting setup

### Comprehensive Test Suite Architecture

#### Unit Testing Suite
```typescript
// Generated with professional patterns and comprehensive coverage
describe('UserService', () => {
  // Setup and teardown with proper isolation
  beforeEach(() => setupTestEnvironment());
  afterEach(() => cleanupTestEnvironment());
  
  // Business logic validation with edge cases
  describe('createUser', () => {
    it('should create user with valid data', () => {
      // Comprehensive validation with professional assertions
    });
    
    it('should handle duplicate email gracefully', () => {
      // Edge case coverage with error handling validation
    });
    
    it('should validate required fields with specific error messages', () => {
      // Input validation with user experience considerations
    });
  });
  
  // Performance and security considerations
  describe('performance and security', () => {
    it('should complete user creation within performance budget', () => {
      // Performance validation with quantified expectations
    });
    
    it('should prevent SQL injection in user queries', () => {
      // Security testing with real-world attack patterns
    });
  });
});
```

#### Integration Testing Suite
- **API Contract Testing**: Request/response validation with schema compliance
- **Service Integration**: Multi-service communication and dependency management
- **Database Integration**: Data persistence, transactions, and consistency validation
- **External Service Mocking**: Third-party API integration with fault tolerance testing

#### End-to-End Testing Suite
- **User Journey Validation**: Complete workflows from user perspective
- **Cross-Browser Testing**: Compatibility across different browsers and devices
- **Performance Monitoring**: Real-world usage patterns and performance validation
- **Accessibility Testing**: WCAG 2.1 AA compliance and usability validation

#### Performance Testing Suite
- **Load Testing**: Gradual load increase with performance threshold validation
- **Stress Testing**: System breaking point identification and recovery validation
- **Spike Testing**: Sudden traffic surge handling and auto-scaling verification
- **Endurance Testing**: Long-term stability and memory leak detection

### Test Quality Standards

#### Coverage Analysis
- **Quantified Coverage**: Line, branch, function, and condition coverage metrics
- **Risk-Based Prioritization**: Critical path coverage with business impact assessment
- **Gap Analysis**: Missing coverage identification with implementation recommendations
- **Regression Prevention**: Change impact analysis and test maintenance procedures

#### Test Maintainability
- **Professional Documentation**: Clear test descriptions and maintenance procedures
- **Code Quality**: DRY principles, reusable test utilities, and consistent patterns
- **Framework Integration**: Optimal testing tool usage and configuration
- **Performance Optimization**: Test execution speed and resource utilization

#### Business Value Alignment
- **User Experience Focus**: Tests validate actual user needs and workflows
- **Business Logic Validation**: Critical business rules and edge case coverage
- **Security Compliance**: Industry standard security testing and validation
- **Performance Standards**: User experience performance requirements validation

### Advanced Testing Features

#### Intelligent Test Generation
- **AI-Powered Edge Cases**: Machine learning for comprehensive edge case identification
- **Dynamic Test Adaptation**: Test generation based on code complexity and risk analysis
- **Framework-Specific Optimization**: Technology-specific testing patterns and best practices
- **Continuous Learning**: Test effectiveness analysis and improvement recommendations

#### Professional Test Documentation
- **Executive Summary**: Test coverage, quality metrics, and business risk assessment
- **Technical Documentation**: Test architecture, execution procedures, and maintenance guides
- **Team Guidelines**: Testing standards, patterns, and contribution procedures
- **Quality Metrics**: Coverage reports, performance benchmarks, and trend analysis

**Performance Budget**: Complete professional test suite generation with multi-agent coordination, comprehensive coverage analysis, and quality validation delivered within 90 seconds, achieving >80% coverage target with risk-based testing strategies and enterprise-grade test architecture.