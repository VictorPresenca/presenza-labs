import { ArrowUpRight, Clock3, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { Button } from "../ui/Button";

const WHATSAPP_MESSAGE = "Olá! Vi o site da Presenza Labs e quero solicitar um orçamento.";
const WHATSAPP_URL = `https://wa.me/5511966105279?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 border-t border-border bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-lg bg-surface-strong px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
          {/* Elemento Decorativo */}
          <div className="pointer-events-none absolute -right-12 -top-14 size-44 rounded-full border border-primary/25" />

          {/* Conteúdo Principal + CTA */}
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-wide text-primary">
                Vamos iniciar um projeto?
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-on-dark sm:text-4xl lg:text-5xl">
                Sua ideia pode ser nosso próximo experimento de sucesso.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-on-dark/65">
                Conte o que sua empresa precisa. Vamos responder com clareza e encontrar a melhor solução para você.
              </p>
            </div>

            <Button asChild size="lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle className="size-5" />
                Conversar no WhatsApp
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>

          {/* Rodapé Interno com Informações de Contato */}
          <div className="relative mt-10 grid gap-3 border-t border-on-dark/15 pt-7 text-sm text-on-dark/70 sm:grid-cols-3">
            <span className="flex items-center gap-2">
              <Clock3 className="size-4 shrink-0 text-primary" />
              Atendimento 24h
            </span>
            <a
              href="https://instagram.com/presenzalabs"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <FaInstagram className="size-4 shrink-0 text-primary" />
              @presenzalabs
            </a>
            <span className="sm:text-right font-medium">presenzalabs.com.br</span>
          </div>
        </div>
      </div>
    </section>
  );
}