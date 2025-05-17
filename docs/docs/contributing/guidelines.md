---
sidebar_position: 1
---

# Contribution Guidelines

Thank you for your interest in contributing to Shadow DOM Survey! This document outlines the process for contributing to the project and the standards we expect from contributors.

## Code of Conduct

Please read and follow our [Code of Conduct](https://github.com/SKoRSA/shadow-dom-survey/blob/main/CODE_OF_CONDUCT.md) to maintain a respectful and welcoming environment for all contributors.

## How to Contribute

### Reporting Bugs

If you find a bug, please report it by creating an issue on our [GitHub Issues page](https://github.com/SKoRSA/shadow-dom-survey/issues) with the "bug" label. Please include:

1. A clear title and description of the bug
2. Steps to reproduce the issue
3. Expected and actual behavior
4. Screenshots or GIFs if applicable
5. Environment details (browser, OS, etc.)

### Suggesting Features

Feature suggestions are welcome! Please create an issue on our [GitHub Issues page](https://github.com/SKoRSA/shadow-dom-survey/issues) with the "enhancement" label. Please include:

1. A clear title and description of the feature
2. The problem it solves or the value it adds
3. Any implementation ideas you have

### Pull Requests

1. Fork the repository
2. Create a new branch from `main`
3. Make your changes
4. Test your changes thoroughly
5. Submit a pull request with a clear description of the changes

All submissions require review before being merged.

## Development Guidelines

### Code Style

- Use consistent indentation (2 spaces)
- Follow JavaScript ES6+ conventions
- Document your code with JSDoc comments
- Use meaningful variable and function names
- Keep functions small and focused on a single task
- Add comments for complex logic

### Component Structure

When creating or modifying Shadow DOM components:

1. Encapsulate all styles and markup within the Shadow DOM
2. Use custom events for communication with the outside world
3. Maintain backward compatibility
4. Consider RTL and multilingual support

### Testing

- Test your changes in multiple browsers (Chrome, Firefox, Safari, Edge)
- Test with both English and Arabic languages
- Verify RTL layout functions correctly
- Ensure all features work on mobile devices

### Documentation

- Update documentation to reflect your changes
- Document any new APIs or changes to existing APIs
- Provide examples for new features

## Git Workflow

1. Create a branch with a descriptive name: `feature/new-question-type` or `fix/matrix-question-alignment`
2. Make focused, logical commits with clear messages
3. Keep pull requests reasonably sized
4. Reference any related issues in your commits and pull request

## Review Process

1. All code will be reviewed by at least one maintainer
2. Automated tests must pass
3. Changes must conform to the project's coding standards
4. Documentation must be updated

## Getting Help

If you have questions about contributing, please:

1. Check existing issues for similar questions
2. Create a new issue with the "question" label if needed
3. Reach out to the maintainers

Thank you for contributing to Shadow DOM Survey!
