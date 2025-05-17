---
sidebar_position: 1
---

# Installation

Shadow DOM Survey components can be easily integrated into any web project. This guide covers how to install and initialize both the SurveyBuilder and SurveyReader components following their actual implementation requirements.

## Installation Methods

### Method 1: From GitHub Repository

1. Clone or download the repository from [GitHub](https://github.com/SKoRSA/shadow-dom-survey)
2. Include the JavaScript files in your HTML:

```html
<script src="./builder-embed.js"></script>
<script src="./reader-embed.js"></script>
```

### Method 2: NPM Package (Coming Soon)

In the future, we plan to make the library available as an NPM package for easy integration with modern JavaScript frameworks.

## Creating Container Elements

Before initializing the components, create container elements in your HTML:

```html
<!-- Container for the survey builder -->
<div id="surveyBuilder"></div>

<!-- Container for the survey reader -->
<div id="surveyReader"></div>
```

## Initializing the SurveyBuilder Component

The SurveyBuilder component allows users to create and edit surveys:

```javascript
// Initialize the builder
const builder = new SurveyBuilder("#surveyBuilder", {
  isEnglish: true, // true for English UI, false for Arabic
  onSave: async (data) => {
    console.log("Survey saved:", data);
    // Store data in your backend or localStorage
    return data;
  },
  loadSurvey: async () => {
    // Optional: Load existing survey data
    return null; // Return survey data or null
  },
  autosave: false, // Set to true to enable automatic saving
  notificationDuration: 3000, // Duration of toast notifications in ms
});
```

### Using SurveyBuilder Methods

The SurveyBuilder component provides several methods:

```javascript
// Save the survey programmatically
const saveResult = builder.save();
if (saveResult) {
  console.log("Survey saved successfully");
}

// Get current survey data without saving
const currentData = builder.getData();

// Load survey data programmatically
builder.setData({
  surveyId: "uniqueId123",
  title: "Customer Feedback",
  description: "Please share your experience",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  question: {
    type: "singleChoice",
    text: "How would you rate our service?",
    settings: { required: true },
    options: ["Excellent", "Good", "Average", "Poor"],
  },
});

// Reset the builder to initial state
builder.reset();

// Clean up when done
builder.destroy();
```

## Initializing the SurveyReader Component

The SurveyReader component displays surveys and collects responses:

```javascript
// Initialize with survey data
let reader = new SurveyReader("#surveyReader", {
  isEnglish: true, // true for English UI, false for Arabic
  // Provide survey data directly
  surveyData: {
    surveyId: "uniqueId123",
    title: "Customer Feedback",
    description: "Please share your experience",
    question: {
      type: "singleChoice",
      text: "How would you rate our service?",
      settings: { required: true },
      options: ["Excellent", "Good", "Average", "Poor"],
    },
  },
  // Or load it asynchronously (used only if surveyData is not provided)
  loadSurvey: async () => {
    // Load survey data from storage or API
    return surveyData; // Return survey data or null
  },
  onSubmit: async (responses) => {
    console.log("Survey submitted:", responses);
    // Process submission data
    return responses;
  },
  completedTitle: "Thank You!",
  completedMessage: "Thank you for completing the survey!",
  submitButtonText: "Submit",
  requiredFieldMessage: "This question requires an answer",
  animation: true, // Enable/disable animations
});
```

### IMPORTANT: Updating Survey Data in SurveyReader

Unlike the builder component, the SurveyReader does not have a method to update survey data after initialization. To update the displayed survey, you must destroy the current instance and create a new one:

```javascript
// To update with new survey data:
reader.destroy(); // Clean up the current instance

// Create a new instance with updated data
reader = new SurveyReader("#surveyReader", {
  isEnglish: true,
  surveyData: newSurveyData,
  onSubmit: async (responses) => {
    console.log("Survey submitted:", responses);
    return responses;
  },
});
```

## Browser Requirements

Ensure that your target browsers support Shadow DOM:

- Chrome 53+
- Firefox 63+
- Safari 10.1+
- Edge 79+

## Verifying Installation

You can verify that the components are available and working:

```javascript
// Check if components are available
if (
  typeof SurveyBuilder === "undefined" ||
  typeof SurveyReader === "undefined"
) {
  console.error("Shadow DOM Survey components are not loaded properly");
} else {
  console.log("Shadow DOM Survey components are ready to use");
}
```

## Next Steps

Now that you have installed the Shadow DOM Survey components, proceed to the [Quick Start](quick-start.md) guide to see a complete working example.
