import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// Componente para animar os números
function AnimatedNumber({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Projetos() {
  const stats = [
    { id: 1, number: 5, prefix: "+", suffix: "", label: "Projetos entregues" },
    { id: 2, number: 2, prefix: "+", suffix: " anos", label: "de experiência" },
    { id: 3, number: 100, prefix: "", suffix: "%", label: "Satisfação dos clientes" },
  ];

  return (
    <div className="bg-[#fefdea]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <div id="projetos" className="py-16 sm:py-24 max-w-6xl mx-auto px-6">
          {/* Título */}
          <h2 className="font-elms text-4xl sm:text-5xl xl:text-6xl font-bold text-shadow-lg pb-12 sm:pb-16 text-slate-800 text-center md:text-left select-none">
            Impacto em Números
          </h2>

          {/* Grid de Métricas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div 
                key={stat.id} 
                className="flex flex-col items-center justify-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/60"
              >
                <span className="font-elms text-5xl sm:text-6xl font-extrabold text-slate-800 mb-2">
                  {stat.prefix}
                  <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                </span>
                <p className="text-slate-600 font-medium text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}