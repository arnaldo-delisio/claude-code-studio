---
name: docs-generator
description: |-
  Automatic documentation creation with technical accuracy and agent orchestration.
  
  Generates comprehensive, professional documentation combining multiple specialized 
  perspectives for complete API docs, user guides, and technical specifications.
  
  Agent Orchestration:
  - backend-architect-enhanced: System architecture and API documentation
  - frontend-developer-enhanced: User interface and component documentation  
  - content-creator-enhanced: User-friendly guides and tutorial creation
  - brand-guardian-enhanced: Professional documentation standards and consistency
  
  Performance Budget: <75s comprehensive documentation generation with professional quality
  Quality Gates: Technical accuracy, user accessibility, professional presentation standards

parameters:
  - name: target
    description: "File, directory, API, or component to document"
    required: true
  - name: type
    description: "Documentation type (api, user-guide, technical, readme, all)"
    required: false
    default: "all"
  - name: audience
    description: "Target audience (developer, user, business, executive)"
    required: false
    default: "developer"
  - name: format
    description: "Output format (markdown, html, pdf, confluence)"
    required: false
    default: "markdown"
  - name: depth
    description: "Documentation depth (overview, standard, comprehensive)"
    required: false
    default: "standard"

examples:
  - description: "Generate complete API documentation"
    command: "/docs-generator src/api --type api --depth comprehensive"
  - description: "Create user guide for React components"
    command: "/docs-generator src/components --type user-guide --audience user"
  - description: "Generate executive technical overview"
    command: "/docs-generator . --type technical --audience executive --format pdf"
---

# 📚 Multi-Agent Documentation Generation System

## Enhanced Technical Writing with Professional Standards

I'll coordinate specialized enhanced agents to generate comprehensive, professional documentation that serves multiple audiences with technical accuracy, user accessibility, and enterprise-grade presentation standards.

### Agent-Orchestrated Documentation Capabilities

#### System Architecture Documentation (backend-architect-enhanced)
- **API Documentation**: Comprehensive endpoint documentation with examples and schemas
- **System Design**: Architecture diagrams, data flow, and integration documentation
- **Technical Specifications**: Database schemas, infrastructure requirements, deployment guides
- **Operational Documentation**: Monitoring, maintenance, and troubleshooting procedures

#### User Interface Documentation (frontend-developer-enhanced)
- **Component Library**: React/Vue/Angular component documentation with live examples
- **User Experience Guides**: Accessibility features, interaction patterns, responsive behavior
- **Integration Examples**: Frontend implementation guides with best practices
- **Performance Guidelines**: Optimization recommendations and measurement procedures

#### User-Centered Content (content-creator-enhanced)
- **Tutorial Creation**: Step-by-step guides with screenshots and interactive elements
- **Getting Started Guides**: Onboarding documentation for new users and developers
- **FAQ Documentation**: Common questions with comprehensive answers and solutions
- **Video Script Generation**: Documentation for multimedia content creation

#### Professional Standards (brand-guardian-enhanced)
- **Consistency Validation**: Brand voice, terminology, and formatting standards
- **Quality Assurance**: Grammar, technical accuracy, and professional presentation
- **Multi-Language Support**: Internationalization considerations and translation preparation
- **Accessibility Compliance**: Documentation accessibility for users with diverse needs

### Professional Documentation Generation Process

#### 1. Content Analysis & Planning (0-25s)
```yaml
Documentation Strategy:
├─ Code Analysis: Function signatures, types, dependencies, usage patterns
├─ Audience Assessment: Technical level, use cases, integration requirements
├─ Content Architecture: Information hierarchy, cross-references, navigation
├─ Quality Standards: Technical accuracy, accessibility, professional presentation
└─ Multi-Format Planning: Output formats, interactive elements, visual components
```

#### 2. Multi-Agent Content Creation (25-60s)
- **Parallel Generation**: Multiple agents create specialized documentation sections simultaneously
- **Cross-Agent Validation**: Technical accuracy verification and consistency enforcement
- **Professional Writing Standards**: Enterprise-grade documentation with clear communication
- **Interactive Elements**: Code examples, diagrams, and user interaction components

#### 3. Integration & Quality Assurance (60-75s)
- **Content Integration**: Seamless combination of multi-agent generated content
- **Quality Validation**: Technical accuracy, accessibility, and professional standards verification
- **Interactive Enhancement**: Live code examples, interactive diagrams, and navigation
- **Multi-Format Export**: Professional presentation across different output formats

### Comprehensive Documentation Architecture

#### API Documentation Suite
```markdown
# 🚀 UserService API Documentation

## Overview
Professional API documentation with comprehensive examples and integration guides.

### Authentication
```typescript
// Authentication example with best practices
const authToken = await authenticate({
  email: 'user@example.com',
  password: 'securePassword123'
});

