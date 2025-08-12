import React from 'react'

export default function Services() {
  const servicios = [
    {
      nombre: 'Branding',
      descripcion: 'Creamos identidades visuales únicas y memorables para tu marca.',
      icono: (
        <svg className="w-10 h-10 text-[#5a8cff]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
      ),
    },
    {
      nombre: 'Diseño Web',
      descripcion: 'Sitios web modernos, responsivos y optimizados para tu negocio.',
      icono: (
        <svg className="w-10 h-10 text-[#5a8cff]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 8h18" /></svg>
      ),
    },
    {
      nombre: 'Contenido Creativo',
      descripcion: 'Generamos contenido visual y textual que conecta con tu audiencia.',
      icono: (
        <svg className="w-10 h-10 text-[#5a8cff]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M12 20V4m0 0L8 8m4-4l4 4" /></svg>
      ),
    },
    {
      nombre: 'Redes Sociales',
      descripcion: 'Estrategias y gestión de redes para potenciar tu presencia online.',
      icono: (
        <svg className="w-10 h-10 text-[#5a8cff]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6" r="1" /></svg>
      ),
    },
  ];

  return (
  <section id="servicios" className="w-full min-h-[60vh] bg-[#f4f7ff] flex flex-col items-center justify-center px-6 lg:px-24 py-16 scroll-mt-24">
      <h2 className="text-3xl lg:text-5xl font-extrabold text-[#051d8a] mb-4 text-center">Nuestros Servicios</h2>
      <p className="text-lg text-[#051d8a]/80 mb-10 text-center max-w-2xl">Soluciones creativas y digitales para potenciar tu marca en cada etapa.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {servicios.map((servicio, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white rounded-2xl shadow-md p-8 hover:scale-105 transition-transform duration-300">
            <div className="mb-4">{servicio.icono}</div>
            <h3 className="text-xl font-bold text-[#051d8a] mb-2 text-center">{servicio.nombre}</h3>
            <p className="text-[#051d8a]/80 text-center">{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
