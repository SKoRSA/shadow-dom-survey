---
sidebar_position: 2
---

# SurveyBuilder API

The `SurveyBuilder` component provides a user interface for creating and editing surveys with various question types. This component is built using Shadow DOM for complete encapsulation from the rest of your application.

## Constructor

```javascript
const builderInstance = new SurveyBuilder(selector, options);
```

### Parameters

| Parameter  | Type                  | Description                                      |
| ---------- | --------------------- | ------------------------------------------------ |
| `selector` | String or HTMLElement | Target element where the builder will be mounted |
| `options`  | Object                | Configuration options (see Options below)        |

## Options

| Option                 | Type     | Default                | Description                                              |
| ---------------------- | -------- | ---------------------- | -------------------------------------------------------- |
| `isEnglish`            | Boolean  | `false`                | `true` for English UI, `false` for Arabic                |
| `onSave`               | Function | `async (data) => data` | Callback executed after the **Save** button is pressed   |
| `loadSurvey`           | Function | `async () => null`     | Function that should return previously-saved survey JSON |
| `autosave`             | Boolean  | `false`                | Enable/disable automatic saving on form changes          |
| `notificationDuration` | Number   | `3000`                 | Milliseconds to keep toast notifications on-screen       |

## Methods

### save()

Saves the current survey data, triggers the `onSave` callback, and returns a boolean indicating success.

```javascript
const result = await builderInstance.save();
if (result) {
  console.log("Survey saved successfully");
}
```

**Returns**: Promise&lt;boolean&gt; - `true` if save was successful, `false` otherwise

### reset()

Resets the builder to its initial state with a blank survey.

```javascript
builderInstance.reset();
```

### getData()

Returns a deep-cloned copy of the current survey data object without saving.

```javascript
const currentData = builderInstance.getData();
```

**Returns**: Object - The current survey data

### setData(data)

Loads existing survey data into the builder and refreshes the UI.

```javascript
builderInstance.setData(surveyData);
```

| Parameter | Type   | Description                                 |
| --------- | ------ | ------------------------------------------- |
| `data`    | Object | Survey data object to load into the builder |

### destroy()

Removes the component, cleans up event listeners, and clears the Shadow DOM.

```javascript
builderInstance.destroy();
```

## Survey Data Structure

The survey data structure used by the builder has the following format:

```javascript
{
  "surveyId": "unique-id-string",
  "title": "My Survey Title",
  "description": "Optional survey description",
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

## Events

The component dispatches a custom event when important actions occur:

| Event name    | When it fires           | `event.detail` contents |
| ------------- | ----------------------- | ----------------------- |
| `survey-save` | After successful save() | The saved survey JSON   |

### Example: Listening for events

```javascript
document
  .querySelector("#surveyBuilder")
  .addEventListener("survey-save", (event) => {
    console.log("Survey saved!", event.detail);
    // You could save to database here
  });
```

## Complete Usage Example

```javascript
// Initialize the builder
const builder = new SurveyBuilder("#surveyBuilder", {
  isEnglish: true,
  onSave: async (data) => {
    // Save survey data to localStorage
    localStorage.setItem("mySurvey", JSON.stringify(data));
    console.log("Survey saved:", data);
    return data;
  },
  loadSurvey: async () => {
    // Load existing survey if available
    const saved = localStorage.getItem("mySurvey");
    return saved ? JSON.parse(saved) : null;
  },
});

// Get current survey data
const currentData = builder.getData();

// Make some programmatic changes
// (For demonstration purposes - usually you'd let users edit in the UI)
currentData.title = "Updated Survey";
builder.setData(currentData);

// Save the survey
const saveSuccessful = await builder.save();

// Clean up when done
// builder.destroy();
```
