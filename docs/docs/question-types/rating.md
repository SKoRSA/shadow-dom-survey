---
sidebar_position: 6
---

# Rating Questions

Rating questions allow respondents to select a value on a numeric scale, making them ideal for measuring satisfaction, agreement, or other graduated responses.

## Features

- Numerical rating scale (1-N)
- Configurable maximum value
- Interactive visual feedback
- Required or optional setting
- Clean, intuitive interface

## Data Structure

When creating or using this question type with the Shadow DOM Survey components, the data structure is:

```javascript
{
  "surveyId": "uniqueId123",
  "title": "Customer Satisfaction Survey",
  "description": "Please rate our services",
  "createdAt": "2023-07-10T15:30:45.123Z",
  "updatedAt": "2023-07-10T16:45:12.456Z",
  "question": {
    "type": "rating",
    "text": "How would you rate our customer service?",
    "settings": {
      "required": true,
      "maxValue": 5 // Number of points on the scale, defaults to 5
    }
  }
}
```

## Builder Configuration

In the Survey Builder interface, you can configure rating questions with these options:

1. **Question Text**: The main question being asked (required)
2. **Required**: Toggle if an answer is mandatory
3. **Maximum Value**: Number of points on the rating scale (typically 5 or 10)

## Reader Display

In the Survey Reader, rating questions display as:

- Question text
- A row of selectable rating values (typically numbers)
- Visual highlighting for the selected value
- Validation message if required and not answered

## Response Format

The response data for rating questions is structured as follows:

```javascript
{
  "surveyId": "survey123",
  "submittedAt": "2023-07-15T14:32:45.123Z",
  "questionType": "rating",
  "questionText": "How would you rate our customer service?",
  "response": 4
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

// Create a rating question programmatically
builder.setData({
  surveyId: "survey_" + Date.now().toString(36),
  title: "Product Feedback",
  description: "Help us improve our product",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  question: {
    type: "rating",
    text: "How likely are you to recommend our product to others?",
    settings: {
      required: true,
      maxValue: 10, // 10-point scale
    },
  },
});
```

### Setting Up the Reader

```javascript
// Create a new reader instance with the rating survey data
const reader = new SurveyReader("#surveyReader", {
  isEnglish: true,
  surveyData: {
    surveyId: "survey_" + Date.now().toString(36),
    title: "Product Feedback",
    description: "Help us improve our product",
    question: {
      type: "rating",
      text: "How likely are you to recommend our product to others?",
      settings: {
        required: true,
        maxValue: 10, // 10-point scale
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
  surveyData: newRatingSurveyData,
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
    How likely are you to recommend our product to others?<span class="required"
      >*</span
    >
  </div>
  <div class="rating-container">
    <div class="rating-option">
      <input
        type="radio"
        id="sr-rating-1"
        name="sr-response-rating"
        value="1"
        required
      />
      <label for="sr-rating-1">1</label>
    </div>
    <div class="rating-option">
      <input
        type="radio"
        id="sr-rating-2"
        name="sr-response-rating"
        value="2"
      />
      <label for="sr-rating-2">2</label>
    </div>
    <!-- Additional rating options... -->
    <div class="rating-option">
      <input
        type="radio"
        id="sr-rating-10"
        name="sr-response-rating"
        value="10"
      />
      <label for="sr-rating-10">10</label>
    </div>
  </div>
  <div id="sr-question-error" style="display: none;">
    This question requires an answer
  </div>
</div>
```

## Best Practices

1. **Explain the scale**: Clarify what each end of the scale represents (e.g., "1 = Poor, 10 = Excellent")
2. **Consistent scales**: Try to use the same scale (e.g., 1-5 or 1-10) throughout your survey
3. **Consider the granularity**: 5-point scales work well for general feedback, while 10-point scales offer more precision
4. **Balance the scale**: Ensure an equal number of positive and negative options with a neutral midpoint
