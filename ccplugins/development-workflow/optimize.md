---
name: optimize
description: |-
  Performance analysis and optimization recommendations with agent orchestration.
  
  Provides comprehensive performance optimization combining multiple specialized perspectives
  for system performance, user experience enhancement, and resource efficiency improvements.
  
  Agent Orchestration:
  - performance-benchmarker-enhanced: Performance profiling and optimization analysis
  - ai-engineer-enhanced: Algorithm optimization and system performance enhancement
  - backend-architect-enhanced: Infrastructure and system-level performance optimization
  - frontend-developer-enhanced: User experience and interface performance optimization
  
  Performance Budget: <150s comprehensive performance analysis with actionable optimization plan
  Quality Gates: Quantified performance improvements, measurable user experience enhancement

parameters:
  - name: target
    description: "File, function, service, or system component to optimize"
    required: true
  - name: type
    description: "Optimization type (performance, memory, network, database, ui, all)"
    required: false
    default: "performance"
  - name: baseline
    description: "Establish performance baseline before optimization"
    required: false
    default: "true"
  - name: threshold
    description: "Performance improvement target percentage"
    required: false
    default: "20"
  - name: scope
    description: "Optimization scope (function, module, service, system)"
    required: false
    default: "module"

examples:
  - description: "Comprehensive performance optimization for API service"
    command: "/optimize src/api/UserService.ts --type all --threshold 30"
  - description: "Database query optimization analysis"
    command: "/optimize src/database/queries --type database --scope service"
  - description: "Frontend performance optimization for component"
    command: "/optimize src/components/DataTable.tsx --type ui --threshold 40"
---

# ⚡ Multi-Agent Performance Optimization System

## Enhanced Performance Analysis with Systematic Optimization

I'll coordinate specialized enhanced agents to provide comprehensive performance optimization analysis, combining algorithm efficiency, infrastructure optimization, and user experience enhancement for measurable system performance improvements.

### Agent-Orchestrated Optimization Capabilities

#### Performance Profiling & Benchmarking (performance-benchmarker-enhanced)
- **Comprehensive Profiling**: CPU, memory, network, and I/O performance analysis
- **Benchmark Validation**: Performance baseline establishment and improvement measurement
- **Bottleneck Identification**: Systematic performance constraint analysis and prioritization
- **Load Testing**: Performance under various load conditions with scalability assessment

#### Algorithm & System Optimization (ai-engineer-enhanced)
- **Algorithm Efficiency**: Computational complexity analysis and optimization strategies
- **Data Structure Optimization**: Optimal data structure selection and implementation patterns
- **Caching Strategies**: Multi-level caching implementation with intelligent invalidation
- **Parallel Processing**: Concurrency optimization and asynchronous pattern implementation

#### Infrastructure Performance (backend-architect-enhanced)
- **Database Optimization**: Query optimization, indexing strategies, connection pooling
- **System Architecture**: Microservices performance, load balancing, fault tolerance
- **Resource Management**: Memory optimization, garbage collection tuning, resource pooling
- **Infrastructure Scaling**: Horizontal and vertical scaling optimization strategies

#### User Experience Optimization (frontend-developer-enhanced)
- **Rendering Performance**: Component optimization, virtual DOM efficiency, bundle optimization
- **Load Time Optimization**: Code splitting, lazy loading, critical resource prioritization
- **Interactive Performance**: Event handling optimization, state management efficiency
- **Accessibility Performance**: Screen reader optimization, keyboard navigation efficiency

### Professional Performance Optimization Process

#### 1. Comprehensive Performance Baseline (0-50s)
```yaml
Performance Analysis Framework:
├─ System Profiling: CPU, memory, disk I/O, network utilization analysis
├─ Application Metrics: Response times, throughput, error rates, resource consumption
├─ User Experience: Page load times, interaction responsiveness, perceived performance
├─ Infrastructure Analysis: Database performance, caching efficiency, external dependencies
├─ Code Analysis: Algorithm complexity, data structure efficiency, optimization opportunities
└─ Scalability Assessment: Load testing, stress testing, capacity planning validation
```

#### 2. Multi-Agent Optimization Strategy (50-120s)
- **Parallel Analysis**: Multiple agents assess different performance dimensions simultaneously
- **Optimization Prioritization**: ROI-based optimization ranking with business impact assessment
- **Cross-Domain Validation**: Agent coordination for holistic performance improvement approach
- **Implementation Planning**: Systematic optimization roadmap with measurable success criteria

