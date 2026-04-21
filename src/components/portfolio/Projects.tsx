import { ArrowUpRight, Apple, Gamepad2, ShoppingBag, Compass } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import projectApple from "@/assets/project-apple.jpg";
import projectSnake from "@/assets/project-snake.jpg";
import projectEcom from "@/assets/project-ecommerce.jpg";
import projectMove from "@/assets/project-moveland.jpg";

const projects = [
  {
    icon: Apple,
    title: "Apple Website Clone",
    tag: "frontend · ui",
    image: projectApple,
    desc: "Pixel-precise replication of Apple's marketing site — focused on layout fidelity and clean responsive design.",
    detail: "Built with semantic HTML, modern CSS grid. A study in visual hierarchy and spacing.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "from-neon-cyan/30 to-transparent",
  },
  {
    icon: Gamepad2,
    title: "Snake Game",
    tag: "logic · game dev",
    image: projectSnake,
    desc: "Classic snake reimagined — explores game loops, collision detection, and state management from first principles.",
    detail: "Pure JavaScript implementation. Canvas rendering, frame timing, and growing-tail logic built without libraries.",
    stack: ["JavaScript", "Canvas API"],
    accent: "from-terminal-green/30 to-transparent",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Platform",
    tag: "full-stack",
    image: projectEcom,
    desc: "End-to-end shopping experience with product browsing, cart management, and a complete checkout user flow.",
    detail: "Includes product listings, dynamic cart state, and order processing — connecting frontend UI to backend logic.",
    stack: ["React", "Node.js", "REST"],
    accent: "from-neon-purple/30 to-transparent",
  },
  {
    icon: Compass,
    title: "MoveLand",
    tag: "experimental · concept",
    image: projectMove,
    desc: "A creative web project exploring motion, interactivity, and unconventional layout patterns on the modern web.",
    detail: "An ongoing playground for fluid animations, scroll-driven storytelling, and design experimentation.",
    stack: ["React", "Framer Motion"],
    accent: "from-neon-blue/30 to-transparent",
  },
];

const Projects = () => (
  <section id="projects" className="relative py-32">
    <div className="container">
      <Reveal>
        <SectionHeader
          index="03"
          label="projects"
          title="Things I've built — and what I learned."
          description="A selection of practice and personal projects spanning frontend craft, game logic, and full-stack systems."
        />
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <article className="group relative glass rounded-2xl overflow-hidden hover:border-neon-purple/40 transition-all duration-500 h-full flex flex-col">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.accent}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                {/* Tag badge */}
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-neon-purple">
                  {p.tag}
                </div>
                {/* Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl glass flex items-center justify-center text-neon-cyan">
                  <p.icon className="w-4 h-4" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan group-hover:-translate-y-1 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                  <div className="overflow-hidden">
                    <p className="text-sm text-foreground/80 mt-4 pt-4 border-t border-border leading-relaxed">
                      {p.detail}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/50">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-muted/60 text-muted-foreground border border-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
