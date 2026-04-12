const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-6 max-w-5xl mx-auto mb-12">
      <div className="relative bg-neon-yellow brutal-border brutal-shadow p-8 sm:p-12">
        {/* Tab */}
        <div className="absolute -top-5 left-6 bg-neon-pink brutal-border px-4 py-1">
          <span className="font-mono font-bold text-sm text-primary-foreground">LET'S TALK</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
          {/* Left */}
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest">EMAIL ME</span>
            <a
              href="mailto:ishita.ambekar2023@gmail.com"
              className="block font-mono font-bold text-lg sm:text-2xl underline mt-2 break-all"
            >
              ishita.ambekar2023@gmail.com
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 shrink-0">
            <a
              href="https://in.linkedin.com/in/ishita-ambekar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground brutal-border px-6 py-3 font-mono font-bold text-sm text-center hover:-translate-y-0.5 transition-transform"
            >
              LINKEDIN →
            </a>
            <a
              href="https://github.com/Djokovic25"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground brutal-border px-6 py-3 font-mono font-bold text-sm text-center hover:-translate-y-0.5 transition-transform"
            >
              GITHUB →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
