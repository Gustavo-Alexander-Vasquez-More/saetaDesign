import React from 'react';

const navLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Sobre Nosotros', href: '#about-us' },
  { name: 'Preguntas Frecuentes', href: '#faq' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a1020] text-white pt-12 pb-6 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        {/* Logo y nombre */}
        <div className="flex flex-col items-center md:items-start gap-4">
            <img src="/saetaLogo2.png" alt="Saeta Design logo" className="w-40 h-40" />
          <span className="text-xs text-[#b0b8d1]">Creatividad & Estrategia Digital</span>
        </div>

        {/* Enlaces */}
        <nav className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#b0b8d1] hover:text-[#5a8cff] transition-colors text-base font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Redes y horarios */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-4 mb-2">
            <a href="https://www.instagram.com/saetadesign" target="_blank" rel="noopener noreferrer" className="hover:text-[#5a8cff] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="https://www.facebook.com/saetadesign" target="_blank" rel="noopener noreferrer" className="hover:text-[#5a8cff] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .729.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.729 0 1.324-.595 1.324-1.324v-21.35c0-.733-.595-1.325-1.324-1.325z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/saetadesign" target="_blank" rel="noopener noreferrer" className="hover:text-[#5a8cff] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v4.69z"/></svg>
            </a>
          </div>
          <div className="text-xs text-[#b0b8d1] text-center md:text-right">
            <span className="block">Horario de atención:</span>
            <span>Lunes a Viernes 9:00 a 18:00</span>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-[#b0b8d1]">
        © {new Date().getFullYear()} Saeta Design. Todos los derechos reservados.
      </div>
    </footer>
  );
}
