---
sidebar_position: 2
---

# Survey Reader Component

The Survey Reader component displays surveys to end-users and collects their responses. Like the builder, it's fully encapsulated using Shadow DOM to ensure consistent rendering regardless of your website's styles.

## Interactive Demo

The following interactive demo allows you to try the Survey Reader component directly:

<div className="demo-container">
  <iframe 
    src="/shadow-dom-survey/demos/reader.html" 
    width="100%" 
    height="600px" 
    frameBorder="0"
    title="Survey Reader Demo">
  </iframe>
</div>

## Basic Usage

To use the Survey Reader in your website:

```html
<!-- Container for the reader -->
<div id="surveyReader"></div>

<!-- Include the script -->
<script src="path/to/reader-embed.js"></script>

<!-- Initialize the reader -->
<script>
  const reader = new SurveyReader("#surveyReader", {
    isEnglish: true,
    surveyData: {
      title: "Customer Feedback",
      description: "Please share your experience",
      question: {
        type: "singleChoice",
        text: "How would you rate our service?",
        settings: { required: true },
        options: ["Excellent", "Good", "Average", "Poor"],
      },
    },
    onSubmit: async (responses) => {
      console.log("Survey responses:", responses);
      return responses;
    },
  });
</script>
```

## Configurable Options

The Survey Reader accepts the following configuration options:

| Option                 | Type     | Default                                | Description                                 |
| ---------------------- | -------- | -------------------------------------- | ------------------------------------------- |
| `isEnglish`            | Boolean  | `true`                                 | Set to `false` for Arabic UI                |
| `surveyData`           | Object   | `null`                                 | Survey data to display immediately          |
| `loadSurvey`           | Function | `async () => null`                     | Function to load survey data asynchronously |
| `onSubmit`             | Function | `async (responses) => responses`       | Callback when survey is submitted           |
| `completedTitle`       | String   | "Thank you!"                           | Title shown after submission                |
| `completedMessage`     | String   | "Thank you for completing the survey!" | Message after submission                    |
| `submitButtonText`     | String   | "Submit"                               | Label for the submit button                 |
| `requiredFieldMessage` | String   | "This question requires an answer"     | Error message for required fields           |
| `animation`            | Boolean  | `true`                                 | Enable/disable animations                   |

## Methods

### destroy()

Removes the component and cleans up.

```javascript
reader.destroy();
```

> **Important:** To update survey data, you must destroy the current instance and create a new one with new data.
>
> The SurveyReader component does not have a method to update the survey data after initialization.
>
> ```javascript
> // To change survey data:
> reader.destroy();
> reader = new SurveyReader("#surveyReader", {
>   isEnglish: true,
>   surveyData: {
>     title: "New Survey Title",
>     description: "New description",
>     question: {
>       /* ... */
>     },
>   },
>   onSubmit: async (responses) => {
>     console.log("Responses:", responses);
>     return responses;
>   },
> });
> ```

## Events

The reader dispatches a custom event:

| Event Name      | Description                    | Details                    |
| --------------- | ------------------------------ | -------------------------- |
| `survey-submit` | Fires when survey is submitted | Contains the response data |

```javascript
document
  .querySelector("#surveyReader")
  .addEventListener("survey-submit", (event) => {
    console.log("Survey submitted:", event.detail);
  });
```

## Customizable Demo (Run Your Own)

