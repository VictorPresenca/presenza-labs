import { Sparkles } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="scroll-mt-20 bg-surface-strong py-24 text-primary-foreground lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase text-primary">
            <span className="h-px w-7 bg-primary" />
            Avaliações
          </p>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Resultados reais merecem histórias reais.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-primary-foreground/65">
            Em breve, este espaço receberá os depoimentos dos nossos clientes. Sem textos inventados, apenas experiências verdadeiras.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[0, 1].map((item) => (
            <div
              key={item}
              className="min-h-56 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-7"
            >
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Sparkles key={star} className="size-4 text-primary/45" />
                ))}
              </div>
              <div className="mt-8 h-3 w-full rounded-full bg-primary-foreground/8" />
              <div className="mt-3 h-3 w-4/5 rounded-full bg-primary-foreground/8" />
              <div className="mt-3 h-3 w-2/3 rounded-full bg-primary-foreground/8" />
              <p className="mt-8 text-xs font-bold uppercase text-primary/70">
                Depoimento em breve
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}