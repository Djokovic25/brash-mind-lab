const projects = [
  {
    title: "WBC Classification (Robust Ensemble Approach)",
    detail: "A robust, multi-scale deep learning pipeline for classifying highly imbalanced white blood cell images.",
    sub: (
      <>
        📄 <strong>Under review at IEEE CVMI - 2026</strong> | 🏆 Ranked 20th globally on Kaggle
      </>
    ),
    color: "bg-mint",
  },
  {
    title: "Geometric Deep Learning for Diabetic Retinopathy",
    detail:
      "An interactive application for diabetic retinopathy (DR) grading using embedding-space retrieval instead of traditional supervised classification. Technologies Used: PyTorch, HuggingFace Transformers (CLIP), FAISS, UMAP, Streamlit, Plotly.",
    sub: null,
    color: "bg-mint",
  },
  {
    title: "Multimodal Streamlit Dashboard",
    detail:
      "A medical dashboard combining Grad-CAM enabled ResNet-50 for breast cancer image analysis with an xAI dashboard for classical ML on tabular data.",
    sub: null,
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
              <p className="font-grotesk text-sm leading-relaxed mt-auto">{p.detail}</p>
              {p.sub && <p className="font-mono text-xs mt-2 opacity-80">{p.sub}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
