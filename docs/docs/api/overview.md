---
sidebar_position: 1
---

# API Overview

Shadow DOM Survey provides two main components, each with its own API:

1. **SurveyBuilder** - For creating and editing surveys
2. **SurveyReader** - For displaying surveys and collecting responses

This page provides a high-level overview of these APIs. For detailed information, see the respective API pages.

## SurveyBuilder

The SurveyBuilder component allows you to create and edit surveys with various question types.

### Constructor

```javascript
const builder = new SurveyBuilder(selector, options);
```

- `selector`: CSS selector or DOM element where the builder will be mounted
- `options`: Configuration options object

### Key Options

| Option                 | Type     | Description                            |
| ---------------------- | -------- | -------------------------------------- |
| `isEnglish`            | Boolean  | `true` for English, `false` for Arabic |
| `onSave`               | Function | Callback function when survey is saved |
| `loadSurvey`           | Function | Function to load existing survey data  |
| `autosave`             | Boolean  | Enable/disable automatic saving        |
| `notificationDuration` | Number   | Duration of notifications in ms        |

### Methods

| Method      | Description                                       |
| ----------- | ------------------------------------------------- |
| `getData()` | Get the current survey data                       |
| `setData()` | Load survey data programmatically                 |
| `save()`    | Save the current survey data                      |
| `reset()`   | Reset the builder to its initial state            |
| `destroy()` | Clean up the component and remove event listeners |

For more details, see the [Builder API](builder-api.md) documentation.

## SurveyReader

The SurveyReader component displays surveys and collects responses.

### Constructor

```javascript
const reader = new SurveyReader(selector, options);
```

- `selector`: CSS selector or DOM element where the reader will be mounted
- `options`: Configuration options object

### Key Options

| Option                 | Type     | Description                            |
| ---------------------- | -------- | -------------------------------------- |
| `isEnglish`            | Boolean  | `true` for English, `false` for Arabic |
| `surveyData`           | Object   | Survey data object                     |
| `loadSurvey`           | Function | Function to load survey data           |
| `onSubmit`             | Function | Callback when survey is submitted      |
| `completedTitle`       | String   | Title shown after completion           |
| `completedMessage`     | String   | Message shown after completion         |
| `submitButtonText`     | String   | Text for the submit button             |
| `requiredFieldMessage` | String   | Message for required fields            |
| `animation`            | Boolean  | Enable/disable animations              |

### Methods

| Method      | Description                                       |
| ----------- | ------------------------------------------------- |
| `destroy()` | Clean up the component and remove event listeners |

**Note:** To update survey data after initialization, you must destroy the current reader instance and create a new one with the new data.

For more details, see the [Reader API](reader-api.md) documentation.

## Data Structure

Both components share a common data structure format for surveys:

```javascript
{
  "surveyId": "unique-id-string",
  "title": "Customer Satisfaction Survey",
  "description": "Please help us improve our service by taking this short survey",
  "createdAt": "2023-07-10T15:30:45.123Z",
  "updatedAt": "2023-07-10T16:45:12.456Z",
  "question": {
    "type": "singleChoice", // One of: singleText, longText, singleChoice, multipleChoice, dropdown, rating, matrix
    "text": "What is your favorite color?",
    "settings": {
      "required": true,
      "placeholder": "Enter text here" // Used for text inputs
    },
    "options": ["Red", "Blue", "Green", "Yellow"], // For choice-type questions
    "rows": ["Quality", "Price", "Support"], // For matrix questions
    "columns": ["Poor", "Average", "Good", "Excellent"] // For matrix questions
  }
}
```
