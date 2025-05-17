import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Demo() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Demo | ${siteConfig.title}`}
      description="Shadow DOM Survey interactive demo"
    >
      <main className="container margin-vert--lg">
        <h1>Interactive Demo</h1>
        <p>
          This page will contain an interactive demo of the Shadow DOM Survey
          components.
        </p>
        <p>Check back soon for a fully functional demonstration.</p>
      </main>
    </Layout>
  );
}
