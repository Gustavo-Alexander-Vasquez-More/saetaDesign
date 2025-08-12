import React from 'react';

export default function BannerCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-[#5a8cff] to-[#051d8a] flex flex-col items-center justify-center px-6 lg:px-24 py-14">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 text-center">¿Listo para impulsar tu marca?</h2>
      <p className="text-lg text-white/90 mb-6 text-center max-w-2xl">Contactanos hoy y recibí una propuesta personalizada para tu negocio. ¡Damos el primer paso juntos!</p>
      <a href="#contacto" className="px-8 py-4 bg-white text-[#051d8a] font-bold rounded-full shadow hover:bg-[#5a8cff] hover:text-white transition-colors text-lg">Quiero que me contacten</a>
    </section>
  );
}
