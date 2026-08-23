import { motion } from "framer-motion";

export default function Contato() {
  const numeroWhatsapp = "5511969264064";
  const urlLinkedin = "https://www.linkedin.com/in/victor-presen%C3%A7a-a111722b8/";
  const urlGithub = "https://github.com/VictorPresenca";

  const mensagemWhatsapp = encodeURIComponent(
    "Olá, Victor! Vim pelo seu portfólio e gostaria de conversar sobre um projeto."
  );

  return (
    <section id="contato" className="w-full relative bg-[#fefdea] py-24 overflow-hidden">
      {/* Padrão de Grade em CSS (consistente com a seção Sobre) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 90%)',
          maskImage: 'radial-gradient(circle at center, black 50%, transparent 90%)'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-elms text-5xl sm:text-6xl font-bold text-slate-800 tracking-tight text-shadow-lg mt-2">
            Pronto para impulsionar sua presença digital?
          </h2>
        </motion.div>

        {/* Layout Principal em 2 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Lado Esquerdo: Sobre mim & Proposta de Valor */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between bg-white/60 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-lg"
          >
            <div>
              <h3 className="font-elms text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                Desenvolvimento sob medida com foco em performance e design.
              </h3>
              <p className="font-elms text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
                Como desenvolvedor frontend, crio sites modernos, rápidos e pensados exclusivamente para transformar visitantes em clientes. Não utilizo templates prontos nem soluções genéricas: cada linha de código é construída do zero para refletir a identidade única do seu negócio.
              </p>
              <p className="font-elms text-slate-700 text-base sm:text-lg leading-relaxed">
                Do primeiro rascunho até o projeto publicado na web, acompanho todo o processo de perto para entregar um produto final otimizado, seguro e visualmente marcante.
              </p>
            </div>

            {/* Destaques do Atendimento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="font-elms text-slate-700 font-medium">Design 100% Exclusivo</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="font-elms text-slate-700 font-medium">Otimizado para Celulares</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="font-elms text-slate-700 font-medium">Código Limpo & SEO</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="font-elms text-slate-700 font-medium">Atendimento Direto e Humano</span>
              </div>
            </div>
          </motion.div>

          {/* Lado Direito: Ações de Contato & Redes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="bg-white/60 p-8 rounded-3xl backdrop-blur-sm shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-elms text-sm font-semibold tracking-wider">
                    Atendimento Rápido
                  </span>
                </div>
                <h4 className="font-elms text-2xl font-bold mb-2">Me conte qual é seu novo projeto!</h4>
                <p className="font-elms text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
                  Tire suas dúvidas, envie a sua ideia ou solicite um orçamento sem compromisso.
                </p>
              </div>
              <div className="flex flex-col gap-4 border-t border-slate-200/80">
                <a
                    href={`https://wa.me/${numeroWhatsapp}?text=${mensagemWhatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 border border-slate-300 text-slate-800 font-bold rounded-2xl flex items-center justify-center gap-3 mt-4"
                >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    </svg>
                    Falar no WhatsApp
                </a>

                <a
                    href={urlLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 border border-slate-300 text-slate-800 font-bold rounded-2xl flex items-center justify-center gap-3"
                >
                    {/* Ícone LinkedIn */}
                    <svg className="w-5 h-5 fill-current text-slate-800" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.262-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    Perfil no LinkedIn
                </a>

                <a
                    href={urlLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 border border-slate-300 text-slate-800 font-bold rounded-2xl flex items-center justify-center gap-3"
                >
                    {/* Ícone GitHub */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Perfil no GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}