import React from 'react';

export default function AboutUs() {
  return (
  <section id='about-us' className="w-full min-h-[60vh] bg-[#0a1020] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-16 gap-12 scroll-mt-24">
      {/* Imagen/ilustración a la izquierda */}
      <div className="flex-1 flex items-center justify-center mb-10 lg:mb-0">
        <div className="w-[260px] h-[260px] lg:w-[340px] lg:h-[340px] rounded-lg bg-[#051D8A] p-4 flex items-center justify-center overflow-hidden shadow-2xl">
          <img
            src="/flecha.png"
            alt="Equipo Saeta Design"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* Texto a la derecha */}
      <div className="flex-1 flex flex-col justify-center items-start text-left">
        <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6">
          Sobre <span className="text-[#5a8cff]">Saeta Design</span>
        </h2>
        <p className="text-lg lg:text-xl text-white/80 mb-6 max-w-2xl">
          Somos un equipo creativo y profesional que combina diseño, tecnología y marketing para potenciar marcas. Nos gusta escuchar, proponer ideas y acompañar a cada cliente en su crecimiento digital.
        </p>
        <div className="text-white/90 mb-8 text-base lg:text-lg max-w-2xl">
          <p>
            Si buscás un aliado cercano y flexible para llevar tu marca al siguiente nivel, ¡conocenos!
          </p>
        </div>
        <div className="flex gap-4">
          <a href="#contacto" className="px-6 py-3 bg-[#5a8cff] text-white font-semibold rounded-full shadow hover:bg-white hover:text-[#051d8a] transition-colors">¿Necesitás una solución para tu negocio? ¡Hablemos!</a>
        </div>
      </div>
    </section>
  );
}
