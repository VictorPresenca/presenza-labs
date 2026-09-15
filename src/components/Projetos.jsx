// Subcomponente de Título reutilizável
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

const stats = [
  {
    value: "+8",
    label: "projetos concluídos",
    text: "Experiências digitais entregues para empresas que buscavam crescer.",
  },
  {
    value: "100%",
    label: "de satisfação",
    text: "Compromisso total com qualidade, transparência e resultado.",
  },
  {
    value: "7–14",
    label: "dias de prazo médio",
    text: "Agilidade responsável, de acordo com a complexidade do projeto.",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Resultados em números"
          title="Projetos tratados como ciência exata."
          text="Prazos claros, acompanhamento próximo e uma entrega construída para durar."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className="relative overflow-hidden rounded-lg border border-border bg-card p-7 shadow-lab sm:p-9"
            >
              <span className="absolute right-5 top-4 text-xs font-extrabold text-primary">
                0{index + 1}
              </span>
              <p className="text-5xl font-extrabold text-foreground sm:text-6xl">
                {stat.value}
              </p>
              <h3 className="mt-3 text-lg font-extrabold text-foreground">
                {stat.label}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {stat.text}
              </p>
              <div className="mt-7 h-1 w-12 rounded-full bg-primary" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}