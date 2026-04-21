import { Code2, Layers, Server, Wrench } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const groups = [
  {
    icon: Code2,
    label: "languages",
    items: [
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 70 },
      { name: "HTML & CSS", level: 92 },
    ],
  },
  {
    icon: Layers,
    label: "frameworks",
    items: [
      { name: "React", level: 80 },
      { name: "React Native", level: 70 },
      { name: "Bootstrap", level: 75 },
    ],
  },
  {
    icon: Server,
    label: "backend",
    items: [
      { name: "Node.js", level: 70 },
      { name: "REST APIs", level: 75 },
      { name: "Databases", level: 65 },
    ],
  },
  {
    icon: Wrench,
    label: "tooling",
    items: [
      { name: "Linux", level: 80 },
      { name: "Git & GitHub", level: 82 },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="relative py-32 bg-surface-elevated/30">
    <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

    <div className="container relative">
      <Reveal>
        <SectionHeader
          index="02"
          label="skills"
          title="The stack I think in."
          description="A growing toolkit focused on full-stack web development — from pixel-precise interfaces to the systems that power them."
        />
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g, gi) => (
          <Reveal key={g.label} delay={gi * 0.1}>
            <div className="group relative glass rounded-2xl p-7 hover:border-neon-cyan/40 transition-all duration-500 h-full">
              <div className="flex items-center justify-between mb-7 pb-5 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted/60 flex items-center justify-center text-neon-cyan group-hover:bg-neon-cyan/10 transition-colors">
                    <g.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                      group · 0{gi + 1}
                    </div>
                    <h3 className="font-display text-lg font-semibold">
                      {g.label}
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {g.items.length} items
                </span>
              </div>

              <div className="space-y-5">
                {g.items.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="font-display text-sm font-medium">
                        {s.name}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {s.level}%
                      </span>
                    </div>
                    <div className="relative h-1 rounded-full bg-muted overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full transition-all duration-700 group-hover:shadow-[0_0_12px_hsl(var(--neon-cyan)/0.6)]"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
