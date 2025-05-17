import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className={clsx("hero__subtitle", styles.tagline)}>
              {siteConfig.tagline}
            </p>
            <div className={styles.buttons}>
              <a
                className="button button--secondary button--lg"
                href={`${siteConfig.baseUrl}docs/intro`}
                style={{
                  position: "relative",
                  zIndex: 10,
                  pointerEvents: "all",
                }}
              >
                Get Started
              </a>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroImageWrapper}>
              <img
                className={styles.heroImage}
                src="/shadow-dom-survey/img/hero-illustration.svg"
                alt="Shadow DOM Survey illustration"
              />
              <div className={styles.heroImageBackdrop}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Shadow DOM Survey - A complete survey system with builder and reader components"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
