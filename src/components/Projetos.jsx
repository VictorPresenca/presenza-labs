import { motion } from "framer-motion";
import imageProjetar from "../assets/projetar.webp";
import imageHero from "../assets/hero.webp";

const images1 = [
  { id: 1, src: imageProjetar, alt: "a" },
  { id: 2, src: imageHero, alt: "b" },
  { id: 3, src: imageProjetar, alt: "c" },
  { id: 4, src: imageProjetar, alt: "d" },
  { id: 5, src: imageHero, alt: "e" },
  { id: 6, src: imageProjetar, alt: "f" },
  { id: 7, src: imageHero, alt: "g" },
];

export default function Projetos() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex px-50 py-10 flex-col"
    >
      <div className="flex justify-items items-center rounded-2xl flex-col overflow-hidden">
        
        <div className="flex w-max gap-10 animate-infinite-scroll hover:[animation-play-state:paused]">

          <div className="flex gap-10" >
            {images1.map((img) => (
              <img 
                key={`dup-${img.id}`}
                src={img.src}
                alt={img.alt}
                className="max-h-[600px] rounded-2xl"
              />
            ))}
          </div>

            <div className="flex shrink-0 gap-10" aria-hidden="true">
            {images1.map((img) => (
              <img 
                key={`dup-${img.id}`}
                src={img.src}
                alt={img.alt}
                className="max-h-[600px]"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}