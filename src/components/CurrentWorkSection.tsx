const CurrentWorkSection = () => {
  return (
    <section id="work" className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="font-serif font-black text-4xl sm:text-5xl mb-8">CURRENT WORK</h2>
      <div className="glassmorphism brutal-border brutal-shadow p-8 max-w-3xl">
        <div className="flex items-start gap-3 mb-3">
          <span className="bg-mint brutal-border px-3 py-1 font-mono text-xs font-bold uppercase shrink-0">
            Active
          </span>
          <h3 className="font-mono font-bold text-xl leading-tight">
            ImageCLEF 2026: Visual QnA (Gastrointestinal)
          </h3>
        </div>
        <p className="font-grotesk leading-relaxed">
          Working on developing interpretable pipelines for Gastrointestinal diagnostics — building systems that not only predict accurately but explain their reasoning for clinical trust.
        </p>
      </div>
    </section>
  );
};

export default CurrentWorkSection;
