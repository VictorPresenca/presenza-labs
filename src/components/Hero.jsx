import { motion } from "framer-motion";
import heroImage from "../assets/hero.webp";

export default function Hero() {
  return (
    <div className="bg-[#fefdea] w-full">
      {/* Container principal com a imagem de fundo */}
      <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        
        {/* Imagem em Background */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-label="montanhas de areia com iluminação laranja e azul"
        />

        {/* Camada leve para garantir leitura do texto, se necessário */}
        <div className="absolute inset-0 bg-black/10 z-10" />

        {/* Conteúdo Animado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-20 flex flex-col justify-center items-center px-6 sm:px-12 md:px-24 lg:px-44 xl:px-50 py-28 text-center"
        >
          {/* Tag de destaque */}
          <div className="font-elms text-base sm:text-lg md:text-xl tracking-tight flex items-center justify-center text-slate-800 mb-6 gap-2 bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 sm:size-6 shrink-0 text-slate-800">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg>
            <p className="font-medium">Criamos seu site do jeito que você imagina!</p>
          </div>

          {/* Título Principal */}
          <h1 className="font-elms tracking-tight text-center text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-bold text-slate-900 text-shadow-lg">
            Criação de sites profissionais personalizados
          </h1>
        </motion.div>
      </section>
    </div>
  );
}