import { ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-border py-10 mt-10">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-muted-foreground flex items-center gap-2">
          <span className="text-neon-cyan">©</span>
          {new Date().getFullYear()}{" "}
          <span className="text-foreground">milion.sagni</span>
          <span className="text-foreground/30">/</span>
          built with logic & love
        </div>

        <div className="flex items-center gap-5 font-mono text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse" />
            system operational
          </span>
          <a
            href="#home"
            className="flex items-center gap-1.5 hover:text-neon-cyan transition-colors group"
          >
            back to top
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
