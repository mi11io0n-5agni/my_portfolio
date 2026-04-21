const items = [
  "JavaScript",
  "React",
  "Node.js",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Linux",
  "Git",
  "REST APIs",
  "React Native",
  "Tailwind",
  "PostgreSQL",
];

const Marquee = () => (
  <div className="relative py-8 border-y border-border bg-surface-elevated/30 overflow-hidden">
    <div
      className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
      style={{ background: "linear-gradient(90deg, hsl(var(--background)), transparent)" }}
    />
    <div
      className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
      style={{ background: "linear-gradient(-90deg, hsl(var(--background)), transparent)" }}
    />
    <div className="flex gap-12 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
      {[...items, ...items, ...items].map((it, i) => (
        <div key={i} className="flex items-center gap-12 font-mono text-sm text-muted-foreground">
          <span className="hover:text-neon-cyan transition-colors">{it}</span>
          <span className="text-neon-purple">◆</span>
        </div>
      ))}
    </div>
  </div>
);

export default Marquee;
