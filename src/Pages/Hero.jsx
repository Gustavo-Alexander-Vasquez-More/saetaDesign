
import React from 'react';
import ScrollDownIndicator from '../components/ScrollDownIndicator';

export default function Hero() {
  return (
    <>
    <div id='home' className="h-24 w-full bg-[#051d8a]"></div>
  <section id="home" className="w-full min-h-[65vh] bg-[#051d8a] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-10 gap-8 relative overflow-visible scroll-mt-24">
      {/* Texto a la izquierda */}
      <div className="flex-1 flex flex-col justify-center items-start text-left">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Impulsa tu <span className="text-[#5a8cff]">marca</span><br />
          con creatividad y estrategia
        </h1>
        <p className="text-lg lg:text-2xl text-white/80 mb-8 max-w-xl">
          En Saeta Design transformamos ideas en proyectos digitales que destacan y conectan con tu audiencia. Branding, contenido, web y más.
        </p>
        <div className="flex gap-4">
          <a href="#contacto" className="px-6 py-3 bg-[#5a8cff] text-white font-semibold rounded-full shadow hover:bg-white hover:text-[#051d8a] transition-colors">Contáctanos</a>
          <a href="#portafolio" className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#051d8a] transition-colors">Ver portafolio</a>
        </div>
      </div>
      {/* Imagen a la derecha */}
      <div className="flex-1 lg:flex hidden items-center justify-center relative">
        <div className="w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#0033cc] flex items-center justify-center overflow-hidden shadow-2xl">
          <img
            src="/heroImage.jpg"
            alt="Equipo creativo Saeta Design"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* Indicador de scroll solo en desktop/tablet */}
      <div className="hidden md:block">
        <ScrollDownIndicator />
      </div>
    </section>
    </>
  );
}
