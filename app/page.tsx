"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MapPin,
  Phone,
  Rocket,
  Send,
  Sparkles,
  Trophy,
  UserRound,
  X
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart as RePieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { useEffect, useMemo, useState } from "react";
import { achievements, certifications, education, experiences, navItems, projects, research, skills } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ProgressBar } from "@/components/ui/progress-bar";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const chartData = [
  { month: "Jan", models: 3, dashboards: 2 },
  { month: "Feb", models: 5, dashboards: 4 },
  { month: "Mar", models: 6, dashboards: 5 },
  { month: "Apr", models: 9, dashboards: 7 },
  { month: "May", models: 11, dashboards: 8 },
  { month: "Jun", models: 14, dashboards: 10 }
];

const impactMix = [
  { name: "ML", value: 38, color: "#b996f4" },
  { name: "BI", value: 27, color: "#83c5f4" },
  { name: "SQL", value: 20, color: "#72d0ad" },
  { name: "MLOps", value: 15, color: "#f5c2d8" }
];

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[60] h-1 bg-gradient-to-r from-lavender-300 via-skyglass-300 to-mint-300"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}

function LoadingIntro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center bg-[#fbfcff]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.65, duration: 0.35 }}
      aria-live="polite"
    >
      <div className="flex items-center gap-3 rounded-full border border-lavender-200 bg-white px-5 py-3 shadow-card">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-lavender-400" />
        <span className="text-sm font-medium text-ink-700">Preparing portfolio</span>
      </div>
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="section-shell glass flex h-16 items-center justify-between rounded-full px-4">
        <a href="#home" className="focus-ring flex items-center gap-2 rounded-full text-sm font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-lavender-200 to-mint-200 text-ink-900">
            MS
          </span>
          <span className="hidden sm:inline">Mansi Sinha</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-ink-500 transition hover:bg-white hover:text-ink-900"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="focus-ring hidden items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-ink-700 sm:flex"
        >
          Contact <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-shell glass mt-3 grid gap-1 rounded-3xl p-3 lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-ink-700 hover:bg-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}

