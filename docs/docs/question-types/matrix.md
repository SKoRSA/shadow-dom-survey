---
sidebar_position: 7
---

# Matrix Questions

Matrix questions allow you to ask multiple related questions with the same set of answer options, organized in a grid format. This question type is efficient for collecting ratings or opinions across multiple dimensions or criteria.

## Features

- Grid layout with rows (questions) and columns (answer options)
- Consistent answer options across multiple questions
- Required or optional setting
- Row-by-row validation
- Individual row error messages
- Mobile-responsive design

## Data Structure

When creating or using this question type with the Shadow DOM Survey components, the data structure is:

```javascript
{
  "surveyId": "uniqueId123",
  "title": "Customer Satisfaction Survey",
  "description": "Help us improve our services",
  "createdAt": "2023-07-10T15:30:45.123Z",
  "updatedAt": "2023-07-10T16:45:12.456Z",
  "question": {
    "type": "matrix",
    "text": "Please rate your satisfaction with the following aspects of our service:",
    "settings": {
      "required": true
    },
    "rows": [
      "Customer support",
      "Product quality",
      "Delivery speed",
      "Value for money",
      "Website usability"
    ],
    "columns": [
      "Very Dissatisfied",
      "Dissatisfied",
      "Neutral",
      "Satisfied",
      "Very Satisfied"
    ]
  }
}
```

## Builder Configuration

In the Survey Builder interface, you can configure matrix questions with these options:

1. **Question Text**: The main prompt for all rows (required)
2. **Required**: Toggle if answers are mandatory for all rows
3. **Rows**: Add multiple sub-questions or dimensions to evaluate
4. **Columns**: Add multiple answer options that apply to all rows

The builder interface allows you to:

- Add/remove rows and columns
- Reorder items as needed
- Set the entire question as required or optional

## Reader Display

In the Survey Reader, matrix questions display as:

- Question text at the top
- Grid of rows (sub-questions) and columns (answer options)
- Radio buttons at each row-column intersection
- Row-specific validation messages when required and not answered
- Visual feedback when options are selected

## Response Format

The response data for matrix questions is structured as follows:

```javascript
{
  "surveyId": "survey123",
  "submittedAt": "2023-07-15T14:32:45.123Z",
  "questionType": "matrix",
  "questionText": "Please rate your satisfaction with the following aspects of our service:",
  "response": {
    "matrix": {
      "Customer support": "Satisfied",
      "Product quality": "Very Satisfied",
      "Delivery speed": "Neutral",
      "Value for money": "Satisfied",
      "Website usability": "Dissatisfied"
    }
  }
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

// Create a matrix question programmatically
builder.setData({
  surveyId: "survey_" + Date.now().toString(36),
  title: "Product Evaluation",
  description: "Please evaluate our product based on the following criteria",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  question: {
    type: "matrix",
    text: "Please indicate your level of agreement with the following statements:",
    settings: {
      required: true,
    },
    rows: [
      "The product is easy to use",
      "The product meets my needs",
      "The product is worth the price",
      "I would recommend this product to others",
      "The customer service was helpful",
    ],
    columns: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
});
```

### Setting Up the Reader

```javascript
// Create a new reader instance with the matrix survey data
const reader = new SurveyReader("#surveyReader", {
  isEnglish: true,
  surveyData: {
    surveyId: "survey_" + Date.now().toString(36),
    title: "Product Evaluation",
    description: "Please evaluate our product based on the following criteria",
    question: {
      type: "matrix",
      text: "Please indicate your level of agreement with the following statements:",
      settings: {
        required: true,
      },
      rows: [
        "The product is easy to use",
        "The product meets my needs",
        "The product is worth the price",
        "I would recommend this product to others",
        "The customer service was helpful",
      ],
      columns: [
        "Strongly Disagree",
        "Disagree",
        "Neutral",
        "Agree",
        "Strongly Agree",
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
  surveyData: newMatrixSurveyData,
  onSubmit: async (responses) => {
    console.log("Updated survey submitted:", responses);
    return responses;
  },
});
```

### HTML Structure (Inside Shadow DOM)

The matrix question renders as a series of row containers, each with its own set of radio options:

```html
<div class="question">
  <div class="question-text">
    Please indicate your level of agreement with the following statements:<span
      class="required"
      >*</span
    >
  </div>
  <div class="matrix-container">
    <!-- Row 1 -->
    <div class="matrix-row" data-row-id="0">
      <div class="matrix-label">The product is easy to use</div>
      <div class="options">
        <label class="option">
          <input type="radio" name="sr-matrix-row-0" value="0" required />
          Strongly Disagree
        </label>
        <!-- Additional options... -->
      </div>
      <div class="sr-matrix-row-error" style="display: none;">
        This question requires an answer
      </div>
    </div>
    <!-- Additional rows... -->
  </div>
</div>
```

## Best Practices

1. **Keep it manageable**: Limit the number of rows (5-7 maximum) and columns (3-5 maximum) to prevent survey fatigue
2. **Use clear labels**: Create concise, unambiguous labels for both rows and columns
3. **Maintain consistent scale direction**: Use the same scale direction for all matrices (e.g., negative to positive)
4. **Consider mobile users**: Remember that matrices can be challenging on small screens, so keep content brief
5. **Group related items**: Only include related dimensions that make sense with the same answer options
6. **Provide visual distinction**: Use alternating row styling (handled automatically by the component)
7. **Validate thoughtfully**: Required matrix questions can be frustrating if too long—only require what's essential
