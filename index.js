/**
 * Shadow DOM Survey Components
 * @author: MAJED AL-ANAZI
 * @version: 1.0.0
 * @license: MIT
 * @description: A complete survey system with builder and reader components, built with Shadow DOM
 * @Github: https://github.com/SKoRSA
 */

// Import the components
require("./builder-embed/builder-embed.js");
require("./reader-embed/reader-embed.js");

// Export the components if used in a CommonJS environment
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    SurveyBuilder: global.SurveyBuilder,
    SurveyReader: global.SurveyReader,
  };
}

// Export as ES modules
if (typeof window !== "undefined") {
  window.ShadowDOMSurvey = {
    SurveyBuilder: window.SurveyBuilder,
    SurveyReader: window.SurveyReader,
  };
}
