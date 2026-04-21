import { GraduationCap, Code2, Sparkles, Terminal } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const cards = [
  {
    icon: GraduationCap,
    title: "Academic Foundation",
    text: "3rd-year Computer Science student at Ambo University, building a strong base in algorithms, data structures, and system design.",
    tag: "edu",
  },
  {
    icon: Code2,
    title: "Developer Philosophy",
    text: "Technology should be efficient, logical, and well-structured. Every component, every function — purposeful by design.",
    tag: "values",
  },
  {
    icon: Sparkles,
    title: "Always Learning",
    text: "Actively preparing for my upcoming summer internship — sharpening full-stack skills and shipping real projects ",
    tag: "growth",
  },
];

const About = () => (
  <section id="about" className="relative py-32">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeader
              index="01"
              label="about"
              title="Building systems with precision and efficient code."
              description="I'm Milion — a developer drawn to the elegance of well-architected software. I care about how things are built, not just that they work. Clean abstractions, predictable behavior, code that tells a story."
            />
          </Reveal>
        </div>

        {/* Terminal card */}
        <Reveal delay={0.2} className="lg:col-span-5">
          <div className="glass neon-border rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/20">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-neon-purple/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-terminal-green/70" />
              <span className="ml-2 font-mono text-[10px] text-muted-foreground flex items-center gap-1.5">
                <Terminal className="w-3 h-3" />
                ~/about-milion.sh
              </span>
            </div>
            <div className="p-5 font-mono text-xs leading-relaxed space-y-1.5">
              <div>
                <span className="text-neon-cyan">$</span>{" "}
                <span className="text-foreground">cat profile.json</span>
              </div>
              <div className="text-muted-foreground">{"{"}</div>
              <div className="pl-4">
                <span className="text-neon-purple">"name"</span>:{" "}
                <span className="text-terminal-green">"Milion Sagni"</span>,
              </div>
              <div className="pl-4">
                <span className="text-neon-purple">"role"</span>:{" "}
                <span className="text-terminal-green">"Full-Stack Dev"</span>,
              </div>
              <div className="pl-4">
                <span className="text-neon-purple">"university"</span>:{" "}
                <span className="text-terminal-green">"Ambo University"</span>,
              </div>
              <div className="pl-4">
                <span className="text-neon-purple">"focus"</span>: [
                <span className="text-terminal-green">"web"</span>,{" "}
                <span className="text-terminal-green">"systems"</span>],
              </div>
              <div className="pl-4">
                <span className="text-neon-purple">"status"</span>:{" "}
                <span className="text-terminal-green">"learning daily"</span>
              </div>
              <div className="text-muted-foreground">{"}"}</div>
              <div className="pt-2">
                <span className="text-neon-cyan">$</span>{" "}
                <span className="text-foreground">_</span>
                <span className="text-neon-cyan animate-blink">▊</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.12}>
            <div className="group relative glass rounded-2xl p-7 h-full hover:border-neon-cyan/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-neon-cyan/0 group-hover:bg-neon-cyan/10 blur-2xl transition-all duration-500" />

              <div className="absolute top-5 right-5 font-mono text-[10px] text-muted-foreground/60 uppercase tracking-wider">
                /{c.tag}
              </div>

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-muted/60 flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-neon-cyan/20 group-hover:to-neon-purple/20 group-hover:text-neon-cyan transition-all">
                  <c.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {c.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {c.text}
                </p>

                <div className="mt-6 pt-5 border-t border-border/50 font-mono text-[10px] text-muted-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-neon-cyan" />
                  0{i + 1} / 03
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default About;
