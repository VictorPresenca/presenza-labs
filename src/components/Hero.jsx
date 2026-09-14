import { ArrowRight, ArrowUpRight, Check, LayoutDashboard, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";

const WHATSAPP_MESSAGE = "Olá! Vi o site da Presenza Labs e quero saber mais sobre criação de sites.";
const WHATSAPP_URL = `https://wa.me/5511966105279?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

function BrowserPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] pb-14 pt-8 lg:rotate-1">
      <div className="absolute -right-2 top-0 size-14 animate-bubble rounded-full border border-primary/45 bg-primary/10" />
      <div className="absolute -bottom-1 left-8 size-7 animate-bubble rounded-full border border-primary/40 bg-primary/10 [animation-delay:1.5s]" />
      <div className="relative z-10 overflow-hidden rounded-lg border border-foreground/15 bg-card shadow-lab">
        <div className="flex h-11 items-center gap-2 border-b border-border bg-background px-4">
          <span className="size-2.5 rounded-full bg-primary" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <div className="ml-3 flex h-6 flex-1 items-center rounded-md border border-border bg-surface px-3 text-[9px] font-extrabold text-muted-foreground">
            seusite.com.br
          </div>
        </div>
        <div className="bg-background p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="/favicon.svg" 
                alt="Logo Presenza Labs" 
                width="22" 
                height="22" 
                className="size-5 sm:size-6" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span className="text-[10px] font-extrabold sm:text-xs">
                Presenza <span className="text-primary">Labs</span>
              </span>
            </div>
            <div className="flex gap-3">
              <span className="h-1.5 w-7 rounded-full bg-border" />
              <span className="h-1.5 w-7 rounded-full bg-border" />
              <span className="h-1.5 w-7 rounded-full bg-border" />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-[1.15fr_0.85fr] items-center gap-4 sm:mt-10 sm:gap-7">
            <div>
              <div className="mb-3 h-2 w-20 rounded-full bg-primary/35" />
              <div className="h-4 w-full rounded-sm bg-foreground sm:h-5" />
              <div className="mt-2 h-4 w-4/5 rounded-sm bg-foreground sm:h-5" />
              <div className="mt-4 h-2 w-full rounded-full bg-border" />
              <div className="mt-2 h-2 w-2/3 rounded-full bg-border" />
              <div className="mt-5 h-8 w-24 rounded-md bg-primary sm:h-9 sm:w-28" />
            </div>
            <div className="relative flex aspect-square items-center justify-center rounded-lg border border-primary/25 bg-surface">
              <div className="absolute right-[18%] top-[14%] size-4 rounded-full border border-primary/50" />
              <div className="absolute left-[16%] top-[27%] size-2 rounded-full bg-primary/50" />
              <div className="flex size-14 items-center justify-center rounded-lg bg-foreground text-on-dark shadow-lab sm:size-20">
                <LayoutDashboard className="size-7 text-primary sm:size-10" strokeWidth={1.5} />
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-3">
            {["Estratégia", "Design", "Performance"].map((item, index) => (
              <div key={item} className="rounded-md border border-border bg-card p-2.5 sm:p-4">
                <span className="text-[9px] font-extrabold text-primary">0{index + 1}</span>
                <p className="mt-3 text-[9px] font-extrabold sm:text-[11px]">{item}</p>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 right-3 z-20 rounded-md border border-border bg-background p-4 shadow-lab sm:right-8">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-full bg-primary/15">
            <Check className="size-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-extrabold text-foreground">Site pronto</p>
            <p className="text-[10px] font-semibold text-muted-foreground">rápido e responsivo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden pt-28 sm:pt-32 lg:min-h-[820px] lg:pt-36">
      <div className="pointer-events-none absolute left-[7%] top-36 size-5 animate-bubble rounded-full border border-primary/45 bg-primary/10" />
      <div className="pointer-events-none absolute right-[8%] top-52 size-9 animate-bubble rounded-full border border-primary/40 bg-primary/10 [animation-delay:1.4s]" />
      <div className="pointer-events-none absolute bottom-20 left-[42%] size-3 animate-bubble rounded-full bg-primary/30 [animation-delay:2s]" />
      <div className="mx-auto grid max-w-7xl items-center gap-4 px-5 lg:grid-cols-[1.12fr_0.88fr] lg:px-8">
        <div className="relative z-10 max-w-3xl py-8 lg:py-16">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-2 text-xs font-bold text-foreground sm:text-sm">
            <Sparkles className="size-4 text-primary" /> Desenvolvimento com ciência, estratégia e propósito
          </div>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.03] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Criação de sites profissionais <span className="relative inline-block text-primary">personalizados<span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-primary/35" /></span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Criamos seu site do jeito que você imagina — rápido, estratégico e preparado para gerar resultados.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle className="size-5" /> Quero criar meu site <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#sobre">Conhecer a Presenza Labs <ArrowRight className="size-4" /></a>
            </Button>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-muted-foreground">
            <span className="flex items-center gap-2"><Check className="size-4 text-primary" /> Sem mensalidade obrigatória</span>
            <span className="flex items-center gap-2"><Check className="size-4 text-primary" /> Atendimento próximo</span>
          </div>
        </div>
        <BrowserPreview />
      </div>
    </section>
  );
}