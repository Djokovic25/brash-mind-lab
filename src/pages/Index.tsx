import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./portfolio.css";

const research = [
  {
    number: "01",
    title: "Research Intern — MVAIT Lab, NTU Singapore",
    status: "ONGOING",
    tone: "mint",
    description:
      "Working on GI endoscopy and neoplasia detection, investigating challenges in model evaluation and generalization across clinical data.",
  },
  {
    number: "02",
    title: "Independent Research — AI Systems",
    status: "ONGOING",
    tone: "pink",
    description: "Exploring research questions around LLM-based systems, tool use, and efficiency.",
  },
];

const experience = [
  {
    date: "AUG 2026 — PRESENT",
    role: "Research Intern",
    organization: "MVAIT Lab, NTU Singapore",
    description:
      "Conducting research on GI endoscopy and neoplasia detection, with a focus on evaluating model performance and investigating challenges in clinical image classification.",
    tone: "pink",
  },
  {
    date: "SUMMER 2026",
    role: "Technology Intern",
    organization: "Wells Fargo",
    description:
      "Worked on technology initiatives within Home Lending Servicing, contributing to an AI proof of concept and exploring LLM-based developer tools and AI-assisted software development.",
    tone: "mint",
  },
  {
    date: "SUMMER 2025",
    role: "Summer Intern",
    organization: "Siemens Digital Industries Software",
    description:
      "Developed an interactive pipeline for 3D point-cloud segmentation and visualization using deep learning, Open3D, and related tools, with a workflow for viewing segmented geometry in Siemens NX.",
    tone: "yellow",
  },
];

const projects = [
  {
    number: "01",
    category: "RESEARCH · PUBLICATION",
    title: "WBC Classification — Robust Ensemble Approach",
    description:
      "Developed a multi-scale ensemble approach for classifying highly imbalanced white blood cell images for the ISBI 2026 WBCBench Challenge. Our team achieved 20th place on the competition leaderboard.",
    tags: ["ISBI 2026 WBCBench", "Ensemble learning", "Imbalanced data"],
    status: "ACCEPTED — IEEE CVMI 2026",
    tone: "mint",
  },
  {
    number: "02",
    category: "RESEARCH · PUBLICATION",
    title: "MRI Empirical Study",
    description:
      "An empirical investigation of deep learning approaches for MRI-based lesion segmentation, studying their performance under different experimental configurations.",
    tags: ["MRI", "Lesion segmentation", "Deep learning"],
    status: "UNDER REVIEW — IEEE AIHC 2027",
    tone: "pink",
  },
  {
    number: "03",
    category: "PROJECT · COMPUTER VISION",
    title: "Geometric Deep Learning for Diabetic Retinopathy",
    description:
      "An interactive application for diabetic retinopathy grading that uses embedding-space retrieval rather than relying solely on conventional supervised classification.",
    tags: ["PyTorch", "CLIP", "FAISS", "UMAP", "Streamlit", "Plotly"],
    tone: "yellow",
  },
  {
    number: "04",
    category: "PROJECT · EXPLAINABLE AI",
    title: "Multimodal Explainability Dashboard",
    description:
      "An interactive dashboard combining Grad-CAM visualizations from a ResNet-50 image classifier with explainability tools for classical machine-learning models on tabular data.",
    tags: ["PyTorch", "ResNet-50", "Grad-CAM", "Streamlit"],
    tone: "white",
  },
];

const skillGroups = [
  { label: "PROGRAMMING", skills: ["Python", "C++", "Java", "SQL"] },
  {
    label: "MACHINE LEARNING",
    skills: ["PyTorch", "Deep learning", "Computer vision", "Model evaluation"],
  },
  {
    label: "AI SYSTEMS & LLMs",
    skills: ["LLMs", "MCP", "AI agents", "Tool use", "RAG"],
  },
  {
    label: "DATA & VISUALIZATION",
    skills: ["Open3D", "FAISS", "UMAP", "Plotly", "Streamlit", "Siemens NX"],
  },
];

