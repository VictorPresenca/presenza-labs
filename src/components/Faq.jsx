import { ChevronDown } from "lucide-react";

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

const faqs = [
  {
    question: "Quanto tempo demora para meu site ficar pronto?",
    answer: "O prazo médio de entrega varia entre 7 e 14 dias úteis, dependendo do tipo e da complexidade do projeto. Definimos esse cronograma logo na reunião inicial.",
  },
  {
    question: "O site terá mensalidade obrigatória?",
    answer: "Não. Você paga pelo desenvolvimento e a propriedade do site é 100% sua. Os únicos custos recorrentes são os de hospedagem e domínio, que são pagos diretamente aos provedores.",
  },
  {
    question: "O site vai funcionar bem no celular?",
    answer: "Com certeza. Todos os nossos projetos são desenvolvidos com a abordagem Mobile-First, garantindo um design fluido, rápido e adaptado para qualquer tamanho de tela.",
  },
  {
    question: "Como funciona a manutenção após a entrega?",
    answer: "Entregamos o site pronto para uso. Se precisar de ajustes futuros, novas páginas ou suporte contínuo, oferecemos planos e serviços avulsos de manutenção.",
  },
  {
    question: "Preciso entender de tecnologia para ter um site?",
    answer: "Não. Cuidamos de todo o processo técnico — do registro do domínio à publicação — e explicamos cada etapa em linguagem simples e sem jargões.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Tudo explicado sem complicação."
          text="Respostas diretas para você tomar uma decisão com segurança."
        />

        <div className="mt-12 border-t border-border">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-base font-extrabold text-foreground sm:text-lg [&::-webkit-details-marker]:hidden">
                <span className="flex items-start gap-4">
                  <span className="mt-0.5 text-xs text-primary">
                    0{index + 1}
                  </span>
                  {faq.question}
                </span>
                <ChevronDown className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="max-w-3xl pb-7 pl-10 text-sm leading-7 text-muted-foreground sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}