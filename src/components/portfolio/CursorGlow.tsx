import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[1] w-[500px] h-[500px] rounded-full blur-[120px] transition-opacity duration-300"
      style={{
        left: pos.x - 250,
        top: pos.y - 250,
        background:
          "radial-gradient(circle, hsl(var(--neon-cyan) / 0.18), hsl(var(--neon-purple) / 0.08) 40%, transparent 70%)",
        opacity: visible ? 1 : 0,
      }}
    />
  );
};

export default CursorGlow;
