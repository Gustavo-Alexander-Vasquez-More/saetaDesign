import React from 'react';

const testimonios = [
  {
    nombre: 'María G.',
    empresa: 'Emprendedora',
    texto: 'El equipo de Saeta entendió mi idea desde el primer momento y la llevó a otro nivel. ¡Súper recomendados!'
  },
  {
    nombre: 'Lucas P.',
    empresa: 'Agencia Digital',
    texto: 'Rápidos, creativos y siempre atentos. Mi web quedó increíble y mis clientes lo notan.'
  },
  {
    nombre: 'Florencia R.',
    empresa: 'Tienda Online',
    texto: 'Me ayudaron a profesionalizar mi marca y a crecer en redes. ¡Gracias Saeta Design!'
  }
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#f4f7ff] flex flex-col items-center justify-center px-6 lg:px-24 py-16">
      <h2 className="text-2xl lg:text-4xl font-extrabold text-[#051d8a] mb-8 text-center">Lo que dicen nuestros clientes</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-stretch">
        {testimonios.map((t, idx) => (
          <div key={idx} className="flex-1 bg-white rounded-2xl shadow-md p-8 flex flex-col items-center border border-[#5a8cff]/10">
            <p className="text-[#051d8a] text-lg mb-4 italic">“{t.texto}”</p>
            <div className="font-bold text-[#5a8cff]">{t.nombre}</div>
            <div className="text-[#051d8a]/70 text-sm">{t.empresa}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
