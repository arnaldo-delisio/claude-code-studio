---
name: security-audit
description: |-
  Security vulnerability assessment and remediation with agent orchestration.
  
  Provides comprehensive security analysis combining multiple specialized perspectives
  for vulnerability detection, compliance validation, and security enhancement strategies.
  
  Agent Orchestration:
  - devops-automator-enhanced: Infrastructure security and deployment safety analysis
  - backend-architect-enhanced: System architecture security and data protection
  - api-tester-enhanced: API security testing and authentication validation
  - legal-compliance-checker-enhanced: Regulatory compliance and security standards
  
  Performance Budget: <120s comprehensive security audit with prioritized remediation plan
  Quality Gates: Zero critical vulnerabilities, compliance validation, security best practices

parameters:
  - name: target
    description: "File, directory, API, or system component to audit"
    required: true
  - name: scope
    description: "Security scope (code, infrastructure, api, compliance, all)"
    required: false
    default: "all"
  - name: standard
    description: "Security standard (owasp, nist, iso27001, pci-dss, hipaa)"
    required: false
    default: "owasp"
  - name: severity
    description: "Minimum severity level to report (low, medium, high, critical)"
    required: false
    default: "medium"
  - name: format
    description: "Report format (markdown, json, sarif, pdf)"
    required: false
    default: "markdown"

examples:
  - description: "Comprehensive security audit with OWASP standards"
    command: "/security-audit src/ --scope all --standard owasp"
  - description: "API security assessment for authentication endpoints"
    command: "/security-audit src/api/auth --scope api --severity high"
  - description: "HIPAA compliance audit for healthcare application"
    command: "/security-audit . --standard hipaa --format pdf"
---

# 🛡️ Multi-Agent Security Audit System

## Enhanced Security Analysis with Compliance Validation

I'll coordinate specialized enhanced agents to provide comprehensive security vulnerability assessment, combining infrastructure security, application security, API testing, and regulatory compliance for enterprise-grade security validation and remediation.

### Agent-Orchestrated Security Capabilities

#### Infrastructure & DevOps Security (devops-automator-enhanced)
- **Infrastructure Security**: Container security, network configuration, access controls
- **Deployment Safety**: CI/CD pipeline security, secrets management, environment isolation
- **Compliance Automation**: Automated security scanning, policy enforcement, audit trails
- **Incident Response**: Security monitoring, alerting, and automated response protocols

#### System Architecture Security (backend-architect-enhanced)
- **Data Protection**: Encryption at rest and in transit, data classification, privacy controls
- **Authentication & Authorization**: Identity management, access control, privilege escalation prevention
- **System Hardening**: Security configuration, attack surface reduction, defense in depth
- **Threat Modeling**: Architecture-level security analysis and risk assessment

#### API Security Testing (api-tester-enhanced)
- **Authentication Testing**: JWT validation, OAuth implementation, session management
- **Input Validation**: SQL injection, XSS, CSRF protection, input sanitization
- **Authorization Testing**: Role-based access control, permission escalation, data leakage
- **API Security**: Rate limiting, API versioning security, documentation security

#### Legal & Compliance Validation (legal-compliance-checker-enhanced)
- **Regulatory Compliance**: GDPR, HIPAA, PCI-DSS, SOX, industry-specific requirements
- **Privacy Protection**: Data handling, consent management, right to deletion
- **Audit Documentation**: Compliance evidence, audit trails, regulatory reporting
- **Risk Assessment**: Legal implications, compliance gaps, remediation priorities

### Professional Security Audit Process

#### 1. Comprehensive Security Scanning (0-40s)
```yaml
Security Analysis Framework:
├─ Static Code Analysis: SAST scanning for code vulnerabilities and security anti-patterns
├─ Dependency Analysis: Third-party library vulnerabilities, license compliance, supply chain security
├─ Configuration Review: Security settings, environment variables, access permissions
├─ Infrastructure Assessment: Network security, container configuration, cloud security posture
├─ API Security Testing: Authentication, authorization, input validation, rate limiting
└─ Compliance Validation: Regulatory requirements, industry standards, privacy controls
```