Create the following files to run your own customizable demo:

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Survey Reader Demo</title>
    <style>
      body {
        font-family: system-ui, -apple-system, sans-serif;
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
      }

      .demo-container {
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 30px;
      }

      .controls {
        background: #f5f5f5;
        padding: 15px;
        border-radius: 6px;
        margin-bottom: 20px;
      }

      .controls label {
        display: block;
        margin-bottom: 10px;
      }

      .controls select {
        margin-bottom: 15px;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #ddd;
        width: 100%;
        max-width: 400px;
      }

      button {
        background: #4a6cf7;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        margin-right: 10px;
      }

      pre {
        background: #f0f0f0;
        padding: 15px;
        border-radius: 4px;
        overflow: auto;
        max-height: 200px;
      }
    </style>
  </head>
  <body>
    <h1>Survey Reader Demo</h1>

    <div class="controls">
      <label>
        <input type="checkbox" id="arabicToggle" /> Arabic Interface
      </label>

      <label>
        Survey Type:
        <select id="surveyTypeSelect">
          <option value="singleChoice">Single Choice</option>
          <option value="multipleChoice">Multiple Choice</option>
          <option value="singleText">Single Line Text</option>
          <option value="longText">Multi-line Text</option>
          <option value="rating">Rating</option>
          <option value="dropdown">Dropdown</option>
          <option value="matrix">Matrix</option>
        </select>
      </label>

      <button id="loadSurveyBtn">Load Sample Survey</button>
    </div>

    <div class="demo-container">
      <div id="surveyReader"></div>
    </div>

    <h3>Submission Results:</h3>
    <pre id="resultsOutput">No submissions yet</pre>

    <script src="reader-embed.js"></script>
    <script>
      // Sample surveys for each type
      const sampleSurveys = {
        singleChoice: {
          title: "Customer Satisfaction",
          description: "Please rate your experience",
          question: {
            type: "singleChoice",
            text: "How satisfied are you with our service?",
            settings: { required: true },
            options: [
              "Very Satisfied",
              "Satisfied",
              "Neutral",
              "Dissatisfied",
              "Very Dissatisfied",
            ],
          },
        },
        multipleChoice: {
          title: "Feature Preferences",
          description: "Help us prioritize our roadmap",
          question: {
            type: "multipleChoice",
            text: "Which features would you like to see improved?",
            settings: { required: true },
            options: [
              "User Interface",
              "Performance",
              "Reliability",
              "Documentation",
              "Mobile Support",
            ],
          },
        },
        singleText: {
          title: "Contact Information",
          description: "Please provide your email",
          question: {
            type: "singleText",
            text: "What is your email address?",
            settings: {
              required: true,
              placeholder: "example@domain.com",
            },
          },
        },
        longText: {
          title: "User Feedback",
          description: "Share your thoughts with us",
          question: {
            type: "longText",
            text: "What improvements would you suggest for our product?",
            settings: {
              required: true,
              placeholder: "Please be as specific as possible...",
            },
          },
        },
        rating: {
          title: "Product Rating",
          description: "Rate our product",
          question: {
            type: "rating",
            text: "How likely are you to recommend our product to others?",
            settings: {
              required: true,
              maxValue: 10,
            },
          },
        },
        dropdown: {
          title: "User Demographics",
          description: "Help us understand our users better",
          question: {
            type: "dropdown",
            text: "What is your primary role?",
            settings: { required: true },
            options: [
              "Developer",
              "Designer",
              "Product Manager",
              "Business Analyst",
              "Student",
              "Other",
            ],
          },
        },
        matrix: {
          title: "Product Evaluation",
          description: "Rate different aspects of our product",
          question: {
            type: "matrix",
            text: "Please rate the following aspects of our product:",
            settings: { required: true },
            rows: [
              "Ease of use",
              "Performance",
              "Reliability",
              "Value for money",
              "Customer support",
            ],
            columns: ["Poor", "Fair", "Good", "Very Good", "Excellent"],
          },
        },
      };

      // Initialize the reader
      let reader = new SurveyReader("#surveyReader", {
        isEnglish: true,
        surveyData: sampleSurveys.singleChoice,
        onSubmit: async (responses) => {
          document.getElementById("resultsOutput").textContent = JSON.stringify(
            responses,
            null,
            2
          );
          return responses;
        },
      });

      // Handle language toggle
      document
        .getElementById("arabicToggle")
        .addEventListener("change", function (e) {
          // Destroy and recreate with new language setting
          reader.destroy();
          reader = new SurveyReader("#surveyReader", {
            isEnglish: !e.target.checked,
            surveyData:
              sampleSurveys[document.getElementById("surveyTypeSelect").value],
            onSubmit: async (responses) => {
              document.getElementById("resultsOutput").textContent =
                JSON.stringify(responses, null, 2);
              return responses;
            },
          });
        });

      // Handle load survey button
      document
        .getElementById("loadSurveyBtn")
        .addEventListener("click", function () {
          const surveyType = document.getElementById("surveyTypeSelect").value;
          reader.destroy();
          reader = new SurveyReader("#surveyReader", {
            isEnglish: document.getElementById("arabicToggle").checked
              ? false
              : true,
            surveyData: sampleSurveys[surveyType],
            onSubmit: async (responses) => {
              document.getElementById("resultsOutput").textContent =
                JSON.stringify(responses, null, 2);
              return responses;
            },
          });
          document.getElementById("resultsOutput").textContent =
            "No submissions yet";
        });
    </script>
  </body>
</html>
```

Copy the reader-embed.js file to the same directory and open the HTML file to run your own configurable demo.
