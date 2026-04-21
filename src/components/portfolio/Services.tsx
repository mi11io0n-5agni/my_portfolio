import { Layers, Layout, Database, Palette, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const services = [
  {
    icon: Layers,
    title: "Full-Stack Web Development",
    desc: "End-to-end application development — from database schema to polished frontend interfaces.",
    tags: ["react", "node", "db"],
  },
  {
    icon: Layout,
    title: "Frontend Development",
    desc: "Responsive, fast, and accessible websites built with modern JavaScript and React.",
    tags: ["react", "bootstrap", " "],
  },
  {
    icon: Database,
    title: "Backend & API Integration",
    desc: "Connecting interfaces to data — REST APIs, server logic, and reliable integrations.",
    tags: ["node", "rest", "auth"],
  },
  {
    icon: Palette,
    title: "UI-Focused Implementation",
    desc: "Translating design into pixel-precise, interactive experiences that feel right.",
    tags: ["ui", "motion", "css"],
  },
];

const Services = () => (
  <section id="services" className="relative py-32 bg-surface-elevated/30 overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-neon-purple/10 blur-[120px] pointer-events-none" />

    <div className="container relative">
      <Reveal>
        <SectionHeader
          index="04"
          label="services"
          title="What I can build for you."
          description="Whether it's a landing page, a full product, or the API powering it — I focus on clean execution and clear collaboration."
        />
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="group relative glass rounded-2xl p-7 hover:border-neon-cyan/40 hover:-translate-y-1 transition-all duration-500 h-full overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-neon-cyan/0 group-hover:bg-neon-cyan/10 blur-3xl transition-all duration-700" />

              <div className="relative flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-muted/60 flex items-center justify-center text-neon-cyan group-hover:bg-gradient-to-br group-hover:from-neon-cyan/20 group-hover:to-neon-purple/20 transition-all flex-shrink-0">
                  <s.icon className="w-6 h-6" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                      service · 0{i + 1}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-neon-cyan group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2.5">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground border border-border"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
