const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-grid" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/60 to-transparent animate-scan" />
    <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-neon-purple/20 blur-[120px]" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-neon-cyan/20 blur-[120px]" />
  </div>
);

export default GridBackground;
