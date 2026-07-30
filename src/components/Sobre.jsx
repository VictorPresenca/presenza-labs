import { motion } from "framer-motion";
import projetarImagem from "../assets/projetar.webp";

export default function Sobre() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-screen flex justify-center items-center px-50 flex-col"
        >
            <h2 className="flex justify-center font-elms tracking-tight font-bold text-4xl text-slate-800 text-shadow-lg">Como o desenvolvimento funciona</h2>
            <div className="justify-center grid grid-cols-3 gap-2 pt-8">
                <div className="flex flex-col bg-amber-50 rounded-lg group hover:bg-slate-900 transition delay-200 ease-in-out select-none"
                >
                    <div className="p-6">
                        <p className="font-elms text-slate-400 group-hover:text-amber-50 transition delay-200 ease-in-out">
                        01
                        </p>
                    </div>
                    <div className="px-6 pt-20 pb-6">
                        <h2 className="font-elms font-bold text-6xl text-slate-800 pb-6 group-hover:text-amber-50 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition delay-200 ease-in-out">
                        Projetar
                        </h2>
                        <p className="font-elms text-slate-800 group-hover:text-amber-50 transition delay-200 ease-in-out">
                        Analisar todas as informações sobre o projeto que quer desenvolver.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col bg-amber-50 rounded-lg group hover:bg-slate-900 transition delay-200 ease-in-out select-none">
                    <div className="p-6">
                        <p className="font-elms text-slate-400 group-hover:text-amber-50 transition delay-200 ease-in-out">
                        02
                        </p>
                    </div>
                    <div className="px-6 pt-20 pb-6">
                        <h2 className="font-elms font-bold text-6xl text-slate-800 pb-6 group-hover:text-amber-50 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition delay-200 ease-in-out">
                        Programar
                        </h2>
                        <p className="font-elms text-slate-800 group-hover:text-amber-50 transition delay-200 ease-in-out">
                        Colocar a análise em prática, mas sempre conferindo se está tudo conforme as expectativas.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col bg-amber-50 rounded-lg group hover:bg-slate-900 transition delay-200 ease-in-out select-none">
                    <div className="p-6">
                        <p className="font-elms text-slate-400 group-hover:text-amber-50 transition delay-200 ease-in-out">
                        03
                        </p>
                    </div>
                    <div className="px-6 pt-20 pb-6">
                        <h2 className="font-elms font-bold text-6xl text-slate-800 pb-6 group-hover:text-amber-50 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition delay-200 ease-in-out">
                        Publicar
                        </h2>
                        <p className="font-elms text-slate-800 group-hover:text-amber-50 transition delay-200 ease-in-out">
                            Subir seu site na internet, para que todos possam visitá-lo!
                        </p>
                    </div>
                </div>
            </div>
            <p className="font-elms my-8 text-slate-500">Projete, personalize e passe a ideia que quer compartilhar no mundo digital!</p>
        </motion.div>
    )
}