---
title: "Free Risk Assessment — Aurora Identity"
layout: "layouts/base.njk"
permalink: "/free-risk-assessment/"
---

<div class="container">
<div class="how-container">
  <section class="how-hero">
    <header class="audience-page__header">
      <span class="audience-page__tag">Free risk assessment</span>
      <h1 class="audience-page__headline">See what Aurora finds.<br>No commitment required.</h1>
      <p class="audience-page__lead">Aurora deploys to a pilot group in under an hour. You get a live identity register — every AI tool in use, mapped to real users, with ownership resolution — within 24 hours.</p>
    </header>
    <div class="how-hero-grid" aria-label="What you get from the free risk assessment">
      <div class="gradient-card">
        <h3>One-hour deployment</h3>
        <p>Browser extension to a pilot group via your existing MDM. No network changes, no IAM modifications.</p>
      </div>
      <div class="gradient-card">
        <h3>Day-1 register</h3>
        <p>AI tools, service accounts, and shadow access — attributed to real user identities.</p>
      </div>
      <div class="gradient-card">
        <h3>Walk it through together</h3>
        <p>The Aurora team reviews what we find with you. No sales deck. Just your data.</p>
      </div>
    </div>
  </section>

  <section class="how-section" aria-labelledby="what-you-connect">
    <div>
      <h2 id="what-you-connect">What you connect</h2>
      <p>A browser extension deployed to a pilot group. That's it.</p>
    </div>
    <div class="how-section__details">
      <ul class="how-checklist">
        <li>Deployed via Chrome Enterprise, Intune, or Jamf — no new tooling required.</li>
        <li>No changes to your IAM, SSO, or network configuration.</li>
        <li>Works alongside your existing identity stack — additive, not disruptive.</li>
      </ul>
    </div>
  </section>

  <section class="how-section" aria-labelledby="what-you-get">
    <div>
      <h2 id="what-you-get">What you get</h2>
      <p>A register of every AI identity active in your environment.</p>
    </div>
    <div class="how-section__details">
      <ul class="how-checklist">
        <li>Every AI tool in use, attributed to a specific user identity — not just a device or IP.</li>
        <li>The gap between your approved tool list and what's actually running.</li>
        <li>Actionable findings — block or permit discovered tools based on risk and ownership.</li>
      </ul>
    </div>
  </section>

  <section class="how-section" aria-labelledby="the-walkthrough">
    <div>
      <h2 id="the-walkthrough">The walkthrough</h2>
      <p>Aurora reviews the findings with your team. No commitment required.</p>
    </div>
    <div class="how-section__details">
      <ul class="how-checklist">
        <li>We show you exactly what we found — shadow access, unowned accounts, coverage gaps.</li>
        <li>You decide whether to expand coverage. If Aurora finds nothing new, that's worth knowing too.</li>
        <li>No slides, no generic demos — the walkthrough uses your environment's data.</li>
      </ul>
    </div>
  </section>

</div>
</div>

{% set ctaTitle = "See what Aurora finds in your environment." %}
{% set ctaSubtext = "We'll deploy to a pilot group, show you what Aurora finds, and walk through ownership resolution in a live environment." %}
{% set ctaButtonLabel = "Book a live walkthrough" %}
{% set ctaButtonAriaLabel = "Book a free risk assessment with the Aurora team" %}
{% set ctaButtonTarget = "_blank" %}
{% set ctaButtonRel = "noopener noreferrer" %}
{% include "cta.njk" %}
