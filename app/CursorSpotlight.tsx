\"use client\";

import { useEffect, useState } from "react";

type Position = { x: number; y: number };

export function CursorSpotlight() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setVisible(true);
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {/* Halo principal alrededor del cursor */}
      <div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 blur-3xl transition-transform duration-75"
        style={{
          left: position.x,
          top: position.y,
          width: 320,
          height: 320,
          opacity: visible ? 1 : 0,
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.25), transparent 60%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Rayo vertical tipo foco de bar */}
      <div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 blur-3xl transition-transform duration-150"
        style={{
          left: position.x,
          top: position.y + 120,
          width: 220,
          height: 420,
          opacity: visible ? 0.65 : 0,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.24), transparent)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}

