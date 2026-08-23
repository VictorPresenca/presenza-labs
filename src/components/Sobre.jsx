import { motion } from "framer-motion";

import step1Img from "../assets/projetar.webp"; 
import step2Img from "../assets/programar.webp"; 
import step3Img from "../assets/publicar.webp"; 

const passos = [
  {
    numero: "01",
    titulo: "Projetar",
    descricao: "Analisar todas as informações e necessidades sobre o projeto que você quer desenvolver, mapeando a estrutura ideal.",
    imagem: step1Img,
    alt: "Etapa de Projeto"
  },
  {
    numero: "02",
    titulo: "Programar",
    descricao: "Colocar a análise em prática escrevendo código limpo, moderno e otimizado, mantendo total alinhamento com suas expectativas.",
    imagem: step2Img,
    alt: "Etapa de Programação"
  },
  {
    numero: "03",
    titulo: "Publicar",
    descricao: "Subir seu site com domínio personalizado, certificado de segurança e hospedagem na internet para que seus clientes possam acessá-lo.",
    imagem: step3Img,
    alt: "Etapa de Publicação"
  }
];

export default function Sobre() {
  return (
    <section id="sobre" className="w-full relative bg-[#fefdea] py-24">
      {/* Padrão de Grade em CSS com Esfumaçado */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-elms tracking-tight font-bold text-4xl sm:text-5xl text-slate-800 text-shadow-lg text-center mb-20"
        >
          Como o desenvolvimento funciona?
        </motion.h2>

        {/* Lista de Passos na Vertical */}
        <div className="flex flex-col gap-24">
          {passos.map((passo, idx) => (
            <motion.div
              key={passo.numero}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Lado Esquerdo: Texto */}
              <div className="md:col-span-5 flex flex-col justify-center">
                <h3 className="font-elms font-bold text-4xl sm:text-5xl text-slate-800 pb-4">
                  {passo.titulo}
                </h3>
                <p className="font-elms text-slate-700 text-lg leading-relaxed">
                  {passo.descricao}
                </p>
              </div>

              {/* Lado Direito: Imagem sem fundo branco por trás */}
              <div className="md:col-span-7 flex justify-center md:justify-end">
                <div className="w-full max-w-[520px] flex justify-center items-center">
                  <img
                    src={passo.imagem}
                    alt={passo.alt}
                    className="w-full h-auto max-h-[360px] object-contain drop-shadow-md"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}