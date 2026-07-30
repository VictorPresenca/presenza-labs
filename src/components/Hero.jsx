import { motion } from "framer-motion";
import heroImage from "../assets/hero.webp";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-[#fdf6db] flex flex-col justify-center items-center px-50">
          <div className="font-elms text-xl tracking-tight flex-1 flex justify-center items-center text-slate-700 pt-50 pb-2 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
          </svg>
            <p>Criamos seu site do jeito que você imagina!</p>
          </div>
          <div className="flex-2 flex items-baseline justify-center">
            <h1 className="font-elms tracking-tight text-center text-8xl font-bold text-slate-800 text-shadow-lg">Criação de sites <br/>pessoais e profissionais <br/> personalizados</h1>
          </div>
          <div className="flex justify-center py-25">
            <img src={heroImage} alt="" className="w-full h-auto max-h-[600px] drop-shadow-xl/25" />
          </div>
      </div>
      <div className="w-full h-24 bg-gradient-to-b from-[#fdf6db] to-white pointer-events-none" />
    </motion.div>
  );
}