const Index = () => (
  <main className="portfolio min-h-screen overflow-hidden">
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Ishita Ambekar home">
        IA<span className="wordmark-dot">.</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#research">RESEARCH</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#projects">PROJECTS</a>
        <a href="#skills">SKILLS</a>
      </nav>
      <div className="header-actions">
        <Button asChild className="nav-cv">
          <a href="https://drive.google.com/file/d/1112NFL9Q0yWLPZH4cFFm_BNPJYhmc72U/view?usp=sharing" target="_blank" rel="noreferrer">DOWNLOAD CV <ArrowUpRight aria-hidden="true" /></a>
        </Button>
        <Button asChild className="nav-contact">
          <a href="mailto:ishita.ambekar2023@gmail.com">LET’S TALK <ArrowUpRight aria-hidden="true" /></a>
        </Button>
      </div>
    </header>

    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="live-dot" /> FINAL-YEAR COMPUTER ENGINEERING UNDERGRADUATE</p>
        <h1 id="hero-title">ISHITA<br /><span>AMBEKAR</span></h1>
        <p className="hero-role">Undergraduate Researcher <span>|</span> AI &amp; Machine Learning</p>
        <p className="hero-description">
          I’m a final-year Computer Engineering student exploring AI and machine learning through research and experimentation, with interests spanning computer vision, medical imaging, and AI systems.
        </p>
        <a className="scroll-cue" href="#research"><ArrowDown aria-hidden="true" /> SCROLL TO EXPLORE</a>
      </div>
      <div className="hero-art" aria-label="Ishita Ambekar, Computer Engineering">
        <div className="art-index">RESEARCHER<br />NO. 2026 / IA</div>
        <div className="art-mark">IA</div>
        <div className="art-coordinate">AI <span>×</span> ML<br />CE / 04</div>
        <span className="art-plus art-plus-one">+</span>
        <span className="art-plus art-plus-two">+</span>
      </div>
      <div className="hero-bottomline"><span>BASED IN INDIA</span><span>CURIOUS BY PRACTICE</span><span>01 — 06</span></div>
    </section>

    <section className="content-section section-wrap" id="research" aria-labelledby="research-title">
      <div className="section-heading">
        <p className="eyebrow">01 / IN PROGRESS</p>
        <h2 id="research-title">Current <span>Research</span></h2>
        <p className="section-intro">Questions I’m working through now.</p>
      </div>
      <div className="research-list">
        {research.map((item) => (
          <article className="research-entry" key={item.number}>
            <span className="entry-number">{item.number}</span>
            <div className="research-body">
              <div className="entry-title-row">
                <h3>{item.title}</h3>
                <span className={`status-pill ${item.tone}`}><span />{item.status}</span>
              </div>
              <p>{item.description}</p>
            </div>
            <span className={`entry-color ${item.tone}`} aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>

    <section className="content-section section-wrap" id="experience" aria-labelledby="experience-title">
      <div className="section-heading section-heading-inline">
        <div><p className="eyebrow">02 / WHERE I’VE LEARNED</p><h2 id="experience-title">Experience</h2></div>
        <p className="section-intro">Research, engineering, and making ideas tangible.</p>
      </div>
      <div className="experience-grid">
        {experience.map((item, index) => (
          <article className={`experience-card experience-${item.tone}`} key={item.organization}>
            <div className="experience-topline"><span>0{index + 1}</span><span className="date-label">{item.date}</span></div>
            <h3>{item.role}</h3>
            <div className="organization-row">
              <p>{item.organization}</p>
              {item.organization.startsWith("Siemens") && <span className="siemens-label">SIEMENS<br /><small>DIGITAL INDUSTRIES SOFTWARE</small></span>}
            </div>
            <p className="experience-description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="content-section section-wrap project-section" id="projects" aria-labelledby="projects-title">
      <div className="section-heading section-heading-inline">
        <div><p className="eyebrow">03 / SELECTED WORK</p><h2 id="projects-title">Projects <span>&amp; Papers</span></h2></div>
        <p className="section-intro">A few problems, explored from different angles.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-card-head"><span>{project.number} / 04</span><span>{project.category}</span></div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            {project.status && (
              <div className="project-footer">
                <span className={`publication-badge ${project.tone}`}>{project.status}</span>
                {project.number === "01" && <span className="kaggle-badge">🏆 KAGGLE GLOBAL RANK: 20</span>}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>

    <section className="recognition-section" aria-labelledby="honors-title">
      <div className="section-wrap recognition-inner">
        <div><p className="eyebrow">04 / RECOGNITION</p><h2 id="honors-title">Honors &amp; Awards</h2></div>
        <div className="honor-list">
          <p><span>WINNER</span> IndoAI Hackathon 2025 <small>MEDICAL AI TRACK</small></p>
          <p><span>WINNER</span> Synapse AIML Hackathon 2025</p>
        </div>
      </div>
    </section>

    <section className="content-section section-wrap skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-heading section-heading-inline">
        <div><p className="eyebrow">05 / TOOLS &amp; METHODS</p><h2 id="skills-title">Technical Skills</h2></div>
        <p className="section-intro">A growing toolkit across learning, vision, and systems.</p>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <div className={`skill-group skill-group-${index}`} key={group.label}>
            <h3>{group.label}</h3>
            <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>

    <footer className="contact-footer section-wrap" id="contact">
      <div className="contact-kicker"><span>06 / GET IN TOUCH</span><span>OPEN TO GOOD QUESTIONS</span></div>
      <div className="contact-main">
        <h2>LET’S<br /><span>CONNECT.</span></h2>
        <a className="email-link" href="mailto:ishita.ambekar2023@gmail.com"><Mail aria-hidden="true" /> ishita.ambekar2023@gmail.com <ArrowUpRight aria-hidden="true" /></a>
      </div>
      <div className="footer-bottom">
        <span>ISHITA AMBEKAR © 2026</span>
        <div className="social-links">
          <Button asChild variant="outline" className="social-button"><a href="https://in.linkedin.com/in/ishita-ambekar" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LINKEDIN <ArrowUpRight aria-hidden="true" /></a></Button>
          <Button asChild variant="outline" className="social-button"><a href="https://github.com/Djokovic25" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GITHUB <ArrowUpRight aria-hidden="true" /></a></Button>
        </div>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </div>
    </footer>
  </main>
);

export default Index;