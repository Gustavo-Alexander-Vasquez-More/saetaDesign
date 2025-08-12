import React, { useState } from 'react';

const preguntas = [
  {
    pregunta: '¿Qué servicios ofrecen?',
    respuesta: 'Ofrecemos branding, diseño web, contenido creativo, gestión de redes sociales y más. Nos adaptamos a las necesidades de cada cliente.'
  },
  {
    pregunta: '¿Trabajan con clientes de todo el país?',
    respuesta: '¡Sí! Atendemos proyectos de toda Argentina y también del exterior. Todo el proceso puede ser 100% online.'
  },
  {
    pregunta: '¿Cuánto tarda un proyecto?',
    respuesta: 'Depende del tipo de servicio y la complejidad. Un logo puede demorar 1 semana, una web entre 2 y 4 semanas. Siempre te damos un plazo estimado.'
  },
  {
    pregunta: '¿Cómo es el proceso de trabajo?',
    respuesta: 'Primero escuchamos tu idea, luego enviamos una propuesta y cronograma. Trabajamos en conjunto, mostrando avances y adaptándonos a tus comentarios.'
  },
  {
    pregunta: '¿Qué formas de pago aceptan?',
    respuesta: 'Transferencia bancaria, Mercado Pago y, para clientes del exterior, PayPal.'
  },
];

export default function FAQ() {
  const [abierta, setAbierta] = useState(null);

  const toggle = idx => setAbierta(abierta === idx ? null : idx);

  return (
    <section id="faq" className="w-full bg-[#f4f7ff] flex flex-col items-center justify-center px-6 lg:px-24 py-16 scroll-mt-24">
      <h2 className="text-3xl lg:text-5xl font-extrabold text-[#051d8a] mb-6 text-center">Preguntas Frecuentes</h2>
      <div className="w-full max-w-3xl flex flex-col gap-4">
        {preguntas.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-4 border border-[#5a8cff]/10">
            <button
              className="w-full flex justify-between items-center text-left text-lg font-semibold text-[#051d8a] focus:outline-none"
              onClick={() => toggle(idx)}
              aria-expanded={abierta === idx}
            >
              <span>{item.pregunta}</span>
              <span className={`ml-4 transition-transform ${abierta === idx ? 'rotate-90' : ''}`}>▶</span>
            </button>
            {abierta === idx && (
              <div className="mt-3 text-[#051d8a]/80 text-base animate-fade-in">
                {item.respuesta}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
