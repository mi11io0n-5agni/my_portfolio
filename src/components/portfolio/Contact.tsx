import { Code2, Briefcase, Send, Mail, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const EMAILJS_SERVICE_ID = "service_ala0owf";
const EMAILJS_TEMPLATE_ID = "template_asjmouh";
const EMAILJS_PUBLIC_KEY = "AsfPsJzzTh1-AsyiT";

const socials = [
  { icon: Code2, label: "GitHub", handle: "@mi11io0n-5agni", href: "https://github.com/mi11io0n-5agni" },
  { icon: Briefcase, label: "LinkedIn", handle: "linkedin.com/in/milion-sagni-bb4810385", href: "https://linkedin.com/in/milion-sagni-bb4810385" },
  { icon: Send, label: "Telegram", handle: "@Milionsagni", href: "https://t.me/Milionsagni" },
  { icon: Mail, label: "Email", handle: "milionsagni1995@gmail.com", href: "mailto:milionsagni1995@gmail.com" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      toast.success("Message sent — I'll reply soon.", {
        description: `Thanks ${form.name || "friend"}, your message is on its way.`,
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Couldn't send message", {
        description: "Please try again or email me directly.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-cyan/5 blur-[140px] pointer-events-none" />

      <div className="container relative">
        <Reveal>
          <SectionHeader
            index="05"
            label="contact"
            title="Let's build something."
            description="Have a project, an opportunity, or just want to talk code? My inbox is open."
          />
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Socials */}
          <div className="lg:col-span-2 space-y-3">
            <Reveal>
              <div className="glass rounded-2xl p-6 mb-3">
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
                  // status
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal-green" />
                  </span>
                  <span className="font-display text-base font-medium">
                    Available for opportunities
                  </span>
                </div>
                <p className="font-mono text-xs text-muted-foreground">
                  Open to internship · summer 2026
                </p>
              </div>
            </Reveal>

            {socials.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass rounded-xl p-5 hover:border-neon-cyan/40 hover:-translate-y-0.5 transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-muted/60 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-neon-cyan/20 group-hover:to-neon-purple/20 group-hover:text-neon-cyan transition-all">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {s.label}
                    </div>
                    <div className="font-display font-medium truncate">
                      {s.handle}
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-neon-cyan group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </a>
              </Reveal>
            ))}
          </div>

          {/* Form */}
          <Reveal delay={0.2} className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass neon-border rounded-2xl p-6 md:p-8 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="font-mono text-xs text-muted-foreground">
                  <span className="text-neon-cyan">$</span> compose --message
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-destructive/70" />
                  <span className="w-2 h-2 rounded-full bg-neon-purple/70" />
                  <span className="w-2 h-2 rounded-full bg-terminal-green/70" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-2">
                    --name
                  </label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-2">
                    --email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                    placeholder="you@domain.com"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-2">
                  --message
                </label>
                <textarea
                  required
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="group w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground font-mono text-sm font-semibold hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.5)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "sending..." : "send message"}
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
