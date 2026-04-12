const experiences = [
  {
    color: "bg-neon-yellow",
    role: "Research Intern",
    org: "Cummins College of Engineering",
    period: "Dec 2025 – Present",
    under: "Dr. Madhuri Tasgaonkar",
    logo: null,
    description:
      "Currently working on developing a trustworthy Multimodal VQA framework for GI endoscopy that integrates concept-based reasoning to ensure clinical safety and explainability. Previously worked on building a robust, multi-scale deep learning pipeline designed to accurately classify highly imbalanced white blood cell images for the ISBI 2026 WBCBench Challenge where our team ranked 20 on the leaderboard.",
  },
  {
    color: "bg-mint",
    role: "Summer Intern",
    org: "Siemens DISW",
    period: "Summer 2025",
    under: null,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/200px-Siemens-logo.svg.png",
    description:
      "Focused on 3D Point Cloud Segmentation and volumetric data visualization. Developed a deep learning-based pipeline using Open3D, TensorFlow, and PyTorch to segment point cloud data into 3D figures compatible with Siemens NX.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="font-serif font-black text-4xl sm:text-5xl mb-8">EXPERIENCE</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`${exp.color} brutal-border brutal-shadow p-6 hover:rotate-0 transition-transform`}
            style={{ transform: `rotate(${i === 0 ? -1 : 1}deg)` }}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-mono font-bold text-lg">{exp.role}</h3>
              <span className="font-mono text-xs font-bold brutal-border bg-card px-2 py-1 shrink-0 ml-2">
                {exp.period}
              </span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <p className="font-mono font-bold text-sm">{exp.org}</p>
              {exp.logo && (
                <span className="brutal-border bg-card px-2 py-1 shrink-0">
                  <img src={exp.logo} alt={`${exp.org} logo`} className="h-5" />
                </span>
              )}
            </div>
            {exp.under && (
              <p className="font-mono text-xs mb-3 opacity-80">Mentor: {exp.under}</p>
            )}
            <p className="font-grotesk text-sm leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
