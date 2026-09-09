---
title: "Ingest API Reference"
permalink: "/docs/ingest/"
layout: docs.njk
---

<section class="section-card" id="ingest-summary">
  <h2>Ingest API reference</h2>
  <p>
    The ingest web service accepts events from the Aurora browser extension, or during log ingestion, and writes them directly into ClickHouse database. Use this page for the full contract, responses, and validation steps.
  </p>
  <div class="callout">
    <strong>Endpoint:</strong> <code>POST http://server:8080/ingest</code>
  </div>
</section>

<section class="section-card" id="endpoint">
  <h3>Endpoint details</h3>
  <ul>
    <li><strong>Purpose:</strong> Receive JSON event bodies and forward them to ClickHouse.</li>
    <li><strong>Expected Content-Type:</strong> <code>application/json</code> from the extension, or calling the API to ingest logs.</li>
  </ul>
</section>

<section class="section-card" id="schema">
  <h3>Request schema</h3>
  <p>Each request contains a single JSON object representing one event:</p>
  <pre><code>{
  "browser_id": "8f92f550-b3c4-4f63-9d2d-9b4c4c7a2d11",
  "method": "GET",
  "url": "https://example.com/resource",
  "timestamp": "2024-05-18T12:01:10.123Z"
}</code></pre>
</section>

<section class="section-card" id="responses">
  <h3>Responses</h3>
  <ul>
    <li><strong>204 No Content:</strong> Insert succeeded.</li>
    <li><strong>400 Bad Request:</strong> Body could not be read from the client request.</li>
    <li><strong>405 Method Not Allowed:</strong> Non-POST method.</li>
    <li><strong>502 Bad Gateway:</strong> ClickHouse request failed or rejected the payload (for example, invalid JSON).</li>
  </ul>
</section>

<section class="section-card" id="operations">
  <h3>Operational notes</h3>
  <ul>
    <li>The server usually runs on port <code>8080</code> and depends on the ClickHouse health probe before accepting traffic.</li>
    <li>Payloads are streamed to ClickHouse to avoid buffering multiple events.</li>
    <li>Use <code>curl -sSf -X POST http://server:8080/ingest -d '{"browser_id":"demo","method":"GET","url":"https://example.com","timestamp":"2024-05-18T12:01:10.123Z"}'</code> to validate end-to-end writes during testing.</li>
  </ul>
</section>

<section class="section-card" id="next-steps">
  <ul style="display: flex; justify-content: space-between; list-style: none; padding: 0; margin: 0; gap: 1rem; flex-wrap: wrap;">
    <li><a href="/docs/reporting-dashboard/">← Reporting dashboard</a></li>
    <li><a href="/docs/">Docs overview →</a></li>
  </ul>
</section>
