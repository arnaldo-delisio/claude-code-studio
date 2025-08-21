# Git Commands Reference

Quick reference for Git commands without AI references.

## 🚀 Quick Commands

### Basic commit and push:
```bash
git add .
git commit -m "Your commit message here"
git push origin $(git branch --show-current)
```

### Stage specific files:
```bash
git add path/to/file1 path/to/file2
git commit -m "Update feature description

- Add specific change detail
- Fix issue or enhancement
- Improve performance or functionality"
git push origin $(git branch --show-current)
```

### Commit all with details:
```bash
git add -A
git commit -m "Brief summary of changes" -m "- Detailed point 1" -m "- Detailed point 2" -m "- Detailed point 3"
git push origin $(git branch --show-current)
```

### One-liner commit:
```bash
git add . && git commit -m "Update project files" && git push origin $(git branch --show-current)
```

### Multi-line commit message:
```bash
git commit -m "$(cat <<EOF
Main commit title

- First change description
- Second change description  
- Third change description
EOF
)"
```

## 📝 Commit Message Templates

### Feature:
```
Add [feature name] functionality

- Implement core logic for [feature]
- Add validation and error handling
- Update tests and documentation
```

### Bug Fix:
```
Fix [issue description]

- Identify root cause in [component]
- Apply fix to handle [edge case]
- Add regression tests
```

### Refactor:
```
Refactor [component/module] for better performance

- Extract common functionality
- Optimize data structures
- Improve code readability
```

### Update:
```
Update [component] configuration

- Modify settings for [purpose]
- Adjust parameters to [goal]
- Verify compatibility with existing code
```

## 🔧 Useful Git Commands

### Check status:
```bash
git status
```

### View changes:
```bash
git diff
git diff --staged
```

### View recent commits:
```bash
git log --oneline -10
```

### Create and switch branch:
```bash
git checkout -b feature/branch-name
```

### Merge branch:
```bash
git checkout main
git merge feature/branch-name
```

### Stash changes:
```bash
git stash
git stash pop
```

## 📌 Guidelines

- Keep commit messages professional and technical
- Focus on what changed, not who made changes
- Use present tense ("Add feature" not "Added feature")
- Be specific about changes made
- Reference issue numbers when applicable (#123)