function FloatingCharts() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute left-[8%] top-28 h-48 w-48 rounded-full bg-lavender-100 blur-3xl" />
      <div className="absolute right-[10%] top-48 h-56 w-56 rounded-full bg-skyglass-100 blur-3xl" />
      <div className="absolute bottom-12 left-[32%] h-48 w-48 rounded-full bg-mint-100 blur-3xl" />

      <motion.div
        className="glass absolute right-5 top-32 hidden h-36 w-56 rounded-2xl p-4 lg:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData.slice(0, 5)}>
            <defs>
              <linearGradient id="heroArea" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#83c5f4" stopOpacity={0.55} />
                <stop offset="95%" stopColor="#83c5f4" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="models" stroke="#83c5f4" fill="url(#heroArea)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        className="glass absolute bottom-20 left-8 hidden h-32 w-48 rounded-2xl p-4 xl:block"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData.slice(1, 6)}>
            <Bar dataKey="dashboards" radius={[8, 8, 0, 0]}>
              {chartData.slice(1, 6).map((entry, index) => (
                <Cell key={entry.month} fill={index % 2 ? "#72d0ad" : "#d5bcff"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32">
      <FloatingCharts />
      <div className="section-shell grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }}>
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-lavender-200 bg-white/80 px-4 py-2 text-sm font-medium text-ink-700 shadow-sm">
            <Sparkles size={16} className="text-lavender-400" />
            Data science portfolio built for business impact
          </motion.div>
          <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-semibold tracking-normal text-ink-900 sm:text-6xl lg:text-7xl">
            Mansi Sinha
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-3xl text-xl font-semibold leading-relaxed text-ink-700 sm:text-2xl">
            Data Scientist | Machine Learning Engineer | Business Analytics Enthusiast
          </motion.p>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-ink-500 sm:text-lg">
            I design machine learning systems, analytics dashboards, and research-backed solutions that help teams spot risk, understand customers, and make sharper business decisions.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-ink-700">
              View Projects <ChevronRight size={17} />
            </a>
            <a href="/Mansi_Resume.pdf" download className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-skyglass-200 bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition hover:-translate-y-0.5 hover:border-skyglass-300 hover:shadow-card">
              Download Resume <Download size={17} />
            </a>
            <a href="#contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-mint-200 bg-mint-50 px-6 py-3 text-sm font-semibold text-ink-900 transition hover:-translate-y-0.5 hover:shadow-card">
              Contact Me <Mail size={17} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-lavender-200 via-skyglass-200 to-mint-200 opacity-70 blur-2xl" />
          <div className="glass relative rounded-[2rem] p-4">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-white via-lavender-50 to-skyglass-100">
              <div className="grid h-full place-items-center px-8 text-center">
                <div>
                  <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-white shadow-card">
                    <UserRound size={54} className="text-lavender-400" />
                  </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">Professional Photo</p>
                  <p className="mt-2 text-sm leading-6 text-ink-500">Replace this placeholder with a high-quality headshot in the same frame.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["ML", "BI", "SQL"].map((label) => (
                <div key={label} className="rounded-2xl bg-white/70 p-3 text-center">
                  <p className="text-lg font-semibold text-ink-900">{label}</p>
                  <p className="text-xs text-ink-500">focus</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeader eyebrow="About Me" title="Curious builder with a business-first data lens." />
        <div className="grid gap-5 text-base leading-8 text-ink-500">
          <p>
            I am a Data Scientist and Machine Learning Engineer who enjoys turning messy data into practical, decision-ready systems. My work sits at the intersection of predictive modeling, analytics storytelling, and product-minded experimentation.
          </p>
          <p>
            My education across engineering, analytics, and applied machine learning has shaped how I approach problems: understand the business goal, audit the data, build a reliable solution, and communicate the result in a way stakeholders can act on.
          </p>
          <p>
            I am especially passionate about AI, data science, analytics, MLOps, and solving business problems in finance, healthcare, retail, and consumer technology.
          </p>
        </div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  return (
    <section id="experience" className="bg-white/60 py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Experience" title="Hands-on data science, analytics, and machine learning experience." />
        <div className="mt-12 grid gap-6">
          {experiences.map((item, index) => (
            <motion.article
              key={item.role}
              initial={{ opacity: 0, x: index % 2 ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass grid gap-5 rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="text-sm font-semibold text-lavender-400">{item.duration}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-ink-500">{item.organization}</p>
              </div>
              <div>
                <ul className="grid gap-2">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-2 text-sm leading-6 text-ink-500">
                      <CheckCircle2 size={17} className="mt-1 shrink-0 text-mint-400" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink-700 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const icons = {
    "Languages/Libraries": Code2,
    "ML/AI": Brain,
    "LLMs/Gen AI": Sparkles,
    "MLOps/Cloud": Cloud,
    Techniques: BarChart3
  };

  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Technologies" title="A practical AI and data science toolkit for building production-minded solutions." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => {
            const Icon = icons[group.category as keyof typeof icons];
            return (
              <motion.article
                key={group.category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-6"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-lavender-100 to-skyglass-100">
                    <Icon size={21} className="text-ink-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink-900">{group.category}</h3>
                </div>
                <div className="grid gap-4">
                  {group.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink-700 shadow-sm">{skill.name}</span>
                        <span className="text-xs font-semibold text-ink-500">{skill.level}%</span>
                      </div>
                      <ProgressBar value={skill.level} />
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-white to-skyglass-50/60 py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Featured Projects" title="Premium project work framed around business value." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              viewport={{ once: true }}
              className="group glass rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-lavender-400">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-ink-900">{project.title}</h3>
                </div>
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white shadow-sm">
                  <Rocket size={21} className="text-skyglass-400" />
                </div>
              </div>
              <div className="mt-6 grid gap-4 text-sm leading-6 text-ink-500">
                <p><span className="font-semibold text-ink-700">Problem:</span> {project.problem}</p>
                <p><span className="font-semibold text-ink-700">Approach:</span> {project.approach}</p>
                <p><span className="font-semibold text-ink-700">Impact:</span> {project.impact}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink-700 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-lavender-200 bg-white px-4 py-2 text-sm font-semibold text-ink-700 transition hover:border-lavender-300">
                  <Github size={16} /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink-700">
                  Live Demo <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Certifications" title="Focused credentials across analytics, statistics, and Python." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {certifications.map((cert) => (
            <motion.article
              key={cert}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-6"
            >
              <Award size={28} className="text-lavender-400" />
              <h3 className="mt-5 text-lg font-semibold leading-7 text-ink-900">{cert}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section id="wins" className="bg-white/70 py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Achievements" title="Measurable momentum across projects, learning, and analysis." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <div key={item.label} className="glass rounded-3xl p-6">
              <Trophy size={22} className="text-mint-400" />
              <p className="mt-5 text-4xl font-semibold text-ink-900">
                <AnimatedCounter value={item.value} />
                <span className="text-lavender-400">+</span>
              </p>
              <p className="mt-2 text-sm font-medium text-ink-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Education" title="Academic foundation for applied AI and analytics." />
        <div className="mt-12 grid gap-5">
          {education.map((item) => (
            <article key={item.degree} className="glass rounded-3xl p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <GraduationCap size={22} className="text-skyglass-400" />
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring rounded-lg text-xl font-semibold text-ink-900 transition hover:text-lavender-400"
                    >
                      {item.degree}
                    </a>
                  </div>
                  <p className="mt-2 text-sm font-medium text-ink-500">{item.school}</p>
                  <p className="mt-2 text-sm font-semibold text-ink-700">{item.score}</p>
                </div>
                <p className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-700 shadow-sm">{item.duration}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.coursework.map((course) => (
                  <span key={course} className="rounded-full bg-mint-50 px-3 py-1 text-xs font-semibold text-ink-700">
                    {course}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="bg-gradient-to-b from-mint-50/60 to-white py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeader eyebrow="Research" title="Case studies built for structured thinking." />
          <div className="glass mt-10 h-72 rounded-3xl p-5">
            <ResponsiveContainer width="100%" height="100%">
              <RePieChart>
                <Pie data={impactMix} innerRadius={58} outerRadius={86} paddingAngle={4} dataKey="value">
                  {impactMix.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RePieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="grid gap-5">
          {research.map((item) => (
            <article key={item.title} className="glass rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white shadow-sm">
                  <BookOpen size={20} className="text-lavender-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-500">{item.summary}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="section-shell glass grid gap-8 rounded-[2rem] p-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lavender-400">Resume</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink-900">Download a recruiter-friendly PDF resume.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-ink-500">
            The included PDF is a placeholder so the download flow works immediately. Replace it with your final resume at <span className="font-semibold text-ink-700">public/Mansi_Resume.pdf</span>.
          </p>
        </div>
        <a href="/Mansi_Resume.pdf" download className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-ink-700">
          Download PDF <Download size={17} />
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white/70 py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader eyebrow="Contact" title="Let's connect about data science, ML, or analytics roles." />
          <div className="mt-8 grid gap-3">
            <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-ink-700 shadow-sm">
              <MapPin size={18} className="text-lavender-400" /> Delhi, India
            </div>
            <a href="tel:+919354203506" className="focus-ring flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-ink-700 shadow-sm transition hover:-translate-y-0.5">
              <Phone size={18} className="text-skyglass-400" /> +91 93542 03506
            </a>
            <a href="https://www.linkedin.com/in/sinhamansi/" target="_blank" rel="noreferrer" className="focus-ring flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-ink-700 shadow-sm transition hover:-translate-y-0.5">
              <Linkedin size={18} className="text-skyglass-400" /> LinkedIn
            </a>
            <a href="https://github.com/MansiSinhaAI" target="_blank" rel="noreferrer" className="focus-ring flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-ink-700 shadow-sm transition hover:-translate-y-0.5">
              <Github size={18} className="text-ink-700" /> GitHub
            </a>
            <a href="mailto:mansi15aug@gmail.com" className="focus-ring flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-ink-700 shadow-sm transition hover:-translate-y-0.5">
              <Mail size={18} className="text-mint-400" /> mansi15aug@gmail.com
            </a>
          </div>
        </div>
        <form className="glass grid gap-4 rounded-3xl p-6" aria-label="Contact form">
          <label className="grid gap-2 text-sm font-semibold text-ink-700">
            Name
            <input className="focus-ring rounded-2xl border border-skyglass-100 bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-skyglass-300" name="name" type="text" placeholder="Your name" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink-700">
            Email
            <input className="focus-ring rounded-2xl border border-skyglass-100 bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-skyglass-300" name="email" type="email" placeholder="you@example.com" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink-700">
            Message
            <textarea className="focus-ring min-h-36 rounded-2xl border border-skyglass-100 bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-skyglass-300" name="message" placeholder="Tell me about the opportunity or project." />
          </label>
          <button type="submit" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-ink-700">
            Send Message <Send size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}

function DataVisualizationBand() {
  return (
    <section className="py-10" aria-label="Portfolio analytics visualization">
      <div className="section-shell glass h-80 rounded-[2rem] p-5">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="models" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#b996f4" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#b996f4" stopOpacity={0.04} />
              </linearGradient>
              <linearGradient id="dashboards" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#72d0ad" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#72d0ad" stopOpacity={0.04} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#e8eef7" vertical={false} />
            <XAxis dataKey="month" stroke="#647084" tickLine={false} axisLine={false} />
            <YAxis stroke="#647084" tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ borderRadius: 16, border: "1px solid #e8eef7" }} />
            <Area type="monotone" dataKey="models" stroke="#b996f4" fill="url(#models)" strokeWidth={3} />
            <Area type="monotone" dataKey="dashboards" stroke="#72d0ad" fill="url(#dashboards)" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-skyglass-100 bg-white py-10">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-ink-900">Mansi Sinha</p>
          <p className="mt-1 text-sm text-ink-500">Data Scientist | Machine Learning Engineer</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {navItems.slice(0, 6).map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-ink-500 transition hover:text-ink-900">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex gap-2">
          {[
            { Icon: Github, href: "https://github.com/MansiSinhaAI", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/sinhamansi/", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:mansi15aug@gmail.com", label: "Email" }
          ].map(({ Icon, href, label }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-skyglass-50 text-ink-700 transition hover:-translate-y-0.5 hover:bg-lavender-100" aria-label={label}>
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <LoadingIntro />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <Skills />
        <DataVisualizationBand />
        <Projects />
        <Certifications />
        <Metrics />
        <Education />
        <Research />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <div className="sr-only">Copyright {year} Mansi Sinha.</div>
    </>
  );
}
