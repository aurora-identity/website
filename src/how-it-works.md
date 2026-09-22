---
title: "How Aurora works"
layout: "layouts/base.njk"
---

<div class="how-container">
  <section class="how-hero">
    <header class="audience-page__header">
      <h1 class="audience-page__headline">One sensor. High-fidelity signal. Governance that works.</h1>
      <p class="audience-page__lead">A lightweight browser extension captures URL and identity telemetry. The risk engine runs in your environment, resolves ownership down to a named business owner, and produces an identity register your team can govern — not just read.</p>
    </header>
    <div class="pipeline">
      <p class="pipeline__label">End-to-end data flow</p>
      <div class="pipeline__nodes">
        <div class="pipeline__node">
          <div class="pipeline__node-icon">🌐</div>
          <span class="pipeline__node-name">Browser</span>
          <span class="pipeline__node-sub">Chrome / Edge</span>
        </div>
        <div class="pipeline__arrow">
          <div class="pipeline__arrow-track"><span class="pipeline__dot"></span></div>
        </div>
        <div class="pipeline__node">
          <div class="pipeline__node-icon">⬡</div>
          <span class="pipeline__node-name">Extension</span>
          <span class="pipeline__node-sub">URL + method</span>
        </div>
        <div class="pipeline__arrow">
          <div class="pipeline__arrow-track"><span class="pipeline__dot"></span></div>
        </div>
        <div class="pipeline__node">
          <div class="pipeline__node-icon">⬚</div>
          <span class="pipeline__node-name">Ingest API</span>
          <span class="pipeline__node-sub">POST /ingest</span>
        </div>
        <div class="pipeline__arrow">
          <div class="pipeline__arrow-track"><span class="pipeline__dot"></span></div>
        </div>
        <div class="pipeline__node">
          <div class="pipeline__node-icon">◈</div>
          <span class="pipeline__node-name">Risk engine</span>
          <span class="pipeline__node-sub">Aurora DB</span>
        </div>
        <div class="pipeline__arrow">
          <div class="pipeline__arrow-track"><span class="pipeline__dot"></span></div>
        </div>
        <div class="pipeline__node">
          <div class="pipeline__node-icon">≡</div>
          <span class="pipeline__node-name">Register</span>
          <span class="pipeline__node-sub">Live, auditable</span>
        </div>
      </div>
    </div>
  </section>

  <section class="how-section" aria-labelledby="step-1">
    <div>
      <h2 id="step-1">Step 1 — Deploy the browser sensor</h2>
      <p>Push through your existing browser management tooling. No new agents. No network changes. No modifications to your IAM or SSO configuration.</p>
      <ul class="how-checklist">
        <li><strong>Chrome Enterprise, Intune, or Jamf</strong> — same channel you already use for browser policy.</li>
        <li><strong>Minimum permissions</strong> — the extension observes outgoing request URLs and HTTP methods. No content access. No cookies. No request or response body.</li>
        <li><strong>Pilot first, then fleet-wide.</strong> Validate signal quality before enabling organization-wide.</li>
<li><strong>Data stays in your environment.</strong> Deployed inside AWS, GCP, or Azure. Nothing sent to Aurora infrastructure.</li>
      </ul>
    </div>
    <div class="diagram-card">
      <h3>What the extension captures</h3>
      <div class="diagram-flow">
        <span><strong>Visited URL</strong><span>Full request URL</span></span>
        <span><strong>HTTP method</strong><span>GET, POST, etc.</span></span>
        <span><strong>Identity UUID</strong><span>Persistent, per session</span></span>
        <span><strong>Timestamp</strong><span>Millisecond precision</span></span>
        <span><strong>PII exposure</strong><span>PII signal without the data itself</span></span>
      </div>
      <div class="tech-callout" style="margin-top: 0.5rem; border-left-color: var(--accent-green);">
        <p class="tech-callout__label">Not captured</p>
        <p class="tech-callout__body">Request body · Response content · Cookies · Form data · Keystrokes</p>
      </div>
    </div>
  </section>

  <section class="how-section" aria-labelledby="step-2">
    <div class="diagram-card">
      <h3>Ownership resolution</h3>
      <div class="diagram-flow">
        <span><strong>UUID → service map</strong><span>Aurora DB enrichment</span></span>
        <span><strong>Usage pattern analysis</strong><span>Ownership signal</span></span>
        <span><strong>Owner resolution</strong><span>Named, not just metadata</span></span>
        <span><strong>Risk scored</strong><span>Category + behaviour</span></span>
      </div>
      <div class="tech-callout" style="margin-top: 0.5rem;">
        <p class="tech-callout__label">What ownership resolution means</p>
        <p class="tech-callout__body">Not a technical owner. Not a team. The specific person in the business who can say: that account is mine, here's why it exists, and yes you can turn it off.</p>
      </div>
    </div>
    <div>
      <h2 id="step-2">Step 2 — Resolve identity and ownership</h2>
      <p>Raw URL telemetry runs through the risk engine and Aurora DB — a curated map of AI tools, developer platforms, HR, and financial services. Every account gets a score. Every account gets a named business owner.</p>
      <ul class="how-checklist">
        <li><strong>No IDP or HR system required at launch.</strong> Masked UUIDs are sufficient to detect and map risk.</li>
        <li><strong>Service accounts included.</strong> The engine resolves ownership even for service accounts.</li>
        <li><strong>Account origin, not just technical metadata.</strong> Aurora surfaces who created it and captures further business context at that point — department, purpose, and whether it's still needed.</li>
        <li><strong>Noise filtered.</strong> Not every URL is a governance signal — the engine surfaces what matters.</li>
      </ul>
    </div>
  </section>

  <section class="how-section" aria-labelledby="step-3">
    <div>
      <h2 id="step-3">Step 3 — Surface the register and govern it</h2>
      <p>Every AI tool and service account observed in your environment — with ownership status, risk score, and usage data. This is a working register, not a report. Continuously updated. Filterable, exportable, auditable.</p>
      <ol class="timeline">
        <li><strong>Discover</strong> — new accounts detected as usage happens. Not on a schedule.</li>
        <li><strong>Classify</strong> — risk engine scores by category and embedded risk.</li>
        <li><strong>Assign ownership</strong> — unresolved accounts flagged, ownership resolved to a named business owner.</li>
        <li><strong>Act</strong> — alerts via Slack, Teams, or email. The account, the owner, the action needed.</li>
        <li><strong>Review</strong> — closed-loop tracking. Every cycle. Auditable.</li>
      </ol>
    </div>
    <div>
      <div class="loop-track" role="list">
        <div class="loop-card" role="listitem">
          <h3>The identity register</h3>
          <p>Every AI tool in use, with business owner, department, risk score, and last-seen timestamp. Not a dashboard URL — the actual register.</p>
        </div>
        <div class="loop-card" role="listitem">
          <h3>Offboarding coverage</h3>
          <p>When someone leaves, Aurora surfaces every account they touched — shadow tools and service accounts included. Nothing stays behind undetected.</p>
        </div>
        <div class="loop-card" role="listitem">
          <h3>Audit-ready export</h3>
          <p>The register exports for audit packages. The auditor gets the data, not a dashboard URL.</p>
        </div>
      </div>
    </div>
  </section>

</div>

{% set ctaTitle = "See the register for your environment." %}
{% set ctaSubtext = "Push the browser sensor to a pilot group, bring the risk engine up in your cloud, and watch the register fill in." %}
{% include "cta.njk" %}
