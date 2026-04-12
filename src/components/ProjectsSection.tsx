const projects = [
  {
    title: "WBC Classification (Robust Ensemble Approach)",
    detail: "A robust, multi-scale deep learning pipeline for classifying highly imbalanced white blood cell images.",
    badges: [
      { text: "📄 UNDER REVIEW: IEEE CVMI 2026", accent: "bg-neon-pink", rotate: "-1deg" },
      { text: "🏆 KAGGLE GLOBAL RANK: 20", accent: "bg-mint", rotate: "1.5deg" },
    ],
    color: "bg-mint",
  },
  {
    title: "Geometric Deep Learning for Diabetic Retinopathy",
    detail:
      "An interactive application for diabetic retinopathy (DR) grading using embedding-space retrieval instead of traditional supervised classification. Technologies Used: PyTorch, HuggingFace Transformers (CLIP), FAISS, UMAP, Streamlit, Plotly.",
    badges: null,
    color: "bg-mint",
  },
  {
    title: "Multimodal Streamlit Dashboard",
    detail:
      "A medical dashboard combining Grad-CAM enabled ResNet-50 for breast cancer image analysis with an xAI dashboard for classical ML on tabular data.",
    badges: null,
    color: "bg-neon-pink",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="font-serif font-black text-4xl sm:text-5xl mb-8">PROJECTS & IMPACT</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="brutal-border brutal-shadow bg-card flex flex-col">
            <div className={`${p.color} h-3 w-full`} />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-mono font-bold text-base mb-3">{p.title}</h3>
              <p className="font-grotesk text-sm leading-relaxed">{p.detail}</p>
              {p.badges && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {p.badges.map((badge, j) => (
                    <span
                      key={j}
                      className="relative bg-card brutal-border brutal-shadow font-mono font-black text-xs uppercase tracking-wide px-3 py-2 inline-block"
                      style={{ transform: `rotate(${badge.rotate})` }}
                    >
                      <span
                        className={`absolute top-0 left-0 w-3 h-3 ${badge.accent}`}
                        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                      />
                      {badge.text}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
