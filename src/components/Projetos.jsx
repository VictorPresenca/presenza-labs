import { motion } from "framer-motion";

// Importações - Pisaco
import imagePisaco1 from "../assets/pisaco/img-pisaco-desktop-1.webp";
import imagePisaco2 from "../assets/pisaco/img-pisaco-desktop-2.webp";
import imagePisaco3 from "../assets/pisaco/img-pisaco-desktop-3.webp";
import imagePisaco4 from "../assets/pisaco/img-pisaco-desktop-4.webp";
import imagePisaco5 from "../assets/pisaco/img-pisaco-desktop-5.webp";
import imagePisaco6 from "../assets/pisaco/img-pisaco-desktop-6.webp";
import imagePisaco7 from "../assets/pisaco/img-pisaco-desktop-7.webp";
import imagePisaco8 from "../assets/pisaco/img-pisaco-desktop-8.webp";
import imagePisacoMobile1 from "../assets/pisaco/img-pisaco-mobile-1.webp";
import imagePisacoMobile2 from "../assets/pisaco/img-pisaco-mobile-2.webp";
import imagePisacoMobile3 from "../assets/pisaco/img-pisaco-mobile-3.webp";
import imagePisacoMobile4 from "../assets/pisaco/img-pisaco-mobile-4.webp";

// Importações - Porto Bombas
import imagePorto1 from "../assets/portobombas/img-portoltda-desktop-1.webp";
import imagePorto2 from "../assets/portobombas/img-portoltda-desktop-2.webp";
import imagePorto3 from "../assets/portobombas/img-portoltda-desktop-3.webp";
import imagePorto4 from "../assets/portobombas/img-portoltda-desktop-4.webp";
import imagePortoMobile1 from "../assets/portobombas/img-portoltda-mobile-1.webp";
import imagePortoMobile2 from "../assets/portobombas/img-portoltda-mobile-2.webp";
import imagePortoMobile3 from "../assets/portobombas/img-portoltda-mobile-3.webp";

// Importações - GMF Advogados
import imageGmf1 from "../assets/gmf/gmf-desktop-1.webp";
import imageGmf2 from "../assets/gmf/gmf-desktop-2.webp";
import imageGmf3 from "../assets/gmf/gmf-desktop-3.webp";
import imageGmf4 from "../assets/gmf/gmf-desktop-4.webp";
import imageGmf5 from "../assets/gmf/gmf-desktop-5.webp";
import imageGmf6 from "../assets/gmf/gmf-desktop-6.webp";
import imageGmfMobile1 from "../assets/gmf/gmf-mobile-1.webp";
import imageGmfMobile2 from "../assets/gmf/gmf-mobile-2.webp";
import imageGmfMobile3 from "../assets/gmf/gmf-mobile-3.webp";
import imageGmfMobile4 from "../assets/gmf/gmf-mobile-4.webp";

// Array exclusivo: Pisaco
const imagesPisaco = [
  { id: 1, src: imagePisaco1, alt: "Pisaco Desktop 1" },
  { id: 2, src: imagePisacoMobile1, alt: "Pisaco Mobile 1" },
  { id: 3, src: imagePisaco2, alt: "Pisaco Desktop 2" },
  { id: 4, src: imagePisacoMobile2, alt: "Pisaco Mobile 2" },
  { id: 5, src: imagePisaco3, alt: "Pisaco Desktop 3" },
  { id: 6, src: imagePisacoMobile3, alt: "Pisaco Mobile 3" },
  { id: 7, src: imagePisaco4, alt: "Pisaco Desktop 4" },
  { id: 8, src: imagePisacoMobile4, alt: "Pisaco Mobile 4" },
  { id: 9, src: imagePisaco5, alt: "Pisaco Desktop 5" },
  { id: 10, src: imagePisaco6, alt: "Pisaco Desktop 6" },
  { id: 11, src: imagePisaco7, alt: "Pisaco Desktop 7" },
  { id: 12, src: imagePisaco8, alt: "Pisaco Desktop 8" },
];

