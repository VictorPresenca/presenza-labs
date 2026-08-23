import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute w-full z-50 bg-transparent">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-12 py-6 sm:py-8 text-slate-800">
        
        {/* Logo */}
        <div className="font-bold text-base sm:text-lg tracking-wide text-[#fefdea]">
          <p>Presenza Labs</p>
        </div>

        {/* Links Desktop */}
        <nav className="hidden md:flex gap-8 lg:gap-10 font-medium text-[#fefdea]">
          <a href="#sobre" className="hover:text-[#fefdea]/80 transition-colors">Sobre</a>
          <a href="#projetos" className="hover:text-[#fefdea]/80 transition-colors">Projetos</a>
          <a href="#contato" className="hover:text-[#fefdea]/80 transition-colors">Contato</a>
        </nav>

        {/* Botão Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#fefdea] focus:outline-none"
          aria-label="Abrir Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Dropdown Mobile */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 py-6 bg-[#fefdea]/95 backdrop-blur-sm border-b border-slate-200 shadow-md font-medium text-slate-800">
          <a href="#sobre" onClick={() => setIsOpen(false)} className="hover:text-[#fefdea]/80">Sobre</a>
          <a href="#projetos" onClick={() => setIsOpen(false)} className="hover:text-[#fefdea]/80">Projetos</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="hover:text-[#fefdea]/80">Contato</a>
        </nav>
      )}
    </header>
  );
}