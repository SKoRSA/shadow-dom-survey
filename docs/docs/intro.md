---
sidebar_position: 1
---

# Introduction

Welcome to the **Shadow DOM Survey** documentation!

Shadow DOM Survey is a lightweight, versatile survey system with builder and reader components, built using Shadow DOM for complete style and script encapsulation. This modern approach ensures that your survey components won't be affected by external CSS or JavaScript, making them reliable across various environments and website integrations.

## What is Shadow DOM Survey?

Shadow DOM Survey consists of two main components:

1. **SurveyBuilder** - A component for creating and editing surveys with various question types
2. **SurveyReader** - A component for displaying surveys and collecting responses

Both components are built using Shadow DOM, providing complete encapsulation and isolation from the rest of the webpage, ensuring consistent rendering and behavior regardless of where they're embedded.

## Key Features

- 🔒 **Full Encapsulation**: Uses Shadow DOM to prevent style leakage and conflicts
- 🧩 **Multiple Question Types**: Support for seven different question formats:
  - Single line text
  - Multi-line text
  - Single choice (radio buttons)
  - Multiple choice (checkboxes)
  - Dropdown select menus
  - Rating scales
  - Matrix questions
- 🌐 **Bilingual Support**: Full RTL and Arabic/English language support
- 📱 **Responsive Design**: Works seamlessly on all screen sizes
- 🔌 **Simplified Integration**: Clean API for embedding in any website
- 💾 **Data Storage Options**: Flexible storage with callback functions
- 🔄 **Event-based Communication**: Custom events for integration with your application

## Why Shadow DOM?

Shadow DOM is a web standard that provides encapsulation for HTML, CSS, and JavaScript. By using Shadow DOM:

- Survey component styles are completely isolated from your website styles
- External CSS cannot accidentally affect the survey appearance
- Component structure remains protected from external JavaScript
- No need for complex CSS namespacing or CSS-in-JS solutions

This makes Shadow DOM ideal for creating reliable, self-contained components like our survey system that will work consistently across different website environments.

## Getting Started

To get started with Shadow DOM Survey:

- [Installation Guide](getting-started/installation.md) - How to install the components
- [Quick Start](getting-started/quick-start.md) - Build your first survey in minutes
- [API Reference](api/builder-api.md) - Complete API documentation
- [Question Types](question-types/single-line-text.md) - Learn about different question types

## Browser Compatibility

Shadow DOM Survey works in all modern browsers with Shadow DOM support:

- Chrome 53+
- Firefox 63+
- Safari 10.1+
- Edge 79+
