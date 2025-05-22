/**
 * @author: MAJED AL-ANAZI
 * @version: 1.0.0
 * @license: MIT
 * @description: A self-contained, embeddable survey reader component
 * @Github: https://github.com/majed-r
 */
(function () {
  /**
   * SurveyReader main class
   */
  class SurveyReader {
    /**
     * @param {string|HTMLElement} selector - CSS selector or DOM element
     * @param {Object} options - Configuration options
     */
    constructor(selector, options = {}) {
      this.styles = {
        container: {
          maxWidth: "800px",
          margin: "0 auto",
          color: "#1f2937",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          padding: "32px",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        },
        header: {
          marginBottom: "28px",
        },
        title: {
          fontSize: "1.75rem",
          fontWeight: "700",
          margin: "0 0 8px 0",
          color: "#111827",
          letterSpacing: "-0.01em",
        },
        description: {
          fontSize: "1.1rem",
          margin: "10px 0 20px 0",
          color: "#4b5563",
          lineHeight: "1.6",
        },
        question: {
          marginBottom: "36px",
          paddingBottom: "28px",
          borderBottom: "1px solid #e5e7eb",
        },
        questionText: {
          fontSize: "1.25rem",
          fontWeight: "600",
          marginBottom: "20px",
          color: "#111827",
          lineHeight: "1.5",
        },
        input: {
          width: "100%",
          padding: "12px 16px",
          border: "2px solid #d1d5db",
          borderRadius: "8px",
          fontSize: "1rem",
          marginTop: "5px",
          transition: "all 0.2s ease-in-out",
          backgroundColor: "#f9fafb",
          color: "#111827",
          boxSizing: "border-box",
        },
        textarea: {
          width: "100%",
          padding: "12px 16px",
          border: "2px solid #d1d5db",
          borderRadius: "8px",
          fontSize: "1rem",
          minHeight: "120px",
          resize: "vertical",
          transition: "all 0.2s ease-in-out",
          backgroundColor: "#f9fafb",
          color: "#111827",
          lineHeight: "1.6",
          boxSizing: "border-box",
        },
        select: {
          width: "100%",
          padding: "12px 16px",
          border: "2px solid #d1d5db",
          borderRadius: "8px",
          fontSize: "1rem",
          marginTop: "5px",
          transition: "all 0.2s ease-in-out",
          backgroundColor: "#f9fafb",
          appearance: "none",
          color: "#111827",
          cursor: "pointer",
          backgroundImage:
            'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="%236b7280"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>\')',
          backgroundPosition: "right 16px center",
          backgroundSize: "16px",
          backgroundRepeat: "no-repeat",
          paddingRight: "48px",
          boxSizing: "border-box",
        },
        options: {
          marginTop: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        },
        option: {
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
          padding: "10px 16px",
          backgroundColor: "#f9fafb",
          borderRadius: "8px",
          border: "1px solid #e5e7eb",
          transition: "all 0.2s ease",
          cursor: "pointer",
        },
        radio: {
          marginRight: "12px",
          width: "20px",
          height: "20px",
          cursor: "pointer",
          accentColor: "#4f46e5",
        },
        checkbox: {
          marginRight: "12px",
          width: "20px",
          height: "20px",
          cursor: "pointer",
          accentColor: "#4f46e5",
          borderRadius: "4px",
        },
        rating: {
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          marginTop: "16px",
          justifyContent: "space-between",
        },
        ratingOption: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        },
        ratingInput: {
          appearance: "none",
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "2px solid #d1d5db",
          backgroundColor: "#f9fafb",
          cursor: "pointer",
          margin: "0",
          transition: "all 0.2s ease",
          position: "relative",
        },
        ratingLabel: {
          fontSize: "1rem",
          fontWeight: "500",
          color: "#4b5563",
        },
        matrixContainer: {
          backgroundColor: "#f9fafb",
          borderRadius: "8px",
          padding: "20px",
          marginTop: "10px",
        },
        matrixRow: {
          marginBottom: "24px",
          paddingBottom: "20px",
          borderBottom: "1px solid #e5e7eb",
        },
        matrixLabel: {
          marginBottom: "12px",
          fontWeight: "600",
          color: "#111827",
          fontSize: "1.1rem",
          lineHeight: "1.4",
        },
        error: {
          color: "#ef4444",
          fontSize: "0.875rem",
          marginTop: "8px",
          padding: "8px 12px",
          backgroundColor: "#fee2e2",
          borderRadius: "6px",
          borderLeft: "3px solid #ef4444",
          display: "none",
        },
        actions: {
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "32px",
        },
        button: {
          padding: "12px 24px",
          borderRadius: "8px",
          fontSize: "1rem",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all 0.2s",
          border: "none",
          backgroundColor: "#4f46e5",
          color: "white",
          boxShadow: "0 2px 4px rgba(79, 70, 229, 0.25)",
        },
        notification: {
          position: "fixed",
          bottom: "24px",
          right: "24px",
          padding: "16px 24px",
          borderRadius: "8px",
          color: "white",
          fontSize: "1rem",
          fontWeight: "500",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          zIndex: "1000",
          maxWidth: "400px",
        },
        completed: {
          textAlign: "center",
          padding: "40px 24px",
        },
        completedTitle: {
          fontSize: "1.75rem",
          fontWeight: "700",
          marginBottom: "16px",
          color: "#10b981",
        },
        completedMessage: {
          fontSize: "1.25rem",
          marginBottom: "24px",
          color: "#374151",
          lineHeight: "1.6",
        },
        loading: {
          textAlign: "center",
          padding: "40px",
        },
        spinner: {
          display: "inline-block",
          width: "40px",
          height: "40px",
          border: "4px solid #e5e7eb",
          borderRadius: "50%",
          borderTopColor: "#4f46e5",
          animation: "srSpin 1s linear infinite",
        },
      };

      this.options = Object.assign(
        {
          surveyData: null,
          loadSurvey: async () => {
            return null;
          },
          onSubmit: async (responses) => {
            return responses;
          },
          completedTitle: "test",
          completedMessage: "Thank you for completing the survey!",
          submitButtonText: "Submit",
          requiredFieldMessage: "This question requires an answer",
          animation: true, // Option to enable/disable animations
          isEnglish: true,
        },
        options
      );

      this.container =
        typeof selector === "string"
          ? document.querySelector(selector)
          : selector;

      if (!this.container) {
        console.error("SurveyReader: Container element not found");
        return;
      }

      if (this.container.shadowRoot) {
        this.shadow = this.container.shadowRoot;
        while (this.shadow.firstChild) {
          this.shadow.removeChild(this.shadow.firstChild);
        }
      } else {
        this.shadow = this.container.attachShadow({ mode: "open" });
      }
      this._addKeyframeAnimation();

      this.surveyData = null;
      this.responses = {};
      this.errors = {};
      this.submitted = false;

      this._initUI();

      this._loadSurveyData();
    }

    /**
     * Add keyframe animation for spinner
     */
    _addKeyframeAnimation() {
      const style = document.createElement("style");
      style.textContent = `
        @keyframes srSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes srSlideIn {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes srFadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes srFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `;
      this.shadow.appendChild(style);
    }

    /**
     * @param {HTMLElement} element - Element to style
     * @param {Object} styles - Styles to apply
     */
    _applyStyles(element, styles) {
      Object.assign(element.style, styles);
    }

    /**
     * Initialize the UI
     */
    _initUI() {
      const wrapper = document.createElement("div");
      this._applyStyles(wrapper, this.styles.container);

      const loadingDiv = document.createElement("div");
      this._applyStyles(loadingDiv, this.styles.loading);

      const spinner = document.createElement("div");
      this._applyStyles(spinner, this.styles.spinner);

      const loadingText = document.createElement("p");
      loadingText.textContent = this.options.isEnglish
        ? "Loading survey..."
        : "جاري تحميل الاستبيان...";
      loadingText.style.marginTop = "16px";
      loadingText.style.color = "#6b7280";
      loadingText.style.direction = this.options.isEnglish ? "ltr" : "rtl";

      loadingDiv.appendChild(spinner);
      loadingDiv.appendChild(loadingText);

      wrapper.appendChild(loadingDiv);

      this.shadow.appendChild(wrapper);

      this.wrapper = wrapper;
    }

    /**
     * Load survey data
     */
    async _loadSurveyData() {
      try {
        if (this.options.surveyData) {
          this.surveyData = this.options.surveyData;
        } else {
          const data = await this.options.loadSurvey();
          if (!data) {
            const errorDiv = document.createElement("div");
            this._applyStyles(errorDiv, {
              ...this.styles.error,
              display: "block",
              margin: "20px 0",
            });
            errorDiv.textContent = this.options.isEnglish
              ? "No survey data available."
              : "لا توجد بيانات استبيان متاحة.";
            errorDiv.style.direction = this.options.isEnglish ? "ltr" : "rtl";

            this.wrapper.innerHTML = "";
            this.wrapper.appendChild(errorDiv);
            return;
          }
          this.surveyData = data;
        }

        this._renderSurvey();
      } catch (error) {
        console.error("Error loading survey data:", error);

        const errorDiv = document.createElement("div");
        this._applyStyles(errorDiv, {
          ...this.styles.error,
          display: "block",
          margin: "20px 0",
        });
        errorDiv.textContent = this.options.isEnglish
          ? `Error loading survey: ${error.message}`
          : `خطأ في تحميل الاستبيان: ${error.message}`;
        errorDiv.style.direction = this.options.isEnglish ? "ltr" : "rtl";

        this.wrapper.innerHTML = "";
        this.wrapper.appendChild(errorDiv);
      }
    }

    /**
     * Render the survey
     */
    _renderSurvey() {
      if (!this.surveyData || this.submitted) {
        return;
      }

      const { title, description, question } = this.surveyData;

      this.wrapper.innerHTML = "";

      const header = document.createElement("div");
      this._applyStyles(header, this.styles.header);

      const titleEl = document.createElement("h2");
      this._applyStyles(titleEl, this.styles.title);
      titleEl.textContent = title || "Survey";

      header.appendChild(titleEl);

      if (description) {
        const descEl = document.createElement("p");
        this._applyStyles(descEl, this.styles.description);
        descEl.textContent = description;
        header.appendChild(descEl);
      }

      this.wrapper.appendChild(header);

      const form = document.createElement("form");
      form.id = "sr-form";

      const questionDiv = document.createElement("div");
      this._applyStyles(questionDiv, this.styles.question);

      const questionText = document.createElement("div");
      this._applyStyles(questionText, this.styles.questionText);
      questionText.textContent = question.text;

      if (question.settings?.required) {
        const requiredSpan = document.createElement("span");
        requiredSpan.textContent = " *";
        requiredSpan.style.color = "#ef4444";
        requiredSpan.style.fontSize = "1.25rem";
        questionText.appendChild(requiredSpan);
      }

      questionDiv.appendChild(questionText);

      const questionContent = document.createElement("div");
      questionContent.id = "sr-question-content";
      questionDiv.appendChild(questionContent);

      const errorDiv = document.createElement("div");
      errorDiv.id = "sr-question-error";
      this._applyStyles(errorDiv, this.styles.error);
      questionDiv.appendChild(errorDiv);

      form.appendChild(questionDiv);
      const actions = document.createElement("div");
      this._applyStyles(actions, this.styles.actions);

      const submitBtn = document.createElement("button");
      submitBtn.type = "submit";
      this._applyStyles(submitBtn, this.styles.button);
      submitBtn.textContent = this.options.submitButtonText;

      submitBtn.onmouseover = () => {
        submitBtn.style.backgroundColor = "#4338ca";
        submitBtn.style.boxShadow = "0 4px 8px rgba(79, 70, 229, 0.3)";
        submitBtn.style.transform = "translateY(-1px)";
      };

      submitBtn.onmouseout = () => {
        submitBtn.style.backgroundColor = "#4f46e5";
        submitBtn.style.boxShadow = "0 2px 4px rgba(79, 70, 229, 0.25)";
        submitBtn.style.transform = "translateY(0)";
      };

      actions.appendChild(submitBtn);
      form.appendChild(actions);

      this.wrapper.appendChild(form);

      this._renderQuestionContent(question);

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        this._handleSubmit();
      });
    }

    /**
     * @param {Object} question - The question object
     */
    _renderQuestionContent(question) {
      const container = this.shadow.getElementById("sr-question-content");
      if (!container) {
        console.error("Question content container not found");
        return;
      }

      switch (question.type) {
        case "singleText":
          this._renderSingleText(container, question);
          break;
        case "longText":
          this._renderLongText(container, question);
          break;
        case "singleChoice":
          this._renderSingleChoice(container, question);
          break;
        case "multipleChoice":
          this._renderMultipleChoice(container, question);
          break;
        case "dropdown":
          this._renderDropdown(container, question);
          break;
        case "rating":
          this._renderRating(container, question);
          break;
        case "matrix":
          this._renderMatrix(container, question);
          break;
        default:
          const errorP = document.createElement("p");
          this._applyStyles(errorP, {
            ...this.styles.error,
            display: "block",
          });
          errorP.textContent = this.options.isEnglish
            ? `Unsupported question type: ${question.type}`
            : `نوع سؤال غير مدعوم: ${question.type}`;
          errorP.style.direction = this.options.isEnglish ? "ltr" : "rtl";
          container.appendChild(errorP);
      }
    }

    /**
     * @param {HTMLElement} element - Input element
     */
    _addInputEffects(element) {
      element.onfocus = () => {
        element.style.outline = "none";
        element.style.borderColor = "#4f46e5";
        element.style.boxShadow = "0 0 0 3px rgba(79, 70, 229, 0.2)";
        element.style.backgroundColor = "#fff";
      };

      element.onblur = () => {
        element.style.borderColor = "#d1d5db";
        element.style.boxShadow = "none";
        element.style.backgroundColor = "#f9fafb";
      };

      element.onmouseover = () => {
        if (document.activeElement !== element) {
          element.style.borderColor = "#9ca3af";
        }
      };

      element.onmouseout = () => {
        if (document.activeElement !== element) {
          element.style.borderColor = "#d1d5db";
        }
      };
    }

    /**
     * @param {HTMLElement} label - Option label
     * @param {HTMLElement} input - Input element (radio/checkbox)
     */
    _addOptionEffects(label, input) {
      label.onmouseover = () => {
        label.style.backgroundColor = "#f3f4f6";
        label.style.borderColor = "#d1d5db";
      };

      label.onmouseout = () => {
        if (!input.checked) {
          label.style.backgroundColor = "#f9fafb";
          label.style.borderColor = "#e5e7eb";
        }
      };
    }

    /**
     * @param {HTMLElement} container - Container element
     * @param {Object} question - The question object
     */
    _renderSingleText(container, question) {
      const input = document.createElement("input");
      input.type = "text";
      input.id = "sr-response-input";
      this._applyStyles(input, this.styles.input);
      input.placeholder = question.settings?.placeholder || "";

      if (question.settings?.required) {
        input.required = true;
      }

      this._addInputEffects(input);

      input.addEventListener("input", (e) => {
        this.responses.answer = e.target.value;
        this._validateResponse();
      });

      container.appendChild(input);
    }

    /**
     * @param {HTMLElement} container - Container element
     * @param {Object} question - The question object
     */
    _renderLongText(container, question) {
      const textarea = document.createElement("textarea");
      textarea.id = "sr-response-textarea";
      this._applyStyles(textarea, this.styles.textarea);
      textarea.placeholder = question.settings?.placeholder || "";

      if (question.settings?.required) {
        textarea.required = true;
      }

      this._addInputEffects(textarea);

      textarea.addEventListener("input", (e) => {
        this.responses.answer = e.target.value;
        this._validateResponse();
      });

      container.appendChild(textarea);
    }

    /**
     * @param {HTMLElement} container - Container element
     * @param {Object} question - The question object
     */
    _renderSingleChoice(container, question) {
      const options = question.options || [];

      if (options.length === 0) {
        const errorP = document.createElement("p");
        this._applyStyles(errorP, {
          ...this.styles.error,
          display: "block",
        });
        errorP.textContent = this.options.isEnglish
          ? "No options available for this question."
          : "لا توجد خيارات متاحة لهذا السؤال.";
        errorP.style.direction = this.options.isEnglish ? "ltr" : "rtl";
        container.appendChild(errorP);
        return;
      }

      const optionsDiv = document.createElement("div");
      this._applyStyles(optionsDiv, this.styles.options);

      options.forEach((option, index) => {
        const label = document.createElement("label");
        this._applyStyles(label, this.styles.option);

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "sr-response-radio";
        radio.value = index;
        this._applyStyles(radio, this.styles.radio);

        if (question.settings?.required) {
          radio.required = true;
        }

        const textNode = document.createTextNode(option);

        label.appendChild(radio);
        label.appendChild(textNode);

        this._addOptionEffects(label, radio);

        radio.addEventListener("change", (e) => {
          this.responses.answer = options[parseInt(e.target.value)];
          this._validateResponse();

          optionsDiv.querySelectorAll("label").forEach((opt) => {
            opt.style.borderColor = "#e5e7eb";
            opt.style.backgroundColor = "#f9fafb";
          });

          label.style.borderColor = "#4f46e5";
          label.style.backgroundColor = "#eef2ff";
        });

        optionsDiv.appendChild(label);
      });

      container.appendChild(optionsDiv);
    }

    /**
     * @param {HTMLElement} container - Container element
     * @param {Object} question - The question object
     */
    _renderMultipleChoice(container, question) {
      const options = question.options || [];

      if (options.length === 0) {
        const errorP = document.createElement("p");
        this._applyStyles(errorP, {
          ...this.styles.error,
          display: "block",
        });
        errorP.textContent = this.options.isEnglish
          ? "No options available for this question."
          : "لا توجد خيارات متاحة لهذا السؤال.";
        errorP.style.direction = this.options.isEnglish ? "ltr" : "rtl";
        container.appendChild(errorP);
        return;
      }

      this.responses.answer = [];

      const optionsDiv = document.createElement("div");
      this._applyStyles(optionsDiv, this.styles.options);

      options.forEach((option, index) => {
        const label = document.createElement("label");
        this._applyStyles(label, this.styles.option);

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "sr-response-checkbox";
        checkbox.value = index;
        this._applyStyles(checkbox, this.styles.checkbox);

        const textNode = document.createTextNode(option);

        label.appendChild(checkbox);
        label.appendChild(textNode);

        this._addOptionEffects(label, checkbox);

        checkbox.addEventListener("change", (e) => {
          if (e.target.checked) {
            this.responses.answer.push(options[index]);
            label.style.borderColor = "#4f46e5";
            label.style.backgroundColor = "#eef2ff";
          } else {
            const optionIndex = this.responses.answer.indexOf(options[index]);
            if (optionIndex > -1) {
              this.responses.answer.splice(optionIndex, 1);
            }
            label.style.borderColor = "#e5e7eb";
            label.style.backgroundColor = "#f9fafb";
          }
          this._validateResponse();
        });

        optionsDiv.appendChild(label);
      });

      container.appendChild(optionsDiv);
    }

    /**
     * @param {HTMLElement} container - Container element
     * @param {Object} question - The question object
     */
    _renderDropdown(container, question) {
      const options = question.options || [];

      if (options.length === 0) {
        const errorP = document.createElement("p");
        this._applyStyles(errorP, {
          ...this.styles.error,
          display: "block",
        });
        errorP.textContent = this.options.isEnglish
          ? "No options available for this question."
          : "لا توجد خيارات متاحة لهذا السؤال.";
        errorP.style.direction = this.options.isEnglish ? "ltr" : "rtl";
        container.appendChild(errorP);
        return;
      }

      const select = document.createElement("select");
      select.id = "sr-response-select";
      this._applyStyles(select, this.styles.select);

      if (question.settings?.required) {
        select.required = true;
      }

      const placeholderOption = document.createElement("option");
      placeholderOption.value = "";
      placeholderOption.disabled = true;
      placeholderOption.selected = true;
      placeholderOption.textContent =
        question.settings?.placeholder ||
        (this.options.isEnglish ? "Select an option" : "اختر خياراً");
      select.appendChild(placeholderOption);

      options.forEach((option, index) => {
        const optionEl = document.createElement("option");
        optionEl.value = index;
        optionEl.textContent = option;
        select.appendChild(optionEl);
      });

      this._addInputEffects(select);

      select.addEventListener("change", (e) => {
        const selectedIndex = parseInt(e.target.value);
        this.responses.answer = options[selectedIndex];
        this._validateResponse();
      });

      container.appendChild(select);
    }

    /**
     * @param {HTMLElement} container - Container element
     * @param {Object} question - The question object
     */
    _renderRating(container, question) {
      const maxValue = question.settings?.maxValue || 5;

      const ratingDiv = document.createElement("div");
      this._applyStyles(ratingDiv, this.styles.rating);

      for (let i = 1; i <= maxValue; i++) {
        const optionDiv = document.createElement("div");
        this._applyStyles(optionDiv, this.styles.ratingOption);

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "sr-response-rating";
        radio.id = `sr-rating-${i}`;
        radio.value = i;
        this._applyStyles(radio, this.styles.ratingInput);

        if (question.settings?.required) {
          radio.required = true;
        }

        const label = document.createElement("label");
        label.htmlFor = `sr-rating-${i}`;
        this._applyStyles(label, this.styles.ratingLabel);
        label.textContent = i;
        radio.onmouseover = () => {
          radio.style.borderColor = "#4f46e5";
          radio.style.boxShadow = "0 0 0 2px rgba(79, 70, 229, 0.2)";
        };

        radio.onmouseout = () => {
          if (!radio.checked) {
            radio.style.borderColor = "#d1d5db";
            radio.style.boxShadow = "none";
          }
        };

        radio.addEventListener("change", (e) => {
          this.responses.answer = parseInt(e.target.value);
          this._validateResponse();

          ratingDiv.querySelectorAll('input[type="radio"]').forEach((r) => {
            r.style.borderColor = "#d1d5db";
            r.style.backgroundColor = "#f9fafb";
            r.style.boxShadow = "none";
            while (r.firstChild) {
              r.removeChild(r.firstChild);
            }
          });

          radio.style.borderColor = "#4f46e5";
          radio.style.backgroundColor = "#4f46e5";
          radio.style.boxShadow = "0 0 0 2px rgba(79, 70, 229, 0.2)";

          const circleIndicator = document.createElement("div");
          circleIndicator.style.position = "absolute";
          circleIndicator.style.top = "50%";
          circleIndicator.style.left = "50%";
          circleIndicator.style.transform = "translate(-50%, -50%)";
          circleIndicator.style.width = "16px";
          circleIndicator.style.height = "16px";
          circleIndicator.style.backgroundColor = "white";
          circleIndicator.style.borderRadius = "50%";

          radio.appendChild(circleIndicator);
        });

        optionDiv.appendChild(radio);
        optionDiv.appendChild(label);
        ratingDiv.appendChild(optionDiv);
      }

      container.appendChild(ratingDiv);
    }

    /**
     * @param {HTMLElement} container - Container element
     * @param {Object} question - The question object
     */
    _renderMatrix(container, question) {
      const rows = question.rows || [];
      const columns = question.columns || [];

      if (rows.length === 0 || columns.length === 0) {
        const errorP = document.createElement("p");
        this._applyStyles(errorP, {
          ...this.styles.error,
          display: "block",
        });
        errorP.textContent = this.options.isEnglish
          ? "Invalid matrix question configuration."
          : "تكوين سؤال المصفوفة غير صالح.";
        errorP.style.direction = this.options.isEnglish ? "ltr" : "rtl";
        container.appendChild(errorP);
        return;
      }

      this.responses.answer = {
        matrix: {},
      };

      const matrixContainer = document.createElement("div");
      this._applyStyles(matrixContainer, this.styles.matrixContainer);

      rows.forEach((row, rowIndex) => {
        const rowContainer = document.createElement("div");
        this._applyStyles(rowContainer, this.styles.matrixRow);

        if (rowIndex === rows.length - 1) {
          rowContainer.style.borderBottom = "none";
          rowContainer.style.marginBottom = "0";
          rowContainer.style.paddingBottom = "0";
        }

        rowContainer.setAttribute("data-row-id", rowIndex);

        const rowLabel = document.createElement("div");
        this._applyStyles(rowLabel, this.styles.matrixLabel);
        rowLabel.textContent = row;
        rowContainer.appendChild(rowLabel);

        const optionsContainer = document.createElement("div");
        this._applyStyles(optionsContainer, this.styles.options);

        columns.forEach((column, colIndex) => {
          const label = document.createElement("label");
          this._applyStyles(label, this.styles.option);

          const radio = document.createElement("input");
          radio.type = "radio";
          radio.name = `sr-matrix-row-${rowIndex}`;
          radio.value = colIndex;
          this._applyStyles(radio, this.styles.radio);

          if (question.settings?.required) {
            radio.required = true;
          }

          const textNode = document.createTextNode(column);

          label.appendChild(radio);
          label.appendChild(textNode);

          this._addOptionEffects(label, radio);

          radio.addEventListener("change", () => {
            this.responses.answer.matrix[row] = column;

            const rowOptions = optionsContainer.querySelectorAll("label");
            rowOptions.forEach((opt) => {
              opt.style.borderColor = "#e5e7eb";
              opt.style.backgroundColor = "#f9fafb";
            });

            label.style.borderColor = "#4f46e5";
            label.style.backgroundColor = "#eef2ff";

            const errorElement = rowContainer.querySelector(
              ".sr-matrix-row-error"
            );
            if (errorElement) {
              errorElement.style.display = "none";
            }

            this._validateResponse();
          });

          optionsContainer.appendChild(label);
        });

        rowContainer.appendChild(optionsContainer);

        const rowError = document.createElement("div");
        rowError.className = "sr-matrix-row-error";
        this._applyStyles(rowError, this.styles.error);
        rowContainer.appendChild(rowError);

        matrixContainer.appendChild(rowContainer);
      });

      container.appendChild(matrixContainer);
    }

    /**
     * Validate the current response
     */
    _validateResponse() {
      const question = this.surveyData.question;
      const errorContainer = this.shadow.getElementById("sr-question-error");

      if (errorContainer) {
        errorContainer.textContent = "";
        errorContainer.style.display = "none";
      }

      this.errors = {};

      if (question.settings?.required) {
        let isValid = true;

        switch (question.type) {
          case "singleText":
          case "longText":
            isValid =
              !!this.responses.answer && this.responses.answer.trim() !== "";
            break;

          case "singleChoice":
          case "dropdown":
          case "rating":
            isValid = this.responses.answer !== undefined;
            break;

          case "multipleChoice":
            isValid =
              Array.isArray(this.responses.answer) &&
              this.responses.answer.length > 0;
            break;

          case "matrix":
            if (this.responses.answer && this.responses.answer.matrix) {
              const answeredRows = Object.keys(
                this.responses.answer.matrix
              ).length;
              isValid = answeredRows === question.rows.length;

              if (!isValid) {
                question.rows.forEach((row) => {
                  if (!this.responses.answer.matrix[row]) {
                    const rowIndex = question.rows.indexOf(row);
                    const rowContainer = this.shadow.querySelector(
                      `[data-row-id="${rowIndex}"]`
                    );
                    if (rowContainer) {
                      const rowError = rowContainer.querySelector(
                        ".sr-matrix-row-error"
                      );
                      if (rowError) {
                        rowError.textContent =
                          this.options.requiredFieldMessage;
                        rowError.style.display = "block";
                      }
                    }
                  }
                });
              }
            } else {
              isValid = false;

              this.shadow
                .querySelectorAll(".sr-matrix-row-error")
                .forEach((error) => {
                  error.textContent = this.options.requiredFieldMessage;
                  error.style.display = "block";
                });
            }
            break;
        }

        if (!isValid) {
          this.errors.required = this.options.requiredFieldMessage;
          if (question.type !== "matrix" && errorContainer) {
            errorContainer.textContent = this.options.requiredFieldMessage;
            errorContainer.style.display = "block";
          }
        }
      }
    }

    /**
     * Handle form submission
     */
    async _handleSubmit() {
      this._validateResponse();

      if (Object.keys(this.errors).length > 0) {
        return;
      }

      try {
        const submitButton = this.shadow.querySelector(
          '#sr-form button[type="submit"]'
        );
        if (!submitButton) {
          console.error("Submit button not found");
          return;
        }

        const originalText = submitButton.textContent;

        const loadingSpinner = document.createElement("span");
        loadingSpinner.style.display = "inline-block";
        loadingSpinner.style.width = "16px";
        loadingSpinner.style.height = "16px";
        loadingSpinner.style.border = "2px solid white";
        loadingSpinner.style.borderRadius = "50%";
        loadingSpinner.style.borderRightColor = "transparent";
        loadingSpinner.style.marginRight = "8px";
        loadingSpinner.style.animation = "srSpin 1s linear infinite";

        submitButton.textContent = "";
        submitButton.appendChild(loadingSpinner);
        submitButton.appendChild(
          document.createTextNode(
            this.options.isEnglish ? "Submitting..." : "جاري الإرسال..."
          )
        );
        submitButton.disabled = true;

        const responseData = {
          surveyId: this.surveyData.surveyId,
          questionType: this.surveyData.question.type,
          questionText: this.surveyData.question.text,
          response: this.responses.answer,
          submittedAt: new Date().toISOString(),
        };

        try {
          await this.options.onSubmit(responseData);

          // Dispatch custom event for external listeners
          if (this.container) {
            const submitEvent = new CustomEvent("survey-submit", {
              detail: JSON.parse(JSON.stringify(responseData)),
            });
            this.container.dispatchEvent(submitEvent);
          }

          this._showNotification(
            this.options.isEnglish
              ? "Survey submitted successfully"
              : "تم إرسال الاستبيان بنجاح",
            "success"
          );

          this.submitted = true;

          this._showCompletionMessage();
        } catch (error) {
          console.error("Error submitting survey:", error);
          this._showNotification(
            this.options.isEnglish
              ? "Error submitting survey"
              : "حدث خطأ أثناء إرسال الاستبيان",
            "error"
          );

          submitButton.textContent = originalText;
          submitButton.disabled = false;
        }
      } catch (error) {
        console.error("Error handling form submission:", error);
        this._showNotification(
          this.options.isEnglish
            ? "An unexpected error occurred"
            : "حدث خطأ غير متوقع",
          "error"
        );
      }
    }

    /**
     * @param {string} message - Message to show
     * @param {string} type - Type of notification (success, error)
     */
    _showNotification(message, type = "info") {
      const notification = document.createElement("div");
      notification.className = "sr-notification";
      this._applyStyles(notification, {
        ...this.styles.notification,
        backgroundColor: type === "success" ? "#10b981" : "#ef4444",
        borderLeft:
          type === "success" ? "5px solid #059669" : "5px solid #dc2626",
        animation: "srSlideIn 0.3s ease, srFadeOut 0.5s ease forwards",
        animationDelay: "0s, 4000ms",
        direction: this.options.isEnglish ? "ltr" : "rtl",
      });

      const iconSVG = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      iconSVG.setAttribute("width", "16");
      iconSVG.setAttribute("height", "16");
      iconSVG.setAttribute("viewBox", "0 0 24 24");
      iconSVG.setAttribute("fill", "none");
      iconSVG.setAttribute("stroke", "currentColor");
      iconSVG.setAttribute("stroke-width", "2");
      iconSVG.setAttribute("stroke-linecap", "round");
      iconSVG.setAttribute("stroke-linejoin", "round");
      iconSVG.style.marginRight = this.options.isEnglish ? "8px" : "0";
      iconSVG.style.marginLeft = this.options.isEnglish ? "0" : "8px";

      if (type === "success") {
        const path1 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        path1.setAttribute("d", "M22 11.08V12a10 10 0 1 1-5.93-9.14");

        const polyline = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "polyline"
        );
        polyline.setAttribute("points", "22 4 12 14.01 9 11.01");

        iconSVG.appendChild(path1);
        iconSVG.appendChild(polyline);
      } else {
        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        circle.setAttribute("cx", "12");
        circle.setAttribute("cy", "12");
        circle.setAttribute("r", "10");

        const line1 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );
        line1.setAttribute("x1", "12");
        line1.setAttribute("y1", "8");
        line1.setAttribute("x2", "12");
        line1.setAttribute("y2", "12");

        const line2 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );
        line2.setAttribute("x1", "12");
        line2.setAttribute("y1", "16");
        line2.setAttribute("x2", "12.01");
        line2.setAttribute("y2", "16");

        iconSVG.appendChild(circle);
        iconSVG.appendChild(line1);
        iconSVG.appendChild(line2);
      }

      const flexContainer = document.createElement("div");
      flexContainer.style.display = "flex";
      flexContainer.style.alignItems = "center";

      if (this.options.isEnglish) {
        flexContainer.appendChild(iconSVG);
        flexContainer.appendChild(document.createTextNode(message));
      } else {
        flexContainer.appendChild(document.createTextNode(message));
        flexContainer.appendChild(iconSVG);
      }

      notification.appendChild(flexContainer);
      this.shadow.appendChild(notification);

      setTimeout(() => {
        if (notification.parentNode === this.shadow) {
          this.shadow.removeChild(notification);
        }
      }, 4500);
    }

    /**
     * Show completion message screen
     */
    _showCompletionMessage() {
      const title = this.options.completedTitle;

      const message =
        this.options.completedMessage ||
        (this.options.isEnglish
          ? "Thank you for completing the survey!"
          : "شكراً لإكمال الاستبيان!");

      this.wrapper.innerHTML = "";

      const completedDiv = document.createElement("div");
      this._applyStyles(completedDiv, this.styles.completed);

      completedDiv.style.direction = this.options.isEnglish ? "ltr" : "rtl";

      completedDiv.style.animation = "srFadeIn 0.4s ease";

      const svgElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      svgElement.setAttribute("width", "80");
      svgElement.setAttribute("height", "80");
      svgElement.setAttribute("viewBox", "0 0 80 80");
      svgElement.setAttribute("fill", "none");
      svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgElement.style.margin = "0 auto 16px";
      svgElement.style.display = "block";

      const circleElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circleElement.setAttribute("cx", "40");
      circleElement.setAttribute("cy", "40");
      circleElement.setAttribute("r", "38");
      circleElement.setAttribute("fill", "none");
      circleElement.setAttribute("stroke", "#10B981");
      circleElement.setAttribute("stroke-width", "4");

      const pathElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      pathElement.setAttribute("d", "M26 41L36 51L56 31");
      pathElement.setAttribute("stroke", "#10B981");
      pathElement.setAttribute("stroke-width", "5");
      pathElement.setAttribute("stroke-linecap", "round");
      pathElement.setAttribute("stroke-linejoin", "round");

      svgElement.appendChild(circleElement);
      svgElement.appendChild(pathElement);
      completedDiv.appendChild(svgElement);

      const titleElement = document.createElement("h2");
      this._applyStyles(titleElement, this.styles.completedTitle);
      titleElement.textContent = title;

      const messageElement = document.createElement("p");
      this._applyStyles(messageElement, this.styles.completedMessage);
      messageElement.textContent = message;

      completedDiv.appendChild(svgElement);
      completedDiv.appendChild(titleElement);
      completedDiv.appendChild(messageElement);

      this.wrapper.appendChild(completedDiv);
    }

    /**
     * Clean up event listeners and resources
     */
    destroy() {
      if (this.eventListeners) {
        this.eventListeners.forEach(({ element, eventType, handler }) => {
          if (element) {
            element.removeEventListener(eventType, handler);
          }
        });
        this.eventListeners = [];
      }

      const notifications = this.shadow.querySelectorAll(".sr-notification");
      notifications.forEach((notification) => {
        if (notification.parentNode === this.shadow) {
          this.shadow.removeChild(notification);
        }
      });

      if (this.shadow) {
        while (this.shadow.firstChild) {
          this.shadow.removeChild(this.shadow.firstChild);
        }
      }

      this.surveyData = null;
      this.responses = {};
      this.errors = {};
      this.submitted = false;
    }
  }

  window.SurveyReader = SurveyReader;
})();
