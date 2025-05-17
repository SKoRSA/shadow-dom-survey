---
sidebar_position: 2
---

# Quick Start

This guide will help you create a functional survey system with the SurveyBuilder and SurveyReader components, following their actual implementations.

## Prerequisites

Before you start, make sure you have:

- Completed the [installation](installation.md) of the components
- Basic knowledge of HTML and JavaScript
- A modern browser that supports Shadow DOM

## Creating a Complete Survey System

### Step 1: Set up the HTML structure

Create a basic HTML file with containers for the builder and reader:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shadow DOM Survey Example</title>
    <style>
      body {
        font-family: system-ui, -apple-system, sans-serif;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }

      .container {
        margin-bottom: 40px;
        border: 1px solid #e0e0e0;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      }

      h2 {
        color: #333;
        margin-top: 30px;
      }

      button {
        background-color: #4a6cf7;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 10px;
      }

      button:hover {
        background-color: #3a5ce7;
      }

      pre {
        background: #f5f5f5;
        padding: 15px;
        border-radius: 4px;
        overflow: auto;
        max-height: 200px;
      }
    </style>
  </head>
  <body>
    <h1>Shadow DOM Survey Demo</h1>

    <h2>Survey Builder</h2>
    <div id="surveyBuilder" class="container"></div>

    <h2>Survey Reader</h2>
    <div id="surveyReader" class="container"></div>

    <button id="loadReaderBtn">Load Survey in Reader</button>
    <div>
      <h3>Current Survey Data:</h3>
      <pre id="dataOutput">No data yet</pre>
    </div>

    <!-- Include Shadow DOM Survey Components -->
    <script src="path/to/builder-embed.js"></script>
    <script src="path/to/reader-embed.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```

### Step 2: Create the JavaScript (app.js)

```javascript
// Initialize the survey builder
let builder = new SurveyBuilder("#surveyBuilder", {
  isEnglish: true,
  onSave: async (data) => {
    // Store survey data in localStorage
    localStorage.setItem("mySurvey", JSON.stringify(data));

    // Update the data display
    document.getElementById("dataOutput").textContent = JSON.stringify(
      data,
      null,
      2
    );

    console.log("Survey saved:", data);
    return data;
  },
});

// Initialize the survey reader with no data initially
let reader = new SurveyReader("#surveyReader", {
  isEnglish: true,
  onSubmit: async (responses) => {
    console.log("Survey submitted:", responses);

    // Store the responses
    const allResponses = JSON.parse(
      localStorage.getItem("surveyResponses") || "[]"
    );
    allResponses.push(responses);
    localStorage.setItem("surveyResponses", JSON.stringify(allResponses));

    return responses;
  },
  completedTitle: "Thanks for your feedback!",
  completedMessage: "Your response has been recorded.",
});

// Load Survey button - Important: We must destroy and recreate the reader
document.getElementById("loadReaderBtn").addEventListener("click", function () {
  const surveyData = localStorage.getItem("mySurvey");

  if (!surveyData) {
    alert("Please create and save a survey first!");
    return;
  }

  // Step 1: Always destroy the existing reader instance first
  reader.destroy();

  // Step 2: Create a new reader instance with the survey data
  reader = new SurveyReader("#surveyReader", {
    isEnglish: true,
    surveyData: JSON.parse(surveyData),
    onSubmit: async (responses) => {
      console.log("Survey submitted:", responses);

      // Store the responses
      const allResponses = JSON.parse(
        localStorage.getItem("surveyResponses") || "[]"
      );
      allResponses.push(responses);
      localStorage.setItem("surveyResponses", JSON.stringify(allResponses));

      return responses;
    },
    completedTitle: "Thanks for your feedback!",
    completedMessage: "Your response has been recorded.",
  });
});

// Listen for custom events
document
  .querySelector("#surveyBuilder")
  .addEventListener("survey-save", (event) => {
    console.log("Survey save event received:", event.detail);
  });

document
  .querySelector("#surveyReader")
  .addEventListener("survey-submit", (event) => {
    console.log("Survey submit event received:", event.detail);
  });
```

## How It Works

This setup creates a simple survey system where:

1. The builder lets you create a survey and save it to localStorage
2. The "Load Survey in Reader" button loads the saved survey into the reader
3. The reader displays the survey and collects responses
4. Responses are stored in localStorage

## Creating and Testing a Survey

### Using the Builder

1. **Create a survey in the builder:**

   - Add a title (e.g., "Customer Feedback")
   - Add a description (e.g., "Please share your thoughts about our service")
   - Select a question type (e.g., "Single Choice")
   - Enter a question (e.g., "How satisfied are you with our service?")
   - Add options for choice-type questions
   - Set the question as required if needed
   - Click "Save" to store the survey

2. **Loading into the reader:**
   - Click the "Load Survey in Reader" button
   - The survey will appear in the reader component
   - Fill in the survey and click "Submit"
   - See the confirmation message

## Advanced Usage Examples

### Example 1: Programmatically Creating a Survey

You can create a survey programmatically using the `setData` method of the builder:

```javascript
// Create a survey object
const surveyData = {
  title: "Product Feedback",
  description: "Please tell us about your experience with our product",
  question: {
    type: "multipleChoice",
    text: "Which features would you like to see improved?",
    settings: { required: true },
    options: [
      "User Interface",
      "Performance",
      "Documentation",
      "Mobile Support",
      "Cross-platform Compatibility",
    ],
  },
};

// Load the data into the builder
builder.setData(surveyData);

// Optionally save it programmatically
builder.save();
```

### Example 2: Integrating with a Backend API

Here's how to connect the components to a backend API:

```javascript
// Initialize the builder with API integration
const builder = new SurveyBuilder("#surveyBuilder", {
  isEnglish: true,
  onSave: async (data) => {
    try {
      const response = await fetch("/api/surveys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to save survey");
      }

      const savedData = await response.json();
      return savedData;
    } catch (error) {
      console.error("Error saving survey:", error);
      return null;
    }
  },
});

// Initialize the reader with API integration
let reader = new SurveyReader("#surveyReader", {
  isEnglish: true,
  // You can either provide surveyData directly
  // or use loadSurvey to fetch it:
  loadSurvey: async () => {
    try {
      const response = await fetch("/api/surveys/active");
      if (!response.ok) {
        throw new Error("Failed to load survey");
      }
      return await response.json();
    } catch (error) {
      console.error("Error loading survey:", error);
      return null;
    }
  },
  onSubmit: async (responses) => {
    try {
      const response = await fetch("/api/responses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(responses),
      });

      return response.ok;
    } catch (error) {
      console.error("Error submitting responses:", error);
      return false;
    }
  },
});
```

### Example 3: Supporting Multiple Languages

To support both English and Arabic interfaces:

```javascript
// Toggle button in your HTML
// <button id="languageToggle">Switch to Arabic</button>

document
  .getElementById("languageToggle")
  .addEventListener("click", function () {
    const isCurrentlyEnglish = this.textContent.includes("Arabic");
    this.textContent = isCurrentlyEnglish
      ? "Switch to English"
      : "Switch to Arabic";

    // Recreate builder with new language
    builder.destroy();
    builder = new SurveyBuilder("#surveyBuilder", {
      isEnglish: !isCurrentlyEnglish,
      onSave: async (data) => {
        localStorage.setItem("mySurvey", JSON.stringify(data));
        return data;
      },
    });

    // Recreate reader with new language
    reader.destroy();
    reader = new SurveyReader("#surveyReader", {
      isEnglish: !isCurrentlyEnglish,
      loadSurvey: async () => {
        const data = localStorage.getItem("mySurvey");
        return data ? JSON.parse(data) : null;
      },
      onSubmit: async (responses) => {
        console.log("Survey submitted:", responses);
        return responses;
      },
    });
  });
```

## Important Implementation Notes

1. **SurveyReader Updates**: The SurveyReader component has no method to update survey data after initialization. You must destroy the existing instance and create a new one to change the survey.

2. **SurveyBuilder Methods**: The builder provides `getData()`, `setData()`, `save()`, `reset()`, and `destroy()` methods for managing surveys.

3. **Event Handling**: Both components dispatch custom events (`survey-save` and `survey-submit`) that you can listen for.

## What's Next?

Now that you've created your first survey, you can:

- Explore the [API Reference](../api/overview.md) for complete details on all options and methods
- Learn about different [Question Types](../question-types/single-line-text.md) and their capabilities
- Integrate the components with your existing application

## Troubleshooting

If you encounter any issues:

- Check the browser console for error messages
- Verify that your component containers exist in the DOM
- Make sure you're using the correct methods according to each component's actual implementation
- Remember that SurveyReader instances must be destroyed and recreated to update survey data
