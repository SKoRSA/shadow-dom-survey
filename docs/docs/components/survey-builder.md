---
sidebar_position: 1
---

# Survey Builder Component

The Survey Builder component provides an intuitive interface for creating and editing surveys with various question types. This component is encapsulated using Shadow DOM for complete isolation from your website's styles.

## Interactive Demo

The following interactive demo allows you to try the Survey Builder component directly:

<div className="demo-container">
  <iframe 
    src="/shadow-dom-survey/demos/builder.html" 
    width="100%" 
    height="600px" 
    frameBorder="0"
    title="Survey Builder Demo">
  </iframe>
</div>

## Basic Usage

To use the Survey Builder in your website:

```html
<!-- Container for the builder -->
<div id="surveyBuilder"></div>

<!-- Include the script -->
<script src="path/to/builder-embed.js"></script>

<!-- Initialize the builder -->
<script>
  const builder = new SurveyBuilder("#surveyBuilder", {
    isEnglish: true,
    onSave: async (data) => {
      console.log("Survey data:", data);
      // Send data to your server or process it
      return data;
    },
  });
</script>
```

## Configurable Options

The Survey Builder accepts the following configuration options:

| Option                 | Type     | Default                | Description                                          |
| ---------------------- | -------- | ---------------------- | ---------------------------------------------------- |
| `isEnglish`            | Boolean  | `false`                | Set to `true` for English UI, `false` for Arabic     |
| `onSave`               | Function | `async (data) => data` | Callback when survey is saved                        |
| `loadSurvey`           | Function | `async () => null`     | Function to load existing survey data asynchronously |
| `autosave`             | Boolean  | `false`                | Enable/disable automatic saving                      |
| `notificationDuration` | Number   | `3000`                 | Duration of toast notifications in ms                |

## Methods

### save()

Programmatically triggers the save action and returns a boolean indicating success.

```javascript
const saveResult = await builder.save();
if (saveResult) {
  console.log("Survey saved successfully");
}
```

### reset()

Resets the builder to its initial state.

```javascript
builder.reset();
```

### getData()

Returns the current survey data without saving.

```javascript
const surveyData = builder.getData();
console.log(surveyData);
```

### setData(data)

Loads existing survey data into the builder.

```javascript
builder.setData({
  title: "Customer Feedback",
  description: "Please share your experience",
  question: {
    type: "singleChoice",
    text: "How would you rate our service?",
    settings: { required: true },
    options: ["Excellent", "Good", "Average", "Poor"],
  },
});
```

### destroy()

Removes the component and cleans up resources.

```javascript
builder.destroy();
```

## Events

The builder dispatches a custom event:

| Event Name    | Description                | Details                        |
| ------------- | -------------------------- | ------------------------------ |
| `survey-save` | Fires when survey is saved | Contains the saved survey data |

```javascript
document
  .querySelector("#surveyBuilder")
  .addEventListener("survey-save", (event) => {
    console.log("Survey saved:", event.detail);
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
    <title>Survey Builder Demo</title>
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
    <h1>Survey Builder Demo</h1>

    <div class="controls">
      <label>
        <input type="checkbox" id="arabicToggle" /> Arabic Interface
      </label>
      <button id="getData">Get Data</button>
      <button id="loadSample">Load Sample Survey</button>
      <button id="resetBuilder">Reset</button>
    </div>

    <div class="demo-container">
      <div id="surveyBuilder"></div>
    </div>

    <h3>Current Survey Data:</h3>
    <pre id="dataOutput">No data yet</pre>

    <script src="builder-embed.js"></script>
    <script>
      // Initialize the builder
      let builder = new SurveyBuilder("#surveyBuilder", {
        isEnglish: true,
        onSave: async (data) => {
          document.getElementById("dataOutput").textContent = JSON.stringify(
            data,
            null,
            2
          );
          return data;
        },
      });

      // Handle language toggle
      document
        .getElementById("arabicToggle")
        .addEventListener("change", function (e) {
          // Destroy and recreate with new language setting
          builder.destroy();
          builder = new SurveyBuilder("#surveyBuilder", {
            isEnglish: !e.target.checked,
            onSave: async (data) => {
              document.getElementById("dataOutput").textContent =
                JSON.stringify(data, null, 2);
              return data;
            },
          });
        });

      // Handle getData button
      document.getElementById("getData").addEventListener("click", function () {
        const data = builder.getData();
        document.getElementById("dataOutput").textContent = JSON.stringify(
          data,
          null,
          2
        );
      });

      // Handle sample data button
      document
        .getElementById("loadSample")
        .addEventListener("click", function () {
          const sampleData = {
            title: "Customer Satisfaction Survey",
            description: "Please help us improve our services",
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
          };
          builder.setData(sampleData);
          document.getElementById("dataOutput").textContent = JSON.stringify(
            sampleData,
            null,
            2
          );
        });

      // Handle reset button
      document
        .getElementById("resetBuilder")
        .addEventListener("click", function () {
          builder.reset();
          document.getElementById("dataOutput").textContent = "No data yet";
        });
    </script>
  </body>
</html>
```

Copy the builder-embed.js file to the same directory and open the HTML file to run your own configurable demo.
