import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/shadow-dom-survey/__docusaurus/debug',
    component: ComponentCreator('/shadow-dom-survey/__docusaurus/debug', 'f97'),
    exact: true
  },
  {
    path: '/shadow-dom-survey/__docusaurus/debug/config',
    component: ComponentCreator('/shadow-dom-survey/__docusaurus/debug/config', 'e12'),
    exact: true
  },
  {
    path: '/shadow-dom-survey/__docusaurus/debug/content',
    component: ComponentCreator('/shadow-dom-survey/__docusaurus/debug/content', 'ccb'),
    exact: true
  },
  {
    path: '/shadow-dom-survey/__docusaurus/debug/globalData',
    component: ComponentCreator('/shadow-dom-survey/__docusaurus/debug/globalData', 'ec5'),
    exact: true
  },
  {
    path: '/shadow-dom-survey/__docusaurus/debug/metadata',
    component: ComponentCreator('/shadow-dom-survey/__docusaurus/debug/metadata', 'a05'),
    exact: true
  },
  {
    path: '/shadow-dom-survey/__docusaurus/debug/registry',
    component: ComponentCreator('/shadow-dom-survey/__docusaurus/debug/registry', 'aa4'),
    exact: true
  },
  {
    path: '/shadow-dom-survey/__docusaurus/debug/routes',
    component: ComponentCreator('/shadow-dom-survey/__docusaurus/debug/routes', 'beb'),
    exact: true
  },
  {
    path: '/shadow-dom-survey/demo',
    component: ComponentCreator('/shadow-dom-survey/demo', '04d'),
    exact: true
  },
  {
    path: '/shadow-dom-survey/docs',
    component: ComponentCreator('/shadow-dom-survey/docs', 'b4b'),
    routes: [
      {
        path: '/shadow-dom-survey/docs/api/builder-api',
        component: ComponentCreator('/shadow-dom-survey/docs/api/builder-api', '365'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/shadow-dom-survey/docs/api/overview',
        component: ComponentCreator('/shadow-dom-survey/docs/api/overview', '9c7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/shadow-dom-survey/docs/api/reader-api',
        component: ComponentCreator('/shadow-dom-survey/docs/api/reader-api', 'fde'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/shadow-dom-survey/docs/components/survey-builder',
        component: ComponentCreator('/shadow-dom-survey/docs/components/survey-builder', '6cd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/shadow-dom-survey/docs/components/survey-reader',
        component: ComponentCreator('/shadow-dom-survey/docs/components/survey-reader', '882'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/shadow-dom-survey/docs/contributing/guidelines',
        component: ComponentCreator('/shadow-dom-survey/docs/contributing/guidelines', '3da'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/shadow-dom-survey/docs/getting-started/installation',
        component: ComponentCreator('/shadow-dom-survey/docs/getting-started/installation', '86b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/shadow-dom-survey/docs/getting-started/quick-start',
        component: ComponentCreator('/shadow-dom-survey/docs/getting-started/quick-start', '0d3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/shadow-dom-survey/docs/intro',
        component: ComponentCreator('/shadow-dom-survey/docs/intro', '4a9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/shadow-dom-survey/docs/question-types/dropdown',
        component: ComponentCreator('/shadow-dom-survey/docs/question-types/dropdown', '351'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/shadow-dom-survey/docs/question-types/matrix',
        component: ComponentCreator('/shadow-dom-survey/docs/question-types/matrix', 'f71'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/shadow-dom-survey/docs/question-types/multi-line-text',
        component: ComponentCreator('/shadow-dom-survey/docs/question-types/multi-line-text', 'e80'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/shadow-dom-survey/docs/question-types/multiple-choice',
        component: ComponentCreator('/shadow-dom-survey/docs/question-types/multiple-choice', '549'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/shadow-dom-survey/docs/question-types/rating',
        component: ComponentCreator('/shadow-dom-survey/docs/question-types/rating', '29e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/shadow-dom-survey/docs/question-types/single-choice',
        component: ComponentCreator('/shadow-dom-survey/docs/question-types/single-choice', '4ee'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/shadow-dom-survey/docs/question-types/single-line-text',
        component: ComponentCreator('/shadow-dom-survey/docs/question-types/single-line-text', 'dd8'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/shadow-dom-survey/',
    component: ComponentCreator('/shadow-dom-survey/', '366'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
