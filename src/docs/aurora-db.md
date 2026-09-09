---
title: "Aurora-DB"
permalink: "/docs/aurora-db/"
layout: docs.njk
---

<section class="section-card" id="overview">
  <h2>Aurora-DB</h2>
  <p>
    Aurora DB is Aurora’s proprietary service risk knowledge database. It is a curated and enriched knowledge base that combines multiple external sources with our own research.
  </p>
</section>

<section class="section-card" id="overview">
  <h2>Risk Engine</h2>
  <p>
    The Risk Engine builds on top of Aurora DB, mapping identities and service usage patterns to specific (AI) services while filtering noise and enriching requests with risk context.
  </p>
</section>

<section class="section-card" id="capabilities">
  <h2>Capabilities</h2>
  <ul>
    <li><strong>Service catalog:</strong> Normalizes signatures for known AI assistants, developer tooling, HR, finance, and data apps.</li>
    <li><strong>Identity correlation:</strong> Joins browser, network, and email insights to map unmanaged identities to real users.</li>
    <li><strong>Tenant isolation:</strong> Both run entirely inside your environment to keep enrichment logic and signals private.</li>
  </ul>
</section>

<section class="section-card" id="operations">
  <h2>Operating Aurora-DB</h2>
  <ol>
    <li><strong>We regularly update</strong> the knowledge base to capture newly observed AI tools and SaaS behaviors. We strongly advise that you regularly update it too.</li>
    <li><strong>Calibrate</strong> with your risk tolerances, allowlists, and trusted domains.</li>
    <li><strong>Monitor</strong> downstream systems (dashboards, alerts) to validate that enrichment is driving actionable findings.</li>
  </ol>
</section>

<section class="section-card" id="next-steps">
  <ul style="display: flex; justify-content: space-between; list-style: none; padding: 0; margin: 0; gap: 1rem; flex-wrap: wrap;">
    <li><a href="/docs/email-analysis-engine/">← Email analysis engine</a></li>
    <li><a href="/docs/reporting-dashboard/">Reporting dashboard →</a></li>
  </ul>
</section>
