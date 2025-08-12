import React, { useEffect, useState } from 'react';

export default function Splash({ logo = '/saetaLogo.png', bgColor = '#051d8a', duration = 1200 }) {
  const [animate, setAnimate] = useState(false);
  const [hide, setHide] = useState(false);
  const [shake, setShake] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Sacudida antes de encoger
    setShake(true);
    setShowText(true); // Mostrar texto desde el inicio
  const shakeTimeout = setTimeout(() => setShake(false), 900); // Duración de la sacudida (más lento)
  const shrinkTimeout = setTimeout(() => setAnimate(true), 1600); // Espera a que termine el texto (más lento)
    const hideTimeout = setTimeout(() => setHide(true), duration + 700);
    return () => {
      clearTimeout(shakeTimeout);
      clearTimeout(shrinkTimeout);
      clearTimeout(hideTimeout);
    };
  }, [duration]);

  if (hide) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none select-none transition-none`}
      style={{background: 'transparent'}}
    >
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-[clip-path] duration-[1200ms] ease-in-out w-full h-full`}
        style={{
          clipPath: animate
            ? 'circle(0% at 50% 50%)'
            : 'circle(150% at 50% 50%)',
          background: bgColor,
        }}
      >
        <div className="flex flex-col items-center">
          <img
            src="/flecha.png"
            alt="Saeta Design Logo"
            className={`w-40 h-40 object-contain z-10 transition-all duration-700 ${animate ? 'scale-75 opacity-0' : 'scale-100 opacity-100'} ${shake ? 'animate-wave' : ''}`}
          />
          <span
            className={`block mt-4 text-white text-3xl font-bold tracking-widest overflow-hidden
              ${showText && !animate ? 'animate-saeta-text' : 'opacity-0 -translate-x-10'}
              ${animate ? 'opacity-0' : ''}`}
            style={{letterSpacing: '0.2em'}}
          >
            SAETA DESIGN
          </span>
        </div>
        <style>{`
          @keyframes wave {
            0% { transform: rotate(0deg) translateX(0); }
            10% { transform: rotate(-10deg) translateX(-8px); }
            20% { transform: rotate(12deg) translateX(10px); }
            30% { transform: rotate(-10deg) translateX(-8px); }
            40% { transform: rotate(9deg) translateX(8px); }
            50% { transform: rotate(-6deg) translateX(-6px); }
            60% { transform: rotate(5deg) translateX(4px); }
            70% { transform: rotate(-3deg) translateX(-2px); }
            80% { transform: rotate(2deg) translateX(1px); }
            90% { transform: rotate(-1deg) translateX(-1px); }
            100% { transform: rotate(0deg) translateX(0); }
          }
          .animate-wave {
            animation: wave 1.2s cubic-bezier(.36,.07,.19,.97) both;
          }
          @keyframes saeta-text {
            0% { opacity: 0; transform: translateX(-40px); }
            60% { opacity: 1; transform: translateX(10px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-saeta-text {
            animation: saeta-text 0.6s cubic-bezier(.36,.07,.19,.97) both;
          }
        `}</style>
      </div>
    </div>
  );
}
