import React, { useEffect, useState } from 'react';

export default function Splash({ logo = '/saetaLogo.png', bgColor = '#051d8a', duration = 1200 }) {
  const [animate, setAnimate] = useState(false);
  const [hide, setHide] = useState(false);
  const [shake, setShake] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Animación solo en desktop/tablet
    if (!isMobile) {
      setShake(true);
    }
    setShowText(true);
    const shakeTimeout = setTimeout(() => setShake(false), 900);
    const shrinkTimeout = setTimeout(() => setAnimate(true), 1600);
    const hideTimeout = setTimeout(() => setHide(true), duration + 700);
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(shakeTimeout);
      clearTimeout(shrinkTimeout);
      clearTimeout(hideTimeout);
    };
    // eslint-disable-next-line
  }, [duration, isMobile]);

  if (hide) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none select-none transition-none`}
    >
      <div
        className={`absolute left-0 top-0 w-full h-full flex items-center justify-center transition-[clip-path] duration-[1200ms] ease-in-out`}
        style={{
          clipPath: animate
            ? 'circle(0% at 50% 50%)'
            : 'circle(150% at 50% 50%)',
          background: bgColor,
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          {isMobile ? (
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              controls={false}
              className={`w-full h-full object-cover z-10 transition-all duration-700 ${animate ? 'scale-75 opacity-0' : 'scale-100 opacity-100'}`}
            />
          ) : (
            <>
              <img
                src="/flecha.png"
                alt="Saeta Design Logo"
                className={`w-40 h-40 object-contain z-10 mx-auto transition-all duration-700 ${animate ? 'scale-75 opacity-0' : 'scale-100 opacity-100'} ${shake ? 'animate-wave' : ''}`}
              />
              <span
                className={`block mt-4 text-white text-3xl font-bold tracking-widest text-center overflow-hidden
                  ${showText && !animate ? 'animate-saeta-text' : 'opacity-0 -translate-x-10'}
                  ${animate ? 'opacity-0' : ''}`}
                style={{letterSpacing: '0.2em'}}
              >
                SAETA DESIGN
              </span>
            </>
          )}
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
