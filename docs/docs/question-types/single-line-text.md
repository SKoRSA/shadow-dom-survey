---
sidebar_position: 1
---

# Single Line Text Questions

Single line text questions provide a simple text input field for collecting short text responses from users. These are ideal for collecting simple information like names, email addresses, or short answers.

## Features

- Simple text input field
- Optional placeholder text
- Required or optional setting
- Clean, modern styling with input effects

## Data Structure

When creating or using this question type with the Shadow DOM Survey components, the data structure is:

```javascript
{
  "surveyId": "uniqueId123",
  "title": "Customer Feedback Survey",
  "description": "Help us improve our service",
  "createdAt": "2023-07-10T15:30:45.123Z",
  "updatedAt": "2023-07-10T16:45:12.456Z",
  "question": {
    "type": "singleText",
    "text": "What is your name?",
    "settings": {
      "required": true,
      "placeholder": "John Doe"
    }
  }
}
```

## Builder Configuration

In the Survey Builder interface, you can configure single line text questions with these settings:

1. **Question Text**: The main question being asked (required)
2. **Placeholder Text**: Example or hint text shown when the field is empty (optional)
3. **Required**: Toggle whether an answer is mandatory

## Reader Display

In the Survey Reader, single line text questions display as:

- Question text
- A single-line text input field with placeholder (if specified)
- Validation message if required and not answered

## Response Format

The response data for single line text questions is structured as follows:

```javascript
{
  "surveyId": "survey123",
  "submittedAt": "2023-07-15T14:32:45.123Z",
  "questionType": "singleText",
  "questionText": "What is your name?",
  "response": "John Smith"
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

// Create a single line text question programmatically
builder.setData({
  surveyId: "survey_" + Date.now().toString(36),
  title: "User Information",
  description: "Please provide your details",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  question: {
    type: "singleText",
    text: "What is your email address?",
    settings: {
      required: true,
      placeholder: "example@domain.com",
    },
  },
});
```

### Setting Up the Reader

```javascript
// Create a new reader instance with the survey data
const reader = new SurveyReader("#surveyReader", {
  isEnglish: true,
  surveyData: {
    surveyId: "survey_" + Date.now().toString(36),
    title: "User Information",
    description: "Please provide your details",
    question: {
      type: "singleText",
      text: "What is your email address?",
      settings: {
        required: true,
        placeholder: "example@domain.com",
      },
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
  surveyData: newSurveyData,
  onSubmit: async (responses) => {
    console.log("Survey submitted:", responses);
    return responses;
  },
});
```

### HTML Structure (Inside Shadow DOM)

```html
<div class="question">
  <div class="question-text">
    What is your email address?<span class="required">*</span>
  </div>
  <input
    type="text"
    id="sr-response-input"
    placeholder="example@domain.com"
    required
  />
  <div id="sr-question-error" style="display: none;">
    This question requires an answer
  </div>
</div>
```

## Best Practices

1. **Be specific**: Clearly indicate what information you're asking for
2. **Keep it short**: For longer responses, use the Multi-line Text question type instead
3. **Provide helpful placeholders**: Use placeholder text to show the expected format (e.g., "example@domain.com" for email)
4. **Consider validation needs**: If you need specific validation (like email format), inform users in the question text
5. **Use descriptive question text**: Make sure users understand exactly what information is being requested
