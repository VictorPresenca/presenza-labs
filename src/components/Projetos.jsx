import { motion } from "framer-motion";
import imgPisaco from "../assets/pisaco/img-pisaco-desktop-1.webp";
import imgPortoBombas from "../assets/portobombas/img-portoltda-desktop-1.webp";
import imgGMFAdvogados from "../assets/gmf/gmf-desktop-1.webp";

const projetos = [
  {
    id: 1,
    title: "Pisaco",
    url: "https://pisaco.com.br",
    image: imgPisaco,
    description:
      "Empresa de fabricação de grades de piso com mais de 10 anos de experiência na área. Nesse projeto auxiliei a criarem de fato a presença digital que a empresa precisava para ter maior credibilidade digital!",
  },
  {
    id: 2,
    title: "Porto Bombas",
    url: "https://portoltda.com.br",
    image: imgPortoBombas,
    description:
      "Prestadores de serviço na área de bombas hidráulicas, que vieram em busca de uma forma mais profissional de compartilhar seu trabalho.",
  },
  {
    id: 3,
    title: "GMF Advogados",
    url: "https://advogadosgmf.com.br",
    image: imgGMFAdvogados,
    description:
      "Advocacia que atua em diversas áreas do direito, sempre tendo foco em profissionalismo e a famosa segurança jurídica! Criamos esse projeto para que eles tenham um contato direto e maior credibilidade com todos os clientes!",
  },
];

export default function Projetos() {
  return (
    <div className="bg-[#fefdea]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <div id="projetos" className="py-12 sm:py-20 lg:py-24 max-w-6xl mx-auto px-6">
          {/** Título **/}
          <h2 className="font-elms text-4xl sm:text-5xl xl:text-6xl font-bold text-shadow-lg pb-8 sm:pb-12 text-slate-800 text-center md:text-left select-none">
            Projetos
          </h2>

          {/** Seção de projetos **/}
          <div className="flex flex-col gap-8 sm:gap-10">
            {projetos.map((projeto) => (
              <div
                key={projeto.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-200/80"
              >
                {/** Imagem do Projeto **/}
                <a
                  href={projeto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden rounded-2xl shadow-md transition-transform duration-300 hover:scale-[1.02] block"
                >
                  <img
                    src={projeto.image}
                    alt={`Preview do site ${projeto.title}`}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </a>

                {/** Informações do Projeto **/}
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-elms font-bold text-2xl sm:text-3xl text-slate-800">
                      {projeto.title}
                    </h3>
                    <p className="font-elms text-slate-700 mt-4 text-base sm:text-lg leading-relaxed">
                      {projeto.description}
                    </p>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-6 border-t border-slate-200/80">
                    <a
                      href={projeto.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center py-3.5 px-8 border border-slate-300 text-slate-800 font-bold rounded-2xl hover:bg-slate-800 hover:text-white transition-colors duration-200 gap-2"
                    >
                      Visitar site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}