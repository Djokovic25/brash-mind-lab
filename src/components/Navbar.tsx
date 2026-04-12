const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background brutal-border border-t-0 border-x-0 px-6 py-3 flex items-center justify-between">
      <span className="font-mono font-bold text-lg tracking-tight">IA.</span>
      <div className="flex items-center gap-4">
        <a href="#work" className="font-mono text-sm font-bold hover:underline hidden sm:inline">WORK</a>
        <a href="#projects" className="font-mono text-sm font-bold hover:underline hidden sm:inline">PROJECTS</a>
        <a href="#contact" className="font-mono text-sm font-bold hover:underline hidden sm:inline">CONTACT</a>
        <a
          href="https://drive.google.com/file/d/1112NFL9Q0yWLPZH4cFFm_BNPJYhmc72U/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neon-yellow brutal-border brutal-shadow-sm px-4 py-2 font-mono font-bold text-sm uppercase hover:-translate-y-0.5 transition-transform"
        >
          DOWNLOAD CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
