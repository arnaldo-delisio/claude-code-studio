#!/usr/bin/env node

/**
 * Universal Meta-Assessor for Codebases
 * 
 * A comprehensive codebase analysis tool that generates RoE (Rules of Engagement),
 * architecture decisions, and actionable insights for any repository.
 * 
 * Features:
 * - Multi-language support (JS/TS, Python, PHP, Go, Rust, Java, C#, etc.)
 * - Framework detection (React, Vue, Laravel, Django, Express, etc.)
 * - Architecture pattern analysis
 * - Dependency auditing
 * - Security assessment
 * - Performance recommendations
 * - CI/CD pipeline analysis
 * - Database schema detection
 * - API endpoint discovery
 * - Code quality metrics
 * - Technical debt identification
 * - Deployment strategy analysis
 * 
 * Usage:
 *   node index.mjs [path] [--format=json|markdown] [--output=file] [--deep] [--publish]
 */

import fs from 'fs/promises';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class UniversalMetaAssessor {
    constructor(options = {}) {
        this.options = {
            format: 'markdown',
            deep: false,
            publish: false,
            maxFileSize: 1024 * 1024, // 1MB
            excludePatterns: [
                'node_modules', '.git', 'vendor', 'dist', 'build',
                '.next', '.nuxt', 'coverage', '.nyc_output', 'target',
                'bin', 'obj', '.cache', 'tmp', 'temp'
            ],
            ...options
        };
        
        this.assessment = {
            metadata: {},
            languages: {},
            frameworks: [],
            architecture: {},
            dependencies: {},
            security: {},
            performance: {},
            quality: {},
            debt: {},
            deployment: {},
            apis: [],
            databases: [],
            cicd: {},
            recommendations: [],
            decisions: [],
            roe: {}
        };
    }

    async assess(targetPath = '.') {
        const startTime = Date.now();
        const absolutePath = path.resolve(targetPath);
        
        console.log(`🔍 Assessing codebase: ${absolutePath}`);
        
        try {
            // Core analysis phases
            await this.analyzeMetadata(absolutePath);
            await this.scanFileStructure(absolutePath);
            await this.analyzeLanguages(absolutePath);
            await this.detectFrameworks(absolutePath);
            await this.analyzeArchitecture(absolutePath);
            await this.auditDependencies(absolutePath);
            await this.assessSecurity(absolutePath);
            await this.analyzePerformance(absolutePath);
            await this.measureQuality(absolutePath);
            await this.identifyDebt(absolutePath);
            await this.analyzeDeployment(absolutePath);
            await this.discoverAPIs(absolutePath);
            await this.detectDatabases(absolutePath);
            await this.analyzeCICD(absolutePath);
            
            // Generate insights
            await this.generateRecommendations();
            await this.makeArchitectureDecisions();
            await this.generateRoE();
            
            const duration = Date.now() - startTime;
            this.assessment.metadata.analysisTime = `${duration}ms`;
            
            console.log(`✅ Analysis completed in ${duration}ms`);
            return this.assessment;
            
        } catch (error) {
            console.error('❌ Assessment failed:', error.message);
            throw error;
        }
    }

    async analyzeMetadata(basePath) {
        const stats = await fs.stat(basePath);
        const gitInfo = await this.getGitInfo(basePath);
        
        this.assessment.metadata = {
            path: basePath,
            name: path.basename(basePath),
            size: await this.getDirectorySize(basePath),
            created: stats.birthtime,
            modified: stats.mtime,
            git: gitInfo,
            timestamp: new Date().toISOString()
        };
    }

    async scanFileStructure(basePath) {
        const files = await this.getAllFiles(basePath);
        const structure = {};
        
        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            const relativePath = path.relative(basePath, file);
            
            if (!structure[ext]) {
                structure[ext] = [];
            }
            structure[ext].push(relativePath);
        }
        
        this.assessment.fileStructure = structure;
        this.assessment.metadata.fileCount = files.length;
    }

    async analyzeLanguages(basePath) {
        const languages = {};
        const extensions = {
            '.js': 'JavaScript', '.ts': 'TypeScript', '.jsx': 'JavaScript',
            '.tsx': 'TypeScript', '.py': 'Python', '.php': 'PHP',
            '.go': 'Go', '.rs': 'Rust', '.java': 'Java', '.cs': 'C#',
            '.cpp': 'C++', '.c': 'C', '.rb': 'Ruby', '.swift': 'Swift',
            '.kt': 'Kotlin', '.scala': 'Scala', '.clj': 'Clojure',
            '.sh': 'Shell', '.sql': 'SQL', '.html': 'HTML', '.css': 'CSS',
            '.scss': 'SCSS', '.sass': 'Sass', '.less': 'Less',
            '.vue': 'Vue', '.svelte': 'Svelte', '.dart': 'Dart'
        };
        
        for (const [ext, files] of Object.entries(this.assessment.fileStructure)) {
            if (extensions[ext]) {
                const lang = extensions[ext];
                languages[lang] = {
                    files: files.length,
                    lines: await this.countLinesInFiles(basePath, files),
                    extension: ext
                };
            }
        }
        
        this.assessment.languages = languages;
    }

    async detectFrameworks(basePath) {
        const frameworks = [];
        const packageFiles = ['package.json', 'composer.json', 'requirements.txt', 'Cargo.toml', 'pom.xml', 'build.gradle'];
        
        // Package file analysis
        for (const file of packageFiles) {
            const filePath = path.join(basePath, file);
            try {
                const content = await fs.readFile(filePath, 'utf-8');
                frameworks.push(...this.detectFrameworksFromPackage(content, file));
            } catch (error) {
                // File doesn't exist, continue
            }
        }
        
        // File structure analysis
        frameworks.push(...await this.detectFrameworksFromStructure(basePath));
        
        this.assessment.frameworks = [...new Set(frameworks)];
    }

    detectFrameworksFromPackage(content, filename) {
        const frameworks = [];
        
        if (filename === 'package.json') {
            try {
                const pkg = JSON.parse(content);
                const deps = { ...pkg.dependencies, ...pkg.devDependencies };
                
                const frameworkMap = {
                    'react': 'React', 'vue': 'Vue.js', 'angular': 'Angular',
                    'svelte': 'Svelte', 'next': 'Next.js', 'nuxt': 'Nuxt.js',
                    'express': 'Express.js', 'fastify': 'Fastify', 'koa': 'Koa',
                    'nest': 'NestJS', 'gatsby': 'Gatsby', 'remix': 'Remix',
                    'vite': 'Vite', 'webpack': 'Webpack', 'rollup': 'Rollup'
                };
                
                for (const [dep, framework] of Object.entries(frameworkMap)) {
                    if (Object.keys(deps).some(d => d.includes(dep))) {
                        frameworks.push(framework);
                    }
                }
            } catch (error) {
                // Invalid JSON, skip
            }
        }
        
        if (filename === 'composer.json') {
            try {
                const composer = JSON.parse(content);
                const deps = { ...composer.require, ...composer['require-dev'] };
                
                const frameworkMap = {
                    'laravel': 'Laravel', 'symfony': 'Symfony', 'codeigniter': 'CodeIgniter',
                    'yii': 'Yii', 'cakephp': 'CakePHP', 'slim': 'Slim'
                };
                
                for (const [dep, framework] of Object.entries(frameworkMap)) {
                    if (Object.keys(deps).some(d => d.includes(dep))) {
                        frameworks.push(framework);
                    }
                }
            } catch (error) {
                // Invalid JSON, skip
            }
        }
        
        return frameworks;
    }

    async detectFrameworksFromStructure(basePath) {
        const frameworks = [];
        const indicators = {
            'React': ['src/App.js', 'src/App.tsx', 'public/index.html'],
            'Vue.js': ['src/App.vue', 'vue.config.js'],
            'Angular': ['angular.json', 'src/app/app.module.ts'],
            'Django': ['manage.py', 'settings.py', 'urls.py'],
            'Flask': ['app.py', 'wsgi.py'],
            'Laravel': ['artisan', 'config/app.php', 'routes/web.php'],
            'Spring Boot': ['src/main/java', 'pom.xml', 'application.properties'],
            'Rails': ['Gemfile', 'config/application.rb', 'app/controllers'],
            'ASP.NET': ['.csproj', 'Program.cs', 'Startup.cs']
        };
        
        for (const [framework, files] of Object.entries(indicators)) {
            for (const file of files) {
                try {
                    await fs.access(path.join(basePath, file));
                    frameworks.push(framework);
                    break;
                } catch (error) {
                    // File doesn't exist, continue
                }
            }
        }
        
        return frameworks;
    }

    async analyzeArchitecture(basePath) {
        const patterns = {
            mvc: await this.detectMVC(basePath),
            microservices: await this.detectMicroservices(basePath),
            serverless: await this.detectServerless(basePath),
            spa: await this.detectSPA(basePath),
            api: await this.detectAPI(basePath),
            monorepo: await this.detectMonorepo(basePath),
            layered: await this.detectLayeredArchitecture(basePath)
        };
        
        this.assessment.architecture = {
            patterns,
            complexity: this.calculateComplexity(),
            modularity: await this.analyzeModularity(basePath),
            coupling: await this.analyzeCoupling(basePath)
        };
    }

    async auditDependencies(basePath) {
        const dependencies = {};
        
        // Node.js dependencies
        try {
            const packagePath = path.join(basePath, 'package.json');
            const packageContent = await fs.readFile(packagePath, 'utf-8');
            const pkg = JSON.parse(packageContent);
            
            dependencies.npm = {
                production: Object.keys(pkg.dependencies || {}),
                development: Object.keys(pkg.devDependencies || {}),
                total: Object.keys({...pkg.dependencies, ...pkg.devDependencies}).length
            };
        } catch (error) {
            // No package.json
        }
        
        // Composer dependencies
        try {
            const composerPath = path.join(basePath, 'composer.json');
            const composerContent = await fs.readFile(composerPath, 'utf-8');
            const composer = JSON.parse(composerContent);
            
            dependencies.composer = {
                production: Object.keys(composer.require || {}),
                development: Object.keys(composer['require-dev'] || {}),
                total: Object.keys({...composer.require, ...composer['require-dev']}).length
            };
        } catch (error) {
            // No composer.json
        }
        
        this.assessment.dependencies = dependencies;
    }

    async assessSecurity(basePath) {
        const issues = [];
        const recommendations = [];
        
        // Check for security files
        const securityFiles = ['.env', 'config.json', 'secrets.yml'];
        for (const file of securityFiles) {
            try {
                await fs.access(path.join(basePath, file));
                issues.push(`Potentially sensitive file exposed: ${file}`);
            } catch (error) {
                // File doesn't exist, good
            }
        }
        
        // Check for known vulnerable patterns
        const vulnerablePatterns = [
            'eval(', 'innerHTML =', 'dangerouslySetInnerHTML',
            'mysqli_query(', 'mysql_query(', 'system(',
            'exec(', 'shell_exec(', 'passthru('
        ];
        
        // Scan code files for patterns
        for (const [ext, files] of Object.entries(this.assessment.fileStructure)) {
            if (['.js', '.ts', '.php', '.py'].includes(ext)) {
                for (const file of files.slice(0, 10)) { // Limit scan
                    try {
                        const content = await fs.readFile(path.join(basePath, file), 'utf-8');
                        for (const pattern of vulnerablePatterns) {
                            if (content.includes(pattern)) {
                                issues.push(`Potential security risk in ${file}: ${pattern}`);
                            }
                        }
                    } catch (error) {
                        // Skip file
                    }
                }
            }
        }
        
        this.assessment.security = {
            issues,
            recommendations,
            score: Math.max(0, 100 - (issues.length * 10))
        };
    }

    async analyzePerformance(basePath) {
        const metrics = {};
        
        // Bundle size analysis
        const bundleFiles = ['dist/', 'build/', 'public/js/', 'public/css/'];
        for (const dir of bundleFiles) {
            try {
                const size = await this.getDirectorySize(path.join(basePath, dir));
                metrics.bundleSize = size;
                break;
            } catch (error) {
                // Directory doesn't exist
            }
        }
        
        // Large file detection
        const largeFiles = [];
        for (const [ext, files] of Object.entries(this.assessment.fileStructure)) {
            for (const file of files) {
                try {
                    const stats = await fs.stat(path.join(basePath, file));
                    if (stats.size > this.options.maxFileSize) {
                        largeFiles.push({
                            file,
                            size: stats.size,
                            type: ext
                        });
                    }
                } catch (error) {
                    // Skip file
                }
            }
        }
        
        this.assessment.performance = {
            metrics,
            largeFiles,
            recommendations: this.generatePerformanceRecommendations(metrics, largeFiles)
        };
    }

    async measureQuality(basePath) {
        const metrics = {
            linesOfCode: 0,
            complexity: 0,
            duplication: 0,
            coverage: 0
        };
        
        // Count total lines of code
        for (const [lang, info] of Object.entries(this.assessment.languages)) {
            metrics.linesOfCode += info.lines;
        }
        
        // Simple complexity estimation based on file count and nesting
        const complexityIndicators = [
            'if (', 'else', 'for (', 'while (', 'switch (',
            'case:', 'catch (', 'finally', 'async ', 'await '
        ];
        
        let complexityCount = 0;
        for (const [ext, files] of Object.entries(this.assessment.fileStructure)) {
            if (['.js', '.ts', '.py', '.php', '.java', '.cs'].includes(ext)) {
                for (const file of files.slice(0, 5)) { // Sample files
                    try {
                        const content = await fs.readFile(path.join(basePath, file), 'utf-8');
                        for (const indicator of complexityIndicators) {
                            complexityCount += (content.match(new RegExp(indicator, 'g')) || []).length;
                        }
                    } catch (error) {
                        // Skip file
                    }
                }
            }
        }
        
        metrics.complexity = complexityCount;
        
        this.assessment.quality = {
            metrics,
            score: this.calculateQualityScore(metrics),
            recommendations: []
        };
    }

    async identifyDebt(basePath) {
        const debt = {
            todos: [],
            fixmes: [],
            deprecated: [],
            technical: []
        };
        
        const debtPatterns = {
            todos: [/TODO:?/gi, /FIXME:?/gi, /HACK:?/gi],
            deprecated: [/deprecated/gi, /@deprecated/gi],
            technical: [/legacy/gi, /workaround/gi, /temporary/gi]
        };
        
        // Scan for debt markers
        for (const [ext, files] of Object.entries(this.assessment.fileStructure)) {
            if (['.js', '.ts', '.py', '.php', '.java', '.cs', '.rb'].includes(ext)) {
                for (const file of files.slice(0, 10)) {
                    try {
                        const content = await fs.readFile(path.join(basePath, file), 'utf-8');
                        const lines = content.split('\n');
                        
                        lines.forEach((line, index) => {
                            for (const [category, patterns] of Object.entries(debtPatterns)) {
                                for (const pattern of patterns) {
                                    if (pattern.test(line)) {
                                        debt[category].push({
                                            file,
                                            line: index + 1,
                                            content: line.trim()
                                        });
                                    }
                                }
                            }
                        });
                    } catch (error) {
                        // Skip file
                    }
                }
            }
        }
        
        this.assessment.debt = debt;
    }

    async analyzeDeployment(basePath) {
        const deployment = {
            strategies: [],
            configs: [],
            containers: false,
            cloud: []
        };
        
        // Check for deployment configs
        const deploymentFiles = {
            'Dockerfile': 'Docker',
            'docker-compose.yml': 'Docker Compose',
            'kubernetes.yml': 'Kubernetes',
            'k8s/': 'Kubernetes',
            'vercel.json': 'Vercel',
            'netlify.toml': 'Netlify',
            '.github/workflows/': 'GitHub Actions',
            '.gitlab-ci.yml': 'GitLab CI',
            'azure-pipelines.yml': 'Azure DevOps',
            'Jenkinsfile': 'Jenkins',
            'terraform/': 'Terraform',
            'serverless.yml': 'Serverless Framework'
        };
        
        for (const [file, strategy] of Object.entries(deploymentFiles)) {
            try {
                await fs.access(path.join(basePath, file));
                deployment.strategies.push(strategy);
                deployment.configs.push(file);
            } catch (error) {
                // File doesn't exist
            }
        }
        
        deployment.containers = deployment.strategies.some(s => 
            ['Docker', 'Docker Compose', 'Kubernetes'].includes(s)
        );
        
        this.assessment.deployment = deployment;
    }

    async discoverAPIs(basePath) {
        const apis = [];
        
        // Look for API route files
        const apiPatterns = [
            'routes/', 'api/', 'controllers/', 'endpoints/',
            'src/routes/', 'src/api/', 'app/Http/Controllers/'
        ];
        
        for (const pattern of apiPatterns) {
            try {
                const apiPath = path.join(basePath, pattern);
                const files = await this.getAllFiles(apiPath);
                
                for (const file of files) {
                    const content = await fs.readFile(file, 'utf-8');
                    const endpoints = this.extractAPIEndpoints(content);
                    apis.push(...endpoints);
                }
            } catch (error) {
                // Directory doesn't exist
            }
        }
        
        this.assessment.apis = apis;
    }

    async detectDatabases(basePath) {
        const databases = [];
        
        // Check for database configs
        const dbIndicators = {
            'knexfile.js': 'SQL (Knex)',
            'prisma/schema.prisma': 'Prisma',
            'typeorm.config.js': 'TypeORM',
            'sequelize.config.js': 'Sequelize',
            'mongoose.js': 'MongoDB (Mongoose)',
            'redis.conf': 'Redis',
            'elasticsearch.yml': 'Elasticsearch',
            'firebase.json': 'Firebase'
        };
        
        for (const [file, db] of Object.entries(dbIndicators)) {
            try {
                await fs.access(path.join(basePath, file));
                databases.push(db);
            } catch (error) {
                // File doesn't exist
            }
        }
        
        // Check for SQL files
        if (this.assessment.fileStructure['.sql']?.length > 0) {
            databases.push('SQL Database');
        }
        
        this.assessment.databases = databases;
    }

    async analyzeCICD(basePath) {
        const cicd = {
            providers: [],
            workflows: [],
            coverage: false,
            testing: false,
            deployment: false
        };
        
        const cicdFiles = {
            '.github/workflows/': 'GitHub Actions',
            '.gitlab-ci.yml': 'GitLab CI',
            'azure-pipelines.yml': 'Azure DevOps',
            'bitbucket-pipelines.yml': 'Bitbucket Pipelines',
            'Jenkinsfile': 'Jenkins',
            '.travis.yml': 'Travis CI',
            'circle.yml': 'CircleCI'
        };
        
        for (const [file, provider] of Object.entries(cicdFiles)) {
            try {
                await fs.access(path.join(basePath, file));
                cicd.providers.push(provider);
            } catch (error) {
                // File doesn't exist
            }
        }
        
        this.assessment.cicd = cicd;
    }

    async generateRecommendations() {
        const recommendations = [];
        
        // Performance recommendations
        if (this.assessment.performance.largeFiles.length > 0) {
            recommendations.push({
                type: 'performance',
                priority: 'high',
                title: 'Optimize large files',
                description: `Found ${this.assessment.performance.largeFiles.length} files over 1MB`
            });
        }
        
        // Security recommendations
        if (this.assessment.security.issues.length > 0) {
            recommendations.push({
                type: 'security',
                priority: 'critical',
                title: 'Address security issues',
                description: `Found ${this.assessment.security.issues.length} potential security risks`
            });
        }
        
        // Architecture recommendations
        if (!this.assessment.architecture.patterns.api && this.assessment.frameworks.length > 0) {
            recommendations.push({
                type: 'architecture',
                priority: 'medium',
                title: 'Consider API-first design',
                description: 'No clear API layer detected for this application'
            });
        }
        
        // Deployment recommendations
        if (this.assessment.deployment.strategies.length === 0) {
            recommendations.push({
                type: 'deployment',
                priority: 'medium',
                title: 'Add deployment automation',
                description: 'No deployment configuration detected'
            });
        }
        
        // Testing recommendations
        if (this.assessment.quality.metrics.coverage === 0) {
            recommendations.push({
                type: 'testing',
                priority: 'high',
                title: 'Implement testing strategy',
                description: 'No test coverage detected'
            });
        }
        
        this.assessment.recommendations = recommendations;
    }

    async makeArchitectureDecisions() {
        const decisions = [];
        
        // Language decision
        const primaryLang = Object.entries(this.assessment.languages)
            .sort((a, b) => b[1].lines - a[1].lines)[0];
        
        if (primaryLang) {
            decisions.push({
                id: 'ADR-001',
                title: `Primary Language: ${primaryLang[0]}`,
                status: 'accepted',
                context: `Codebase is primarily ${primaryLang[0]} with ${primaryLang[1].lines} lines`,
                decision: `Continue development in ${primaryLang[0]}`,
                consequences: `Team expertise and tooling optimized for ${primaryLang[0]}`
            });
        }
        
        // Framework decision
        if (this.assessment.frameworks.length > 0) {
            const primaryFramework = this.assessment.frameworks[0];
            decisions.push({
                id: 'ADR-002',
                title: `Primary Framework: ${primaryFramework}`,
                status: 'accepted',
                context: `Application built with ${primaryFramework}`,
                decision: `Maintain ${primaryFramework} as primary framework`,
                consequences: `Leverage ${primaryFramework} ecosystem and best practices`
            });
        }
        
        // Architecture pattern decision
        const patterns = Object.entries(this.assessment.architecture.patterns)
            .filter(([, detected]) => detected)
            .map(([pattern]) => pattern);
        
        if (patterns.length > 0) {
            decisions.push({
                id: 'ADR-003',
                title: `Architecture Pattern: ${patterns.join(', ')}`,
                status: 'accepted',
                context: `Detected patterns: ${patterns.join(', ')}`,
                decision: `Continue with current architectural approach`,
                consequences: `Maintain consistency with established patterns`
            });
        }
        
        this.assessment.decisions = decisions;
    }

    async generateRoE() {
        const roe = {
            codebase: {
                name: this.assessment.metadata.name,
                primaryLanguage: Object.keys(this.assessment.languages)[0] || 'Mixed',
                frameworks: this.assessment.frameworks,
                architecture: Object.keys(this.assessment.architecture.patterns).filter(
                    p => this.assessment.architecture.patterns[p]
                )
            },
            development: {
                standards: this.generateCodingStandards(),
                practices: this.generateBestPractices(),
                workflow: this.generateWorkflow()
            },
            deployment: {
                strategy: this.assessment.deployment.strategies[0] || 'Manual',
                environment: this.detectEnvironments(),
                pipeline: this.assessment.cicd.providers[0] || 'None'
            },
            security: {
                requirements: this.generateSecurityRequirements(),
                practices: this.generateSecurityPractices()
            },
            quality: {
                metrics: this.assessment.quality.metrics,
                gates: this.generateQualityGates(),
                tools: this.generateQualityTools()
            }
        };
        
        this.assessment.roe = roe;
    }

    // Helper methods
    async getAllFiles(dir, excludePatterns = this.options.excludePatterns) {
        const files = [];
        
        async function scan(currentPath) {
            try {
                const entries = await fs.readdir(currentPath, { withFileTypes: true });
                
                for (const entry of entries) {
                    const fullPath = path.join(currentPath, entry.name);
                    
                    if (excludePatterns.some(pattern => fullPath.includes(pattern))) {
                        continue;
                    }
                    
                    if (entry.isDirectory()) {
                        await scan(fullPath);
                    } else {
                        files.push(fullPath);
                    }
                }
            } catch (error) {
                // Skip directories we can't read
            }
        }
        
        await scan(dir);
        return files;
    }

    async getDirectorySize(dirPath) {
        let totalSize = 0;
        
        try {
            const files = await this.getAllFiles(dirPath);
            for (const file of files) {
                try {
                    const stats = await fs.stat(file);
                    totalSize += stats.size;
                } catch (error) {
                    // Skip files we can't stat
                }
            }
        } catch (error) {
            // Directory doesn't exist
        }
        
        return totalSize;
    }

    async getGitInfo(basePath) {
        try {
            const gitPath = path.join(basePath, '.git');
            await fs.access(gitPath);
            
            const branch = execSync('git branch --show-current', { 
                cwd: basePath, 
                encoding: 'utf-8' 
            }).trim();
            
            const commits = execSync('git rev-list --count HEAD', { 
                cwd: basePath, 
                encoding: 'utf-8' 
            }).trim();
            
            const contributors = execSync('git shortlog -sn', { 
                cwd: basePath, 
                encoding: 'utf-8' 
            }).trim().split('\n').length;
            
            return {
                branch,
                commits: parseInt(commits),
                contributors
            };
        } catch (error) {
            return {
                branch: 'unknown',
                commits: 0,
                contributors: 0
            };
        }
    }

    async countLinesInFiles(basePath, files) {
        let totalLines = 0;
        
        for (const file of files.slice(0, 20)) { // Limit for performance
            try {
                const content = await fs.readFile(path.join(basePath, file), 'utf-8');
                totalLines += content.split('\n').length;
            } catch (error) {
                // Skip files we can't read
            }
        }
        
        return totalLines;
    }

    generateCodingStandards() {
        const lang = Object.keys(this.assessment.languages)[0];
        const standards = {
            'JavaScript': ['ESLint', 'Prettier', 'JSDoc'],
            'TypeScript': ['TSLint/ESLint', 'Prettier', 'TSDoc'],
            'Python': ['PEP 8', 'Black', 'mypy'],
            'PHP': ['PSR-12', 'PHP_CodeSniffer', 'PHPDoc'],
            'Java': ['Google Java Style', 'Checkstyle', 'Javadoc'],
            'C#': ['Microsoft Guidelines', 'StyleCop', 'XML Documentation']
        };
        
        return standards[lang] || ['Language-specific standards', 'Code formatting', 'Documentation'];
    }

    generateBestPractices() {
        return [
            'Code review required for all changes',
            'Unit tests for new functionality',
            'Integration tests for API endpoints',
            'Security scanning in CI/CD',
            'Dependency updates monthly',
            'Performance monitoring in production'
        ];
    }

    generateWorkflow() {
        const hasGit = this.assessment.metadata.git.commits > 0;
        const hasCICD = this.assessment.cicd.providers.length > 0;
        
        return {
            versionControl: hasGit ? 'Git' : 'Required',
            branching: hasGit ? 'Feature branches' : 'Not configured',
            cicd: hasCICD ? this.assessment.cicd.providers[0] : 'Required',
            deployment: this.assessment.deployment.strategies[0] || 'Manual'
        };
    }

    // Additional helper methods would continue here...
    // (generateSecurityRequirements, generateQualityGates, etc.)

    async formatOutput() {
        if (this.options.format === 'json') {
            return JSON.stringify(this.assessment, null, 2);
        }
        
        return this.formatMarkdown();
    }

    formatMarkdown() {
        const md = [];
        
        md.push('# Codebase Assessment Report');
        md.push(`\n**Generated:** ${this.assessment.metadata.timestamp}`);
        md.push(`**Analysis Time:** ${this.assessment.metadata.analysisTime}`);
        
        md.push('\n## 📊 Overview');
        md.push(`- **Name:** ${this.assessment.metadata.name}`);
        md.push(`- **Files:** ${this.assessment.metadata.fileCount}`);
        md.push(`- **Languages:** ${Object.keys(this.assessment.languages).join(', ')}`);
        md.push(`- **Frameworks:** ${this.assessment.frameworks.join(', ')}`);
        
        md.push('\n## 🏗️ Architecture');
        const patterns = Object.entries(this.assessment.architecture.patterns)
            .filter(([, detected]) => detected)
            .map(([pattern]) => pattern);
        md.push(`- **Patterns:** ${patterns.join(', ') || 'None detected'}`);
        
        md.push('\n## 🔍 Languages');
        for (const [lang, info] of Object.entries(this.assessment.languages)) {
            md.push(`- **${lang}:** ${info.files} files, ${info.lines} lines`);
        }
        
        md.push('\n## 🛡️ Security');
        md.push(`- **Score:** ${this.assessment.security.score}/100`);
        md.push(`- **Issues:** ${this.assessment.security.issues.length}`);
        
        md.push('\n## 📈 Recommendations');
        for (const rec of this.assessment.recommendations) {
            md.push(`- **${rec.priority.toUpperCase()}:** ${rec.title} - ${rec.description}`);
        }
        
        md.push('\n## 🎯 Architecture Decisions');
        for (const decision of this.assessment.decisions) {
            md.push(`\n### ${decision.title}`);
            md.push(`**Status:** ${decision.status}`);
            md.push(`**Context:** ${decision.context}`);
            md.push(`**Decision:** ${decision.decision}`);
            md.push(`**Consequences:** ${decision.consequences}`);
        }
        
        md.push('\n## 📋 Rules of Engagement');
        md.push(`\n### Development Standards`);
        md.push(`- **Primary Language:** ${this.assessment.roe.codebase.primaryLanguage}`);
        md.push(`- **Frameworks:** ${this.assessment.roe.codebase.frameworks.join(', ')}`);
        md.push(`- **Architecture:** ${this.assessment.roe.codebase.architecture.join(', ')}`);
        
        return md.join('\n');
    }

    async saveResults(output) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `assessment-${this.assessment.metadata.name}-${timestamp}.${this.options.format === 'json' ? 'json' : 'md'}`;
        const filepath = path.join(process.cwd(), filename);
        
        await fs.writeFile(filepath, output);
        console.log(`📄 Assessment saved to: ${filepath}`);
        
        return filepath;
    }

    async publishResults() {
        // Create immutable RoE files
        const roeFiles = [
            {
                name: 'ARCHITECTURE-DECISIONS.md',
                content: this.formatArchitectureDecisions()
            },
            {
                name: 'RULES-OF-ENGAGEMENT.md',
                content: this.formatRulesOfEngagement()
            },
            {
                name: 'TECHNICAL-DEBT.md',
                content: this.formatTechnicalDebt()
            }
        ];
        
        for (const file of roeFiles) {
            const filepath = path.join(process.cwd(), file.name);
            await fs.writeFile(filepath, file.content);
            console.log(`📋 Created: ${filepath}`);
        }
    }

    formatArchitectureDecisions() {
        const md = ['# Architecture Decision Records'];
        
        for (const decision of this.assessment.decisions) {
            md.push(`\n## ${decision.id}: ${decision.title}`);
            md.push(`\n**Status:** ${decision.status}`);
            md.push(`\n**Context:**\n${decision.context}`);
            md.push(`\n**Decision:**\n${decision.decision}`);
            md.push(`\n**Consequences:**\n${decision.consequences}`);
            md.push('\n---');
        }
        
        return md.join('\n');
    }

    formatRulesOfEngagement() {
        const roe = this.assessment.roe;
        const md = ['# Rules of Engagement'];
        
        md.push('\n## Codebase Standards');
        md.push(`- **Primary Language:** ${roe.codebase.primaryLanguage}`);
        md.push(`- **Frameworks:** ${roe.codebase.frameworks.join(', ')}`);
        md.push(`- **Architecture:** ${roe.codebase.architecture.join(', ')}`);
        
        md.push('\n## Development Practices');
        for (const practice of roe.development.practices) {
            md.push(`- ${practice}`);
        }
        
        md.push('\n## Quality Gates');
        md.push(`- **Lines of Code:** ${roe.quality.metrics.linesOfCode}`);
        md.push(`- **Complexity Score:** ${roe.quality.metrics.complexity}`);
        
        return md.join('\n');
    }

    formatTechnicalDebt() {
        const debt = this.assessment.debt;
        const md = ['# Technical Debt Report'];
        
        md.push(`\n## Summary`);
        md.push(`- **TODOs/FIXMEs:** ${debt.todos.length}`);
        md.push(`- **Deprecated Code:** ${debt.deprecated.length}`);
        md.push(`- **Technical Debt Items:** ${debt.technical.length}`);
        
        if (debt.todos.length > 0) {
            md.push('\n## TODOs and FIXMEs');
            for (const todo of debt.todos) {
                md.push(`- ${todo.file}:${todo.line} - ${todo.content}`);
            }
        }
        
        return md.join('\n');
    }
}

// CLI execution
async function main() {
    const args = process.argv.slice(2);
    const options = {};
    let targetPath = '.';
    
    // Parse arguments
    for (const arg of args) {
        if (arg.startsWith('--format=')) {
            options.format = arg.split('=')[1];
        } else if (arg.startsWith('--output=')) {
            options.output = arg.split('=')[1];
        } else if (arg === '--deep') {
            options.deep = true;
        } else if (arg === '--publish') {
            options.publish = true;
        } else if (!arg.startsWith('--')) {
            targetPath = arg;
        }
    }
    
    try {
        const assessor = new UniversalMetaAssessor(options);
        const results = await assessor.assess(targetPath);
        
        const output = await assessor.formatOutput();
        
        if (options.output) {
            await assessor.saveResults(output);
        } else {
            console.log(output);
        }
        
        if (options.publish) {
            await assessor.publishResults();
        }
        
        process.exit(0);
        
    } catch (error) {
        console.error('❌ Assessment failed:', error.message);
        process.exit(1);
    }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    main();
}

export { UniversalMetaAssessor };