#### 2. Multi-Agent Security Assessment (40-90s)
- **Parallel Analysis**: Multiple agents assess different security dimensions simultaneously
- **Threat Intelligence**: Cross-agent correlation for comprehensive threat landscape analysis
- **Risk Prioritization**: Business impact assessment with security risk scoring and prioritization
- **Compliance Mapping**: Regulatory requirement mapping with gap analysis and remediation planning

#### 3. Remediation Planning & Documentation (90-120s)
- **Security Roadmap**: Prioritized remediation plan with timeline and resource allocation
- **Implementation Guidance**: Step-by-step security improvement procedures with validation
- **Compliance Documentation**: Audit evidence, control implementation, regulatory alignment
- **Monitoring Setup**: Security monitoring, alerting, and continuous compliance validation

### Comprehensive Security Assessment Categories

#### Application Security (OWASP Top 10)
```yaml
1. Injection Vulnerabilities:
   ├─ SQL Injection: Parameterized queries, input validation, ORM security
   ├─ NoSQL Injection: Document database security, query parameterization
   ├─ Command Injection: System call security, input sanitization
   └─ LDAP Injection: Directory service security, authentication protocols

2. Broken Authentication:
   ├─ Session Management: Secure session handling, token expiration, session fixation
   ├─ Password Security: Hashing algorithms, password policies, breach prevention
   ├─ Multi-Factor Authentication: MFA implementation, backup codes, device management
   └─ Account Lockout: Brute force prevention, rate limiting, account recovery

3. Sensitive Data Exposure:
   ├─ Data Classification: Sensitive data identification, handling procedures, access controls
   ├─ Encryption: At-rest encryption, in-transit encryption, key management
   ├─ Data Masking: PII protection, data anonymization, secure data handling
   └─ Backup Security: Encrypted backups, access controls, retention policies

4. XML External Entities (XXE):
   ├─ XML Parser Security: External entity prevention, input validation
   ├─ Document Processing: Secure file handling, content validation
   └─ API Security: XML input validation, parser configuration

5. Broken Access Control:
   ├─ Authorization Flaws: Privilege escalation, horizontal/vertical access control
   ├─ Direct Object References: IDOR prevention, authorization validation
   ├─ Missing Function Level Access Control: API endpoint protection, role validation
   └─ CORS Misconfiguration: Cross-origin resource sharing security

6. Security Misconfiguration:
   ├─ Default Configurations: Secure defaults, configuration hardening
   ├─ Unnecessary Features: Feature reduction, attack surface minimization
   ├─ Error Handling: Information leakage prevention, secure error messages
   └─ Security Headers: HTTP security headers, browser security controls

7. Cross-Site Scripting (XSS):
   ├─ Stored XSS: Persistent script injection prevention, output encoding
   ├─ Reflected XSS: Input validation, output sanitization
   ├─ DOM-based XSS: Client-side security, safe DOM manipulation
   └─ Content Security Policy: CSP implementation, script source restrictions

8. Insecure Deserialization:
   ├─ Object Serialization: Safe deserialization practices, input validation
   ├─ Remote Code Execution: RCE prevention, sandboxing
   └─ Data Integrity: Serialization security, tamper protection

9. Using Components with Known Vulnerabilities:
   ├─ Dependency Management: Vulnerability scanning, patch management
   ├─ Supply Chain Security: Third-party component validation, license compliance
   ├─ Version Management: Security updates, deprecation handling
   └─ Vendor Assessment: Third-party security evaluation, risk assessment

10. Insufficient Logging & Monitoring:
    ├─ Security Event Logging: Audit trails, security event capture
    ├─ Log Protection: Log integrity, access controls, retention
    ├─ Real-time Monitoring: Security alerting, incident detection
    └─ Forensic Capabilities: Investigation support, evidence preservation
```