// Usage in subsequent requests
const users = await userService.getUsers({
  headers: { Authorization: `Bearer ${authToken}` }
});
```

### Endpoints

#### `POST /api/users` - Create User
**Description**: Creates a new user with comprehensive validation and security.

**Request Schema**:
```typescript
interface CreateUserRequest {
  email: string;           // Valid email format required
  name: string;            // 2-50 characters, alphanumeric and spaces
  password: string;        // Minimum 8 characters, complexity requirements
  role?: 'user' | 'admin'; // Optional, defaults to 'user'
}
```

**Response Examples**:
```typescript
// Success Response (201 Created)
{
  "id": "uuid-v4",
  "email": "user@example.com",
  "name": "John Doe",
  "role": "user",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}

// Error Response (400 Bad Request)
{
  "error": "VALIDATION_ERROR",
  "message": "Invalid email format",
  "field": "email",
  "code": "EMAIL_INVALID"
}
```

**Integration Examples**:
```javascript
// JavaScript/TypeScript integration
import { UserService } from '@company/user-service';

const userService = new UserService({
  baseURL: 'https://api.company.com',
  apiKey: process.env.API_KEY
});

try {
  const newUser = await userService.createUser({
    email: 'john@example.com',
    name: 'John Doe',
    password: 'SecurePass123!'
  });
  console.log('User created:', newUser.id);
} catch (error) {
  console.error('User creation failed:', error.message);
}
```

```python
# Python integration example
from company_sdk import UserService
from company_sdk.exceptions import ValidationError

user_service = UserService(api_key=os.getenv('API_KEY'))

try:
    new_user = user_service.create_user(
        email='john@example.com',
        name='John Doe',
        password='SecurePass123!'
    )
    print(f'User created: {new_user.id}')
except ValidationError as e:
    print(f'Validation error: {e.message}')
```
```

#### User Guide Documentation
- **Getting Started**: Setup, installation, and first-time configuration
- **Feature Tutorials**: Step-by-step guides with screenshots and interactive elements
- **Best Practices**: Usage patterns, optimization tips, and common workflows
- **Troubleshooting**: Common issues, solutions, and support resources

#### Technical Specification Documentation
- **Architecture Overview**: System design, components, and integration patterns
- **Database Schema**: Entity relationships, indexes, and migration procedures
- **Infrastructure Requirements**: Server specifications, networking, and security
- **Deployment Guides**: Step-by-step deployment with environment configuration

#### Executive Documentation
- **Business Value Summary**: ROI analysis, competitive advantages, and strategic benefits
- **Technical Overview**: High-level architecture without implementation details
- **Implementation Timeline**: Project phases, resource requirements, and milestones
- **Risk Assessment**: Technical risks, mitigation strategies, and success metrics

### Documentation Quality Standards

#### Technical Accuracy
- **Code Validation**: All examples tested and verified in real environments
- **Version Consistency**: Documentation synchronized with current codebase version
- **Integration Testing**: API examples validated against actual service responses
- **Performance Data**: Accurate performance metrics and optimization guidelines

#### User Accessibility
- **Multi-Level Content**: Beginner, intermediate, and advanced user sections
- **Visual Elements**: Diagrams, screenshots, and interactive code examples
- **Search Optimization**: Proper indexing, tagging, and cross-referencing
- **Accessibility Compliance**: Screen reader compatibility and WCAG 2.1 AA standards

#### Professional Presentation
- **Brand Consistency**: Company voice, terminology, and visual standards
- **Multi-Format Support**: Responsive design for web, mobile, and print formats
- **Interactive Features**: Live code examples, collapsible sections, and navigation
- **Maintenance Procedures**: Update workflows, review processes, and quality gates

### Advanced Documentation Features

#### Interactive Documentation
- **Live Code Examples**: Executable code snippets with real API integration
- **Interactive Diagrams**: Clickable architecture diagrams with detailed explanations
- **Dynamic Content**: Auto-updated examples and real-time data integration
- **User Feedback**: Comment systems, rating mechanisms, and improvement suggestions

#### Multi-Audience Optimization
- **Role-Based Content**: Customized documentation based on user role and experience level
- **Progressive Disclosure**: Layered information with expanding detail levels
- **Context-Aware Help**: Contextual assistance based on current user workflow
- **Personalization**: User preferences for technical depth and presentation style

#### Maintenance Automation
- **Auto-Update Integration**: Documentation synchronization with code changes
- **Quality Monitoring**: Automated checks for broken links, outdated examples, and accuracy
- **Usage Analytics**: User engagement tracking and content optimization recommendations
- **Collaborative Editing**: Team collaboration tools with review and approval workflows

**Performance Budget**: Complete professional documentation generation with multi-agent coordination, technical accuracy validation, and professional presentation standards delivered within 75 seconds, providing comprehensive coverage across API documentation, user guides, technical specifications, and executive summaries with enterprise-grade quality and accessibility.