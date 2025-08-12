import React from 'react';

export default function WhyUs() {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center px-6 lg:px-24 py-16">
      <h2 className="text-2xl lg:text-4xl font-extrabold text-[#051d8a] mb-4 text-center">¿Por qué elegir Saeta Design?</h2>
      <ul className="text-lg text-[#051d8a]/90 mb-8 text-center max-w-2xl flex flex-col gap-3">
        <li>✔️ Atención personalizada y cercana en cada proyecto.</li>
        <li>✔️ Creatividad y estrategia para diferenciar tu marca.</li>
        <li>✔️ Resultados rápidos y procesos ágiles.</li>
        <li>✔️ Experiencia en múltiples rubros y plataformas.</li>
      </ul>
    </section>
  );
}
