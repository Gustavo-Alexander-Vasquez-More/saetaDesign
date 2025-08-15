import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

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
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/saetadesign" target="_blank" rel="noopener noreferrer" className="hover:text-[#5a8cff] transition-colors">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/saetadesign" target="_blank" rel="noopener noreferrer" className="hover:text-[#5a8cff] transition-colors">
              <FaLinkedinIn className="w-6 h-6" />
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
