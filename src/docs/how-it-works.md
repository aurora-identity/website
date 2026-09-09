---
title: "How Aurora works"
permalink: "/docs/how-it-works/"
layout: docs.njk
---

<section class="section-card" id="overview">
  <h2>How Aurora works</h2>
  <p>
    Aurora runs entirely inside your cloud (or on-prem environment) to ingest browser telemetry and network logs into a single,
    trustworthy view of who is using which AI tools—as well as developer, HR, data, and financial systems—without touching IAM or SSO flows.
  </p>
</section>

<section class="section-card" id="architecture">
  <h2>Architecture diagram</h2>
  <img src="/assets/images/architecture-diagram.png" alt="Aurora architecture diagram showing data flow between components" loading="lazy">
</section>

<section class="section-card" id="system">
  <h2>System overview</h2>
  <ul>
    <li><strong>The browser extension</strong> captures outgoing requests, tags them with a persistent <code>identity (uuid)</code>, and posts them to the <code>/ingest</code> API. Through collectors or workflows, logs from proxies, gateways, or SIEMs are also posted to the <code>/ingest</code> API.</li>
    <li><strong>The server</strong> supports two main uses: ingesting telemetry and exposing APIs for the reporting app, some of which call the Risk Engine. This runs in a Docker container.</li>
    <li>The server exposes an <strong>ingest endpoint</strong>, <code>POST /ingest</code>, which streams each payload into ClickHouse using the <code>JSONEachRow</code> format and rejects non-POST methods. You can read more <a target="_blank" href="/docs/ingest/">here</a>.</li>
    <li><strong>Storage</strong> of raw events happens in a ClickHouse database with information about the identity, <code>method</code>, <code>url</code>, and millisecond-level timestamps. This runs in a Docker container.</li>
    <li><strong>Aurora DB</strong> is Aurora’s proprietary service risk knowledge database. It is a curated and enriched knowledge base that combines multiple external sources with our own research.</li>
    <li><strong>The Risk Engine</strong> builds on top of Aurora DB, mapping identities and service usage patterns to specific (AI) services while filtering noise and enriching requests with risk context.</li>
  </ul>
</section>

<section class="section-card" id="flow">
  <h2>Data flow overview</h2>
  <ol>
    <li><strong>Telemetry collection:</strong> Logs are ingested either through the installed browser extension or via the ingest API.</li>
    <li><strong>Identity correlation:</strong> Identities are linked to usage and service risk to uncover managed and unmanaged accounts.</li>
    <p class="callout">Aurora does not connect to IDPs or HR systems (as of today); masked identities (e.g., UUIDs) are sufficient to detect
      and map risk, supporting Aurora’s privacy-first design.</p>
    <li><strong>Risk evaluation:</strong> The risk engine scores findings based on factors like service category (e.g., AI tools), the service itself and its embedded risk, usage, or abnormal behaviours.</li>
    <li><strong>Actionable outputs:</strong> Results stay in your environment for dashboards, alerts, and downstream workflows.</li>
  </ol>
</section>

<section class="section-card" id="next-steps">
  <ul style="display: flex; justify-content: space-between; list-style: none; padding: 0; margin: 0; gap: 1rem; flex-wrap: wrap;">
    <li><a href="/docs/what-is-aurora/">← What is Aurora?</a></li>
    <li><a href="/docs/deployment/">Self-managed deployment →</a></li>
  </ul>
</section>
