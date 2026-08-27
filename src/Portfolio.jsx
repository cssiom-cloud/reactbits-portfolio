import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  FolderGit2,
  Cpu,
  Mail,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Layers,
  Zap,
  Terminal,
  Copy,
  Check,
  Code2,
  Boxes,
  Globe,
  Database,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

// Robust SVG Brand Icons
export const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);


import { BlurText } from "./components/BlurText";
import { MagneticButton } from "./components/MagneticButton";
import { SpotlightCard } from "./components/SpotlightCard";
import { AnimatedDock } from "./components/AnimatedDock";
import { AuroraBackground } from "./components/AuroraBackground";

// Re-export subcomponents for direct usage
export { BlurText, MagneticButton, SpotlightCard, AnimatedDock, AuroraBackground };

/* =========================================================================
   PROJECTS, SKILLS & TIMELINE DATA
   ========================================================================= */
export const PROJECTS_DATA = [
  {
    id: "quantum-ai",
    title: "AuraOS — Next-Gen AI Spatial Canvas",
    category: "AI & WebGL",
    description:
      "A spatial AI workspace integrating LLM orchestration, live canvas rendering, and real-time WebGL audio-reactive shaders with sub-10ms UI latency.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    tags: ["React 19", "Three.js", "Framer Motion", "TailwindCSS", "FastAPI"],
    metrics: "2.4M monthly renders • 99.9% uptime",
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
  {
    id: "chronos-db",
    title: "Nexus — Distributed Observability",
    category: "SaaS & Cloud",
    description:
      "High-throughput real-time telemetry dashboard visualizing million-event metrics, distributed traces, and automated anomaly detection graphs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    tags: ["TypeScript", "Next.js 15", "Apache ECharts", "Go", "WebSockets"],
    metrics: "100k+ events/sec • Sub-50ms query time",
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
  {
    id: "strata-design",
    title: "Strata — Motion Design Engine",
    category: "Design Systems",
    description:
      "An accessible enterprise component system with dynamic fluid token physics, micro-interactions, and multi-theme glassmorphism tokens.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Radix UI", "Tailwind CSS", "Framer Motion", "Storybook"],
    metrics: "50k+ weekly npm downloads",
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
  {
    id: "hyper-forge",
    title: "Forge — Low-Code Shader Studio",
    category: "AI & WebGL",
    description:
      "Browser-based node editor compiling visual graph logic directly into optimized GLSL fragment shaders with instantaneous WebGPU previews.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80",
    tags: ["WebGPU", "GLSL", "React Flow", "Rust (Wasm)", "Zustand"],
    metrics: "Zero-lag 120 FPS node graph",
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
  {
    id: "zenith-trade",
    title: "Zenith — Institutional Crypto Terminal",
    category: "SaaS & Cloud",
    description:
      "Low-latency algorithmic trading interface with live order books, customizable glass widgets, and hardware-accelerated charting.",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Web Workers", "TradingView Lightweight", "Tailwind"],
    metrics: "$1.2B daily routed volume",
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
  {
    id: "velocity-ui",
    title: "Verve — 60fps Micro-interaction Kit",
    category: "Design Systems",
    description:
      "Open-source React library of fluid physics interactions, spring-based cursor tracking, magnetic gestures, and morphing layout transitions.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    tags: ["Reactbits Patterns", "TypeScript", "Tailwind CSS", "Vite"],
    metrics: "12k GitHub Stars • Featured on ProductHunt",
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
];

const SKILLS_CATEGORIES = [
  {
    title: "Frontend Architecture",
    icon: Code2,
    skills: [
      { name: "React 19 / Next.js", level: "Expert", exp: "8 yrs" },
      { name: "TypeScript", level: "Expert", exp: "7 yrs" },
      { name: "Tailwind CSS v4", level: "Master", exp: "6 yrs" },
      { name: "State Architecture (Zustand/Redux)", level: "Expert", exp: "8 yrs" },
      { name: "Performance (Core Web Vitals)", level: "Master", exp: "7 yrs" },
    ],
  },
  {
    title: "Motion & Spatial Computing",
    icon: Boxes,
    skills: [
      { name: "Framer Motion", level: "Master", exp: "6 yrs" },
      { name: "Three.js / React Three Fiber", level: "Advanced", exp: "4 yrs" },
      { name: "GLSL & Shaders", level: "Advanced", exp: "3 yrs" },
      { name: "Fluid Spring Physics", level: "Master", exp: "5 yrs" },
      { name: "Canvas 2D / WebGPU", level: "Advanced", exp: "3 yrs" },
    ],
  },
  {
    title: "Backend & Systems",
    icon: Database,
    skills: [
      { name: "Node.js / Bun", level: "Expert", exp: "7 yrs" },
      { name: "Go (Golang)", level: "Advanced", exp: "3 yrs" },
      { name: "Python (FastAPI)", level: "Advanced", exp: "5 yrs" },
      { name: "PostgreSQL & Redis", level: "Expert", exp: "6 yrs" },
      { name: "Docker & Containerization", level: "Advanced", exp: "5 yrs" },
    ],
  },
  {
    title: "Engineering Excellence",
    icon: ShieldCheck,
    skills: [
      { name: "Design Systems (Figma to Code)", level: "Master", exp: "8 yrs" },
      { name: "A11y & WCAG 2.2", level: "Expert", exp: "6 yrs" },
      { name: "CI/CD & GitHub Actions", level: "Advanced", exp: "5 yrs" },
      { name: "Micro-Frontend Architectures", level: "Expert", exp: "4 yrs" },
      { name: "Automated Testing (Playwright/Vitest)", level: "Expert", exp: "6 yrs" },
    ],
  },
];

const EXPERIENCE_TIMELINE = [
  {
    period: "2023 — Present",
    role: "Lead Frontend Architect",
    company: "Apex Spatial Labs",
    description:
      "Spearheading the core UI architecture and interactive WebGL canvas engine. Increased client rendering framerate from 34fps to locked 60fps across low-tier devices.",
    highlights: ["Architected 40+ production micro-frontends", "Mentored 18 engineers"],
  },
  {
    period: "2021 — 2023",
    role: "Senior Design Engineer & Systems Specialist",
    company: "Krypton Cloud",
    description:
      "Designed and authored company-wide Design System and fluid animation library used by 120+ internal engineers and over 4 million daily active enterprise users.",
    highlights: ["Cut design-to-production time by 45%", "Achieved 99.8 Lighthouse score"],
  },
  {
    period: "2018 — 2021",
    role: "Full-Stack UI Engineer",
    company: "Vanguard Interactive",
    description:
      "Engineered high-concurrency client dashboards, interactive financial graphs, and real-time collaborative rich-text editors using React, WebSockets, and Node.js.",
    highlights: ["Shipped 14 high-impact client products", "Best UI Design Award 2020"],
  },
];

/* =========================================================================
   MAIN PORTFOLIO APPLICATION
   ========================================================================= */
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const emailAddress = "alex.rivera.dev@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "Philosophy", icon: User },
    { id: "projects", label: "Selected Works", icon: FolderGit2 },
    { id: "skills", label: "Architecture", icon: Cpu },
    { id: "contact", label: "Get in Touch", icon: Mail },
    { id: "github", label: "GitHub", icon: GithubIcon, href: "https://github.com", external: true },
    { id: "linkedin", label: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com", external: true },
    { id: "twitter", label: "Twitter / X", icon: TwitterIcon, href: "https://twitter.com", external: true },
  ];

  const handleNavigate = (item) => {
    if (item.external && item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
      return;
    }
    setActiveSection(item.id);
    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const categories = ["All", "AI & WebGL", "SaaS & Cloud", "Design Systems"];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100 antialiased selection:bg-blue-500/30 selection:text-white">
      {/* Background Aurora / Glow */}
      <AuroraBackground />

      {/* Global Apple-Style Dock */}
      <AnimatedDock
        items={navItems}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Container */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-32">
        {/* =========================================================================
            1. HERO SECTION
            ========================================================================= */}
        <section
          id="hero"
          className="flex min-h-[92vh] flex-col items-center justify-center pt-20 pb-16 text-center"
        >
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-neutral-300 backdrop-blur-md shadow-inner"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Available for Q3/Q4 Projects • Senior Frontend & Systems Architect</span>
          </motion.div>

          {/* Blur Text Headline */}
          <div className="max-w-4xl">
            <BlurText
              text="Alex Rivera"
              as="h1"
              delay={0.06}
              className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500 justify-center mb-4"
            />
            <BlurText
              text="Crafting fluid, high-performance interfaces with physics-based motion & distributed scalability."
              as="p"
              delay={0.03}
              initialDelay={0.3}
              className="text-lg sm:text-xl md:text-2xl text-neutral-400 font-normal leading-relaxed justify-center max-w-2xl mx-auto mt-4"
            />
          </div>

          {/* Hero CTAs with Magnetic Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
          >
            <MagneticButton
              onClick={() => handleNavigate({ id: "projects" })}
              className="group rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/25 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/40"
            >
              <span>Explore Selected Works</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>

            <MagneticButton
              onClick={handleCopyEmail}
              className="group rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-medium text-neutral-200 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.1] hover:border-white/25 hover:text-white"
            >
              {copiedEmail ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-neutral-400 group-hover:text-white transition-colors" />
                  <span>{emailAddress}</span>
                </>
              )}
            </MagneticButton>

            <MagneticButton
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate({ id: "contact" });
              }}
              className="rounded-full border border-transparent px-5 py-3.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              <span>Get In Touch</span>
              <ChevronRight className="h-4 w-4" />
            </MagneticButton>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 w-full max-w-3xl"
          >
            {[
              { label: "Performance Score", val: "99.9%", desc: "Lighthouse Avg" },
              { label: "Experience", val: "8+ Yrs", desc: "Production UI" },
              { label: "Shipped Products", val: "40+", desc: "Enterprise & OSS" },
              { label: "Animation Target", val: "60 FPS", desc: "Locked Spring Physics" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.06] bg-neutral-900/40 p-4 text-center backdrop-blur-lg"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {stat.val}
                </div>
                <div className="text-xs font-semibold text-blue-400 mt-0.5">{stat.label}</div>
                <div className="text-[11px] text-neutral-500 mt-1">{stat.desc}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* =========================================================================
            2. PHILOSOPHY & ARCHITECTURE SECTION
            ========================================================================= */}
        <section id="about" className="py-24 border-t border-white/[0.06]">
          <div className="mb-14">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
              <Sparkles className="h-4 w-4" />
              <span>Architectural Philosophy</span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineering with Aesthetic Precision & Math
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-400 text-base leading-relaxed">
              Every pixel, spring equation, and bundle kilobyte is calculated to deliver seamless 60fps
              spatial experiences that feel natural under human touch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SpotlightCard
              spotlightColor="rgba(59, 130, 246, 0.22)"
              borderColor="rgba(96, 165, 250, 0.4)"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-5">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fluid Spring Physics</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Replacing linear cubic-bezier curves with real Newtonian mass, damping, and stiffness
                equations. UI elements react dynamically to cursor velocity and natural inertia.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-blue-400">
                <span>Reactbits Motion Patterns</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(139, 92, 246, 0.22)"
              borderColor="rgba(167, 139, 250, 0.4)"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-5">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Minimalist Glassmorphism</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Deep obsidian palettes (`bg-neutral-950`) accented with multi-layer backdrop blurs,
                sub-pixel borders, and subtle luminous gradients that guide focus without distraction.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-violet-400">
                <span>Design System Precision</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(16, 185, 129, 0.22)"
              borderColor="rgba(52, 211, 153, 0.4)"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">
                <Terminal className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Resilient Systems</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Clean state boundaries, zero-jank micro-frontends, typed contract APIs, and
                instantaneous render pipelines optimized for enterprise scale.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-emerald-400">
                <span>High Concurrency & Uptime</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* =========================================================================
            3. PROJECTS GALLERY (SPOTLIGHT CARDS + 3D TILT)
            ========================================================================= */}
        <section id="projects" className="py-24 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
                <FolderGit2 className="h-4 w-4" />
                <span>Selected Works</span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Featured Case Studies & Systems
              </h2>
              <p className="mt-3 max-w-xl text-neutral-400 text-base">
                Interactive spotlight cards with real-time radial cursor tracking and 3D spatial tilt.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-md">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "text-neutral-400 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                >
                  <SpotlightCard
                    spotlightColor="rgba(59, 130, 246, 0.2)"
                    borderColor="rgba(147, 197, 253, 0.45)"
                    tiltIntensity={10}
                    className="h-full flex flex-col justify-between"
                  >
                    <div>
                      {/* Project Image with Subtle 3D Depth */}
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-900 border border-white/10 mb-6 group-hover:border-blue-500/30 transition-colors">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                        <div className="absolute top-3 left-3 rounded-full bg-neutral-900/80 px-3 py-1 text-[11px] font-semibold text-blue-400 backdrop-blur-md border border-white/10">
                          {project.category}
                        </div>
                      </div>

                      {/* Project Meta */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg p-2 text-neutral-400 hover:bg-white/10 hover:text-white transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <GithubIcon className="h-4 w-4" />
                          </a>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg p-2 text-neutral-400 hover:bg-white/10 hover:text-white transition-colors"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </div>

                      <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Performance Metric Badge */}
                      <div className="mb-4 rounded-xl border border-white/[0.04] bg-white/[0.02] px-3.5 py-2 text-xs font-medium text-neutral-300 flex items-center justify-between">
                        <span className="text-neutral-500">Key Metric</span>
                        <span className="text-emerald-400 font-semibold">{project.metrics}</span>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-neutral-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* =========================================================================
            4. SKILLS & ARCHITECTURE RADAR SECTION
            ========================================================================= */}
        <section id="skills" className="py-24 border-t border-white/[0.06]">
          <div className="mb-14">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
              <Cpu className="h-4 w-4" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Core Capabilities & Technologies
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-400 text-base">
              A breakdown of production experience across modern web technologies, spatial shaders,
              and distributed infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS_CATEGORIES.map((cat, idx) => {
              const CategoryIcon = cat.icon;
              return (
                <SpotlightCard
                  key={idx}
                  spotlightColor="rgba(59, 130, 246, 0.16)"
                  borderColor="rgba(147, 197, 253, 0.35)"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <CategoryIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-2.5 transition-colors hover:bg-white/[0.05]"
                      >
                        <span className="text-sm font-medium text-neutral-200">{skill.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-neutral-500 font-mono">{skill.exp}</span>
                          <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-blue-400 border border-blue-500/20">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

          {/* Experience Journey Timeline */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-white mb-8">Career Trajectory</h3>
            <div className="space-y-6">
              {EXPERIENCE_TIMELINE.map((item, idx) => (
                <SpotlightCard
                  key={idx}
                  spotlightColor="rgba(139, 92, 246, 0.18)"
                  borderColor="rgba(196, 181, 253, 0.35)"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.role}</h4>
                      <div className="text-sm font-medium text-blue-400">{item.company}</div>
                    </div>
                    <span className="inline-block rounded-full bg-white/[0.05] px-3 py-1 text-xs font-mono text-neutral-400 border border-white/10 w-fit">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-flex items-center gap-1.5 text-xs text-neutral-300 font-medium bg-neutral-900/60 px-3 py-1 rounded-lg border border-white/[0.06]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {h}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. CONTACT & MAGNETIC CTA SECTION
            ========================================================================= */}
        <section id="contact" className="py-24 border-t border-white/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Info Column */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
                <Mail className="h-4 w-4" />
                <span>Initiate Connection</span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Let's Build Something Unforgettable.
              </h2>
              <p className="mt-4 text-neutral-400 text-base leading-relaxed">
                Currently open to select enterprise architecture advisory, high-impact design engineering
                contracts, or foundational tech leadership roles.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-neutral-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10">
                    <Globe className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500">Location & Timezone</div>
                    <div className="text-sm font-medium">San Francisco, CA (PST / UTC-8) • Remote Worldwide</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-neutral-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10">
                    <Mail className="h-5 w-5 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500">Direct Email</div>
                    <div className="text-sm font-medium">{emailAddress}</div>
                  </div>
                </div>
              </div>

              {/* Social Links with Magnetic Physics */}
              <div className="mt-10 flex items-center gap-3">
                {[
                  { icon: GithubIcon, label: "GitHub", href: "https://github.com" },
                  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
                  { icon: TwitterIcon, label: "Twitter / X", href: "https://twitter.com" },
                ].map((s, idx) => {
                  const SIcon = s.icon;
                  return (
                    <MagneticButton
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-colors"
                      aria-label={s.label}
                    >
                      <SIcon className="h-5 w-5" />
                    </MagneticButton>
                  );
                })}
              </div>
            </div>

            {/* Right Interactive Form Column */}
            <div className="lg:col-span-7">
              <SpotlightCard
                spotlightColor="rgba(59, 130, 246, 0.22)"
                borderColor="rgba(147, 197, 253, 0.4)"
              >
                {contactSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                      <Check className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Transmission Dispatched</h3>
                    <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
                      Thank you for reaching out. Your message has been received and I will respond within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setContactSubmitted(false);
                        setFormData({ name: "", email: "", message: "" });
                      }}
                      className="rounded-full bg-white/10 px-6 py-2 text-xs font-semibold text-white hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSubmitted(true);
                    }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Satoshi Nakamoto"
                          className="w-full rounded-xl border border-white/10 bg-neutral-900/90 px-4 py-3 text-sm text-white placeholder-neutral-500 backdrop-blur-md transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. satoshi@bitcoin.org"
                          className="w-full rounded-xl border border-white/10 bg-neutral-900/90 px-4 py-3 text-sm text-white placeholder-neutral-500 backdrop-blur-md transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-2">
                        Project Brief / Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your product, timeline, and architectural ambitions..."
                        className="w-full rounded-xl border border-white/10 bg-neutral-900/90 px-4 py-3 text-sm text-white placeholder-neutral-500 backdrop-blur-md transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                      <div className="text-[11px] text-neutral-500">
                        ⚡ Typically responds within 4-12 hours.
                      </div>
                      <MagneticButton
                        type="submit"
                        className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/25 hover:from-blue-500 hover:to-violet-500 hover:shadow-blue-500/40 transition-all duration-300"
                      >
                        <span>Send Transmission</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </MagneticButton>
                    </div>
                  </form>
                )}
              </SpotlightCard>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/[0.06] pt-8 text-center text-xs text-neutral-500">
          <p>
            Designed & Engineered with React 19, Tailwind CSS & Framer Motion. Powered by Reactbits
            design patterns.
          </p>
          <p className="mt-2 text-neutral-600">
            © {new Date().getFullYear()} Alex Rivera. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
