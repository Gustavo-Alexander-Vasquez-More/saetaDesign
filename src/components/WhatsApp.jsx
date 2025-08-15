import React, { useState, useRef } from 'react';
import useSound from 'use-sound';
// Sonido de notificación (puedes cambiar el archivo por otro de tu preferencia)
const openChat = '/open.mp3'; // Coloca el archivo en /public/
const closeChat = '/close.mp3'; // Coloca el archivo en /public/
const notificationSound = '/notification-pop.mp3'; // Coloca el archivo en /public/

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

export default function WhatsApp() {
  const [playOpen] = useSound(openChat, { volume: 1 });
  const [playClose] = useSound(closeChat, { volume: 1 });
  const [playNotif] = useSound(notificationSound, { volume: 1 });
  const [chat, setChat] = useState([
    { tipo: 'bot', texto: '👋 ¡Hola! Soy SaetaCrack, tu asistente digital. ¿En qué puedo ayudarte hoy? Elegí una pregunta para empezar.' }
  ]);
  const [pregsRestantes, setPregsRestantes] = useState(preguntas);
  const [open, setOpen] = useState(false);
  const prevChatLength = useRef(chat.length);

  React.useEffect(() => {
    const chatDiv = document.getElementById('saeta-chat-messages');
    if (chatDiv) {
      chatDiv.scrollTop = chatDiv.scrollHeight;
    }
  }, [chat]);

  const handlePregunta = idx => {
    const pregunta = pregsRestantes[idx];
    setChat(prev => {
      setTimeout(() => playNotif(), 200);
      return [...prev, { tipo: 'pregunta', texto: pregunta.pregunta }, { tipo: 'respuesta', texto: pregunta.respuesta }];
    });
    setPregsRestantes(pregsRestantes.filter((_, i) => i !== idx));
  };

  const handleNuevoChat = () => {
    playOpen();
    setChat([
      { tipo: 'bot', texto: '👋 ¡Hola! Soy SaetaCrack, tu asistente digital. ¿En qué puedo ayudarte hoy? Elegí una pregunta para empezar.' }
    ]);
    setPregsRestantes(preguntas);
  };

  return (
    <>
      {/* Botón flotante para abrir el chat */}
      {!open && (
        <button
          className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 bg-[#5a8cff] hover:bg-[#051d8a] text-white rounded-full shadow-lg p-2 flex items-center justify-center transition-colors duration-200 group saeta-pulse"
          aria-label="Abrir chat de preguntas frecuentes"
          onClick={() => { playOpen(); setOpen(true); }}
        >
          <span className="relative flex items-center justify-center">
            <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="22" fill="#5a8cff" stroke="#051d8a" strokeWidth="2" />
              <rect x="14" y="18" width="20" height="14" rx="7" fill="#f4f7ff" stroke="#051d8a" strokeWidth="2" />
              <circle cx="19" cy="25" r="2" fill="#5a8cff" />
              <circle cx="29" cy="25" r="2" fill="#5a8cff" />
              <rect x="20" y="29" width="8" height="2" rx="1" fill="#b0b8d1" />
              <rect x="18" y="14" width="12" height="4" rx="2" fill="#5a8cff" stroke="#051d8a" strokeWidth="1" />
            </svg>
          </span>
          <span className="hidden md:block ml-2 font-semibold text-base">¿Hablamos?</span>
          <style>{`
            @keyframes saetaPulse {
              0% { transform: scale(1); box-shadow: 0 0 0 0 #5a8cff; }
              50% { transform: scale(1.08); box-shadow: 0 0 16px 4px #5a8cff88; }
              100% { transform: scale(1); box-shadow: 0 0 0 0 #5a8cff; }
            }
            .saeta-pulse {
              animation: saetaPulse 1.2s infinite cubic-bezier(.36,.07,.19,.97);
            }
          `}</style>
        </button>
      )}
      {/* Chat flotante */}
      {open && (
        <div className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 w-[90vw] max-w-md bg-white rounded-2xl shadow-2xl border border-[#5a8cff]/20 p-4 flex flex-col gap-4 animate-fade-in">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-bold text-[#051d8a]">Preguntas Frecuentes</span>
            <button className="text-[#5a8cff] hover:text-[#051d8a] font-bold text-xl" onClick={() => { playClose(); setOpen(false); }} aria-label="Cerrar chat">×</button>
          </div>
          <div className="flex flex-col gap-2 min-h-[120px] max-h-64 overflow-y-auto scroll-smooth" id="saeta-chat-messages">
            {chat.length === 0 && (
              <div className="text-[#051d8a]/70 text-center">Selecciona una pregunta para comenzar el chat 👇</div>
            )}
            {chat.map((msg, idx) => (
              <div key={idx} className={`w-full flex ${msg.tipo === 'pregunta' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-xl text-base ${msg.tipo === 'pregunta' ? 'bg-[#5a8cff] text-white' : msg.tipo === 'bot' ? 'bg-[#e5e7eb] text-[#051d8a] font-semibold' : 'bg-[#f4f7ff] text-[#051d8a]'}`}>{msg.texto}</div>
              </div>
            ))}
          </div>
          {pregsRestantes.length > 0 && (
            <div className="flex flex-col gap-2 mt-2">
              <div className="text-[#051d8a] font-semibold mb-1">Preguntas disponibles:</div>
              {pregsRestantes.map((item, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-4 py-2 rounded-lg bg-[#e5e7eb] hover:bg-[#5a8cff] hover:text-white text-[#051d8a] font-medium transition-colors"
                  onClick={() => handlePregunta(idx)}
                >
                  {item.pregunta}
                </button>
              ))}
            </div>
          )}
          <div className="flex gap-2 mt-4">
            <button
              className="px-4 py-2 rounded-full bg-[#5a8cff] text-white font-semibold shadow hover:bg-[#051d8a] transition-colors"
              onClick={handleNuevoChat}
            >
              Nuevo chat
            </button>
            <a
              href="https://wa.me/541168691590"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#25d366] text-white font-semibold shadow hover:bg-[#128c7e] transition-colors"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
