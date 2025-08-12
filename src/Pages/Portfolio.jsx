import React from 'react'

export default function Portfolio() {
  const categorias = [
    {
      nombre: 'Páginas Web',
      descripcion: 'Desarrollo y diseño de sitios web modernos y responsivos.',
      imagen: '/portfolio/web.jpg',
    },
    {
      nombre: 'Flyers & Redes Sociales',
      descripcion: 'Creatividades para Instagram, Facebook, historias y más.',
      imagen: '/portfolio/flyers.jpg',
    },
    {
      nombre: 'Logos de Marcas',
      descripcion: 'Identidades visuales únicas para empresas y emprendimientos.',
      imagen: '/portfolio/logos.jpg',
    },
    {
      nombre: 'Videos & Animaciones',
      descripcion: 'Edición de video, motion graphics y contenido animado.',
      imagen: '/portfolio/videos.jpg',
    },
    {
      nombre: 'Branding',
      descripcion: 'Construcción de marca, manuales de identidad y más.',
      imagen: '/portfolio/branding.jpg',
    },
  ];

  return (
  <section id="portfolio" className="w-full min-h-[60vh] bg-[#f4f7ff] flex flex-col items-center justify-center px-6 lg:px-24 py-16 scroll-mt-24">
  <h2 className="text-3xl lg:text-5xl font-extrabold text-[#051d8a] mb-4 text-center">Portfolio</h2>
      <p className="text-lg text-[#051d8a]/80 mb-10 text-center max-w-2xl">Algunos de los trabajos y proyectos realizados por Saeta Design en distintas áreas del diseño gráfico y digital.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {categorias.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 hover:scale-105 transition-transform duration-300">
            <div className="w-full h-40 rounded-xl overflow-hidden mb-4 bg-[#e5e7eb] flex items-center justify-center">
              <img src={cat.imagen} alt={cat.nombre} className="object-cover w-full h-full" onError={e => e.target.style.opacity=0.3} />
            </div>
            <h3 className="text-xl font-bold text-[#5a8cff] mb-2 text-center">{cat.nombre}</h3>
            <p className="text-[#051d8a]/80 text-center">{cat.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
