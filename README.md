# Shadow DOM Survey Components

A complete survey system with builder and reader components, built with Shadow DOM for encapsulation and isolation.

## Features

- 🔒 **Fully Encapsulated**: Uses Shadow DOM to prevent style leakage and conflicts
- 🌐 **Bilingual Support**: Full RTL and Arabic/English language support
- 🧩 **Multiple Question Types**: Support for single/multi-line text, single/multiple choice, dropdown, rating, and matrix questions
- 📱 **Responsive Design**: Works on all screen sizes
- 🔌 **Easy Integration**: Simple API for embedding in any website

## Installation

### Direct Include

```html
<!-- Include Shadow DOM Survey Components -->
<script src="builder-embed.js"></script>
<script src="reader-embed.js"></script>
```

## Usage

### Survey Builder

```javascript
// Initialize builder
const builderInstance = new SurveyBuilder("#surveyBuilder", {
  isEnglish: true, // English by default
  onSave: async (data) => {
    // Handle the survey data
    console.log("Survey saved:", data);

    // Example: Store in localStorage
    localStorage.setItem("surveyData", JSON.stringify(data));

    return data;
  },
});

// Example of creating a survey programmatically
builderInstance.setData({
  surveyId: "survey_" + Date.now().toString(36),
  title: "Customer Feedback",
  description: "Please share your experience",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  question: {
    type: "singleChoice",
    text: "How would you rate our service?",
    settings: { required: true },
    options: ["Excellent", "Good", "Average", "Poor"],
  },
});
```

### Survey Reader

```javascript
// Initialize reader with saved survey data
const readerInstance = new SurveyReader("#surveyReader", {
  isEnglish: true, // English by default
  surveyData: {
    surveyId: "survey_123",
    title: "Customer Feedback",
    description: "Please share your experience",
    question: {
      type: "singleChoice",
      text: "How would you rate our service?",
      settings: { required: true },
      options: ["Excellent", "Good", "Average", "Poor"],
    },
  },
  // Alternatively, load data from a source
  loadSurvey: async () => {
    // Load survey data from a source (only used if surveyData is not provided)
    const data = JSON.parse(localStorage.getItem("surveyData"));
    return data;
  },
  onSubmit: async (responses) => {
    // Handle the responses
    console.log("Survey submitted:", responses);

    // Example: Store in localStorage
    const savedResponses = JSON.parse(
      localStorage.getItem("surveyResponses") || "[]"
    );
    savedResponses.push(responses);
    localStorage.setItem("surveyResponses", JSON.stringify(savedResponses));

    return responses;
  },
});

// Listen for submission events
document
  .querySelector("#surveyReader")
  .addEventListener("survey-submit", (event) => {
    console.log("Survey submitted:", event.detail);
  });
```

## API Reference

### SurveyBuilder

#### Constructor Options

| Option                 | Type     | Default                | Description                               |
| ---------------------- | -------- | ---------------------- | ----------------------------------------- |
| `isEnglish`            | Boolean  | `true`                 | Set to true for English, false for Arabic |
| `onSave`               | Function | `async (data) => data` | Callback when survey is saved             |
| `loadSurvey`           | Function | `async () => null`     | Function to load existing survey data     |
| `autosave`             | Boolean  | `false`                | Enable automatic saving of survey data    |
| `notificationDuration` | Number   | `3000`                 | Duration of notifications in ms           |

#### Methods

- `save()`: Save the current survey data
- `reset()`: Reset the builder to its initial state
- `getData()`: Get current survey data without saving
- `setData(data)`: Load survey data programmatically
- `destroy()`: Clean up the component and remove event listeners

### SurveyReader

#### Constructor Options

| Option                 | Type     | Default                                  | Description                               |
| ---------------------- | -------- | ---------------------------------------- | ----------------------------------------- |
| `isEnglish`            | Boolean  | `true`                                   | Set to true for English, false for Arabic |
| `surveyData`           | Object   | `null`                                   | Survey data object                        |
| `loadSurvey`           | Function | `async () => null`                       | Function to load survey data              |
| `onSubmit`             | Function | `async (responses) => responses`         | Callback when survey is submitted         |
| `completedTitle`       | String   | `"Thank you!"`                           | Title shown after completion              |
| `completedMessage`     | String   | `"Thank you for completing the survey!"` | Message shown after completion            |
| `submitButtonText`     | String   | `"Submit"`                               | Text for the submit button                |
| `requiredFieldMessage` | String   | `"This question requires an answer"`     | Message for required fields               |
| `animation`            | Boolean  | `true`                                   | Enable/disable animations                 |

#### Methods

- `destroy()`: Clean up the component and remove event listeners

#### Events

- `survey-submit`: Fired when a survey is submitted with response data in `event.detail`

## Question Types

The system supports the following question types:

1. **Single Line Text**: For short text responses
2. **Multi-line Text**: For longer text responses
3. **Single Choice (Radio)**: For selecting one option from multiple choices
4. **Multiple Choice (Checkbox)**: For selecting multiple options
5. **Dropdown**: For selecting one option from a dropdown list
6. **Rating Scale**: For numerical ratings
7. **Matrix Question**: For grid-based questions with rows and columns

## Browser Compatibility

The components are compatible with all modern browsers that support Shadow DOM:

- Chrome 53+
- Firefox 63+
- Safari 10.1+
- Edge 79+

## License

MIT License - see the LICENSE file for details.

## Author

MAJED AL-ANAZI  
GitHub: https://github.com/SKoRSA
