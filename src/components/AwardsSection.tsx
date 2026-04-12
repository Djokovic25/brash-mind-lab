const awards = [
  { title: "Winner", event: "IndoAI Hackathon 2025", sub: "Medical AI Track", color: "bg-mint" },
  { title: "Winner", event: "Synapse AIML Hackathon 2025", sub: "", color: "bg-electric" },
  { title: "Merit Scholarship", event: "Academic Excellence", sub: "Grade 12 — Top Percentile", color: "bg-neon-yellow" },
];

const AwardsSection = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="font-serif font-black text-4xl sm:text-5xl mb-8">HONORS & AWARDS</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
        {awards.map((a, i) => (
          <div
            key={i}
            className={`${a.color} brutal-border brutal-shadow p-6 min-w-[260px] snap-start shrink-0`}
          >
            <span className="font-mono font-bold text-xs uppercase brutal-border bg-card px-2 py-1 inline-block mb-3">
              {a.title}
            </span>
            <h3 className="font-mono font-bold text-lg mb-1">{a.event}</h3>
            {a.sub && <p className="font-mono text-sm">{a.sub}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
