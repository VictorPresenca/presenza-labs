import { motion } from "framer-motion"

const projetosLinha1 = [
  { id: 1, titulo: "Projeto Alfa", img: "/projetos/site1.jpg", link: "https://site1.com" },
  { id: 2, titulo: "Projeto Beta", img: "/projetos/site2.jpg", link: "https://site2.com" },
  { id: 3, titulo: "Projeto Gama", img: "/projetos/site3.jpg", link: "https://site3.com" },
  { id: 4, titulo: "Projeto Delta", img: "/projetos/site4.jpg", link: "https://site4.com" },
];

const projetosLinha2 = [
  { id: 5, titulo: "Projeto Epsilon", img: "/projetos/site5.jpg", link: "https://site5.com" },
  { id: 6, titulo: "Projeto Zeta", img: "/projetos/site6.jpg", link: "https://site6.com" },
  { id: 7, titulo: "Projeto Eta", img: "/projetos/site7.jpg", link: "https://site7.com" },
  { id: 8, titulo: "Projeto Theta", img: "/projetos/site8.jpg", link: "https://site8.com" },
];

export default function Projetos() {
    const linha1Duplicada = [...projetosLinha1, ...projetosLinha1];
    const linha2Duplicada = [...projetosLinha2, ...projetosLinha2];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex px-50 py-10 flex-col overflow-hidden"
        >
            <div className="flex justify-items items-center flex-col py-10">
                <h2 className="font-elms font-bold text-6xl text-shadow-lg pb-6">Projetos</h2>
                <motion.div
                    className="flex gap-6 shrink-0"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                    ease: "linear",
                    duration: 25,
                    repeat: Infinity,
                    }}
                >
                    {linha1Duplicada.map((item, index) => (
                    <a
                        key={`l1-${item.id}-${index}`}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-80 h-48 rounded-xl overflow-hidden shadow-md bg-amber-50 flex-shrink-0 transition-transform duration-300 hover:scale-105"
                    >
                        <img
                        src={item.img}
                        alt={item.titulo}
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                        />
                    </a>
                    ))}
                </motion.div>
            </div>

        </motion.div>
    )
}