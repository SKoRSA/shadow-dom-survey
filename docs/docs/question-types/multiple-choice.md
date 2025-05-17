---
sidebar_position: 4
---

# Multiple Choice Questions

Multiple choice questions allow respondents to select one or more options from a predefined list. This question type is ideal for scenarios where multiple selections are valid, such as "Select all that apply" questions.

## Features

- Checkbox-based selection for multiple answers
- Visual feedback when options are selected
- Required validation (checks if at least one option is selected)
- Interactive option styling
- Support for any number of options

## Data Structure

When creating or using this question type with the Shadow DOM Survey components, the data structure is:

```javascript
{
  "surveyId": "uniqueId123",
  "title": "Product Feature Survey",
  "description": "Help us prioritize our development roadmap",
  "createdAt": "2023-07-10T15:30:45.123Z",
  "updatedAt": "2023-07-10T16:45:12.456Z",
  "question": {
    "type": "multipleChoice",
    "text": "Which features would you like to see in our next release?",
    "settings": {
      "required": true
    },
    "options": [
      "Improved user interface",
      "Faster performance",
      "Mobile app support",
      "More customization options",
      "Integration with other tools",
      "Better documentation"
    ]
  }
}
```

## Builder Configuration

In the Survey Builder interface, you can configure multiple choice questions with these settings:

1. **Question Text**: The main question prompt (required)
2. **Required**: Toggle whether at least one option must be selected
3. **Options**: Add, remove, and edit the available choices

The builder interface provides:

- Button to add new options
- Remove buttons for each existing option
- Drag handles to reorder options (where supported)

## Reader Display

In the Survey Reader, multiple choice questions display as:

- Question text at the top
- List of options with checkboxes
- Visual feedback when options are selected/deselected
- Validation message if required and no option is selected

## Response Format

The response data for multiple choice questions is structured as follows:

```javascript
{
  "surveyId": "survey123",
  "submittedAt": "2023-07-15T14:32:45.123Z",
  "questionType": "multipleChoice",
  "questionText": "Which features would you like to see in our next release?",
  "response": [
    "Improved user interface",
    "Mobile app support",
    "Integration with other tools"
  ]
}
```

## Implementation Example

### Setting Up in the Builder

```javascript
// Create a new builder instance
const builder = new SurveyBuilder("#surveyBuilder", {
  isEnglish: true,
  onSave: async (data) => {
    console.log("Survey saved:", data);
    return data;
  },
});

// Create a multiple choice question programmatically
builder.setData({
  surveyId: "survey_" + Date.now().toString(36),
  title: "User Preferences Survey",
  description: "Help us understand how you use our product",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  question: {
    type: "multipleChoice",
    text: "Which of the following devices do you use to access our service? (Select all that apply)",
    settings: {
      required: true,
    },
    options: [
      "Desktop/laptop computer",
      "Smartphone",
      "Tablet",
      "Smart TV",
      "Gaming console",
      "Other",
    ],
  },
});
```

### Setting Up the Reader

```javascript
// Create a new reader instance with the multiple choice survey data
const reader = new SurveyReader("#surveyReader", {
  isEnglish: true,
  surveyData: {
    surveyId: "survey_" + Date.now().toString(36),
    title: "User Preferences Survey",
    description: "Help us understand how you use our product",
    question: {
      type: "multipleChoice",
      text: "Which of the following devices do you use to access our service? (Select all that apply)",
      settings: {
        required: true,
      },
      options: [
        "Desktop/laptop computer",
        "Smartphone",
        "Tablet",
        "Smart TV",
        "Gaming console",
        "Other",
      ],
    },
  },
  onSubmit: async (responses) => {
    console.log("Survey submitted:", responses);
    return responses;
  },
});

// To update the reader with different data, you must destroy and recreate it
reader.destroy();
const updatedReader = new SurveyReader("#surveyReader", {
  isEnglish: true,
  surveyData: newMultipleChoiceSurveyData,
  onSubmit: async (responses) => {
    console.log("Updated survey submitted:", responses);
    return responses;
  },
});
```

### HTML Structure (Inside Shadow DOM)

```html
<div class="question">
  <div class="question-text">
    Which of the following devices do you use to access our service? (Select all
    that apply)<span class="required">*</span>
  </div>
  <div class="options">
    <label class="option">
      <input type="checkbox" name="sr-response-checkbox" value="0" />
      Desktop/laptop computer
    </label>
    <label class="option">
      <input type="checkbox" name="sr-response-checkbox" value="1" />
      Smartphone
    </label>
    <!-- Additional options... -->
  </div>
  <div id="sr-question-error" style="display: none;">
    This question requires at least one selection
  </div>
</div>
```

## Best Practices

1. **Clear instructions**: Explicitly state that multiple selections are allowed (e.g., "Select all that apply")
2. **Manageable options**: Keep the list of options reasonable (typically 3-7 options)
3. **Logical ordering**: Order options logically (alphabetical, popularity, or another meaningful sequence)
4. **Mutually exclusive options**: Ensure options don't overlap conceptually
5. **Include "Other" when appropriate**: Consider adding an "Other" option if your list might not be exhaustive
6. **Visual feedback**: The component provides visual highlighting for selected options
7. **Mobile-friendly**: The component design ensures options are easy to select on touch devices