#### Infrastructure Security Assessment
```yaml
Container Security:
├─ Image Security: Base image vulnerabilities, layer analysis, registry security
├─ Runtime Security: Container isolation, resource limits, privilege escalation
├─ Orchestration Security: Kubernetes security, service mesh, network policies
└─ Secrets Management: Container secrets, environment variables, key rotation

Network Security:
├─ Firewall Configuration: Network segmentation, access rules, traffic filtering
├─ TLS/SSL Configuration: Certificate management, cipher suites, protocol versions
├─ VPN Security: Secure remote access, authentication, encryption protocols
└─ Network Monitoring: Traffic analysis, intrusion detection, anomaly detection

Cloud Security:
├─ IAM Configuration: Identity and access management, role-based access control
├─ Storage Security: Bucket permissions, encryption, access logging
├─ Compute Security: Instance hardening, patch management, security groups
└─ Monitoring & Logging: CloudTrail, security monitoring, compliance reporting
```

#### API Security Validation
```typescript
// Comprehensive API security testing example
class APISecurityAuditor {
  async performSecurityAudit(endpoint: string): Promise<SecurityAuditReport> {
    const report: SecurityAuditReport = {
      endpoint,
      vulnerabilities: [],
      securityScore: 0,
      compliance: {},
      recommendations: []
    };

    // Authentication Security Testing
    await this.testAuthenticationSecurity(endpoint, report);
    
    // Input Validation Testing
    await this.testInputValidation(endpoint, report);
    
    // Authorization Testing
    await this.testAuthorization(endpoint, report);
    
    // Rate Limiting Testing
    await this.testRateLimiting(endpoint, report);
    
    // Error Handling Security
    await this.testErrorHandling(endpoint, report);
    
    // HTTPS and Transport Security
    await this.testTransportSecurity(endpoint, report);
    
    return this.generateSecurityReport(report);
  }

  private async testAuthenticationSecurity(endpoint: string, report: SecurityAuditReport): Promise<void> {
    // JWT Security Testing
    const jwtTests = [
      this.testJWTSignatureValidation(endpoint),
      this.testJWTExpiration(endpoint),
      this.testJWTAlgorithmConfusion(endpoint),
      this.testJWTSecretBruteForce(endpoint)
    ];

    const jwtResults = await Promise.all(jwtTests);
    report.vulnerabilities.push(...jwtResults.filter(r => r.severity !== 'PASS'));

    // Session Management Testing
    const sessionTests = [
      this.testSessionFixation(endpoint),
      this.testSessionHijacking(endpoint),
      this.testSecureCookieFlags(endpoint),
      this.testSessionTimeout(endpoint)
    ];

    const sessionResults = await Promise.all(sessionTests);
    report.vulnerabilities.push(...sessionResults.filter(r => r.severity !== 'PASS'));
  }

  private async testInputValidation(endpoint: string, report: SecurityAuditReport): Promise<void> {
    // SQL Injection Testing
    const sqlInjectionPayloads = [
      "' OR '1'='1",
      "'; DROP TABLE users; --",
      "' UNION SELECT password FROM users --",
      "admin'/**/OR/**/1=1#"
    ];

    for (const payload of sqlInjectionPayloads) {
      const result = await this.testSQLInjection(endpoint, payload);
      if (result.vulnerable) {
        report.vulnerabilities.push({
          type: 'SQL_INJECTION',
          severity: 'CRITICAL',
          description: `SQL injection vulnerability detected with payload: ${payload}`,
          remediation: 'Use parameterized queries and input validation'
        });
      }
    }

    // XSS Testing
    const xssPayloads = [
      "<script>alert('XSS')</script>",
      "javascript:alert('XSS')",
      "<img src=x onerror=alert('XSS')>",
      "<svg onload=alert('XSS')>"
    ];

    for (const payload of xssPayloads) {
      const result = await this.testXSS(endpoint, payload);
      if (result.vulnerable) {
        report.vulnerabilities.push({
          type: 'CROSS_SITE_SCRIPTING',
          severity: 'HIGH',
          description: `XSS vulnerability detected with payload: ${payload}`,
          remediation: 'Implement output encoding and Content Security Policy'
        });
      }
    }
  }

  private async testAuthorization(endpoint: string, report: SecurityAuditReport): Promise<void> {
    // Privilege Escalation Testing
    const privilegeTests = [
      this.testHorizontalPrivilegeEscalation(endpoint),
      this.testVerticalPrivilegeEscalation(endpoint),
      this.testDirectObjectReferenceAttack(endpoint),
      this.testFunctionLevelAccessControl(endpoint)
    ];

    const privilegeResults = await Promise.all(privilegeTests);
    report.vulnerabilities.push(...privilegeResults.filter(r => r.severity !== 'PASS'));
  }
}
```

