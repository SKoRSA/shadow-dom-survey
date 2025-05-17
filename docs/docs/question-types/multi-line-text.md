---
sidebar_position: 2
---

# Multi-line Text Questions

Multi-line text questions provide a textarea input field for collecting longer text responses from users. These are ideal for gathering detailed information, comments, feedback, or any response that may require multiple sentences or paragraphs.

## Features

- Expandable textarea for longer responses
- Optional placeholder text
- Required or optional setting
- Automatic resizing based on content (where supported)
- Support for multi-paragraph responses

## Data Structure

When creating or using this question type with the Shadow DOM Survey components, the data structure is:

```javascript
{
  "surveyId": "uniqueId123",
  "title": "Feedback Form",
  "description": "We value your input",
  "createdAt": "2023-07-10T15:30:45.123Z",
  "updatedAt": "2023-07-10T16:45:12.456Z",
  "question": {
    "type": "longText",
    "text": "Please describe your experience with our product.",
    "settings": {
      "required": true,
      "placeholder": "Share your thoughts here..."
    }
  }
}
```

## Builder Configuration

In the Survey Builder interface, you can configure multi-line text questions with these settings:

1. **Question Text**: The main question being asked (required)
2. **Placeholder Text**: Example or hint text shown when the field is empty (optional)
3. **Required**: Toggle whether an answer is mandatory

## Reader Display

In the Survey Reader, multi-line text questions display as:

- Question text
- A resizable textarea for entering longer responses
- Validation message if required and not answered

## Response Format

The response data for multi-line text questions is structured as follows:

```javascript
{
  "surveyId": "survey123",
  "submittedAt": "2023-07-15T14:32:45.123Z",
  "questionType": "longText",
  "questionText": "Please describe your experience with our product.",
  "response": "I found the product very intuitive to use.\n\nThe interface is clean and modern, and I especially appreciated the helpful tooltips."
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

// Create a multi-line text question programmatically
builder.setData({
  surveyId: "survey_" + Date.now().toString(36),
  title: "Feedback Form",
  description: "We value your input",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  question: {
    type: "longText",
    text: "Please describe your experience with our product.",
    settings: {
      required: true,
      placeholder: "Share your thoughts here...",
    },
  },
});
```

### Setting Up the Reader

```javascript
// Create a new reader instance with the multi-line text survey data
const reader = new SurveyReader("#surveyReader", {
  isEnglish: true,
  surveyData: {
    surveyId: "survey_" + Date.now().toString(36),
    title: "Feedback Form",
    description: "We value your input",
    question: {
      type: "longText",
      text: "Please describe your experience with our product.",
      settings: {
        required: true,
        placeholder: "Share your thoughts here...",
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
  surveyData: newLongTextSurveyData,
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
    Please describe your experience with our product.<span class="required"
      >*</span
    >
  </div>
  <textarea
    id="sr-response-textarea"
    placeholder="Share your thoughts here..."
    required
  ></textarea>
  <div id="sr-question-error" style="display: none;">
    This question requires an answer
  </div>
</div>
```

## Best Practices

1. **Be clear about detail level**: Indicate whether you want a brief or detailed response
2. **Consider space needs**: Ensure the textarea is sized appropriately for the expected response length
3. **Set expectations**: If you need a minimum amount of feedback, indicate this in the question or description
4. **Use appropriately**: Reserve multi-line questions for when detailed responses are truly necessary, as they require more effort from respondents
5. **Limit usage**: Avoid overusing multi-line questions in a single survey to reduce respondent fatigue
