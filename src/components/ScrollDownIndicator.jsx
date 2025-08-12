import React from "react";

// Mouse animado para indicar scroll a la siguiente sección
export default function ScrollDownIndicator({ color = 'white' }) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 -bottom-7 z-20 flex flex-col items-center select-none pointer-events-none">
      <svg
        className="w-8 h-12 drop-shadow-lg"
        style={{ color }}
        viewBox="0 0 32 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cuerpo del mouse */}
        <rect x="4" y="4" width="24" height="40" rx="12" stroke="currentColor" strokeWidth="2.5" fill="none" />
        {/* Ruedita animada */}
        <circle className="animate-bounce" cx="16" cy="14" r="2" fill="currentColor" />
      </svg>
    </div>
  );
}
