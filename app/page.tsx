"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { t, Lang } from "./i18n";
import {
  Code,
  Smartphone,
  Server,
  Database,
  Brain,
  Trophy,
  Target,
  LayoutTemplate,
  Globe,
  Mail,
  ArrowUpRight,
  Menu,
  X,
  Download
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const IconGithub = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C4.3 1.5 3 1.9 3 1.9a5.3 5.3 0 0 0-.1 3.8 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
);
const IconLinkedin = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const IconWhatsApp = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 448 512" width={size} height={size} fill="currentColor">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.2c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

// Animation Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const projects = [
  {
    id: 1,
    title: "Vorax — Sports Networking Platform",
    desc: "A scalable sports platform connecting people through shared passions. Event management, real-world interactions, and social feed architecture.",
    tech: ["Next.js", "React Native", ".NET 8", "PostgreSQL"],
    category: ["Next.js", "Mobile"],
    image: "/vorax.png",
    link: "https://voraxs.com",
    i18nKey: "p1"
  },
  {
    id: 2,
    title: "AI CV Analyzer",
    desc: "LLM-powered system that evaluates CVs against job descriptions, scores candidates asynchronously, and outputs actionable hiring recommendations.",
    tech: ["React.js", "Node.js", "OpenAI", "TypeScript"],
    category: ["React"],
    image: "/project_ai_3d_1774309890553.png",
    i18nKey: "p2"
  },
  {
    id: 3,
    title: "Enterprise B2B Dashboard",
    desc: "High-performance analytics dashboard for enterprise user management, role-based access control, and complex dataset visualization.",
    tech: ["Angular v16+", ".NET 8", "SQL Server"],
    category: ["Angular"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    i18nKey: "p3"
  },
  {
    id: 4,
    title: "Fitness Tracking Mobile App",
    desc: "Cross-platform React Native app integrating health APIs to track performance metrics and deliver personalized training routines.",
    tech: ["React Native", "Express.js", "MongoDB"],
    category: ["Mobile"],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
    i18nKey: "p4"
  },
  {
    id: 5,
    title: "PowerApps Enterprise Workflow",
    desc: "Full internal suite bridging departments using Power Platform for rapid approvals, resource allocation, and automation pipelines.",
    tech: ["PowerApps", "Power Automate", "SharePoint"],
    category: ["Other"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    i18nKey: "p5"
  },
  {
    id: 6,
    title: "Headless E-Commerce Storefront",
    desc: "Modern headless e-commerce platform using Next.js SSR, dynamic API routes, Stripe integration, and optimized page payloads.",
    tech: ["Next.js", "TypeScript", "Stripe"],
    category: ["Next.js"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    i18nKey: "p6"
  },
];

const FILTERS = ["All", "Next.js", "Angular", "React", "Mobile"];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  
  const dict = t[lang];

  const filtered = projects.filter(
    (p) => filter === "All" || p.category.includes(filter)
  );

  return (
    <main className={styles.main}>
      {/* ── NAV ── */}
      <nav className={styles.nav}>
        <motion.a href="#home" whileTap={{ scale: 0.9 }} className={styles.navLogo}>
          RAS<span>.</span>
        </motion.a>

        {/* ── DESKTOP LINKS ── */}
        <div className={styles.desktopNavLinks}>
          <motion.a href="#about" whileTap={{ scale: 0.9 }}>{dict.nav.about}</motion.a>
          <motion.a href="#skills" whileTap={{ scale: 0.9 }}>{dict.nav.skills}</motion.a>
          <motion.a href="#timeline" whileTap={{ scale: 0.9 }}>{dict.nav.experience}</motion.a>
          <motion.a href="#portfolio" whileTap={{ scale: 0.9 }}>{dict.nav.projects}</motion.a>
          <motion.a href="#contact" whileTap={{ scale: 0.9 }} className={styles.navCta}>{dict.nav.hireMe}</motion.a>
          <div className={styles.langPills}>
            {(["en", "fr", "es"] as Lang[]).map((l) => (
              <button
                key={l}
                className={`${styles.langPill} ${lang === l ? styles.langActive : ""}`}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <div className={styles.socialGroup}>
            <a href="https://github.com/mrasgk" target="_blank" rel="noreferrer" className={styles.socialIcon}><IconGithub size={18} /></a>
            <a href="https://ma.linkedin.com/in/rachid-alaoui-selsouli-b748bb3a3" target="_blank" rel="noreferrer" className={styles.socialIcon}><IconLinkedin size={18} /></a>
            <a href="https://wa.me/212639574490" target="_blank" rel="noreferrer" className={styles.socialIcon}><IconWhatsApp size={18} /></a>
            <a href="mailto:rachidalaouiselsoli@gmail.com" className={styles.socialIcon}><Mail size={18} /></a>
          </div>
        </div>

        {/* Hamburger Toggle */}
        <button className={styles.menuBtn} onClick={() => setMenuOpen(true)} aria-label="Open Menu">
          <Menu size={24} />
        </button>
      </nav>

      {/* ── MOBILE OVERLAY MENU ── */}
      <div className={`${styles.mobileNavOverlay} ${menuOpen ? styles.mobileNavOpen : ''}`}>
        <button className={styles.closeBtn} onClick={() => setMenuOpen(false)} aria-label="Close Menu">
          <X size={32} />
        </button>
        <div className={styles.mobileNavLinks}>
          <motion.a href="#about" whileTap={{ scale: 0.85 }} onClick={() => setMenuOpen(false)}>{dict.nav.about}</motion.a>
          <motion.a href="#skills" whileTap={{ scale: 0.85 }} onClick={() => setMenuOpen(false)}>{dict.nav.skills}</motion.a>
          <motion.a href="#timeline" whileTap={{ scale: 0.85 }} onClick={() => setMenuOpen(false)}>{dict.nav.experience}</motion.a>
          <motion.a href="#portfolio" whileTap={{ scale: 0.85 }} onClick={() => setMenuOpen(false)}>{dict.nav.projects}</motion.a>
          <motion.a href="#contact" whileTap={{ scale: 0.85 }} className={styles.navCtaMobile} onClick={() => setMenuOpen(false)}>{dict.nav.hireMe}</motion.a>
          <div className={styles.langPillsMobile}>
            {(["en", "fr", "es"] as Lang[]).map((l) => (
              <button
                key={l}
                className={`${styles.langPill} ${lang === l ? styles.langActive : ""}`}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <div className={styles.socialGroupMobile}>
            <a href="https://github.com/mrasgk" target="_blank" rel="noreferrer" className={styles.socialIconMobile} onClick={() => setMenuOpen(false)}><IconGithub size={24} /></a>
            <a href="https://ma.linkedin.com/in/rachid-alaoui-selsouli-b748bb3a3" target="_blank" rel="noreferrer" className={styles.socialIconMobile} onClick={() => setMenuOpen(false)}><IconLinkedin size={24} /></a>
            <a href="https://wa.me/212639574490" target="_blank" rel="noreferrer" className={styles.socialIconMobile} onClick={() => setMenuOpen(false)}><IconWhatsApp size={24} /></a>
            <a href="mailto:rachidalaouiselsoli@gmail.com" className={styles.socialIconMobile} onClick={() => setMenuOpen(false)}><Mail size={24} /></a>
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className={styles.section} id="home">
        <div className={styles.hero}>
          {/* Left content */}
          <div className={styles.heroLeft}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              {dict.hero.badge}
            </div>

            <h1 className={styles.heroTitle}>
              {dict.hero.title1}<br />
              <em>{dict.hero.title2}</em>
            </h1>

            <p className={styles.heroSub}>
              {dict.hero.sub}
            </p>

            <div className={styles.heroBtns}>
              <a href="#portfolio" className={styles.btnPrimary}>{dict.hero.btn1}</a>
              <a href="#contact" className={styles.btnSecondary}>{dict.hero.btn2}</a>
              <a href={`/CV_${lang}.pdf`} target="_blank" download className={styles.btnSecondary} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Download size={18} /> {dict.hero.downloadCv}
              </a>
            </div>

            <div className={styles.heroQuickTech}>
              {["Next.js", "Angular", "React Native", ".NET 8", "TypeScript"].map((t) => (
                <span key={t} className={styles.qtBadge}>{t}</span>
              ))}
            </div>
          </div>

          {/* Right — Profile image */}
          <div className={styles.heroRight}>
            <div className={styles.imageWrapper}>
              <div className={styles.ring1} />
              <div className={styles.ring2} />
              <div className={styles.imageHex}>
                <img
                  src="/rachid_nobg.png"
                  alt="Rachid Alaoui Selsouli"
                  className={styles.heroPhoto}
                />
              </div>
              <div className={`${styles.floatPill} ${styles.pill1}`}>⚡ Next.js</div>
              <div className={`${styles.floatPill} ${styles.pill2}`}>📱 React Native</div>
              <div className={`${styles.floatPill} ${styles.pill3}`}>🔷 .NET 8</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className={styles.section} id="about">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className={styles.sectionLabel}>{dict.about.label}</div>
          <h2 className={styles.sectionTitle}>{dict.about.title1} <span>{dict.about.title2}</span></h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutBody}>
              <p>{dict.about.p1}</p>
              <p>{dict.about.p2}</p>
              <p>{dict.about.p3}</p>
            </div>
            <div className={styles.statsGrid}>
              {[
                { num: "Vorax", label: dict.stats.founder },
                { num: "10+", label: dict.stats.tech },
                { num: "Web+", label: dict.stats.mobile },
                { num: "End-to-End", label: dict.stats.lifecycle },
              ].map(({ num, label }) => (
                <div key={label} className={styles.statCard}>
                  <div className={styles.statNum}>{num}</div>
                  <div className={styles.statLabel}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── SKILLS ── */}
      <section className={styles.section} id="skills">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className={styles.sectionLabel}>{dict.skills.label}</div>
          <h2 className={styles.sectionTitle}>{dict.skills.title1} <span>{dict.skills.title2}</span></h2>
          <p className={styles.sectionDesc}>
            {dict.skills.desc}
          </p>

          <motion.div className={styles.skillsGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className={styles.skillCard}>
              <div className={styles.skillCardHeader}>
                <div className={styles.skillIcon}><Code size={20} /></div>
                <div className={styles.skillCardTitle}>{dict.skills.st1}</div>
              </div>
              <div className={styles.pillGroup}>
                <span className={`${styles.pill} ${styles.pillStar}`}>Next.js ⭐</span>
                <span className={styles.pill}>React.js</span>
                <span className={`${styles.pill} ${styles.pillStar}`}>Angular v16+</span>
                <span className={styles.pill}>Vue.js</span>
                <span className={styles.pill}>TypeScript</span>
                <span className={styles.pill}>HTML5 / CSS3</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillCardHeader}>
                <div className={styles.skillIcon}><Smartphone size={20} /></div>
                <div className={styles.skillCardTitle}>{dict.skills.st2}</div>
              </div>
              <div className={styles.pillGroup}>
                <span className={`${styles.pill} ${styles.pillStar}`}>React Native ⭐</span>
                <span className={styles.pill}>Cross-platform UI</span>
                <span className={styles.pill}>Navigation APIs</span>
                <span className={styles.pill}>Health APIs</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillCardHeader}>
                <div className={styles.skillIcon}><Server size={20} /></div>
                <div className={styles.skillCardTitle}>{dict.skills.st3}</div>
              </div>
              <div className={styles.pillGroup}>
                <span className={`${styles.pill} ${styles.pillStar}`}>.NET 8 / C#</span>
                <span className={styles.pill}>Node.js</span>
                <span className={styles.pill}>Express.js</span>
                <span className={styles.pill}>REST APIs</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillCardHeader}>
                <div className={styles.skillIcon}><Database size={20} /></div>
                <div className={styles.skillCardTitle}>{dict.skills.st4}</div>
              </div>
              <div className={styles.pillGroup}>
                <span className={`${styles.pill} ${styles.pillStar}`}>PostgreSQL</span>
                <span className={styles.pill}>SQL Server</span>
                <span className={styles.pill}>Query Optimization</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillCardHeader}>
                <div className={styles.skillIcon}><Brain size={20} /></div>
                <div className={styles.skillCardTitle}>{dict.skills.st5}</div>
              </div>
              <div className={styles.pillGroup}>
                <span className={`${styles.pill} ${styles.pillStar}`}>Prompt Engineering</span>
                <span className={styles.pill}>AI Integration</span>
                <span className={styles.pill}>Git / GitHub</span>
                <span className={styles.pill}>Railway / CD</span>
                <span className={styles.pill}>Power Platform</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillCardHeader}>
                <div className={styles.skillIcon}><Globe size={20} /></div>
                <div className={styles.skillCardTitle}>{dict.skills.st6}</div>
              </div>
              <div className={styles.pillGroup}>
                <span className={`${styles.pill} ${styles.pillStar}`}>{dict.skills.ar}</span>
                <span className={`${styles.pill} ${styles.pillStar}`}>{dict.skills.en}</span>
                <span className={styles.pill}>{dict.skills.fr}</span>
                <span className={styles.pill}>{dict.skills.es}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── TIMELINE (EXPERIENCE & EDUCATION) ── */}
      <section className={styles.section} id="timeline">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className={styles.sectionLabel}>My Journey</div>
          <h2 className={styles.sectionTitle}>{dict.timeline.exp} & <span>{dict.timeline.edu}</span></h2>

          <div className={styles.timelineWrapper}>

            {/* ── COLUMN 1: EXPERIENCE ── */}
            <div className={styles.timelineCol}>
              <h3 className={styles.timelineHeader}>{dict.timeline.exp}</h3>
              <div className={styles.timeline}>

                <motion.div className={styles.timelineItem} variants={fadeUp}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineDate}>{dict.timeline.work1.date}</div>
                    <div className={styles.timelineTitle}>{dict.timeline.work1.title}</div>
                    <div className={styles.timelinePlace}>{dict.timeline.work1.place}</div>
                    <div className={styles.timelineDesc} style={{ whiteSpace: 'pre-line' }}>{dict.timeline.work1.desc}</div>
                  </div>
                </motion.div>

                <motion.div className={styles.timelineItem} variants={fadeUp}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineDate}>{dict.timeline.work2.date}</div>
                    <div className={styles.timelineTitle}>{dict.timeline.work2.title}</div>
                    <div className={styles.timelinePlace}>{dict.timeline.work2.place}</div>
                    <p className={styles.timelineDesc} style={{ whiteSpace: 'pre-line' }}>{dict.timeline.work2.desc}</p>
                    <div className={styles.timelineTags}>
                      <span className={styles.timelineTag}>.NET</span>
                      <span className={styles.timelineTag}>Angular</span>
                      <span className={styles.timelineTag}>Power Platform</span>
                      <span className={styles.timelineTag}>SQL Server</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div className={styles.timelineItem} variants={fadeUp}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineDate}>{dict.timeline.work3.date}</div>
                    <div className={styles.timelineTitle}>{dict.timeline.work3.title}</div>
                    <div className={styles.timelinePlace}>{dict.timeline.work3.place}</div>
                    <p className={styles.timelineDesc} style={{ whiteSpace: 'pre-line' }}>{dict.timeline.work3.desc}</p>
                    <div className={styles.timelineTags}>
                      <span className={styles.timelineTag}>Next.js</span>
                      <span className={styles.timelineTag}>React Native</span>
                      <span className={styles.timelineTag}>.NET 8</span>
                      <span className={styles.timelineTag}>PostgreSQL</span>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* ── COLUMN 2: EDUCATION ── */}
            <div className={styles.timelineCol}>
              <h3 className={styles.timelineHeader}>{dict.timeline.edu}</h3>
              <div className={styles.timeline}>

                <motion.div className={styles.timelineItem} variants={fadeUp}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineDate}>{dict.timeline.edu1.date}</div>
                    <div className={styles.timelineTitle}>{dict.timeline.edu1.title}</div>
                    <div className={styles.timelinePlace}>{dict.timeline.edu1.place}</div>
                    <p className={styles.timelineDesc}>{dict.timeline.edu1.desc}</p>
                  </div>
                </motion.div>

                <motion.div className={styles.timelineItem} variants={fadeUp}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineDate}>{dict.timeline.edu2.date}</div>
                    <div className={styles.timelineTitle}>{dict.timeline.edu2.title}</div>
                    <div className={styles.timelinePlace}>{dict.timeline.edu2.place}</div>
                    <p className={styles.timelineDesc}>{dict.timeline.edu2.desc}</p>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* ── QUOTE ── */}
      <section className={styles.quoteSection} id="philosophy">
        <motion.div
          className={styles.quoteCard}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className={styles.quoteText}>
            {dict.quote}
          </p>
        </motion.div>
      </section>

      {/* ── PROJECTS ── */}
      <section className={styles.section} id="portfolio">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className={styles.sectionLabel}>{dict.projects.label}</div>
          <h2 className={styles.sectionTitle}>{dict.projects.title1} <span>{dict.projects.title2}</span></h2>
          <p className={styles.sectionDesc}>
            {dict.projects.desc}
          </p>

          <div className={styles.filters}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`${styles.fBtn} ${filter === f ? styles.fBtnActive : ""}`}
              >
                {f === "All" ? dict.projects.all : f}
              </button>
            ))}
          </div>

          <motion.div className={styles.projectsGrid} layout>
            {filtered.map((p) => {
              const pData = (dict.projects as any)[p.i18nKey] || {};
              return (
              <motion.a
                href={p.link || undefined}
                target={p.link ? "_blank" : undefined}
                rel={p.link ? "noreferrer" : undefined}
                key={p.id}
                className={styles.pCard}
                style={{ display: "block", textDecoration: "none", cursor: p.link ? "pointer" : "default" }}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.pImgWrap}>
                  <img src={p.image} alt={pData.title || p.title} className={styles.pImg} />
                </div>
                <div className={styles.pBody}>
                  <div className={styles.pTechRow}>
                    {p.tech.map((t) => <span key={t} className={styles.pTech}>{t}</span>)}
                  </div>
                  <h3 className={styles.pTitle}>{pData.title || p.title}</h3>
                  <p className={styles.pDesc}>{pData.desc || p.desc}</p>
                </div>
              </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* ── WHY ME ── */}
      <section className={styles.section} id="whyme">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className={styles.sectionLabel}>{dict.why.label}</div>
          <h2 className={styles.sectionTitle}>{dict.why.title1} <span>{dict.why.title2}</span></h2>

          <motion.div className={styles.wowGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: <LayoutTemplate size={28} />, title: dict.why.c1, desc: dict.why.c1d },
              { icon: <Smartphone size={28} />, title: dict.why.c2, desc: dict.why.c2d },
              { icon: <Trophy size={28} />, title: dict.why.c3, desc: dict.why.c3d },
              { icon: <Database size={28} />, title: dict.why.c4, desc: dict.why.c4d },
              { icon: <Target size={28} />, title: dict.why.c5, desc: dict.why.c5d },
              { icon: <Brain size={28} />, title: dict.why.c6, desc: dict.why.c6d },
            ].map(({ icon, title, desc }, i) => (
              <motion.div key={`wow-card-${i}`} className={styles.wowCard} variants={fadeUp}>
                <div className={styles.wowInner}>
                  <div className={styles.wowIconWrap}>{icon}</div>
                  <div>
                    <div className={styles.wowTitle}>{title}</div>
                    <div className={styles.wowDesc}>{desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── CONTACT ── */}
      <div className={styles.contactStrip} id="contact">
        <motion.div
          className={styles.contactCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className={styles.sectionLabel} style={{ justifyContent: "center" }}>{dict.contact.label}</div>
          <h2 className={styles.contactTitle}>
            {dict.contact.title1}<br /><span>{dict.contact.title2}</span>
          </h2>
          <p className={styles.contactSub}>
            {dict.contact.desc}
            <br/><br/>
            <span style={{ fontSize: '0.9rem', color: 'var(--accent)', display: 'block', marginBottom: '0.4rem' }}>{dict.contact.avail}</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--accent)', display: 'block' }}>{dict.contact.rate}</span>
          </p>
          <a href="mailto:rachidalaouiselsoli@gmail.com" className={styles.contactLink}>
            <Mail size={18} />
            <span>rachidalaouiselsoli@gmail.com</span>
            <ArrowUpRight size={16} style={{ flexShrink: 0 }} />
          </a>
        </motion.div>
      </div>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <span>© {new Date().getFullYear()} RAS — Rachid Alaoui Selsouli</span>
          <span>Full Stack Developer · Next.js · Angular · React Native · .NET</span>
        </div>
        <div className={styles.footerSocial}>
          <a href="https://github.com/mrasgk" target="_blank" rel="noreferrer" aria-label="Github"><IconGithub size={20} /></a>
          <a href="https://ma.linkedin.com/in/rachid-alaoui-selsouli-b748bb3a3" target="_blank" rel="noreferrer" aria-label="LinkedIn"><IconLinkedin size={20} /></a>
          <a href="https://wa.me/212639574490" target="_blank" rel="noreferrer" aria-label="WhatsApp"><IconWhatsApp size={20} /></a>
          <a href="mailto:rachidalaouiselsoli@gmail.com" aria-label="Email"><Mail size={20} /></a>
        </div>
      </footer>
    </main>
  );
}
