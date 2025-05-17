---
sidebar_position: 3
---

# Single Choice Questions

Single choice questions (also known as radio button questions) allow respondents to select exactly one option from a list of choices.

## Features

- Present multiple options with only one selectable
- Customizable option labels
- Required or optional setting
- Vertical layout as standard
- Clear visual feedback for selected options

## Data Structure

When creating or using this question type with the Shadow DOM Survey components, the data structure is:

```javascript
{
  "title": "Product Preferences Survey",
  "description": "Help us understand your preferences",
  "question": {
    "type": "singleChoice",
    "text": "What is your favorite color?",
    "settings": {
      "required": true
    },
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ]
  }
}
```

## Builder Configuration

In the Survey Builder interface, you can configure single choice questions with these options:

1. **Question Text**: The main question being asked (required)
2. **Required**: Toggle if an answer is mandatory
3. **Options**: Add, remove, and edit the available choices

The builder interface provides:

- Button to add new options
- Remove buttons for each existing option
- Drag handles to reorder options (where supported)

## Reader Display

In the Survey Reader, single choice questions display as:

- Question text at the top
- List of options with radio buttons
- Visual feedback when an option is selected
- Validation message if required and not answered

## Response Format

The response data for single choice questions is structured as follows:

```javascript
{
  "surveyId": "survey123",
  "submittedAt": "2023-07-15T14:32:45.123Z",
  "questionType": "singleChoice",
  "questionText": "What is your favorite color?",
  "answer": "Blue"
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

// Create a single choice question programmatically
builder.setData({
  title: "Customer Survey",
  description: "Help us improve our service",
  question: {
    type: "singleChoice",
    text: "How did you hear about us?",
    settings: {
      required: true,
    },
    options: [
      "Social Media",
      "Search Engine",
      "Friend or Colleague",
      "Advertisement",
    ],
  },
});
```

### Setting Up the Reader

```javascript
// Create a new reader instance with the single choice survey data
const reader = new SurveyReader("#surveyReader", {
  isEnglish: true,
  surveyData: {
    title: "Customer Survey",
    description: "Help us improve our service",
    question: {
      type: "singleChoice",
      text: "How did you hear about us?",
      settings: {
        required: true,
      },
      options: [
        "Social Media",
        "Search Engine",
        "Friend or Colleague",
        "Advertisement",
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
  surveyData: newSingleChoiceSurveyData,
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
    How did you hear about us?<span class="required">*</span>
  </div>
  <div class="options">
    <label class="option">
      <input type="radio" name="sr-response-radio" value="0" required />
      Social Media
    </label>
    <label class="option">
      <input type="radio" name="sr-response-radio" value="1" />
      Search Engine
    </label>
    <label class="option">
      <input type="radio" name="sr-response-radio" value="2" />
      Friend or Colleague
    </label>
    <label class="option">
      <input type="radio" name="sr-response-radio" value="3" />
      Advertisement
    </label>
  </div>
  <div id="sr-question-error" style="display: none;">
    This question requires an answer
  </div>
</div>
```

## Best Practices

1. **Keep option text concise**: Avoid long option texts for better readability
2. **Limit the number of options**: Try to keep under 7 options when possible
3. **Use clear categories**: Ensure options are distinct and don't overlap
4. **Logical ordering**: Arrange options in a logical order
5. **Balanced options**: Avoid biasing respondents with unbalanced options

## Accessibility

Single choice questions in Shadow DOM Survey are built with accessibility in mind:

- Proper labeling and ARIA attributes
- Keyboard navigation support
- Focus indicators
- Screen reader compatibility

## Related Question Types

- [Multiple Choice](multiple-choice.md) - For selecting multiple options
- [Dropdown](dropdown.md) - For selecting one option from a dropdown menu
