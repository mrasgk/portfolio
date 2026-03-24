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
    <h2>Desarrollador Full Stack / Ingeniero de Software</h2>
    <div class="contact-grid">
      <div class="contact-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        <span>Casablanca, Marruecos (Remoto)</span>
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

### Resumen Profesional
<div class="summary">
Desarrollador Full Stack Marroquí enfocado en el rendimiento absoluto y ejecución rápida. Especializado en ecosistemas JavaScript (Next.js, Angular, React Native) construyendo APIs resilientes con backends corporativos (.NET 8 y Node.js). Confundador y Desarrollador Líder de Vorax. Conecto a las corporaciones con plataformas y paneles empresariales altamente optimizados. Auto-Emprendedor. Disponible y totalmente listo para trabajos corporativos en Nómina o Contratos B2B para autónomos remotos.
</div>

### Tecnologías Clave

<div class="skill-grid">
  <div class="skill-label">Lógica Frontend</div>
  <div class="skill-value">Next.js, React, Angular v16+, Vue.js, TypeScript, Tailwind CSS</div>
</div>
<div class="skill-grid">
  <div class="skill-label">Backend & Datos</div>
  <div class="skill-value">C# .NET 8, Node.js, Express, PostgreSQL, SQL Server, MongoDB</div>
</div>
<div class="skill-grid">
  <div class="skill-label">Desarrollo Móvil</div>
  <div class="skill-value">React Native (Cross-Platform Android & iOS)</div>
</div>
<div class="skill-grid">
  <div class="skill-label">DevOps Corporativo</div>
  <div class="skill-value">Integraciones Microsoft Power Platform, Git, Canalizaciones CI/CD, Azure Cloud</div>
</div>
<div class="skill-grid">
  <div class="skill-label">Idiomas (Multilingüe)</div>
  <div class="skill-value">Árabe (Nativo), Inglés (Fluido), Francés (Avanzado), Español (Avanzado)</div>
</div>

### Experiencia en Producción

<div class="job">
  <div class="job-header">
    <div>
      <span class="job-title">Fundador e Ingeniero Jefe</span> | <span class="job-company">Vorax — Red Social Deportiva</span>
    </div>
    <span class="job-date">Feb 2026 – Presente</span>
  </div>
  <ul>
    <li>Arquitecto único y creador del código base de una plataforma deportiva masiva para conectar atletas.</li>
    <li>Manejo constante del ciclo de producto, migraciones de base de datos relacional y clusters en la nube de alta eficacia.</li>
    <li>Concepción de hilos de feeds (muros sociales) con sockets en vivo y seguridad de enrutamiento API con TypeScript.</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">
    <div>
      <span class="job-title">Desarrollador Full Stack</span> | <span class="job-company">BitBot / QBot</span>
    </div>
    <span class="job-date">Ago 2024 – Ene 2026</span>
  </div>
  <ul>
    <li>Experto impulsando arquitecturas puente entre los portales corporativos complejos de Microsoft (SharePoint) y bases Modern UI Angular.</li>
    <li><strong>Operación Robotic:</strong> Entrega e implementación crítica corporativa bajo .NET y C# en tiempo real asíncrono.</li>
    <li><strong>Proyectos CLIMMAG & ACAF:</strong> Configuración lógica y flujos algorítmicos automatizados nativamente usando PowerApps y JS.</li>
    <li><strong>Analítica IoT:</strong> Integración y extracción en vivo (Streaming) de registros SQL Server inmensos en tableros de control de gerencia.</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">
    <div>
      <span class="job-title">Tutoría de Software</span> | <span class="job-company">AQUALAB</span>
    </div>
    <span class="job-date">Jul 2024 – Ago 2024</span>
  </div>
  <ul>
    <li>Fase intensiva adaptándome a las métricas del flujo industrial, implementación robusta y ciclos directos con entregables SCRUM.</li>
  </ul>
</div>

### Perfil Académico

<div class="job">
  <div class="job-header">
    <div><span class="job-title">Máster Universitario SW e Ingeniería</span> | <span class="job-company">SupMTI Oujda</span></div>
    <span class="job-date">2024 – 2027 (En curso)</span>
  </div>
  <div style="padding-left: 18px; font-size: 10px; margin-top: 2px;">Énfasis estricto formativo en diseño Cloud empresarial nativo, Inteligencia Artificial predictiva (AI/ML), y arquitectura avanzada lógica y bases de datos relacionales puras.</div>
</div>

<div class="job">
  <div class="job-header">
    <div><span class="job-title">Clases Preparatorias STEM</span> | <span class="job-company">Universidad Internacional</span></div>
    <span class="job-date">2022 – 2024</span>
  </div>
  <div style="padding-left: 18px; font-size: 10px; margin-top: 2px;">Fase superior donde dominé principios técnicos, físicos y resolución sistemática general desarrollando aptitudes STEM críticas con rigor matemático.</div>
</div>

### Casos de Estudio Selectos

<ul>
  <li><span class="project-title">Sistema de Reclutamiento AI:</span> Extracción rápida utilizando Lenguajes de Modelos Amplios analizando descripciones laborales y cruzando la relevancia con perfiles.</li>
  <li><span class="project-title">Tablero Analítico B2B:</span> Solución gerencial para miles de inputs asíncronos enlazando credenciales RBAC en tableros de la nube empresarial.</li>
  <li><span class="project-title">App Tienda E-Commerce Headless SSR:</span> Integración con Stripe API optimizando los paquetes de recarga DOM Next.js asegurando el más extenso SEO global garantizado.</li>
</ul>
