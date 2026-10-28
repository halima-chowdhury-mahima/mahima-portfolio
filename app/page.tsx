
import Link from "next/link";
import Image from "next/image";
import TypingText from "@/components/TypingText";
import DownloadResume from "@/components/DownloadResume";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  GraduationCap,
  MapPin,
  Sparkles,
  Github,
  Linkedin,
  Download,
  Layers3,
  BriefcaseBusiness,
  Globe,
  MoveRight,
  Phone,
} from "lucide-react";

import { skills, projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/halima-chowdhury-mahima",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/halima-chowdhury-mahima/",
    icon: Linkedin,
  },
];

const education = [
  {
    number: "01",
    period: "CURRENTLY STUDYING",
    title: "Bachelor of Business Administration",
    subtitle: "Finance and Banking",
    institution: "Government Titumir College",
    description:
      "Combining business knowledge with practical software development and digital problem-solving skills.",
  },
  {
    number: "02",
    period: "HIGHER SECONDARY",
    title: "HSC — Business Studies",
    subtitle: "GPA 4.67 / 5.00",
    institution: "Uttara Government College",
    description: "",
  },
  {
    number: "03",
    period: "SECONDARY EDUCATION",
    title: "SSC — Business Studies",
    subtitle: "GPA 5.00 / 5.00",
    institution: "Dhaka Airport Government High School",
    description: "",
  },
];

const experiences = [
  {
    number: "01",
    category: "TRANSFERABLE EXPERIENCE",
    title: "Teaching Experience",
    description:
      "My preschool teaching experience strengthened my communication, patience, planning, and organizational skills. These abilities help me understand user needs and approach challenges thoughtfully.",
    tags: ["Communication", "Planning", "Organization"],
  },
  {
    number: "02",
    category: "TRANSFERABLE EXPERIENCE",
    title: "Data Entry Experience",
    description:
      "My data-entry work strengthened my accuracy, attention to detail, and ability to manage structured information. I apply the same careful approach to code quality, testing, and project organization.",
    tags: ["Accuracy", "Attention to Detail", "Consistency"],
  },
  {
    number: "03",
    category: "HANDS-ON DEVELOPMENT",
    title: "Full Stack Web Development",
    description:
      "I build practical web applications using modern technologies, with a focus on responsive interfaces, authentication, useful features, and thoughtful user experiences.",
    tags: ["React", "Next.js", "TypeScript", "Node.js"],
    projects: [
      { name: "NEWS 24", href: "#projects", number: "01" },
      { name: "BazarDor", href: "#projects", number: "02" },
      { name: "FitLog", href: "#projects", number: "03" },
    ],
  },
];

