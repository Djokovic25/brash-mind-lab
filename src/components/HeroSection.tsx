const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 px-6 max-w-5xl mx-auto">
      {/* Name */}
      <div className="mb-8">
        <h1 className="font-serif font-black text-7xl sm:text-9xl leading-[0.9] tracking-tight">
          ISHITA
        </h1>
        <h1 className="font-serif font-black text-7xl sm:text-9xl leading-[0.9] tracking-tight text-mint">
          AMBEKAR
        </h1>
      </div>

      {/* Identity Block */}
      <div className="brutal-border brutal-shadow bg-card p-6 max-w-2xl mb-8">
        <h2 className="font-mono font-bold text-xl mb-4">
          Medical AI Researcher & Junior Undergrad
        </h2>
        <div className="flex flex-wrap gap-3">
          <span className="brutal-border bg-mint px-4 py-2 font-mono font-bold text-sm">
            Medical Imaging
          </span>
          <span className="brutal-border bg-neon-pink px-4 py-2 font-mono font-bold text-sm">
            Explainable AI
          </span>
        </div>
      </div>

      {/* Tagline */}
      <p className="font-grotesk text-lg max-w-xl leading-relaxed">
        Third-year Computer Science student building interpretable AI systems for clinical diagnostics.
      </p>
    </section>
  );
};

export default HeroSection;
