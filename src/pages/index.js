import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary intro', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Reece Atkinson"
      description="Reece Atkinson's portfolio website.">
      <HomepageHeader />
      <main>
        <br/>
        <div class="project">
          <h2>Electric Purple:</h2>
          <p>Electric Purple is a theme that makes your dev environment more colourful but maintains the dark mode that developers love to prevent eye strain. <a href='https://marketplace.visualstudio.com/items?itemName=reece.electric-purple'>Go to VS Code Marketplace</a></p>
          <a href="https://www.producthunt.com/posts/electric-purple-vs-code-theme?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-electric-purple-vs-code-theme" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=324898&theme=light" alt="Electric Purple VS Code Theme - A theme that will brighten your env and not strain your eyes | Product Hunt" width="250" height="54" /></a>
        </div>
        <br/>
        <div class="project">
          <h2>TLDR Policies:</h2>
          <p>TLDR is a web application that lets you copy and paste the terms or privacy policies of a website and summarise it in 10 bullet points. <a href='https://tldrpolicies.web.app'>Go to TLDR Policies</a></p>
        </div>
        <br/>
        <div class="project">
          <h2>[WIP] Moment:</h2>
          <p>One dashboard where you can search all your Google and Microsoft Apps.</p>
        </div>
        <br/>
        <div class="project">
          <h2>[WIP] Momentum:</h2>
          <p>One place with all the tools you need (including email) to get more done!</p>
        </div>
      </main>
    </Layout>
  );
}
