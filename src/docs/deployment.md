---
title: "Aurora deployment in self-managed environment"
permalink: "/docs/deployment/"
layout: docs.njk
---

<section class="section-card" id="deployment-choice">
  <div class="callout">
    <strong>Deployment status:</strong>
    <p style="margin-top: 0.5rem;">Aurora is available today as a self-managed deployment that lives entirely inside your environment (cloud or on-prem). A managed service is planned, but not yet available.</p>
  </div>
</section>

<section class="section-card" id="overview">
  <h2>Self-managed Aurora deployment</h2>
  <p>
    Aurora runs entirely inside your AWS, GCP, or Azure environment. Key integrations include a browser extension for endpoint telemetry or network log ingestion from gateways, or proxies to discover unmanaged accounts. Data residency is guaranteed with zero exfiltration—no raw logs or identity data leave your cloud.
  </p>
</section>

<section class="section-card" id="controls">
  <h2>Privacy, residency, and deployment</h2>
  <ul>
    <li><strong>100% customer-side processing:</strong> No raw logs or identity data leave your cloud.</li>
    <li><strong>Configurable retention:</strong> 30/90-day data retention controls.</li>
    <li><strong>Deployment options:</strong> Self-managed stack today, with a marketplace-managed service planned—all keep data in the same region as your workloads.</li>
  </ul>
  <p class="callout">Aurora does not connect to IDPs or HR systems; masked identities (e.g., UUIDs) are sufficient to detect and map risk, supporting Aurora’s privacy-first design.</p>
</section>

<section class="section-card" id="local-run">
  <h2>Once you have Aurora running</h2>
  <p>
    Customers receive a Docker Compose bundle with preconfigured images for the ingest service, ClickHouse, and the browser extension. Build and deploy the stack (locally) with <code>docker compose up --build</code> to mirror production flows end-to-end.
  </p>
  <h3>Evaluation workflow</h3>
  <ol>
    <li><strong>Establish a clean baseline</strong>
      <ul>
        <li>Start the stack and confirm the ingest service logs <code>web server listening on :8080</code>.</li>
        <li>Verify ClickHouse is reachable with <code>curl http://server:8123/ping</code>.</li>
      </ul>
    </li>
    <li><strong>Extension behavior</strong>
      <ul>
        <li>Trigger a few browser navigations and inspect network traffic in DevTools to confirm POST requests to
          <code>/ingest</code> include <code>browser_id</code>, <code>method</code>, <code>url</code>, and <code>timestamp</code> fields.</li>
        <li>Confirm the extension only targets the configured ingest origin (<code>http://server:8080/ingest</code>) and that the <code>browser_id</code> remains stable across page loads.</li>
      </ul>
    </li>
    <li><strong>Ingest API constraints</strong>
      <ul>
        <li>Send a non-POST request to <code>/ingest</code> and ensure the service responds with HTTP 405 and does not forward data to storage.</li>
        <li>Submit a malformed JSON body and expect a 502 Bad Gateway response from the ClickHouse insert path, with no new rows persisted.</li>
      </ul>
    </li>
    <li><strong>Storage integrity</strong>
      <ul>
        <li>Query the <code>events</code> table for recent entries to ensure payload fields map cleanly to
          <code>browser_id</code>, <code>method</code>, <code>url</code>, and <code>timestamp</code> columns.</li>
        <li>Validate that multiple events from the same browser arrive in order when sorted by
          <code>(browser_id, timestamp)</code>.</li>
      </ul>
    </li>
    <li><strong>Reporting</strong>
      <ul>
        <li>Capture sample requests and responses for <code>/ingest</code>, along with ClickHouse query outputs, to anchor any
          findings.</li>
        <li>File issues with reproducible steps, affected endpoints, and suggested mitigations.</li>
      </ul>
    </li>
  </ol>

  <h3>Review checklist</h3>
  <ul>
    <li>Extension only posts to the expected ingest origin and uses HTTPS where applicable in production.</li>
    <li><code>browser_id</code> is generated once and stored persistently; no sensitive data is logged or leaked.</li>
    <li><code>/ingest</code> rejects non-POST methods and surfaces clear errors for malformed inputs.</li>
    <li>ClickHouse credentials (if configured) are required for inserts and are never hard-coded.</li>
    <li>Traffic records in the <code>events</code> table match captured requests exactly and include millisecond precision timestamps.</li>
    <li>Logging avoids request bodies or secrets, focusing on operational signals.</li>
  </ul>
</section>

<section class="section-card" id="aurora-cloud">
  <h3>Managed service (coming soon)</h3>
  <p>
    A fully managed deployment delivered through cloud marketplaces is on the roadmap. When available, Aurora will handle control-plane updates while you retain full control of data residency.
  </p>
  <ul>
    <li>Marketplace-based procurement.</li>
    <li>Control-plane patches, scaling, and monitoring handled by Aurora.</li>
    <li>Data processing, logs, and identity signals remain inside your VPC with zero exfiltration.</li>
    <li>Ideal for teams that want rapid time-to-value with minimal operational overhead.</li>
    <li>A SaaS offering coming very soon as well.</li>
  </ul>
</section>

<section class="section-card" id="next-steps">
  <ul style="display: flex; justify-content: space-between; list-style: none; padding: 0; margin: 0; gap: 1rem; flex-wrap: wrap;">
    <li><a href="/docs/how-it-works/">← How Aurora works</a></li>
    <li><a href="/docs/browser-extension/">Browser extension →</a></li>
  </ul>
</section>
