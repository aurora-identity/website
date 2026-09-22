---
title: "Referrals — Aurora Identity"
layout: "layouts/base.njk"
---

<div class="container">
<div class="how-container">
  <section class="how-hero">
    <header class="audience-page__header">
      <span class="audience-page__tag">Referral program</span>
      <h1 class="audience-page__headline">Help others secure the unknown</h1>
      <p class="audience-page__lead">Know a team struggling with shadow identities? Introduce Aurora and help them see what SSO misses. Here is how it works:</p>
    </header>
    <div class="how-hero-grid" aria-label="Quick benefits of the referral program">
      <div class="gradient-card">
        <h3>🤝 Make the intro</h3>
        <p>Point a security leader our way.</p>
      </div>
      <div class="gradient-card">
        <h3>💻 We do the demo:</h3>
        <p>Quick connect, Day-1 results.</p>
      </div>
      <div class="gradient-card">
        <h3>✅ You’re recognized</h3>
        <p>Rewards or recognition for qualified referrals.</p>
      </div>
    </div>
  </section>

 <section class="how-section" aria-labelledby="step-1">
    <div>
      <h2 id="step-1">What they’ll get?</h2>
      <p>To secure what they don't know about.</p>
    </div>
    <div class="how-section__details">
      <ul class="how-checklist" aria-label="Connect email metadata checklist">
        <li>High-Fidelity AI Usage Intelligence: Correlate AI tool access to specific user identities.</li>
        <li>Zero-Trust Discovery: Proactively surface all unmanaged accounts and Shadow AI access.</li>
        <li>Non-Disruptive Deployment: Works alongside your existing IAM/SSO; no flow interference.</li>
      </ul>
    </div>
  </section>

</div>
</div>

{% set ctaTitle = "Know a team that should see this?" %}
{% set ctaSubtext = "Send them the repository, or introduce us directly." %}
{% set ctaButtonHref = site.contactUrl %}
{% set ctaButtonLabel = "Make an intro" %}
{% set ctaButtonAriaLabel = "Introduce a team to Aurora Identity on GitHub" %}
{% include "cta.njk" %}
