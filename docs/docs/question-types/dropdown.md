---
sidebar_position: 5
---

# Dropdown Questions

Dropdown questions provide a space-efficient way to present many options through a select menu. They are ideal for questions with many possible answers or when you want to save space in your survey layout.

## Features

- Compact select menu interface
- Customizable option labels
- Required or optional setting
- Custom placeholder text
- Support for long option lists

## Data Structure

When creating or using this question type with the Shadow DOM Survey components, the data structure is:

```javascript
{
  "surveyId": "uniqueId123",
  "title": "Global Demographics Survey",
  "description": "Help us understand our audience better",
  "createdAt": "2023-07-10T15:30:45.123Z",
  "updatedAt": "2023-07-10T16:45:12.456Z",
  "question": {
    "type": "dropdown",
    "text": "In which country do you currently reside?",
    "settings": {
      "required": true,
      "placeholder": "Select a country"
    },
    "options": [
      "United States",
      "United Kingdom",
      "Canada",
      "Australia",
      "Germany"
      // ... more countries
    ]
  }
}
```

## Builder Configuration

In the Survey Builder interface, you can configure dropdown questions with these options:

1. **Question Text**: The main question being asked (required)
2. **Required**: Toggle if an answer is mandatory
3. **Options**: Add, remove, and edit the available choices

The builder interface provides:

- Button to add new options
- Remove buttons for each existing option
- Drag handles to reorder options (where supported)

## Reader Display

In the Survey Reader, dropdown questions display as:

- Question text
- A dropdown select menu
- Validation message if required and not answered

## Response Format

The response data for dropdown questions is structured as follows:

```javascript
{
  "surveyId": "survey123",
  "submittedAt": "2023-07-15T14:32:45.123Z",
  "questionType": "dropdown",
  "questionText": "In which country do you currently reside?",
  "response": "Canada"
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

// Create a dropdown question programmatically
builder.setData({
  surveyId: "survey_" + Date.now().toString(36),
  title: "Education Survey",
  description: "Help us understand our audience better",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  question: {
    type: "dropdown",
    text: "What is your highest level of education?",
    settings: {
      required: true,
      placeholder: "Select your education level"
    },
    options: [
      "High school",
      "Some college",
      "Associate's degree",
      "Bachelor's degree",
      "Master's degree",
      "Doctoral degree",
      "Professional degree",
    ],
  },
});
```

### Setting Up the Reader

```javascript
// Create a new reader instance with the dropdown survey data
const reader = new SurveyReader("#surveyReader", {
  isEnglish: true,
  surveyData: {
    surveyId: "survey_" + Date.now().toString(36),
    title: "Education Survey",
    description: "Help us understand our audience better",
    question: {
      type: "dropdown",
      text: "What is your highest level of education?",
      settings: {
        required: true,
        placeholder: "Select your education level"
      },
      options: [
        "High school",
        "Some college",
        "Associate's degree",
        "Bachelor's degree",
        "Master's degree",
        "Doctoral degree",
        "Professional degree",
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
  surveyData: newDropdownSurveyData,
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
    What is your highest level of education?<span class="required">*</span>
  </div>
  <div class="select-wrapper">
    <select id="sr-response-select" required>
      <option value="" disabled selected>Select your education level</option>
      <option value="0">High school</option>
      <option value="1">Some college</option>
      <option value="2">Associate's degree</option>
      <option value="3">Bachelor's degree</option>
      <option value="4">Master's degree</option>
      <option value="5">Doctoral degree</option>
      <option value="6">Professional degree</option>
    </select>
  </div>
  <div id="sr-question-error" style="display: none;">
    This question requires an answer
  </div>
</div>
```

## Best Practices

1. **Use for long lists**: Dropdowns are ideal when you have many options (countries, states, etc.)
2. **Clear placeholder**: Set a descriptive placeholder to guide users
3. **Logical ordering**: Arrange options alphabetically or in another logical order
4. **Mobile-friendly**: The component ensures your dropdown works well on mobile devices
5. **Appropriate sizing**: The dropdown is styled to accommodate long option text