#### 3. Validation & Measurement (120-150s)
- **Performance Validation**: Before/after comparison with quantified improvement metrics
- **User Experience Testing**: Real-world usage pattern validation and user satisfaction assessment
- **Scalability Verification**: Load testing with optimization improvements under various conditions
- **Monitoring Setup**: Performance monitoring and alerting for continuous optimization tracking

### Comprehensive Performance Optimization Strategies

#### Algorithm Optimization
```typescript
// Before: Inefficient nested loops (O(n²) complexity)
function findUserMatches(users: User[], criteria: SearchCriteria[]): UserMatch[] {
  const matches: UserMatch[] = [];
  
  for (const user of users) {
    for (const criterion of criteria) {
      if (this.evaluateMatch(user, criterion)) {
        matches.push({ user, criterion, score: this.calculateScore(user, criterion) });
      }
    }
  }
  
  return matches.sort((a, b) => b.score - a.score);
}

// After: Optimized with indexing and caching (O(n + m) complexity)
class OptimizedUserMatcher {
  private userIndex: Map<string, User[]>;
  private criteriaIndex: Map<string, SearchCriteria[]>;
  private scoreCache: Map<string, number>;
  
  constructor(users: User[], criteria: SearchCriteria[]) {
    this.userIndex = this.buildUserIndex(users);
    this.criteriaIndex = this.buildCriteriaIndex(criteria);
    this.scoreCache = new Map();
  }
  
  findUserMatches(): UserMatch[] {
    const matches: UserMatch[] = [];
    
    // Use indexed lookup instead of nested loops
    for (const [key, users] of this.userIndex) {
      const relevantCriteria = this.criteriaIndex.get(key) || [];
      
      for (const user of users) {
        for (const criterion of relevantCriteria) {
          const cacheKey = `${user.id}-${criterion.id}`;
          
          if (this.scoreCache.has(cacheKey)) {
            matches.push({
              user,
              criterion,
              score: this.scoreCache.get(cacheKey)!
            });
          } else {
            const score = this.calculateScore(user, criterion);
            this.scoreCache.set(cacheKey, score);
            matches.push({ user, criterion, score });
          }
        }
      }
    }
    
    // Use optimized sorting with pre-computed scores
    return matches.sort((a, b) => b.score - a.score);
  }
  
  private buildUserIndex(users: User[]): Map<string, User[]> {
    // Implementation with performance optimization
  }
}
```

#### Database Query Optimization
```sql
-- Before: Inefficient query with N+1 problem
SELECT * FROM users WHERE department_id IN (
  SELECT id FROM departments WHERE region = 'US'
);

-- Multiple queries for each user's details
SELECT * FROM user_profiles WHERE user_id = ?;
SELECT * FROM user_permissions WHERE user_id = ?;

-- After: Optimized with JOINs and single query
SELECT 
  u.id,
  u.name,
  u.email,
  u.created_at,
  up.profile_data,
  GROUP_CONCAT(perm.permission_name) as permissions,
  d.department_name,
  d.region
FROM users u
INNER JOIN departments d ON u.department_id = d.id
LEFT JOIN user_profiles up ON u.id = up.user_id
LEFT JOIN user_permissions uperm ON u.id = uperm.user_id
LEFT JOIN permissions perm ON uperm.permission_id = perm.id
WHERE d.region = 'US'
  AND u.active = 1
GROUP BY u.id, up.id, d.id
ORDER BY u.name;

-- Add composite index for performance
CREATE INDEX idx_users_dept_active ON users(department_id, active, name);
CREATE INDEX idx_departments_region ON departments(region, id);
```

#### Frontend Performance Optimization
```typescript
// Before: Inefficient React component with performance issues
const UserList: React.FC<{ users: User[] }> = ({ users }) => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Runs on every render - performance issue
  useEffect(() => {
    const filtered = users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [users, searchTerm]);
  
  return (
    <div>
      <input 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users..."
      />
      {filteredUsers.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

// After: Optimized with memoization and debouncing
const OptimizedUserList: React.FC<{ users: User[] }> = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  
  // Memoized filtering with optimized search
  const filteredUsers = useMemo(() => {
    if (!debouncedSearchTerm) return users;
    
    const searchLower = debouncedSearchTerm.toLowerCase();
    return users.filter(user => {
      // Use indexed search for better performance
      const searchableText = `${user.name} ${user.email}`.toLowerCase();
      return searchableText.includes(searchLower);
    });
  }, [users, debouncedSearchTerm]);
  
  // Virtualized rendering for large lists
  const { visibleItems, containerProps, scrollProps } = useVirtualization({
    items: filteredUsers,
    itemHeight: 80,
    containerHeight: 400
  });
  
  return (
    <div>
      <SearchInput
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search users..."
        debounceMs={300}
      />
      <div {...containerProps}>
        <div {...scrollProps}>
          {visibleItems.map(({ item: user, index }) => (
            <MemoizedUserCard 
              key={user.id} 
              user={user}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Memoized component to prevent unnecessary re-renders
const MemoizedUserCard = React.memo<{ user: User; index: number }>(
  ({ user, index }) => <UserCard user={user} />,
  (prevProps, nextProps) => prevProps.user.id === nextProps.user.id
);
```

