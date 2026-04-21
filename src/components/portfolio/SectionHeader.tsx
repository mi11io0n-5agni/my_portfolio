interface Props {
  index: string;
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeader = ({ index, label, title, description, align = "left" }: Props) => (
  <div className={`max-w-2xl mb-16 ${align === "center" ? "mx-auto text-center" : ""}`}>
    <div
      className={`flex items-center gap-3 font-mono text-xs text-muted-foreground mb-5 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span className="text-neon-cyan">{index}</span>
      <span className="h-px w-10 bg-gradient-to-r from-neon-cyan to-transparent" />
      <span className="uppercase tracking-[0.2em]">// {label}</span>
    </div>
    <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.05]">
      {title}
    </h2>
    {description && (
      <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;
