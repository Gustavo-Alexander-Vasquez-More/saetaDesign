import React from 'react'
import { FaWhatsapp, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contacto" className="w-full min-h-[50vh] bg-[#f4f7ff] flex flex-col items-center justify-center px-6 lg:px-24 py-16 scroll-mt-24">
  <h2 className="text-3xl lg:text-5xl font-extrabold text-[#051d8a] mb-4 text-center">¡Hablemos!</h2>
  <p className="text-lg text-[#051d8a]/80 mb-8 text-center max-w-2xl">¿Listo para dar el siguiente paso? Completá el formulario o escribinos directo por WhatsApp, email o redes sociales. <span className="font-semibold text-[#051d8a]">¡Respondemos rápido y con buena onda!</span></p>
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-12 items-stretch justify-center">
        {/* Formulario a la izquierda */}
        <div className="flex-1 flex flex-col justify-center">
          <form className="w-full bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4 border border-[#5a8cff]/20">
            <div className="flex flex-col gap-1">
              <label htmlFor="nombre" className="text-[#051d8a] font-medium">Nombre</label>
              <input id="nombre" name="nombre" type="text" required className="px-4 py-2 rounded-lg bg-[#f4f7ff] text-[#051d8a] focus:outline-none focus:ring-2 focus:ring-[#5a8cff]" placeholder="Tu nombre" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-[#051d8a] font-medium">Email</label>
              <input id="email" name="email" type="email" required className="px-4 py-2 rounded-lg bg-[#f4f7ff] text-[#051d8a] focus:outline-none focus:ring-2 focus:ring-[#5a8cff]" placeholder="tu@email.com" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="mensaje" className="text-[#051d8a] font-medium">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows="4" required className="px-4 py-2 rounded-lg bg-[#f4f7ff] text-[#051d8a] focus:outline-none focus:ring-2 focus:ring-[#5a8cff]" placeholder="¿En qué podemos ayudarte?" />
            </div>
            <button type="submit" className="mt-2 px-6 py-3 bg-[#5a8cff] text-white font-semibold rounded-full shadow hover:bg-white hover:text-[#051d8a] transition-colors text-lg">Enviar mensaje</button>
            <span className="text-xs text-[#051d8a]/60 mt-2">*El formulario es solo demostrativo. Para contacto inmediato usá WhatsApp o email.</span>
          </form>
        </div>
        {/* Datos de contacto a la derecha */}
        <div className="flex-1 flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col gap-6 w-full max-w-xs">
                <a
                  href="https://wa.me/541168691590"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#5a8cff] text-white font-semibold rounded-full shadow hover:bg-[#051d8a] hover:text-white transition-colors text-lg justify-center"
            >
              <FaWhatsapp className="w-6 h-6" />
              WhatsApp
            </a>
            <a
              href="mailto:info@saetadesign.com"
              className="flex items-center gap-2 px-6 py-3 bg-white text-[#051d8a] font-semibold rounded-full shadow hover:bg-[#5a8cff] hover:text-white transition-colors text-lg justify-center"
            >
              {/* Puedes usar un ícono de email de react-icons si lo deseas */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
              info@saetadesign.com
            </a>
          </div>
          <div className="flex items-center gap-6 mt-4">
            <a href="https://www.linkedin.com/company/saetadesign" target="_blank" rel="noopener noreferrer" className="text-[#051d8a] hover:text-[#5a8cff] transition-colors">
              <FaLinkedinIn className="w-7 h-7" />
            </a>
            <a href="https://www.facebook.com/saetadesign" target="_blank" rel="noopener noreferrer" className="text-[#051d8a] hover:text-[#5a8cff] transition-colors">
              <FaFacebookF className="w-7 h-7" />
            </a>
            <a href="https://www.instagram.com/saetadesign" target="_blank" rel="noopener noreferrer" className="text-[#051d8a] hover:text-[#5a8cff] transition-colors">
              <FaInstagram className="w-7 h-7" />
            </a>
          </div>
        </div>
        </div>
    </section>
  );
}
