---
pdf_options:
  format: A4
  margin: 8mm 15mm
css: |
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #1f2937;
    line-height: 1.35;
    margin: 0;
    padding: 0;
    font-size: 10.5px;
  }
  .header {
    border-bottom: 2px solid #6366f1;
    padding-bottom: 14px;
    margin-bottom: 12px;
  }
  .header-info h1 {
    font-size: 28px;
    color: #111827;
    margin: 0 0 2px 0;
    letter-spacing: -0.5px;
  }
  .header-info h2 {
    font-size: 15px;
    color: #6366f1;
    margin: 0 0 10px 0;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    font-size: 10.5px;
    color: #4b5563;
    font-weight: 500;
  }
  .contact-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .contact-item svg {
    width: 14px;
    height: 14px;
    color: #6366f1;
  }
  .contact-item a {
    color: #4b5563;
    text-decoration: none;
  }
  h3 {
    font-size: 14px;
    color: #6366f1;
    border-bottom: 1px solid #e0e7ff;
    padding-bottom: 4px;
    margin-top: 14px;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .summary {
    font-size: 11px;
    color: #374151;
    text-align: justify;
  }
  .skill-grid {
    display: grid;
    grid-template-columns: 140px 1fr;
    margin-bottom: 4px;
    font-size: 10.5px;
  }
  .skill-label {
    font-weight: 700;
    color: #111827;
  }
  .skill-value {
    color: #4b5563;
  }
  .job {
    margin-bottom: 10px;
  }
  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 2px;
  }
  .job-title {
    font-weight: 700;
    font-size: 12.5px;
    color: #111827;
  }
  .job-company {
    font-weight: 600;
    color: #6366f1;
    font-size: 11.5px;
  }
  .job-date {
    font-size: 10px;
    color: #6b7280;
    font-weight: 600;
    background: #f3f4f6;
    padding: 2px 6px;
    border-radius: 4px;
  }
  ul {
    margin-top: 4px;
    margin-bottom: 4px;
    padding-left: 18px;
  }
  li {
    margin-bottom: 2px;
    color: #374151;
  }
  .project-title {
    font-weight: 700;
    color: #111827;
    font-size: 11px;
  }
---

<div class="header">
  <div class="header-info">
    <h1>Rachid Alaoui Selsouli</h1>
    <h2>Full Stack Developer & Product Builder</h2>
    <div class="contact-grid">
      <div class="contact-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        <span>Casablanca, Morocco (Remote)</span>
      </div>
      <div class="contact-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        <span>rachidalaouiselsoli@gmail.com</span>
      </div>
      <div class="contact-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        <span>+212 639-574490</span>
      </div>
      <div class="contact-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        <a href="https://linkedin.com/in/rachid-alaoui-selsouli-b748bb3a3">Rachid Alaoui Selsouli</a>
      </div>
      <div class="contact-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        <a href="https://github.com/mrasgk">mrasgk</a>
      </div>
    </div>
  </div>
</div>

### Professional Summary
<div class="summary">
Results-driven Full Stack Developer & Entrepreneur specialized in the JavaScript ecosystem (Next.js, Angular, React Native) and robust backend architecture (.NET 8, Node.js). Founder and Lead Engineer of Vorax. I bridge the gap between complex enterprise systems and modern, high-performance user interfaces. Actively prepared for ambitious B2B freelance contracts or rigorous full-time technical engagements.
</div>

### Core Competencies

<div class="skill-grid">
  <div class="skill-label">Frontend</div>
  <div class="skill-value">Next.js, React, Angular v16+, Vue.js, TypeScript, Tailwind CSS</div>
</div>
<div class="skill-grid">
  <div class="skill-label">Backend & Database</div>
  <div class="skill-value">C# .NET 8, Node.js, Express, PostgreSQL, SQL Server, MongoDB</div>
</div>
<div class="skill-grid">
  <div class="skill-label">Mobile</div>
  <div class="skill-value">React Native (Cross-Platform iOS & Android)</div>
</div>
<div class="skill-grid">
  <div class="skill-label">Cloud & DevOps</div>
  <div class="skill-value">Microsoft Power Platform (PowerApps), Git, CI/CD, Azure</div>
</div>
<div class="skill-grid">
  <div class="skill-label">Languages</div>
  <div class="skill-value">Arabic (Native), English (Fluent), French (Advanced), Spanish (Advanced)</div>
</div>

### Professional Experience

<div class="job">
  <div class="job-header">
    <div>
      <span class="job-title">Founder & Lead Engineer</span> | <span class="job-company">Vorax — Sports Platform</span>
    </div>
    <span class="job-date">Feb 2026 – Present</span>
  </div>
  <ul>
    <li>Architected and developed a comprehensive social sports networking platform from scratch.</li>
    <li>Managed the entire product lifecycle from relational database schemas to highly-available cloud deployment.</li>
    <li>Designed highly scalable activity feed interfaces and robust, secure backend routing APIs.</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">
    <div>
      <span class="job-title">Full Stack Developer</span> | <span class="job-company">BitBot / QBot</span>
    </div>
    <span class="job-date">Aug 2024 – Jan 2026</span>
  </div>
  <ul>
    <li>Lead enterprise developer bridging the Microsoft business ecosystem (DataVerse, SharePoint) with modern frontend UIs.</li>
    <li><strong>Project Robotic:</strong> Built robust real-time operational interfaces utilizing Angular and .NET architectures.</li>
    <li><strong>Project CLIMMAG & ACAF:</strong> Developed complex business logic flows using PowerApps, MS Automate, JS, and .NET APIs.</li>
    <li><strong>Project IoT:</strong> Delivered continuous, real-time data visualization workflows mapped directly to SQL Server.</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">
    <div>
      <span class="job-title">Developer Intern</span> | <span class="job-company">AQUALAB</span>
    </div>
    <span class="job-date">Jul 2024 – Aug 2024</span>
  </div>
  <ul>
    <li>Gained foundational exposure to professional software engineering workflows, agile code deployment practices, and sprints.</li>
  </ul>
</div>

### Education

<div class="job">
  <div class="job-header">
    <div><span class="job-title">Master's in Computer Science / Engineering</span> | <span class="job-company">SupMTI Oujda</span></div>
    <span class="job-date">2024 – 2027 (Expected)</span>
  </div>
  <div style="padding-left: 18px; font-size: 10px; margin-top: 2px;">Focusing on advanced software engineering architectures, AI development, and cloud data infrastructures.</div>
</div>

<div class="job">
  <div class="job-header">
    <div><span class="job-title">Preparatory Classes to Grandes Écoles</span> | <span class="job-company">Université Internationale</span></div>
    <span class="job-date">2022 – 2024</span>
  </div>
  <div style="padding-left: 18px; font-size: 10px; margin-top: 2px;">Completed two years of rigorous foundational STEM studies, acquiring a deeply solid algorithmic and mathematical base.</div>
</div>

### Selective Projects

<ul>
  <li><span class="project-title">AI CV Analyzer:</span> Full-stack React app utilizing LLMs to map job descriptions to resumes for autonomous scoring.</li>
  <li><span class="project-title">Enterprise B2B Dashboard:</span> RBAC-controlled platform handling tens of thousands of dynamic records concurrently with Angular.</li>
  <li><span class="project-title">Headless Storefront:</span> Stripe-integrated Next.js e-commerce application aggressively optimized for payload speeds and SEO parity.</li>
</ul>
