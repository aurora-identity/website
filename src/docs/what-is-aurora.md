---
title: "What is Aurora?"
permalink: "/docs/what-is-aurora/"
layout: docs.njk
---

<section class="section-card" id="intro">
  <div class="callout">
    <strong>What is Aurora?</strong>
    <p style="margin-top: 0.5rem;">Aurora is the identity risk intelligence layer that reveals who is using which AI tools across your organization without breaking existing IAM or SSO workflows.</p>
  </div>
</section>

<section class="section-card" id="definition">
  <h2>What is Aurora?</h2>
  <p>Aurora provides high-fidelity visibility into AI tool usage by correlating signals across browser telemetry, network logs, or emails, all while keeping processing and data residency entirely inside your cloud. It equips identity, GRC, and security teams a single source of truth for AI adoption—and related use of developer, HR, data, and financial systems—without disrupting users.</p>
</section>

<section class="section-card" id="why">
  <h2>Why use Aurora?</h2>
  <p>Organizations struggle to answer the foundational question: <strong>who is using which AI tools, and how?</strong> Existing shadow-IT workflows rely on fragmented signals in spreadsheets, SIEM queries, and endpoint reviews—leaving blind spots, governance gaps, and unmanaged accounts across AI products, developer, HR, data, and financial systems. Aurora replaces that manual effort with a unified, trustworthy model of AI usage mapped to real identities while keeping its primary focus on AI adoption (the most challenging problem today).</p>
  <ul>
    <li>Close blind spots around AI tool adoption and data exposure with consolidated telemetry.</li>
    <li>Reduce compliance and governance gaps by continuously surfacing unmanaged identities.</li>
    <li>Eliminate redundant investigations across SIEM, gateway, and endpoint tools.</li>
    <li>Lower operational overhead by automating correlation instead of manual audits.</li>
  </ul>
  <p id="quantified-risk">Here is what combining all signals looks like:</p>
  <img class="hero-preview__image" src="/assets/images/hero-dashboard-quantified-risk.png" width="100%" alt="Screenshot of the Aurora reporting dashboard showing risk insights and recent activity" loading="lazy">
</section>

<section class="section-card" id="stack">
  <h2>What does Aurora include?</h2>
  <p>
    Aurora is a tightly integrated stack built to answer who is using which AI tools, developer, HR, data, and financial systems—while keeping all processing in your environment.
  </p>
  <ul>
    <li><strong>Usage Intelligence Engine:</strong> Correlates browser telemetry and network signals to attribute AI and SaaS usage to real users with high fidelity.</li>
    <li><strong>Browser telemetry:</strong> Collects endpoint signals for visibility into AI service interactions without disrupting IAM or SSO flows.</li>
    <li><strong>Network-derived discovery:</strong> Ingests logs from gateways, proxies, and SIEMs to uncover unmanaged accounts bypassing SSO.</li>
    <li><strong>AI Service Knowledge Base:</strong> Normalizes traffic patterns and enriches findings with service-specific risk context.</li>
    <li><strong>Remediation workflows:</strong> Surfaces unmanaged identities and risky usage with actionable notifications via Slack, Teams, or email.</li>
    <li><strong>Privacy and residency controls:</strong> Ensures 100% customer-side processing with configurable retention and zero data exfiltration.</li>
  </ul>
</section>

<section class="section-card" id="next-steps">
  <ul style="display: flex; justify-content: space-between; list-style: none; padding: 0; margin: 0; gap: 1rem; flex-wrap: wrap;">
    <li><a href="/docs/">← Overview</a></li>
    <li><a href="/docs/how-it-works/">How it works →</a></li>
  </ul>
</section>