#### Caching Strategy Implementation
- **Multi-Level Caching**: Application cache, Redis, CDN, browser caching optimization
- **Intelligent Invalidation**: Cache invalidation strategies with consistency guarantees
- **Cache Warming**: Proactive cache population for predictable performance
- **Cache Analytics**: Cache hit rates, performance impact measurement, optimization tuning

### Performance Optimization Categories

#### System Performance Optimization
- **CPU Optimization**: Algorithm efficiency, parallel processing, resource scheduling
- **Memory Optimization**: Garbage collection tuning, memory pooling, leak prevention
- **I/O Optimization**: Disk access patterns, network optimization, connection pooling
- **Concurrency Optimization**: Thread pool tuning, async patterns, resource contention

#### User Experience Performance
- **Load Time Optimization**: Critical resource prioritization, progressive loading, preloading
- **Runtime Performance**: Smooth animations, responsive interactions, efficient state updates
- **Perceived Performance**: Loading indicators, skeleton screens, progressive enhancement
- **Accessibility Performance**: Screen reader optimization, keyboard navigation efficiency

#### Infrastructure Performance
- **Database Performance**: Query optimization, connection management, replication strategies
- **Network Performance**: CDN utilization, compression, request optimization, protocol selection
- **Scaling Performance**: Auto-scaling configuration, load balancing, resource allocation
- **Monitoring Performance**: Real-time metrics, alerting optimization, performance dashboards

### Professional Performance Analysis Output

#### Executive Performance Summary
- **Performance Improvement Metrics**: Before/after comparison with quantified gains
- **Business Impact Assessment**: User experience improvement, operational cost reduction
- **ROI Analysis**: Performance optimization investment vs. business value return
- **Strategic Recommendations**: Long-term performance strategy and infrastructure planning

#### Technical Optimization Report
- **Bottleneck Analysis**: Performance constraints identification and resolution strategies
- **Implementation Roadmap**: Phased optimization approach with measurable milestones
- **Architecture Recommendations**: System design improvements for sustainable performance
- **Monitoring Strategy**: Performance tracking, alerting, and continuous optimization

#### User Experience Impact Analysis
- **Performance Metrics**: Load times, interaction responsiveness, perceived performance
- **User Satisfaction**: Performance impact on user engagement and retention
- **Accessibility Performance**: Performance optimization for users with diverse needs
- **Cross-Platform Analysis**: Performance consistency across devices and browsers

#### Continuous Performance Management
- **Performance Monitoring**: Real-time tracking, trend analysis, proactive optimization
- **Automated Optimization**: Performance regression detection and automatic remediation
- **Performance Culture**: Team education, best practices, performance-first development
- **Innovation Pipeline**: Emerging performance technologies and optimization opportunities

### Advanced Optimization Features

#### AI-Powered Performance Optimization
- **Machine Learning Analysis**: Pattern recognition for optimization opportunity identification
- **Predictive Performance**: Performance trend analysis and proactive optimization
- **Adaptive Optimization**: Dynamic performance tuning based on usage patterns
- **Intelligent Resource Allocation**: AI-driven resource optimization and capacity planning

#### Performance DevOps Integration
- **CI/CD Performance Gates**: Automated performance validation in deployment pipeline
- **Performance Regression Detection**: Continuous performance monitoring with automatic alerts
- **A/B Performance Testing**: Performance optimization validation with user impact measurement
- **Performance Feedback Loop**: Continuous improvement cycle with data-driven optimization

**Performance Budget**: Complete multi-agent performance optimization analysis with comprehensive profiling, systematic bottleneck identification, and actionable improvement strategies delivered within 150 seconds, providing measurable performance enhancements with quantified business impact and user experience improvement.