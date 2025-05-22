/**
 * @author: MAJED AL-ANAZI
 * @version: 1.0.0
 * @license: MIT
 * @description: A self-contained, embeddable survey builder component
 * @Github: https://github.com/majed-r
 */
(function () {
  const styles = `
    * {
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    :host {
      display: block;
    }
    .sb-container {
      max-width: 800px;
      margin: 0 auto;
      color: #1f2937;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      padding: 20px;
    }
    .sb-header {
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 1px solid #e5e7eb;
    }
    .sb-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0 0 5px 0;
    }
    .sb-form-group {
      margin-bottom: 20px;
    }
    .sb-label {
      display: block;
      font-weight: 500;
      margin-bottom: 5px;
      font-size: 0.875rem;
    }
    .sb-required::after {
      content: " *";
      color: #ef4444;
    }
    .sb-input, .sb-select, .sb-textarea {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      font-size: 0.875rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    .sb-input:focus, .sb-select:focus, .sb-textarea:focus {
      outline: none;
      border-color: #4f46e5;
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
    }
    .sb-textarea {
      min-height: 100px;
      resize: vertical;
    }
    .sb-select {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="%236b7280"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>');
      background-position: right 0.75rem center;
      background-size: 1rem;
      background-repeat: no-repeat;
      padding-right: 2.5rem;
      appearance: none;
    }
    .sb-options-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 10px;
    }
    .sb-option-item {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .sb-option-item .sb-input {
      flex-grow: 1;
    }
    .sb-add-btn {
      margin-top: 10px;
      background-color: transparent;
      color: #4f46e5;
      border: 1px dashed #4f46e5;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 500;
      transition: background-color 0.2s;
    }
    .sb-add-btn:hover {
      background-color: rgba(79, 70, 229, 0.05);
    }
    .sb-remove-btn {
      background-color: transparent;
      border: none;
      color: #6b7280;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      padding: 0;
      border-radius: 4px;
      transition: all 0.2s ease;
      flex-shrink: 0;
    }
    .sb-remove-btn:hover {
      background-color: #f3f4f6;
      color: #ef4444;
    }
    .sb-remove-btn svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      display: block;
    }
    .sb-actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 30px;
    }
    .sb-btn {
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    .sb-btn-primary {
      background-color: #4f46e5;
      color: white;
      border: none;
    }
    .sb-btn-primary:hover {
      background-color: #4338ca;
    }
    .sb-btn-secondary {
      background-color: white;
      color: #4b5563;
      border: 1px solid #d1d5db;
    }
    .sb-btn-secondary:hover {
      background-color: #f9fafb;
    }
    .sb-matrix-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    .sb-matrix-table th, .sb-matrix-table td {
      border: 1px solid #e5e7eb;
      padding: 8px 12px;
      text-align: left;
    }
    .sb-matrix-table th {
      background-color: #f9fafb;
      font-weight: 500;
    }
    .sb-notification {
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 12px 20px;
      border-radius: 4px;
      color: white;
      font-size: 14px;
      font-weight: 500;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      animation: sbSlideIn 0.3s ease, sbFadeOut 0.5s ease forwards;
      animation-delay: 0s, 2500ms;
    }
    .sb-notification-success {
      background-color: #10b981;
    }
    .sb-notification-error {
      background-color: #ef4444;
    }
    @keyframes sbSlideIn {
      from { transform: translateY(100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes sbFadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
    .sb-matrix-container {
      margin-top: 15px;
    }
    .sb-matrix-section {
      margin-bottom: 15px;
    }
    .sb-matrix-preview {
      margin-top: 20px;
      border: 1px solid #e5e7eb;
      border-radius: 4px;
      padding: 15px;
      background-color: #f9fafb;
    }
    .sb-error-message {
      color: #ef4444;
      font-size: 0.8rem;
      margin-top: 5px;
    }
  `;

  const QUESTION_TYPES = [
    { id: "singleText", labelEn: "Single Line Text", labelAr: "نص قصير" },
    { id: "longText", labelEn: "Multi-line Text", labelAr: "نص طويل" },
    {
      id: "singleChoice",
      labelEn: "Single Choice (Radio)",
      labelAr: "اختيار واحد",
    },
    {
      id: "multipleChoice",
      labelEn: "Multiple Choice (Checkbox)",
      labelAr: "اختيار متعدد",
    },
    { id: "dropdown", labelEn: "Dropdown", labelAr: "قائمة منسدلة" },
    { id: "rating", labelEn: "Rating Scale", labelAr: "مقياس تصنيف" },
    { id: "matrix", labelEn: "Matrix Question", labelAr: "سؤال مصفوفة" },
  ];

  const DEFAULT_QUESTION = {
    type: "singleText",
    text: "",
    settings: {
      required: false,
      placeholder: "",
    },
    options: [],
    rows: [],
    columns: [],
  };

  const ICONS = {
    remove: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 16px; height: 16px; min-width: 16px; min-height: 16px; display: block;">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>`,
  };

  /**
   * SurveyBuilder main class
   */
  class SurveyBuilder {
    /**
     * @param {string|HTMLElement} selector - CSS selector or DOM element
     * @param {Object} options - Configuration options
     */
    constructor(selector, options = {}) {
      this.options = Object.assign(
        {
          onSave: async (data) => {
            console.log("Survey saved:", data);
            return data;
          },
          loadSurvey: async () => {
            return null;
          },
          autosave: false,
          notificationDuration: 3000,
          isEnglish: false,
        },
        options
      );

      this.container =
        typeof selector === "string"
          ? document.querySelector(selector)
          : selector;

      if (!this.container) {
        console.error("SurveyBuilder: Container element not found");
        return;
      }

      if (this.container.shadowRoot) {
        this.shadowRoot = this.container.shadowRoot;
        while (this.shadowRoot.firstChild) {
          this.shadowRoot.removeChild(this.shadowRoot.firstChild);
        }
      } else {
        this.shadowRoot = this.container.attachShadow({ mode: "open" });
      }

      this.surveyData = {
        surveyId: this._generateUniqueId(),
        title: "",
        description: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        question: Object.assign({}, DEFAULT_QUESTION),
      };

      this.eventListeners = [];

      this._initUI();

      this._loadInitial();
    }

    /**
     * @param {string} selector - CSS selector
     * @param {HTMLElement} parent - Parent element (optional)
     * @returns {HTMLElement|null} - The found element or null
     */
    _getElement(selector, parent = this.shadowRoot) {
      const element = parent.querySelector(selector);
      if (!element) {
        console.warn(`Element not found: ${selector}`);
      }
      return element;
    }

    /**
     * @param {string} selector - CSS selector
     * @param {HTMLElement} parent - Parent element (optional)
     * @returns {Array<HTMLElement>} - Array of found elements
     */
    _getElements(selector, parent = this.shadowRoot) {
      return Array.from(parent.querySelectorAll(selector));
    }

    /**
     * @param {HTMLElement} element - Element to add listener to
     * @param {string} eventType - Event type (e.g., 'click')
     * @param {Function} handler - Event handler function
     */
    _addEventListener(element, eventType, handler) {
      if (!element) return;

      element.addEventListener(eventType, handler);
      this.eventListeners.push({ element, eventType, handler });
    }

    /**
     * Remove all tracked event listeners
     */
    _removeAllEventListeners() {
      this.eventListeners.forEach(({ element, eventType, handler }) => {
        element.removeEventListener(eventType, handler);
      });
      this.eventListeners = [];
    }

    /**
     * Remove event listeners specific to option fields
     */
    _removeOptionSpecificEventListeners() {
      this.eventListeners = this.eventListeners.filter(({ element }) => {
        const isOptionElement =
          element?.classList?.contains("sb-option-input") ||
          element?.classList?.contains("sb-matrix-row-input") ||
          element?.classList?.contains("sb-matrix-column-input") ||
          element?.classList?.contains("sb-remove-btn") ||
          element?.id === "sb-add-option-btn" ||
          element?.id === "sb-add-row-btn" ||
          element?.id === "sb-add-column-btn";

        if (isOptionElement) {
          element.removeEventListener("click", element._clickHandler);
          element.removeEventListener("input", element._inputHandler);
          return false;
        }
        return true;
      });
    }

    /**
     * @param {string} tag - HTML tag name
     * @param {Object} attributes - HTML attributes
     * @param {string|HTMLElement} content - Inner content
     * @returns {HTMLElement} - The created element
     */
    _createElement(tag, attributes = {}, content = "") {
      const element = document.createElement(tag);

      Object.entries(attributes).forEach(([key, value]) => {
        if (key === "className") {
          element.className = value;
        } else if (key === "innerHTML") {
          element.innerHTML = value;
        } else {
          element.setAttribute(key, value);
        }
      });

      if (typeof content === "string") {
        element.textContent = content;
      } else if (content instanceof HTMLElement) {
        element.appendChild(content);
      }

      return element;
    }

    /**
     * Initialize the UI
     */
    _initUI() {
      const styleElement = document.createElement("style");
      styleElement.textContent = styles;
      this.shadowRoot.appendChild(styleElement);

      const labels = {
        title: this.options.isEnglish ? "Survey Builder" : "منشئ الاستبيان",
        surveyTitle: this.options.isEnglish
          ? "Survey Title"
          : "عنوان الاستبيان",
        titlePlaceholder: this.options.isEnglish
          ? "Enter survey title"
          : "أدخل عنوان الاستبيان",
        description: this.options.isEnglish ? "Description" : "الوصف",
        descriptionPlaceholder: this.options.isEnglish
          ? "Enter survey description"
          : "أدخل وصف الاستبيان",
        questionType: this.options.isEnglish ? "Question Type" : "نوع السؤال",
        questionText: this.options.isEnglish ? "Question Text" : "نص السؤال",
        questionPlaceholder: this.options.isEnglish
          ? "Enter your question"
          : "أدخل سؤالك",
        placeholderText: this.options.isEnglish
          ? "Placeholder Text"
          : "نص العنصر النائب",
        placeholderPlaceholder: this.options.isEnglish
          ? "Enter placeholder text"
          : "أدخل نص العنصر النائب",
        required: this.options.isEnglish ? "Required question" : "سؤال مطلوب",
        reset: this.options.isEnglish ? "Reset" : "إعادة تعيين",
        save: this.options.isEnglish ? "Save Survey" : "حفظ الاستبيان",
      };

      const surveyContainer = document.createElement("div");
      surveyContainer.classList.add("sb-container");
      surveyContainer.innerHTML = `
        <div class="sb-header">
          <h2 class="sb-title">${labels.title}</h2>
        </div>
        <form class="sb-form">
          <div class="sb-form-group">
            <label class="sb-label sb-required" for="sb-question-title">${
              labels.surveyTitle
            }</label>
            <input type="text" id="sb-question-title" class="sb-input" placeholder="${
              labels.titlePlaceholder
            }">
            <div id="sb-title-error" class="sb-error-message"></div>
          </div>
          
          <div class="sb-form-group">
            <label class="sb-label" for="sb-question-description">${
              labels.description
            }</label>
            <textarea id="sb-question-description" class="sb-textarea" placeholder="${
              labels.descriptionPlaceholder
            }"></textarea>
          </div>
          
          <div class="sb-form-group">
            <label class="sb-label sb-required" for="sb-question-type">${
              labels.questionType
            }</label>
            <select id="sb-question-type" class="sb-select">
              ${QUESTION_TYPES.map(
                (type) =>
                  `<option value="${type.id}">${
                    this.options.isEnglish ? type.labelEn : type.labelAr
                  }</option>`
              ).join("")}
            </select>
          </div>
          
          <div class="sb-form-group">
            <label class="sb-label sb-required" for="sb-question-text">${
              labels.questionText
            }</label>
            <input type="text" id="sb-question-text" class="sb-input" placeholder="${
              labels.questionPlaceholder
            }">
            <div id="sb-question-error" class="sb-error-message"></div>
          </div>
          
          <div class="sb-form-group">
            <label class="sb-label" for="sb-question-placeholder">${
              labels.placeholderText
            }</label>
            <input type="text" id="sb-question-placeholder" class="sb-input" placeholder="${
              labels.placeholderPlaceholder
            }">
          </div>
          
          <div class="sb-form-group sb-checkbox-group">
            <label class="sb-checkbox-label">
              <input type="checkbox" id="sb-question-required">
              ${labels.required}
            </label>
          </div>
          
          <div id="sb-dynamic-options"></div>
          
          <div class="sb-actions">
            <button type="button" class="sb-btn sb-btn-secondary" id="sb-reset-btn">${
              labels.reset
            }</button>
            <button type="button" class="sb-btn sb-btn-primary" id="sb-save-btn">${
              labels.save
            }</button>
          </div>
        </form>
      `;

      this.shadowRoot.appendChild(surveyContainer);

      this._addEventListeners();

      this._renderDynamicFields(this.surveyData.question.type);
    }

    /**
     * Add event listeners to form elements
     */
    _addEventListeners() {
      const questionTypeSelect = this._getElement("#sb-question-type");
      if (questionTypeSelect) {
        this._addEventListener(questionTypeSelect, "change", (e) => {
          const newType = e.target.value;
          this.surveyData.question.type = newType;
          this._renderDynamicFields(newType);
        });
      }

      this._addEventListener(
        this._getElement("#sb-question-title"),
        "input",
        () => this._validateField("title")
      );

      this._addEventListener(
        this._getElement("#sb-question-text"),
        "input",
        () => this._validateField("question")
      );

      const saveBtn = this._getElement("#sb-save-btn");
      if (saveBtn) {
        this._addEventListener(saveBtn, "click", () => {
          if (this._validateForm()) {
            this._updateSurveyDataFromForm();
            this.save();
          }
        });
      }

      const resetBtn = this._getElement("#sb-reset-btn");
      if (resetBtn) {
        this._addEventListener(resetBtn, "click", () => {
          this.reset();
        });
      }
    }

    /**
     * @param {string} fieldType - Type of field to validate
     * @returns {boolean} - Is field valid
     */
    _validateField(fieldType) {
      let isValid = true;
      let errorElement;
      let inputElement;

      const errorMessages = {
        titleRequired: this.options.isEnglish
          ? "Survey title is required"
          : "عنوان الاستبيان مطلوب",
        questionRequired: this.options.isEnglish
          ? "Question text is required"
          : "نص السؤال مطلوب",
        minTwoOptions: this.options.isEnglish
          ? "At least two options are required"
          : "مطلوب خيارين على الأقل",
        allOptionsRequired: this.options.isEnglish
          ? "All options must have a value"
          : "يجب أن تحتوي جميع الخيارات على قيمة",
        minOneRow: this.options.isEnglish
          ? "At least one row is required"
          : "مطلوب صف واحد على الأقل",
        minTwoColumns: this.options.isEnglish
          ? "At least two columns are required"
          : "مطلوب عمودين على الأقل",
        allRowsColumnsRequired: this.options.isEnglish
          ? "All rows and columns must have a value"
          : "يجب أن تحتوي جميع الصفوف والأعمدة على قيمة",
      };

      switch (fieldType) {
        case "title":
          errorElement = this._getElement("#sb-title-error");
          inputElement = this._getElement("#sb-question-title");

          if (!inputElement.value.trim()) {
            if (errorElement)
              errorElement.textContent = errorMessages.titleRequired;
            isValid = false;
          } else {
            if (errorElement) errorElement.textContent = "";
          }
          break;

        case "question":
          errorElement = this._getElement("#sb-question-error");
          inputElement = this._getElement("#sb-question-text");

          if (!inputElement.value.trim()) {
            if (errorElement)
              errorElement.textContent = errorMessages.questionRequired;
            isValid = false;
          } else {
            if (errorElement) errorElement.textContent = "";
          }
          break;

        case "options":
          const optionsContainer = this._getElement("#sb-options-list");
          if (!optionsContainer) return true;

          const options = this._getElements(
            ".sb-option-input",
            optionsContainer
          );
          const optionsError = this._getElement("#sb-options-error");

          if (options.length < 2) {
            if (optionsError)
              optionsError.textContent = errorMessages.minTwoOptions;
            isValid = false;
          } else {
            const hasEmptyOption = options.some(
              (option) => !option.value.trim()
            );
            if (hasEmptyOption) {
              if (optionsError)
                optionsError.textContent = errorMessages.allOptionsRequired;
              isValid = false;
            } else {
              if (optionsError) optionsError.textContent = "";
            }
          }
          break;

        case "matrix":
          const rowsList = this._getElement("#sb-matrix-rows-list");
          const columnsList = this._getElement("#sb-matrix-columns-list");
          const matrixError = this._getElement("#sb-matrix-error");

          if (!rowsList || !columnsList) return true;

          const rows = this._getElements(".sb-matrix-row-input", rowsList);
          const columns = this._getElements(
            ".sb-matrix-column-input",
            columnsList
          );

          if (rows.length < 1) {
            if (matrixError) matrixError.textContent = errorMessages.minOneRow;
            isValid = false;
          } else if (columns.length < 2) {
            if (matrixError)
              matrixError.textContent = errorMessages.minTwoColumns;
            isValid = false;
          } else {
            const hasEmptyRow = rows.some((row) => !row.value.trim());
            const hasEmptyColumn = columns.some((col) => !col.value.trim());

            if (hasEmptyRow || hasEmptyColumn) {
              if (matrixError)
                matrixError.textContent = errorMessages.allRowsColumnsRequired;
              isValid = false;
            } else {
              if (matrixError) matrixError.textContent = "";
            }
          }
          break;
      }

      return isValid;
    }

    /**
     * Validate the entire form
     * @returns {boolean} - Is form valid
     */
    _validateForm() {
      let isValid = true;

      isValid = this._validateField("title") && isValid;
      isValid = this._validateField("question") && isValid;

      const questionType = this.surveyData.question.type;

      if (
        ["singleChoice", "multipleChoice", "dropdown"].includes(questionType)
      ) {
        isValid = this._validateField("options") && isValid;
      } else if (questionType === "matrix") {
        isValid = this._validateField("matrix") && isValid;
      }

      if (!isValid) {
        const errorMessage = this.options.isEnglish
          ? "Please correct the errors in the form"
          : "يرجى تصحيح الأخطاء في النموذج";
        this._showNotification(errorMessage, "error");
      }

      return isValid;
    }

    /**
     * Render dynamic fields based on question type
     * @param {string} questionType - Type of question
     */
    _renderDynamicFields(questionType) {
      const container = this._getElement("#sb-dynamic-options");
      if (!container) return;

      this._removeOptionSpecificEventListeners();
      container.innerHTML = "";

      switch (questionType) {
        case "singleChoice":
        case "multipleChoice":
        case "dropdown":
          this._renderChoiceOptions(container);
          break;

        case "rating":
          this._renderRatingOptions(container);
          break;

        case "matrix":
          this._renderMatrixOptions(container);
          break;
      }
    }

    /**
     * Render options for choice-based questions
     * @param {HTMLElement} container - Container element
     */
    _renderChoiceOptions(container) {
      const questionType = this.surveyData.question.type;
      const typeLabel =
        QUESTION_TYPES.find((t) => t.id === questionType)?.labelEn || "Options";

      const labels = {
        options: this.options.isEnglish
          ? `${typeLabel} Options`
          : `خيارات ${
              this.options.isEnglish
                ? typeLabel
                : QUESTION_TYPES.find((t) => t.id === questionType)?.labelAr ||
                  "الخيارات"
            }`,
        addOption: this.options.isEnglish ? "+ Add Option" : "+ إضافة خيار",
        optionPlaceholder: this.options.isEnglish
          ? "Enter option text"
          : "أدخل نص الخيار",
      };

      const optionsGroup = this._createElement("div", {
        className: "sb-form-group",
      });
      optionsGroup.innerHTML = `
        <label class="sb-label sb-required">${labels.options}</label>
        <div class="sb-options-container" id="sb-options-list"></div>
        <div id="sb-options-error" class="sb-error-message"></div>
        <button type="button" class="sb-add-btn" id="sb-add-option-btn">${labels.addOption}</button>
      `;

      container.appendChild(optionsGroup);

      const optionsList = this._getElement("#sb-options-list", container);
      if (!optionsList) return;

      const options = this.surveyData.question.options || [];
      if (options.length === 0) {
        const option1 = this.options.isEnglish ? "Option 1" : "الخيار 1";
        const option2 = this.options.isEnglish ? "Option 2" : "الخيار 2";
        this._addOptionField(optionsList, option1);
        this._addOptionField(optionsList, option2);
      } else {
        options.forEach((option) => {
          this._addOptionField(optionsList, option);
        });
      }

      const addOptionBtn = this._getElement("#sb-add-option-btn", container);
      if (addOptionBtn) {
        this._addEventListener(addOptionBtn, "click", () => {
          this._addOptionField(optionsList, "", labels.optionPlaceholder);
          this._validateField("options");
        });
      }
    }

    /**
     * @param {HTMLElement} container - Container element
     * @param {string} value - Initial value
     * @param {string} placeholder - Placeholder text
     */
    _addOptionField(container, value = "", placeholder = "") {
      if (!placeholder) {
        placeholder = this.options.isEnglish
          ? "Enter option text"
          : "أدخل نص الخيار";
      }

      const optionItem = this._createElement("div", {
        className: "sb-option-item",
      });

      const input = this._createElement("input", {
        type: "text",
        className: "sb-input sb-option-input",
        value: value,
        placeholder: placeholder,
      });

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "sb-remove-btn";
      removeBtn.innerHTML = ICONS.remove;

      optionItem.appendChild(input);
      optionItem.appendChild(removeBtn);
      container.appendChild(optionItem);

      this._addEventListener(removeBtn, "click", () => {
        optionItem.remove();
        this._validateField("options");
      });

      this._addEventListener(input, "input", () => {
        this._validateField("options");
      });
    }

    /**
     * Render rating scale options
     * @param {HTMLElement} container - Container element
     */
    _renderRatingOptions(container) {
      const ratingGroup = this._createElement("div", {
        className: "sb-form-group",
      });

      const currentMaxValue = this.surveyData.question.settings?.maxValue || 5;
      const maxRatingLabel = this.options.isEnglish
        ? "Maximum Rating Value"
        : "الحد الأقصى لقيمة التقييم";

      ratingGroup.innerHTML = `
        <label class="sb-label" for="sb-rating-max">${maxRatingLabel}</label>
        <select id="sb-rating-max" class="sb-select">
          ${[5, 7, 10]
            .map(
              (num) =>
                `<option value="${num}" ${
                  currentMaxValue === num ? "selected" : ""
                }>${num}</option>`
            )
            .join("")}
        </select>
      `;

      container.appendChild(ratingGroup);
    }

    /**
     * Render matrix question options
     * @param {HTMLElement} container - Container element
     */
    _renderMatrixOptions(container) {
      const labels = {
        rows: this.options.isEnglish
          ? "Matrix Rows (Questions)"
          : "صفوف المصفوفة (الأسئلة)",
        columns: this.options.isEnglish
          ? "Matrix Columns (Options)"
          : "أعمدة المصفوفة (الخيارات)",
        addRow: this.options.isEnglish ? "+ Add Row" : "+ إضافة صف",
        addColumn: this.options.isEnglish ? "+ Add Column" : "+ إضافة عمود",
        rowPlaceholder: this.options.isEnglish
          ? "Enter row question"
          : "أدخل سؤال الصف",
        columnPlaceholder: this.options.isEnglish
          ? "Enter column option"
          : "أدخل خيار العمود",
      };

      const matrixContainer = this._createElement("div", {
        className: "sb-matrix-container",
      });

      const rowsSection = this._createElement("div", {
        className: "sb-form-group sb-matrix-section",
      });
      rowsSection.innerHTML = `
        <label class="sb-label sb-required">${labels.rows}</label>
        <div class="sb-options-container" id="sb-matrix-rows-list"></div>
        <button type="button" class="sb-add-btn" id="sb-add-row-btn">${labels.addRow}</button>
      `;

      const columnsSection = this._createElement("div", {
        className: "sb-form-group sb-matrix-section",
      });
      columnsSection.innerHTML = `
        <label class="sb-label sb-required">${labels.columns}</label>
        <div class="sb-options-container" id="sb-matrix-columns-list"></div>
        <button type="button" class="sb-add-btn" id="sb-add-column-btn">${labels.addColumn}</button>
      `;

      const errorSection = this._createElement("div", {
        id: "sb-matrix-error",
        className: "sb-error-message",
      });

      matrixContainer.appendChild(rowsSection);
      matrixContainer.appendChild(columnsSection);
      matrixContainer.appendChild(errorSection);
      container.appendChild(matrixContainer);

      const rowsList = this._getElement(
        "#sb-matrix-rows-list",
        matrixContainer
      );
      if (rowsList) {
        const rows = this.surveyData.question.rows || [];

        if (rows.length === 0) {
          const defaultQuestion = this.options.isEnglish
            ? "Question 1"
            : "سؤال 1";
          this._addMatrixRowField(
            rowsList,
            defaultQuestion,
            labels.rowPlaceholder
          );
        } else {
          rows.forEach((row) => {
            this._addMatrixRowField(rowsList, row, labels.rowPlaceholder);
          });
        }
      }

      const columnsList = this._getElement(
        "#sb-matrix-columns-list",
        matrixContainer
      );
      if (columnsList) {
        const columns = this.surveyData.question.columns || [];

        if (columns.length === 0) {
          const defaultOptions = this.options.isEnglish
            ? [
                "Strongly Disagree",
                "Disagree",
                "Neutral",
                "Agree",
                "Strongly Agree",
              ]
            : ["أعارض بشدة", "أعارض", "محايد", "أوافق", "أوافق بشدة"];

          defaultOptions.forEach((option) => {
            this._addMatrixColumnField(
              columnsList,
              option,
              labels.columnPlaceholder
            );
          });
        } else {
          columns.forEach((column) => {
            this._addMatrixColumnField(
              columnsList,
              column,
              labels.columnPlaceholder
            );
          });
        }
      }

      const addRowBtn = this._getElement("#sb-add-row-btn", matrixContainer);
      if (addRowBtn) {
        this._addEventListener(addRowBtn, "click", () => {
          if (rowsList) {
            this._addMatrixRowField(rowsList, "", labels.rowPlaceholder);
            this._validateField("matrix");
          }
        });
      }

      const addColumnBtn = this._getElement(
        "#sb-add-column-btn",
        matrixContainer
      );
      if (addColumnBtn) {
        this._addEventListener(addColumnBtn, "click", () => {
          if (columnsList) {
            this._addMatrixColumnField(
              columnsList,
              "",
              labels.columnPlaceholder
            );
            this._validateField("matrix");
          }
        });
      }

      this._validateField("matrix");
    }

    /**
     * @param {HTMLElement} container - Container element
     * @param {string} value - Initial value
     * @param {string} placeholder - Placeholder text
     */
    _addMatrixRowField(container, value = "", placeholder = "") {
      if (!placeholder) {
        placeholder = this.options.isEnglish
          ? "Enter row question"
          : "أدخل سؤال الصف";
      }

      const rowItem = this._createElement("div", {
        className: "sb-option-item",
      });

      const input = this._createElement("input", {
        type: "text",
        className: "sb-input sb-matrix-row-input",
        value: value,
        placeholder: placeholder,
      });

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "sb-remove-btn";
      removeBtn.innerHTML = ICONS.remove;

      rowItem.appendChild(input);
      rowItem.appendChild(removeBtn);
      container.appendChild(rowItem);

      this._addEventListener(removeBtn, "click", () => {
        rowItem.remove();
        this._validateField("matrix");
      });

      this._addEventListener(input, "input", () => {
        this._validateField("matrix");
      });
    }

    /**
     * @param {HTMLElement} container - Container element
     * @param {string} value - Initial value
     * @param {string} placeholder - Placeholder text
     */
    _addMatrixColumnField(container, value = "", placeholder = "") {
      if (!placeholder) {
        placeholder = this.options.isEnglish
          ? "Enter column option"
          : "أدخل خيار العمود";
      }

      const columnItem = this._createElement("div", {
        className: "sb-option-item",
      });

      const input = this._createElement("input", {
        type: "text",
        className: "sb-input sb-matrix-column-input",
        value: value,
        placeholder: placeholder,
      });

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "sb-remove-btn";
      removeBtn.innerHTML = ICONS.remove;

      columnItem.appendChild(input);
      columnItem.appendChild(removeBtn);
      container.appendChild(columnItem);

      this._addEventListener(removeBtn, "click", () => {
        columnItem.remove();
        this._validateField("matrix");
      });

      this._addEventListener(input, "input", () => {
        this._validateField("matrix");
      });
    }

    /**
     * Update survey data from form values
     */
    _updateSurveyDataFromForm() {
      const titleEl = this._getElement("#sb-question-title");
      const descriptionEl = this._getElement("#sb-question-description");
      const typeEl = this._getElement("#sb-question-type");
      const textEl = this._getElement("#sb-question-text");
      const requiredEl = this._getElement("#sb-question-required");
      const placeholderEl = this._getElement("#sb-question-placeholder");

      if (titleEl) this.surveyData.title = titleEl.value;
      if (descriptionEl) this.surveyData.description = descriptionEl.value;
      this.surveyData.updatedAt = new Date().toISOString();

      if (typeEl) this.surveyData.question.type = typeEl.value;
      if (textEl) this.surveyData.question.text = textEl.value;

      this.surveyData.question.settings = {
        required: requiredEl ? requiredEl.checked : false,
        placeholder: placeholderEl ? placeholderEl.value : "",
      };

      if (
        ["singleChoice", "multipleChoice", "dropdown"].includes(
          this.surveyData.question.type
        )
      ) {
        const optionInputs = this._getElements(".sb-option-input");
        this.surveyData.question.options = optionInputs.map(
          (input) => input.value
        );
      }

      if (this.surveyData.question.type === "rating") {
        const maxValueEl = this._getElement("#sb-rating-max");
        if (maxValueEl) {
          const maxValue = parseInt(maxValueEl.value);
          this.surveyData.question.settings.maxValue = maxValue;
        }
      }

      if (this.surveyData.question.type === "matrix") {
        const rowInputs = this._getElements(".sb-matrix-row-input");
        const columnInputs = this._getElements(".sb-matrix-column-input");

        this.surveyData.question.rows = rowInputs.map((input) => input.value);
        this.surveyData.question.columns = columnInputs.map(
          (input) => input.value
        );
      }
    }

    /**
     * Populate form with survey data
     */
    _populateForm() {
      const titleEl = this._getElement("#sb-question-title");
      const descriptionEl = this._getElement("#sb-question-description");
      const typeEl = this._getElement("#sb-question-type");
      const textEl = this._getElement("#sb-question-text");
      const placeholderEl = this._getElement("#sb-question-placeholder");
      const requiredEl = this._getElement("#sb-question-required");

      if (titleEl) titleEl.value = this.surveyData.title || "";
      if (descriptionEl)
        descriptionEl.value = this.surveyData.description || "";
      if (typeEl) typeEl.value = this.surveyData.question.type;
      if (textEl) textEl.value = this.surveyData.question.text || "";
      if (placeholderEl)
        placeholderEl.value =
          this.surveyData.question.settings?.placeholder || "";
      if (requiredEl)
        requiredEl.checked =
          this.surveyData.question.settings?.required || false;

      const errorMessages = this._getElements(".sb-error-message");
      errorMessages.forEach((el) => (el.textContent = ""));

      this._renderDynamicFields(this.surveyData.question.type);
    }

    /**
     * Load initial data
     */
    async _loadInitial() {
      try {
        const loadedData = await this.options.loadSurvey();
        if (loadedData) {
          this.surveyData = loadedData;
          this._populateForm();
        }
      } catch (error) {
        console.error("Error loading survey data:", error);
        this._showNotification("Error loading survey data", "error");
      }
    }

    /**
     * Save the survey
     */
    async save() {
      try {
        if (!this._validateForm()) {
          return false;
        }

        // Call save callback
        await this.options.onSave(this.surveyData);

        const successMessage = this.options.isEnglish
          ? "Survey saved successfully"
          : "تم حفظ الاستبيان بنجاح";

        this._showNotification(successMessage, "success");
        return true;
      } catch (error) {
        console.error("Error saving survey:", error);

        const errorMessage = this.options.isEnglish
          ? `Error saving survey: ${error.message}`
          : `خطأ في حفظ الاستبيان: ${error.message}`;

        this._showNotification(errorMessage, "error");
        return false;
      }
    }

    /**
     * Reset the form
     */
    reset() {
      this.surveyData = {
        surveyId: this._generateUniqueId(),
        title: "",
        description: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        question: Object.assign({}, DEFAULT_QUESTION),
      };

      this._populateForm();

      const resetMessage = this.options.isEnglish
        ? "Form has been reset"
        : "تمت إعادة تعيين النموذج";

      this._showNotification(resetMessage, "success");
    }

    /**
     * @param {string} message - Message to show
     * @param {string} type - Type of notification (success, error)
     */
    _showNotification(message, type = "info") {
      const notification = this._createElement(
        "div",
        {
          className: `sb-notification sb-notification-${type}`,
        },
        message
      );

      const notificationContainer = document.createElement("div");
      notificationContainer.style.position = "fixed";
      notificationContainer.style.bottom = "20px";
      notificationContainer.style.right = "20px";
      notificationContainer.style.zIndex = "1000";

      notificationContainer.appendChild(notification);
      document.body.appendChild(notificationContainer);

      setTimeout(() => {
        notificationContainer.remove();
      }, this.options.notificationDuration);
    }

    /**
     * Generate a unique ID
     * @returns {string} Unique ID
     */
    _generateUniqueId() {
      return (
        Date.now().toString(36) + Math.random().toString(36).substring(2, 9)
      );
    }

    /**
     * Public: Get current survey data without saving
     * @returns {Object} survey data
     */
    getData() {
      return JSON.parse(JSON.stringify(this.surveyData));
    }

    /**
     * Public: Load survey data programmatically and populate the form
     * @param {Object} data - survey data to load
     */
    setData(data) {
      if (data && typeof data === "object") {
        this.surveyData = JSON.parse(JSON.stringify(data));
        this._populateForm();
      } else {
        console.error("SurveyBuilder.setData expects a survey data object");
      }
    }

    /**
     * Clean up event listeners and resources
     */
    destroy() {
      this._removeAllEventListeners();

      if (this.shadowRoot) {
        while (this.shadowRoot.firstChild) {
          this.shadowRoot.removeChild(this.shadowRoot.firstChild);
        }
      }
    }
  }

  window.SurveyBuilder = SurveyBuilder;
})();