export default function Home() {
  return (
    <main className="portfolio">
      {/* HERO */}
      <section className="hero section-pad" id="home">
        <div className="hero-glow glow-one" aria-hidden="true" />
        <div className="hero-glow glow-two" aria-hidden="true" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" />
              OPEN TO OPPORTUNITIES
            </div>

            <p className="hero-kicker">Hello, I&apos;m</p>

            <h1>
              Halima Chowdhury
              <span> Mahima.</span>
            </h1>

            <h2>Full Stack Web Developer</h2>

            <p className="hero-description">
              I transform ideas into thoughtful digital experiences,
              combining elegant interfaces with functional, reliable
              web applications.
            </p>

            <div className="hero-specialties">
              <span>React.js</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Node.js</span>
            </div>

            

<div className="hero-actions">
  <DownloadResume />

  <a className="button button-outline" href="#projects">
    Explore My Work
    <ArrowDown size={16} aria-hidden="true" />
  </a>
</div>



            <div className="social-row">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} profile (opens in a new tab)`}
                >
                  <Icon size={17} aria-hidden="true" />
                  {label}
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ))}

              <span className="location">
                <MapPin size={15} aria-hidden="true" />
                Bangladesh
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-topline">
                <span>PORTFOLIO / 2026</span>
                <span className="gold-star" aria-hidden="true">
                  ✳
                </span>
              </div>

              <div className="portrait-photo">
                <Image
                  src="/images/profile.jpg"
                  alt="Halima Chowdhury Mahima, Full Stack Web Developer"
                  fill
                  priority
                  sizes="(max-width: 700px) 88vw, (max-width: 1100px) 42vw, 500px"
                  className="hero-profile-image"
                />

                <div
                  className="portrait-photo-overlay"
                  aria-hidden="true"
                />

                <div className="portrait-caption">
                  <span className="portrait-caption-label">
                    FULL STACK DEVELOPER
                  </span>
                  <span className="portrait-caption-name">
                    Mahima Chowdhury
                  </span>
                </div>
              </div>

              <div className="portrait-bottom">
                <span>DESIGN · DEVELOP · DEPLOY</span>
                <span>01 — 04</span>
              </div>
            </div>

            <div className="hero-floating-note">
              <span className="floating-note-icon">
                <Code2 size={19} aria-hidden="true" />
              </span>
              <span>
                <strong>Built with purpose</strong>
                <small>Thoughtful digital solutions</small>
              </span>
            </div>
          </div>
        </div>

        <a className="scroll-note" href="#about">
          <span className="scroll-note-icon">
            <ArrowDown size={14} aria-hidden="true" />
          </span>
          SCROLL TO EXPLORE
          <span className="scroll-line" />
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section section-padding">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">01 / GET TO KNOW ME</span>
            <h2>
              About <span className="gold-text">Me.</span>
            </h2>
            <p>
              A little about my background, my approach, and what I love
              building.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-image-wrap">
              <div className="about-image">
                <Image
                  src="/images/mahima.jpg"
                  alt="Mahima Chowdhury Mahima"
                  width={420}
                  height={500}
                  sizes="(max-width: 768px) 86vw, (max-width: 1100px) 40vw, 420px"
                  className="profile-image"
                />
              </div>

              <div className="about-image-badge">
                <span className="badge-icon">✦</span>
                <div>
                  <strong>Full Stack Developer</strong>
                  <p>Building modern web experiences</p>
                </div>
              </div>
            </div>

            <div className="about-content">
              <span className="eyebrow">HELLO, I&apos;M MAHIMA</span>

              <h3>
                Turning ideas into
                <span className="gold-text"> digital experiences.</span>
              </h3>

              <p>
                I am a Full Stack Web Developer passionate about
                creating modern, responsive, and user-friendly web
                applications.
              </p>

              <p>
                My toolkit includes React.js, Next.js, TypeScript,
                Node.js, and modern web technologies. I enjoy bringing
                together clean design, practical functionality, and
                thoughtful user experiences.
              </p>

              <p>
                Alongside my BBA studies in Finance and Banking, I
                continue to develop real-world projects, explore new
                technologies, and strengthen my problem-solving skills.
              </p>

              <div className="about-highlights">
                <div className="about-highlight">
                  <span className="highlight-icon">
                    <Code2 size={19} aria-hidden="true" />
                  </span>
                  <div>
                    <strong>Frontend Development</strong>
                    <p>Responsive, accessible interfaces</p>
                  </div>
                </div>

                <div className="about-highlight">
                  <span className="highlight-icon">
                    <Layers3 size={19} aria-hidden="true" />
                  </span>
                  <div>
                    <strong>Full Stack Solutions</strong>
                    <p>Functional and scalable web experiences</p>
                  </div>
                </div>
              </div>

              <a href="#projects" className="about-button">
                Explore My Projects
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section section-muted section-pad" id="skills">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">02 / MY TOOLKIT</p>
            <h2>
              Skills & <span>Technologies.</span>
            </h2>
            <p className="section-intro">
              The technologies I use to turn ideas into useful digital
              products, with plenty more to learn along the way.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((group, index) => {
              const Icon =
                index === 0 ? Code2 : index === 1 ? Layers3 : Sparkles;

              return (
                <article className="skill-card" key={group.title}>
                  <div className="skill-card-heading">
                    <span className="skill-icon">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                    <h3>{group.title}</h3>
                  </div>

                  <div className="skill-card-items">
                    {group.items.map((item) => (
                      <div className="skill-item" key={item.name}>
                        <div className="skill-label">
                          <span>{item.name}</span>
                          <span>{item.level}%</span>
                        </div>

                        <div
                          className="skill-track"
                          role="progressbar"
                          aria-label={`${item.name} familiarity`}
                          aria-valuenow={item.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span style={{ width: `${item.level}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <p className="skills-note">
            Skill levels reflect my self-assessed familiarity and are
            not formal certifications.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section section-pad">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">03 / LEARNING JOURNEY</p>
            <h2>
              Education & <span>Growth.</span>
            </h2>
            <p className="section-intro">
              My academic journey and the foundations that continue to
              shape how I learn and build.
            </p>
          </div>

          <div className="timeline education-timeline">
            {education.map((item) => (
              <article className="timeline-item" key={item.number}>
                <div className="timeline-marker">
                  <GraduationCap size={20} aria-hidden="true" />
                </div>

                <div className="timeline-content">
                  <span className="timeline-date">{item.period}</span>
                  <h3>{item.title}</h3>

                  <p className="timeline-place">
                    {item.institution} · {item.subtitle}
                  </p>

                  {item.description && <p>{item.description}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="section section-pad luxury-experience"
      >
        <div className="container">
          <div className="section-heading experience-heading">
            <p className="eyebrow">04 / EXPERIENCE</p>
            <h2>
              My Professional <span>Journey.</span>
            </h2>
            <p className="section-intro">
              Each experience has helped me develop the communication,
              precision, and problem-solving skills I bring to my work.
            </p>
          </div>

          <div className="luxury-timeline">
            {experiences.map((experience) => (
              <article
                className={`timeline-item ${
                  experience.projects ? "timeline-current" : ""
                }`}
                key={experience.number}
              >
                <div className="timeline-marker">
                  <span className="timeline-dot" />
                </div>

                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span className="timeline-category">
                      {experience.category}
                    </span>
                    <span className="timeline-number">
                      {experience.number}
                    </span>
                  </div>

                  <h3>{experience.title}</h3>

                  <p className="timeline-description">
                    {experience.description}
                  </p>

                  {experience.projects && (
                    <div className="timeline-projects">
                      {experience.projects.map((project) => (
                        <a
                          href={project.href}
                          className="timeline-project-link"
                          key={project.number}
                        >
                          <span className="project-index">
                            {project.number}
                          </span>
                          <span className="project-name">
                            {project.name}
                          </span>
                          <ArrowUpRight
                            size={16}
                            className="project-arrow"
                            aria-hidden="true"
                          />
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="timeline-tags">
                    {experience.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="timeline-footer">
            <span className="timeline-footer-line" />
            <p>
              CONTINUOUS LEARNING · THOUGHTFUL BUILDING · STEADY GROWTH
            </p>
            <span className="timeline-footer-line" />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section section-pad">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">05 / SELECTED WORK</p>
            <h2>
              Featured <span>Projects.</span>
            </h2>
            <p className="section-intro">
              A selection of hands-on projects demonstrating my
              approach to full-stack development, modern interfaces,
              and practical problem-solving.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="projects-bottom-link">
            <span>Curiosity leads to better products.</span>
            <a
              href="https://github.com/halima-chowdhury-mahima"
              target="_blank"
              rel="noopener noreferrer"
            >
              More on GitHub
              <MoveRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      
      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <Link className="brand" href="/">
              Mahima<span className="brand-dot">.</span>
            </Link>

            <p className="footer-tagline">
              Designed with intention.
              <br />
              Built with curiosity.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-socials">
            <a
              href="https://github.com/halima-chowdhury-mahima"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <Github size={19} aria-hidden="true" />
            </a>

            <a
              href="https://linkedin.com/in/halima-chowdhury-mahima/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <Linkedin size={19} aria-hidden="true" />
            </a>

            <a
              href="tel:+8801357196453"
              aria-label="Call Mahima"
              title="Phone"
            >
              <Phone size={19} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Halima Chowdhury Mahima
          </span>

          <span className="footer-bottom-note">
            FULL STACK WEB DEVELOPER
          </span>

          <a href="#home" className="footer-back-top">
            Back to top
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </footer>

    </main>
  );
}
