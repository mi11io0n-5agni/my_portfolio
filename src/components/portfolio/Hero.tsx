import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Code2, Download, Sparkles, MapPin } from "lucide-react";
import GridBackground from "./GridBackground";
import portrait from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <GridBackground />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-neon-purple/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-neon-cyan/15 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Top meta bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-muted-foreground mb-10"
        >
          <div className="flex items-center gap-2">
            <span className="text-neon-cyan">$</span>
            <span>whoami</span>
            <span className="text-foreground/60">→ milion.sagni</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-neon-purple" />
              Addis Ababa, ET
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-terminal-green" />
              </span>
              available · summer 2026
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full glass mb-6"
            >
              <Sparkles className="w-3 h-3 text-neon-cyan" />
              <span className="text-muted-foreground">
                full-stack website developer · cs student
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display text-[3.25rem] md:text-7xl lg:text-[5.75rem] font-bold leading-[0.95] tracking-tight"
            >
              Building
              <br />
              <span className="relative inline-block">
                <span className="text-gradient">precise</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="14"
                  viewBox="0 0 300 14"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9 Q 75 2, 150 7 T 298 6"
                    stroke="hsl(var(--neon-cyan))"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.7"
                  />
                </svg>
              </span>{" "}
              systems
              <br />
              with code<span className="text-neon-cyan animate-blink">_</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Hi, I'm{" "}
              <span className="text-foreground font-medium">Milion Sagni</span>{" "}
              — a 3rd-year Computer Science student at Ambo University and website developer with
              efficient and clear code!.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground font-mono text-sm font-semibold hover:shadow-[0_0_40px_hsl(var(--neon-cyan)/0.55)] transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">view projects</span>
                <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass font-mono text-sm hover:bg-muted/60 transition-all"
              >
                <Mail className="w-4 h-4 text-neon-cyan" />
                contact me
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Download resume"
              >
                <Download className="w-4 h-4" />
                resume
              </a>
            </motion.div>

            {/* Social row */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-8 flex items-center gap-5 font-mono text-[11px] text-muted-foreground"
            >
              <span className="text-foreground/40">// connect</span>
              <a
                href="#"
                className="flex items-center gap-1.5 hover:text-neon-cyan transition-colors"
              >
                <Code2 className="w-3.5 h-3.5" />
                github
              </a>
              <span className="text-foreground/20">·</span>
              <a
                href="#"
                className="hover:text-neon-cyan transition-colors"
              >
                linkedin
              </a>
              <span className="text-foreground/20">·</span>
              <a
                href="#"
                className="hover:text-neon-cyan transition-colors"
              >
                telegram
              </a>
            </motion.div> */}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-4 max-w-md"
            >
              {[
                { v: "1+", l: "year coding" },
                { v: "4+", l: "projects shipped" },
                { v: "3rd", l: "year @ Ambo" },
              ].map((s, i) => (
                <div
                  key={s.l}
                  className="relative pl-4 border-l border-border hover:border-neon-cyan transition-colors"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
                    {s.v}
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — portrait + code window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5 order-1 lg:order-2 relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-neon-cyan/40 via-neon-purple/30 to-transparent rounded-[2.5rem] blur-3xl opacity-70 animate-pulse-glow" />

              {/* Portrait */}
              <div className="relative rounded-[2rem] overflow-hidden neon-border glass animate-float max-h-[420px]">
                <img
                  src={portrait}
                  alt="Portrait of Milion Sagni"
                  width={400}
                  height={420}
                  className="w-full h-[420px] object-cover object-top"
                />
                <div
                  className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent 0, transparent 2px, hsl(var(--neon-cyan) / 0.15) 3px, transparent 4px)",
                  }}
                />
                {[
                  "top-3 left-3 border-t-2 border-l-2",
                  "top-3 right-3 border-t-2 border-r-2",
                  "bottom-3 left-3 border-b-2 border-l-2",
                  "bottom-3 right-3 border-b-2 border-r-2",
                ].map((c) => (
                  <span
                    key={c}
                    className={`absolute w-5 h-5 border-neon-cyan ${c}`}
                  />
                ))}

                {/* Bottom info bar */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-background via-background/80 to-transparent">
                  <div className="flex items-end justify-between font-mono text-[10px]">
                    <div>
                      <div className="text-muted-foreground"> </div>
                      <div className="text-foreground font-semibold text-sm font-display">
                        Milion Sagni
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-terminal-green flex items-center justify-end gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse" />
                        {" "}
                      </div>
                      <div className="text-muted-foreground mt-0.5"> </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating code chip */}
              <div
                className="absolute -left-8 top-16 glass neon-border rounded-xl px-3 py-2 hidden md:block animate-float shadow-[var(--shadow-elevated)]"
                style={{ animationDelay: "1s" }}
              >
                <div className="font-mono text-[10px] leading-relaxed">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive/70" />
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-purple/70" />
                    <span className="w-1.5 h-1.5 rounded-full bg-terminal-green/70" />
                    <span className="text-muted-foreground ml-1">stack.ts</span>
                  </div>
                  <div>
                    <span className="text-neon-purple">const</span>{" "}
                    <span className="text-neon-cyan">stack</span> = [
                  </div>
                  <div className="pl-3 text-foreground/80">
                    'react',{" "}
                    <span className="text-terminal-green">'node'</span>,
                  </div>
                  <div>];</div>
                </div>
              </div>

              {/* Floating skill badge */}
              <div
                className="absolute -right-6 bottom-24 glass neon-border rounded-xl p-3 hidden md:block animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="font-mono text-[10px] text-muted-foreground">
                  building since
                </div>
                <div className="font-display text-lg font-bold text-gradient leading-tight">
                  2025
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-muted-foreground flex flex-col items-center gap-2 hover:text-neon-cyan transition-colors"
      >
        <span className="uppercase tracking-[0.2em]">scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-neon-cyan to-transparent" />
      </motion.a>
    </section>
  );
};

export default Hero;
