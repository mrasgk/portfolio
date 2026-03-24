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
    <h2>Développeur Full Stack & Créateur de Produits</h2>
    <div class="contact-grid">
      <div class="contact-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        <span>Casablanca, Maroc (Télétravail)</span>
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

### Profil Professionnel
<div class="summary">
Développeur Full Stack et Entrepreneur axé sur l'impact technologique, spécialisé dans l'écosystème JavaScript (Next.js, Angular, React Native) et en architectures backend avancées (.NET 8, Node.js). En tant que fondateur et développeur principal de Vorax, j'établis le lien essentiel entre des systèmes logicielles complexes et des interfaces web modernes hautement optimisées. Auto-Entrepreneur disponible et prêt pour la collaboration en prestation B2B ou format CDI.
</div>

### Compétences Clés

<div class="skill-grid">
  <div class="skill-label">Lógica Frontend</div>
  <div class="skill-value">Next.js, React, Angular v16+, Vue.js, TypeScript, Tailwind CSS</div>
</div>
<div class="skill-grid">
  <div class="skill-label">Backend & Bases de Données</div>
  <div class="skill-value">C# .NET 8, Node.js, Express, PostgreSQL, SQL Server, MongoDB</div>
</div>
<div class="skill-grid">
  <div class="skill-label">Mobile</div>
  <div class="skill-value">React Native (Cross-Platform iOS & Android)</div>
</div>
<div class="skill-grid">
  <div class="skill-label">Cloud & DevOps</div>
  <div class="skill-value">Microsoft Power Platform (PowerApps), Git, Intégration Continue (CI/CD), Azure</div>
</div>
<div class="skill-grid">
  <div class="skill-label">Langues Spécialisées</div>
  <div class="skill-value">Arabe (Maternelle), Anglais (Courant), Français (Avancé), Espagnol (Avancé)</div>
</div>

### Expérience Professionnelle

<div class="job">
  <div class="job-header">
    <div>
      <span class="job-title">Fondateur & Ingénieur Principal</span> | <span class="job-company">Vorax — Plateforme Sportive</span>
    </div>
    <span class="job-date">Fév 2026 – Présent</span>
  </div>
  <ul>
    <li>Architecturé et codé l'intégralité d'un nouveau réseau social global focalisé sur le sport public.</li>
    <li>Géré l'entièreté d'un cycle de vie produit, la modélisation UML des bases et les déploiements haute-disponibilité.</li>
    <li>Création des APIs dorsales de routage sécurisées, des sockets en temps réel et des interfaces dynamiques scalables.</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">
    <div>
      <span class="job-title">Développeur Full Stack</span> | <span class="job-company">BitBot / QBot</span>
    </div>
    <span class="job-date">Août 2024 – Jan 2026</span>
  </div>
  <ul>
    <li>Développeur principal en charge d'unifier l'écosystème business de Microsoft (SharePoint, DataVerse) vers Modern UIs frontend.</li>
    <li><strong>Projet Robotic:</strong> Conception de flux continus temps-réel complexes en fusionnant Angular avec les architectures natives .NET.</li>
    <li><strong>Projets CLIMMAG & ACAF:</strong> Orchestration des flux métier dynamiques par Microsoft PowerApps, Power Automate et JS.</li>
    <li><strong>Projet IoT:</strong> Déploiement analytique temps-réel massif de l'IoT via des canaux de données haut-débit en SQL Server.</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">
    <div>
      <span class="job-title">Stagiaire Ingénieur Développeur</span> | <span class="job-company">AQUALAB</span>
    </div>
    <span class="job-date">Jul 2024 – Août 2024</span>
  </div>
  <ul>
    <li>Apprentissage fondamental et très approfondi des pratiques algorithmiques logicielles de l'industrie, collaborations et pipelines.</li>
  </ul>
</div>

### Éducation Universitaire

<div class="job">
  <div class="job-header">
    <div><span class="job-title">Master en Ingénierie des Systèmes Informatiques</span> | <span class="job-company">SupMTI Oujda</span></div>
    <span class="job-date">2024 – 2027 (En cours)</span>
  </div>
  <div style="padding-left: 18px; font-size: 10px; margin-top: 2px;">Spécialisation de très haut niveau en intelligence artificielle algorithmique, génie logiciel analytique et en structures de big-data Cloud.</div>
</div>

<div class="job">
  <div class="job-header">
    <div><span class="job-title">Classes Préparatoires aux Grandes Écoles Supérieures</span> | <span class="job-company">Université Internationale</span></div>
    <span class="job-date">2022 – 2024</span>
  </div>
  <div style="padding-left: 18px; font-size: 10px; margin-top: 2px;">Acquisition d'un arsenal mathématique complet en sciences fondamentales (STEM) validant ainsi deux années de classe préparatoire.</div>
</div>

### Réalisations Techniques

<ul>
  <li><span class="project-title">Analyseur CV (Moteur IA) :</span> Implémentation novatrice du MLLM utilisé comme agent évaluateur de qualifications via Next.js/Node.</li>
  <li><span class="project-title">Dashboard Entreprise B2B :</span> Gestion dynamique ultra-sensible compilant des millions d'entrées SQL sous Angular avec hiérarchie RBAC.</li>
  <li><span class="project-title">E-Commerce Headless SSR :</span> Structure commerciale sans-tête propulsée via Stripe Node optimisée agressivement pour un référencement SEO fulgurant.</li>
</ul>
