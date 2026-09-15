import { Check, Code2, Globe, Layout, Rocket } from "lucide-react";

// Subcomponente de Título para manter a consistência visual
function SectionHeading({ eyebrow, title, text }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-wide text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {text}
        </p>
      )}
    </div>
  );
}

const siteTypes = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    text: "Páginas profissionais completas para transmitir autoridade, apresentar serviços e passar confiança para clientes.",
  },
  {
    icon: Rocket,
    title: "Landing Pages de Alta Conversão",
    text: "Páginas focadas em um único objetivo: transformar visitantes em leads e vendas diretas no WhatsApp.",
  },
  {
    icon: Layout,
    title: "Portfólios Comerciais",
    text: "Apresente seus trabalhos, projetos ou cases com design moderno e navegação fluida.",
  },
  {
    icon: Code2,
    title: "Aplicações Sob Medida",
    text: "Sistemas web e interfaces personalizadas construídas especificamente para a regra do seu negócio.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-20 border-y border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Bloco Superior: História e Pilares */}
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <SectionHeading
            eyebrow="Sobre o laboratório"
            title="Tecnologia com método. Parceria com transparência."
            text="A Presenza Labs nasceu em 2026, fundada por Victor Presença, técnico em Desenvolvimento de Sistemas e estudante de Sistemas de Informação."
          />
          <div className="space-y-6 text-base leading-8 text-muted-foreground sm:text-lg">
            <p>
              Transformamos estudo, programação e força de vontade em projetos empresariais de alta performance, com design atual e desenvolvimento técnico feito sob medida.
            </p>
            <p>
              Trabalhamos com honestidade, comunicação clara e foco total na satisfação de cada cliente — inclusive de quem não entende de tecnologia.
            </p>
            <div className="grid gap-3 pt-3 sm:grid-cols-2">
              {[
                "Programação sob medida",
                "Alta performance",
                "Design responsivo",
                "Comunicação transparente",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-l-2 border-primary bg-background/60 px-4 py-3 text-sm font-bold text-foreground"
                >
                  <Check className="size-4 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bloco Inferior: O que desenvolvemos */}
        <div className="mt-20 border-t border-border pt-16">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold text-primary">SOLUÇÕES DIGITAIS</p>
              <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl text-foreground">
                O que desenvolvemos
              </h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Da primeira página à operação completa, cada solução é planejada para o objetivo do seu negócio.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {siteTypes.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-background p-6">
                <Icon className="size-7 text-primary" strokeWidth={1.8} />
                <h4 className="mt-8 text-lg font-extrabold text-foreground">{title}</h4>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="mr-2 text-xs font-bold uppercase text-muted-foreground">
              Tecnologia atual
            </span>
            {["React", "Tailwind CSS V4", "Vite", "IA aplicada ao processo"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-bold text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}