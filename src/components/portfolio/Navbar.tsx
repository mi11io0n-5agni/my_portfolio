import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

const links = [
  { href: "#home", label: "home" },
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#services", label: "services" },
  { href: "#contact", label: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 bg-background/70 backdrop-blur-xl border-b border-border" : "py-5"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg glass flex items-center justify-center neon-border">
            <Terminal className="w-4 h-4 text-neon-cyan" />
          </div>
          <span className="font-mono text-sm">
            <span className="text-neon-cyan">milion</span>
            <span className="text-muted-foreground">.dev</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex font-mono text-xs px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.5)] transition-all"
        >
          hire me →
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