### Compliance & Regulatory Security Standards

#### GDPR Compliance Assessment
- **Data Processing Lawfulness**: Legal basis validation, consent management, data minimization
- **Individual Rights**: Access rights, rectification, erasure, portability, objection rights
- **Privacy by Design**: Default privacy settings, data protection impact assessments
- **Breach Notification**: Incident response procedures, notification timelines, documentation

#### HIPAA Security Assessment
- **Administrative Safeguards**: Security officer, workforce training, access management
- **Physical Safeguards**: Facility access controls, workstation security, device controls
- **Technical Safeguards**: Access control, audit controls, integrity controls, transmission security
- **Business Associate Agreements**: Third-party compliance, data handling agreements

#### PCI-DSS Compliance Validation
- **Build and Maintain Secure Networks**: Firewall configuration, default passwords
- **Protect Cardholder Data**: Data encryption, storage restrictions, data retention
- **Maintain Vulnerability Management**: Security patches, antivirus software, secure development
- **Implement Strong Access Control**: Need-to-know access, unique IDs, physical access restrictions
- **Regularly Monitor Networks**: Audit trails, security monitoring, penetration testing
- **Maintain Information Security Policy**: Security policies, procedures, incident response

### Professional Security Audit Output

#### Executive Security Summary
- **Security Risk Assessment**: Overall security posture with quantified risk scoring
- **Compliance Status**: Regulatory compliance assessment with gap analysis
- **Business Impact**: Security risk implications for business operations and reputation
- **Investment Recommendations**: Security improvement prioritization with ROI analysis

#### Technical Security Report
- **Vulnerability Analysis**: Detailed vulnerability assessment with exploitation potential
- **Remediation Roadmap**: Prioritized security improvements with implementation timeline
- **Security Architecture**: Design improvements for comprehensive security enhancement
- **Monitoring Strategy**: Security monitoring, alerting, and incident response planning

#### Compliance Documentation
- **Regulatory Alignment**: Compliance evidence with regulatory requirement mapping
- **Audit Trail**: Security control implementation with evidence documentation
- **Risk Register**: Security risks with mitigation strategies and ownership assignment
- **Policy Recommendations**: Security policy updates and procedural improvements

#### Continuous Security Management
- **Security Monitoring**: Real-time threat detection, vulnerability scanning, compliance monitoring
- **Incident Response**: Security incident procedures, escalation protocols, recovery planning
- **Security Training**: Team education, awareness programs, security culture development
- **Security Innovation**: Emerging threats, new technologies, proactive security measures

### Advanced Security Features

#### AI-Powered Threat Detection
- **Behavioral Analysis**: Anomaly detection, user behavior analytics, threat intelligence
- **Predictive Security**: Risk forecasting, vulnerability prediction, proactive defense
- **Automated Response**: Security orchestration, automated remediation, incident containment
- **Continuous Learning**: Threat landscape adaptation, security model improvement

#### Zero Trust Security Architecture
- **Identity Verification**: Continuous authentication, device trust, user behavior validation
- **Least Privilege Access**: Minimal access rights, just-in-time access, privilege escalation prevention
- **Network Segmentation**: Micro-segmentation, east-west traffic inspection, lateral movement prevention
- **Continuous Validation**: Real-time security assessment, trust score calculation, adaptive controls

**Performance Budget**: Complete multi-agent security audit with comprehensive vulnerability assessment, compliance validation, and prioritized remediation planning delivered within 120 seconds, providing zero-tolerance security validation with enterprise-grade compliance documentation and actionable security enhancement strategies.