// Array exclusivo: Porto Bombas
const imagesPorto = [
  { id: 1, src: imagePorto1, alt: "Porto Desktop 1" },
  { id: 2, src: imagePortoMobile1, alt: "Porto Mobile 1" },
  { id: 3, src: imagePorto2, alt: "Porto Desktop 2" },
  { id: 4, src: imagePortoMobile2, alt: "Porto Mobile 2" },
  { id: 5, src: imagePorto3, alt: "Porto Desktop 3" },
  { id: 6, src: imagePortoMobile3, alt: "Porto Mobile 3" },
  { id: 7, src: imagePorto4, alt: "Porto Desktop 4" },
];

// Array exclusivo: GMF Advogados
const imagesGmf = [
  { id: 1, src: imageGmf1, alt: "GMF Desktop 1" },
  { id: 2, src: imageGmfMobile1, alt: "GMF Mobile 1" },
  { id: 3, src: imageGmf2, alt: "GMF Desktop 2" },
  { id: 4, src: imageGmfMobile2, alt: "GMF Mobile 2" },
  { id: 5, src: imageGmf3, alt: "GMF Desktop 3" },
  { id: 6, src: imageGmfMobile3, alt: "GMF Mobile 3" },
  { id: 7, src: imageGmf4, alt: "GMF Desktop 4" },
  { id: 8, src: imageGmfMobile4, alt: "GMF Mobile 4" },
  { id: 9, src: imageGmf5, alt: "GMF Desktop 5" },
  { id: 10, src: imageGmf6, alt: "GMF Desktop 6" },
];

export default function Projetos() {
  return (
    <div className="bg-[#fefdea]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col"
      >
        <div id="projetos" className="py-16 sm:py-24 xl:py-30">
          <h2 className="font-elms text-4xl sm:text-5xl xl:text-6xl font-bold text-shadow-lg pb-6 sm:pb-8 text-slate-800 mx-4 sm:mx-12 md:mx-24 lg:mx-44 xl:mx-50 select-none">
            Projetos
          </h2>
          
          <div className="mx-4 sm:mx-12 md:mx-24 lg:mx-44 xl:mx-50 overflow-hidden rounded-2xl">
            <div className="flex flex-col gap-4 sm:gap-6 w-full">
              
              {/* Linha 1: Pisaco (Esquerda) */}
              <a
                href="https://pisaco.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full overflow-hidden cursor-pointer group"
              >
                <div className="flex gap-4 sm:gap-6 shrink-0 animate-marquee-left group-hover:[animation-play-state:paused]">
                  {[...imagesPisaco, ...imagesPisaco].map((img, index) => (
                    <img
                      key={`pisaco-${img.id}-${index}`}
                      src={img.src}
                      alt={img.alt}
                      className="h-[220px] sm:h-[320px] lg:h-[450px] w-auto max-w-none rounded-2xl object-cover transition-transform duration-300 group-hover:scale-[0.99]"
                    />
                  ))}
                </div>
              </a>

              {/* Linha 2: Porto Bombas (Direita) */}
              <a
                href="https://portoltda.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full overflow-hidden cursor-pointer group"
              >
                <div className="flex gap-4 sm:gap-6 shrink-0 animate-marquee-right group-hover:[animation-play-state:paused]">
                  {[...imagesPorto, ...imagesPorto].map((img, index) => (
                    <img
                      key={`porto-${img.id}-${index}`}
                      src={img.src}
                      alt={img.alt}
                      className="h-[220px] sm:h-[320px] lg:h-[450px] w-auto max-w-none rounded-2xl object-cover transition-transform duration-300 group-hover:scale-[0.99]"
                    />
                  ))}
                </div>
              </a>

              {/* Linha 3: GMF Advogados (Esquerda) */}
              <a
                href="https://advogadosgmf.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full overflow-hidden cursor-pointer group"
              >
                <div className="flex gap-4 sm:gap-6 shrink-0 animate-marquee-left group-hover:[animation-play-state:paused]">
                  {[...imagesGmf, ...imagesGmf].map((img, index) => (
                    <img
                      key={`gmf-${img.id}-${index}`}
                      src={img.src}
                      alt={img.alt}
                      className="h-[220px] sm:h-[320px] lg:h-[450px] w-auto max-w-none rounded-2xl object-cover transition-transform duration-300 group-hover:scale-[0.99]"
                    />
                  ))}
                </div>
              </a>

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}