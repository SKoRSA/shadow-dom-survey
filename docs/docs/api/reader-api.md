---
sidebar_position: 3
---

# SurveyReader API

The `SurveyReader` component renders surveys and collects responses from users. This component is built using Shadow DOM for complete encapsulation from the rest of your application.

## Constructor

```javascript
const readerInstance = new SurveyReader(selector, options);
```

### Parameters

| Parameter  | Type                  | Description                                     |
| ---------- | --------------------- | ----------------------------------------------- |
| `selector` | String or HTMLElement | Target element where the reader will be mounted |
| `options`  | Object                | Configuration options (see Options below)       |

## Options

| Option                 | Type     | Default                                | Description                                      |
| ---------------------- | -------- | -------------------------------------- | ------------------------------------------------ |
| `isEnglish`            | Boolean  | `true`                                 | Set to `true` for English UI, `false` for Arabic |
| `surveyData`           | Object   | `null`                                 | Survey data object to display immediately        |
| `loadSurvey`           | Function | `async () => null`                     | Function to load survey data asynchronously      |
| `onSubmit`             | Function | `async (responses) => responses`       | Callback executed when user submits the survey   |
| `completedTitle`       | String   | "Thank you!"                           | Title shown on the completion screen             |
| `completedMessage`     | String   | "Thank you for completing the survey!" | Message displayed after successful submission    |
| `submitButtonText`     | String   | "Submit"                               | Label for the submit button                      |
| `requiredFieldMessage` | String   | "This question requires an answer"     | Error message for unanswered required questions  |
| `animation`            | Boolean  | `true`                                 | Enable/disable fade/slide animations             |

## Methods

### destroy()

Removes the component, cleans up event listeners, and clears the Shadow DOM.

```javascript
readerInstance.destroy();
```

> **Important Note**: Unlike what was previously documented, the SurveyReader component does **not** have a `loadSurveyData()` method. To update survey data after initialization, you must destroy the current instance and create a new one with the new data:
>
> ```javascript
> // To update survey data:
> readerInstance.destroy();
> readerInstance = new SurveyReader("#surveyReader", {
>   // ... other options ...
>   surveyData: newSurveyData,
> });
> ```

## Events

The component dispatches a custom event when important actions occur:

| Event name      | When it fires               | `event.detail` contents                   |
| --------------- | --------------------------- | ----------------------------------------- |
| `survey-submit` | After successful submission | The response payload passed to `onSubmit` |

### Example: Listening for events

```javascript
document
  .querySelector("#surveyReader")
  .addEventListener("survey-submit", (event) => {
    console.log("Survey submitted!", event.detail);
    // Process or store submission data
  });
```

## Response Data Structure

When a survey is submitted, the responses are structured as follows:

```javascript
{
  "surveyId": "survey123",
  "submittedAt": "2023-07-15T14:32:45.123Z",
  "questionType": "singleChoice",
  "questionText": "How would you rate our service?",
  "response": "Excellent"
}
```

The response format varies slightly depending on the question type:

- **singleText/longText**: Response is a string
- **singleChoice/dropdown**: Response is the selected option text
- **multipleChoice**: Response is an array of selected option texts
- **rating**: Response is a number
- **matrix**: Response is an object mapping rows to selected column values

## Complete Usage Example

```javascript
// Initialize the reader
const reader = new SurveyReader("#surveyReader", {
  isEnglish: true,
  surveyData: {
    surveyId: "demo123",
    title: "Customer Feedback",
    description: "Please share your thoughts about our product",
    question: {
      type: "singleChoice",
      text: "How satisfied are you with our service?",
      settings: { required: true },
      options: [
        "Very Satisfied",
        "Satisfied",
        "Neutral",
        "Dissatisfied",
        "Very Dissatisfied",
      ],
    },
  },
  loadSurvey: async () => {
    // This will only be used if surveyData is not provided
    const savedData = localStorage.getItem("mySurvey");
    return savedData ? JSON.parse(savedData) : null;
  },
  onSubmit: async (responses) => {
    // Handle submission
    console.log("Survey submitted:", responses);

    // Store responses in localStorage
    const allResponses = JSON.parse(
      localStorage.getItem("surveyResponses") || "[]"
    );
    allResponses.push(responses);
    localStorage.setItem("surveyResponses", JSON.stringify(allResponses));

    return responses;
  },
  completedTitle: "Thanks for your feedback!",
  completedMessage: "Your responses have been recorded.",
});

// To update the survey with new data, you must destroy and recreate:
/*
reader.destroy();
reader = new SurveyReader("#surveyReader", {
  isEnglish: true,
  surveyData: updatedSurveyData,
  onSubmit: async (responses) => {
    // Handle submission...
    return responses;
  }
});
*/

// Clean up when done
// reader.destroy();
```
