const boxes = [
  {
    color: "bg-mint",
    title: "TOOLS & FRAMEWORKS",
    items: ["PyTorch", "Medical xAI", "RAG", "Docker", "AWS", "Postman", "Open3D"],
  },
  {
    color: "bg-electric",
    title: "LANGUAGES",
    items: ["Python", "C++", "Java", "SQL"],
  },
  {
    color: "bg-neon-pink",
    title: "COURSEWORK",
    items: [
      "AIML",
      "Deep Learning",
      "Digital Image Processing",
      "Software Engineering",
      "Data Engineering",
      "Cloud & Databases",
    ],
  },
];

const ArsenalSection = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="font-serif font-black text-4xl sm:text-5xl mb-8">TECHNICAL ARSENAL</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {boxes.map((box, i) => (
          <div key={i} className={`${box.color} brutal-border brutal-shadow-sm p-6`}>
            <h3 className="font-mono font-bold text-sm mb-4 brutal-border bg-card inline-block px-3 py-1">
              {box.title}
            </h3>
            <ul className="space-y-1">
              {box.items.map((item) => (
                <li key={item} className="font-mono font-bold text-sm">
                  → {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArsenalSection;
