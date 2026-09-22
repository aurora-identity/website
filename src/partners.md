---
title: "MSP Partner Program — Aurora Identity"
layout: "layouts/base.njk"
permalink: "/partners/"
---

<div class="how-container">
  <section class="how-hero">
    <header class="audience-page__header">
      <span class="audience-page__tag">For MSP and MSSP partners</span>
      <h1 id="msp-partner-program" class="audience-page__headline">Grow your MSP security offering with Aurora</h1>
      <p class="audience-page__lead">Join the Aurora MSP Partner Program and help your clients identify shadow access, unresolved service account ownership, and unmanaged AI tool usage before it becomes a security event.</p>
    </header>
    <div class="how-hero-grid" aria-label="MSP partner program highlights">
      <div class="gradient-card">
        <h3>New recurring revenue</h3>
        <p>Bundle Aurora into your managed security package with partner-friendly pricing and margin.</p>
      </div>
      <div class="gradient-card">
        <h3>Fast client outcomes</h3>
        <p>Deliver visibility and ownership mapping quickly without long integration projects.</p>
      </div>
      <div class="gradient-card">
        <h3>Co-sell and support</h3>
        <p>Get sales enablement, technical onboarding, and direct Aurora team support on shared deals.</p>
      </div>
    </div>
  </section>

  <section class="how-section" aria-labelledby="why-partner">
    <div>
      <h2 id="why-partner">Why MSP teams partner with Aurora</h2>
      <p>Aurora helps you solve a problem clients already have: identity sprawl outside SSO and outside clean governance processes.</p>
    </div>
    <div class="how-section__details">
      <ul class="how-checklist" aria-label="Why partner checklist">
        <li><strong>Differentiate your security practice:</strong> add identity discovery and ownership governance that many tools do not cover.</li>
        <li><strong>Increase stickiness:</strong> give clients a continuously updated register they rely on month after month.</li>
        <li><strong>Reduce remediation time:</strong> map identities to accountable business owners so issues close faster.</li>
        <li><strong>Support audits and compliance:</strong> provide evidence for discovered vs approved usage and ownership status.</li>
      </ul>
    </div>
  </section>

  <section class="how-section" aria-labelledby="partner-fit">
    <div>
      <h2 id="partner-fit">Who this is for</h2>
      <p>The program is designed for MSPs and MSSPs delivering managed security, identity, compliance, or vCISO services.</p>
    </div>
    <div class="how-section__details">
      <ul class="how-checklist" aria-label="Partner profile checklist">
        <li>Managed service providers expanding beyond traditional endpoint and SIEM services, or just starting their security portfolio.</li>
        <li>Teams supporting clients with Microsoft 365, Google Workspace, Okta, or hybrid identity environments.</li>
        <li>Consultancies that want productized recurring services around AI and shadow access governance.</li>
      </ul>
    </div>
  </section>

  <section class="how-section" aria-labelledby="how-to-start">
    <div>
      <h2 id="how-to-start">How to get started</h2>
      <p>We keep onboarding simple so your team can start conversations and deliver value immediately.</p>
    </div>
    <div class="how-section__details">
      <ol class="timeline" aria-label="Partner onboarding timeline">
        <li><strong>Step 1:</strong> Intro call to align on market, ICP, and partner motion.</li>
        <li><strong>Step 2:</strong> Product and sales enablement for your technical and client-facing teams.</li>
        <li><strong>Step 3:</strong> Launch your first client opportunity with Aurora support.</li>
      </ol>
    </div>
  </section>
</div>

{% set ctaTitle = "Become an Aurora MSP Partner" %}
{% set ctaSubtext = "Tell us about your clients and service model. We will follow up with program details and next steps." %}
{% set ctaButtonHref = site.contactUrl %}
{% set ctaButtonLabel = "Apply to partner" %}
{% set ctaButtonAriaLabel = "Apply to the Aurora MSP partner program" %}
{% include "cta.njk" %}