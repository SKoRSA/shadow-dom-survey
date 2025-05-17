module.exports = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      items: ["intro"],
    },
    {
      type: "category",
      label: "Getting Started",
      items: ["getting-started/installation", "getting-started/quick-start"],
    },
    {
      type: "category",
      label: "Components",
      items: ["components/survey-builder", "components/survey-reader"],
    },
    {
      type: "category",
      label: "Question Types",
      items: [
        "question-types/single-line-text",
        "question-types/multi-line-text",
        "question-types/single-choice",
        "question-types/multiple-choice",
        "question-types/dropdown",
        "question-types/rating",
        "question-types/matrix",
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: ["api/overview", "api/builder-api", "api/reader-api"],
    },

    {
      type: "category",
      label: "Contributing",
      items: ["contributing/guidelines"],
    },
  ],
};
