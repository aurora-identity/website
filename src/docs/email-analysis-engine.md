---
title: "Email analysis engine"
permalink: "/docs/email-analysis-engine/"
layout: docs.njk
---

<section class="section-card" id="overview">
  <h2>Email analysis engine</h2>
  <p>
    Aurora uncovers unmanaged identities across Google Workspace, Microsoft 365, and other business systems using an identity-first discovery model. The engine links email metadata to identity risk, never inspects content, and applies our curated domain intelligence (Aurora DB) to prioritize action while preserving privacy.
  </p>
</section>

<section class="section-card" id="signals">
  <h2>Collected Metadata & Derived Risk Signals</h2>
  <ul>
    <li><strong>Connect email metadata:</strong> one option to quickly test the service is to enable pulling through a cron job (details for Google Workspace below), or have a custom setup to emit the metadata to Aurora.</li>
    <li><strong>Metadata-only ingestion:</strong> Sender and subject are the only metadata we need, we do not need, read, or store the body of the email.</li>
    <li><strong>Service recognition:</strong> Multilingual patterns for HR, Finance, Dev, and Security services align each message to Aurora’s AI model, which maps the beginning of every identity.</li>
    <li><strong>Risk quantification:</strong> Aurora DB's risk scoring transforms output of the AI model analysis metadata into prioritized signals for the security team.</li>
  </ul>
</section>

<section class="section-card" id="gmail-pull">
  <h2>Enable Google Workspace pull</h2>
  <p>To let Aurora poll Gmail metadata without user-by-user setup, one option, described below, is to enable domain-wide delegation for a service account and allow it to read headers</p>
  <ol>
    <li><strong>Enable Gmail API:</strong> In Google Cloud → APIs &amp; Services → Library, enable the Gmail API so service
    account calls to <code>users.messages.list</code> are allowed.</li>
    <li><strong>Create a service account:</strong> In IAM &amp; Admin → Service Accounts, create one and add a JSON key (or rely on
    in-cloud credentials). This identity will impersonate mailboxes.</li>
    <li><strong>Grant domain-wide delegation:</strong> In Admin Console → Security → API controls → Manage DWD, add the service
    account client ID with the scope <code>https://www.googleapis.com/auth/gmail.readonly</code>.</li>
    <li><strong>Run the collector:</strong> set scope (e.g.,
    <code>is:unread newer_than:3d</code>), fetch metadata only (<code>format=metadata</code>), and keep a per-user watermark to avoid duplicates.</li>
  </ol>
  <p>Deploy as a scheduled job and tune the Gmail query to match the your policies. Aurora consumes the emitted metadata to surface unmanaged identities.</p>
</section>

<section class="section-card" id="next-steps">
  <ul style="display: flex; justify-content: space-between; list-style: none; padding: 0; margin: 0; gap: 1rem; flex-wrap: wrap;">
    <li><a href="/docs/browser-extension/">← Browser extension</a></li>
    <li><a href="/docs/aurora-db/">Aurora-DB →</a></li>
  </ul>
</section>
