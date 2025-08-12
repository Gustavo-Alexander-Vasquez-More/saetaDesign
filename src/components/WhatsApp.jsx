import React from 'react';

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/5491123456789"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25d366] hover:bg-[#128c7e] text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors duration-200 group"
      aria-label="WhatsApp"
    >
      <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A12 12 0 0 0 3.48 20.52l-1.32 4.8a1 1 0 0 0 1.24 1.24l4.8-1.32A12 12 0 1 0 20.52 3.48ZM12 22a10 10 0 1 1 7.07-2.93A10 10 0 0 1 12 22Zm5.2-7.2c-.28-.14-1.65-.81-1.9-.9s-.44-.14-.62.14-.72.9-.88 1.08-.32.21-.6.07a8.18 8.18 0 0 1-2.4-1.48 9.1 9.1 0 0 1-1.68-2.08c-.18-.31 0-.48.13-.62.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.62-1.5-.85-2.06-.22-.54-.45-.47-.62-.48h-.53a1 1 0 0 0-.72.34 3 3 0 0 0-.94 2.23c0 1.32.95 2.6 2.7 3.7a10.6 10.6 0 0 0 4.6 1.7c.32 0 .63-.02.93-.06a3 3 0 0 0 2.1-1.4c.14-.23.14-.43.1-.6-.04-.17-.25-.27-.53-.41Z"/>
      </svg>
      <span className="hidden md:block ml-2 font-semibold text-base">WhatsApp</span>
    </a>
  );
}
