---
title: "Browser extension"
permalink: "/docs/browser-extension/"
layout: docs.njk
---

<section class="section-card" id="overview">
  <h2>Browser extension</h2>
  <p>
    The Aurora browser extension captures light telemetry from the user’s browser without interrupting SSO or day-to-day workflows. It is the fastest way to see which AI and SaaS tools are being used and by whom.
  </p>
  <div class="callout">
    <strong>Source code:</strong> The extension is open source at
    <a target="_blank" href="{{ site.extensionRepoUrl }}">aurora-identity/browser-extension</a>. The README covers building it, loading it unpacked for a local test, and the policy values your MDM has to push.
  </div>
</section>

<section class="section-card" id="signals">
  <h2>What it captures</h2>
  <ul>
    <li><strong>Telemetry:</strong> Records the visited URL and HTTP method for every browser request.</li>
    <li><strong>Identity context:</strong> Creates a new identity when the extension starts so each telemetry event is tied to a user.</li>
    <li><strong>Ingest API:</strong> Sends the captured telemetry to the server via the ingest API.</li>
  </ul>
</section>

<section class="section-card" id="enforcement">
  <h2>Deployment and permissions</h2>
  <ol>
    <li><strong>Distribute</strong> via your browser management tooling (Chrome Enterprise, Intune, Jamf) with the recommended manifest.</li>
    <li><strong>Limit permissions</strong> to the minimum needed origins and events. The extension is scoped to telemetry only and avoids content collection.</li>
    <li><strong>Validate</strong> the rollout with a pilot group before enabling fleet-wide enforcement.</li>
  </ol>
</section>

<section class="section-card" id="next-steps">
  <ul style="display: flex; justify-content: space-between; list-style: none; padding: 0; margin: 0; gap: 1rem; flex-wrap: wrap;">
    <li><a href="/docs/deployment/">← Self-managed deployment</a></li>
    <li><a href="/docs/email-analysis-engine/">Email analysis engine →</a></li>
  </ul>
</section>
