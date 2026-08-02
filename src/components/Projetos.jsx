import { motion } from "framer-motion";
import imageHero from "../assets/hero.webp";
import imagePisaco1 from "../assets/img-pisaco-desktop-1.webp"
import imagePisaco2 from "../assets/img-pisaco-desktop-2.webp"
import imagePisaco3 from "../assets/img-pisaco-desktop-3.webp"
import imagePisaco4 from "../assets/img-pisaco-desktop-4.webp"
import imagePisaco5 from "../assets/img-pisaco-desktop-5.webp"
import imagePisaco6 from "../assets/img-pisaco-desktop-6.webp"
import imagePisaco7 from "../assets/img-pisaco-desktop-7.webp"
import imagePisaco8 from "../assets/img-pisaco-desktop-8.webp"
import imagePisacoMobile1 from "../assets/img-pisaco-mobile-1.webp"
import imagePisacoMobile2 from "../assets/img-pisaco-mobile-2.webp"
import imagePisacoMobile3 from "../assets/img-pisaco-mobile-3.webp"
import imagePisacoMobile4 from "../assets/img-pisaco-mobile-4.webp"
import imagePorto1 from "../assets/img-portoltda-desktop-1.webp"
import imagePorto2 from "../assets/img-portoltda-desktop-2.webp"
import imagePorto3 from "../assets/img-portoltda-desktop-3.webp"
import imagePorto4 from "../assets/img-portoltda-desktop-4.webp"
import imagePortoMobile1 from "../assets/img-portoltda-mobile-1.webp"
import imagePortoMobile2 from "../assets/img-portoltda-mobile-2.webp"
import imagePortoMobile3 from "../assets/img-portoltda-mobile-3.webp"

const images1 = [
  { id: 1, src: imagePisaco1, alt: "Pisaco 1" },
  { id: 2, src: imagePisacoMobile1, alt: "Pisaco Mobile 1" },
  { id: 3, src: imagePisaco2, alt: "Pisaco 2" },
  { id: 4, src: imagePisacoMobile2, alt: "Pisaco Mobile 2" },
  { id: 5, src: imagePisaco3, alt: "Pisaco 3" },
  { id: 6, src: imagePisacoMobile3, alt: "Pisaco Mobile 3" },
  { id: 7, src: imagePisaco4, alt: "Pisaco 4" },
  { id: 8, src: imagePisacoMobile4, alt: "Pisaco Mobile 4" },
  { id: 9, src: imagePisaco5, alt: "Pisaco 5" },
  { id: 10, src: imagePortoMobile1, alt: "Porto Mobile 1" },
  { id: 11, src: imagePisaco6, alt: "Pisaco 6" },
  { id: 12, src: imagePortoMobile2, alt: "Porto Mobile 2" },
  { id: 13, src: imagePisaco7, alt: "Pisaco 7" },
  { id: 14, src: imagePortoMobile3, alt: "Porto Mobile 3" },
  { id: 15, src: imagePisaco7, alt: "Pisaco 8" },
  { id: 16, src: imagePorto1, alt: "Porto 1" },
  { id: 18, src: imagePorto2, alt: "Porto 2" },
  { id: 19, src: imagePorto3, alt: "Porto 3" },
  { id: 20, src: imagePorto4, alt: "Porto 4" },

];

const images2 = [
  { id: 1, src: imagePisaco1, alt: "Pisaco 1" },
  { id: 2, src: imagePisacoMobile1, alt: "Pisaco Mobile 1" },
  { id: 3, src: imagePisaco2, alt: "Pisaco 2" },
  { id: 4, src: imagePisacoMobile2, alt: "Pisaco Mobile 2" },
  { id: 5, src: imagePisaco3, alt: "Pisaco 3" },
  { id: 6, src: imagePisacoMobile3, alt: "Pisaco Mobile 3" },
  { id: 7, src: imagePisaco4, alt: "Pisaco 4" },
  { id: 8, src: imagePisacoMobile4, alt: "Pisaco Mobile 4" },
  { id: 9, src: imagePisaco5, alt: "Pisaco 5" },
  { id: 10, src: imagePortoMobile1, alt: "Porto Mobile 1" },
  { id: 11, src: imagePisaco6, alt: "Pisaco 6" },
  { id: 12, src: imagePortoMobile2, alt: "Porto Mobile 2" },
  { id: 13, src: imagePisaco7, alt: "Pisaco 7" },
  { id: 14, src: imagePortoMobile3, alt: "Porto Mobile 3" },
  { id: 15, src: imagePisaco7, alt: "Pisaco 8" },
  { id: 16, src: imagePorto1, alt: "Porto 1" },
  { id: 18, src: imagePorto2, alt: "Porto 2" },
  { id: 19, src: imagePorto3, alt: "Porto 3" },
  { id: 20, src: imagePorto4, alt: "Porto 4" },

];

export default function Projetos() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col pointer-events-none select-none"
    >
      <div className="w-full h-24 bg-gradient-to-b from-white to-[#fdf6db] pointer-events" />
      <div className="bg-[#fdf6db] py-30">
        <h2 className="font-elms text-6xl font-bold text-shadow-lg pb-8 text-slate-800 ml-50">Projetos</h2>
        <div className="mx-50 overflow-hidden rounded-2xl">
          <div className="flex flex-col gap-6 w-full">
            
            <div className="flex w-full">
              <div className="flex gap-6 shrink-0 animate-marquee-left">
                {[...images1, ...images1].map((img, index) => (
                  <img
                    key={`row1-${img.id}-${index}`}
                    src={img.src}
                    alt={img.alt}
                    className="h-[300px] sm:h-[450px] w-auto max-w-none rounded-2xl object-cover"
                  />
                ))}
              </div>
            </div>

            <div className="flex w-full overflow-hidden">
              <div className="flex gap-6 shrink-0 animate-marquee-right">
                {[...images2, ...images2].map((img, index) => (
                  <img
                    key={`row2-${img.id}-${index}`}
                    src={img.src}
                    alt={img.alt}
                    className="h-[300px] sm:h-[450px] w-auto max-w-none rounded-2xl object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-24 bg-gradient-to-b from-[#fdf6db] to-white pointer-events" />
    </motion.div>
  );
}