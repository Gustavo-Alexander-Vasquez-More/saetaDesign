import React from 'react'

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
              href="https://wa.me/5491123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#5a8cff] text-white font-semibold rounded-full shadow hover:bg-[#051d8a] hover:text-white transition-colors text-lg justify-center"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12 12 0 0 0 3.48 20.52l-1.32 4.8a1 1 0 0 0 1.24 1.24l4.8-1.32A12 12 0 1 0 20.52 3.48ZM12 22a10 10 0 1 1 7.07-2.93A10 10 0 0 1 12 22Zm5.2-7.2c-.28-.14-1.65-.81-1.9-.9s-.44-.14-.62.14-.72.9-.88 1.08-.32.21-.6.07a8.18 8.18 0 0 1-2.4-1.48 9.1 9.1 0 0 1-1.68-2.08c-.18-.31 0-.48.13-.62.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.62-1.5-.85-2.06-.22-.54-.45-.47-.62-.48h-.53a1 1 0 0 0-.72.34 3 3 0 0 0-.94 2.23c0 1.32.95 2.6 2.7 3.7a10.6 10.6 0 0 0 4.6 1.7c.32 0 .63-.02.93-.06a3 3 0 0 0 2.1-1.4c.14-.23.14-.43.1-.6-.04-.17-.25-.27-.53-.41Z"/></svg>
              WhatsApp
            </a>
            <a
              href="mailto:info@saetadesign.com"
              className="flex items-center gap-2 px-6 py-3 bg-white text-[#051d8a] font-semibold rounded-full shadow hover:bg-[#5a8cff] hover:text-white transition-colors text-lg justify-center"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
              info@saetadesign.com
            </a>
          </div>
          <div className="flex items-center gap-6 mt-4">
            <a href="https://www.linkedin.com/company/saetadesign" target="_blank" rel="noopener noreferrer" className="text-[#051d8a] hover:text-[#5a8cff] transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v4.69z"/></svg>
            </a>
            <a href="https://www.facebook.com/saetadesign" target="_blank" rel="noopener noreferrer" className="text-[#051d8a] hover:text-[#5a8cff] transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .729.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.729 0 1.324-.595 1.324-1.324v-21.35c0-.733-.595-1.325-1.324-1.325z"/></svg>
            </a>
            <a href="https://www.instagram.com/saetadesign" target="_blank" rel="noopener noreferrer" className="text-[#051d8a] hover:text-[#5a8cff] transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
