import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "../ui/Button";

const WHATSAPP_MESSAGE = "Olá! Vi o site da Presenza Labs e quero solicitar um orçamento.";
const WHATSAPP_URL = `https://wa.me/5511966105279?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const navItems = [
  ["Início", "#top"],
  ["Sobre", "#sobre"],
  ["Serviços", "#servicos"],
  ["Processo", "#processo"],
  ["Projetos", "#projetos"],
  ["FAQ", "#faq"],
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 text-lg font-extrabold text-foreground">
      {/* <img
        src="/favicon.svg"
        alt="Presenza Labs"
        width="24"
        height="24"
        className="size-6"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      /> */}
      <span>
        Presenza <span className="text-primary">Labs</span>
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  // Fecha o menu ao pressionar a tecla ESC
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  // Trava o scroll do body quando o menu mobile estiver aberto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-foreground/8 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />

          {/* Navegação Desktop */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Botão CTA Desktop */}
          <div className="hidden lg:block">
            <Button asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" /> Solicitar orçamento
              </a>
            </Button>
          </div>

          {/* Botão Hambúrguer Mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="size-6" />
          </Button>
        </div>
      </header>

      {/* Overlay Escuro com Desfoque TOTAL (fora da header) */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Lateral Mobile (fora da header) */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[82%] max-w-sm flex-col bg-background p-6 shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Menu mobile"
      >
        <div className="flex items-center justify-between">
          <Logo />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
          >
            <X className="size-6" />
          </Button>
        </div>

        <nav className="mt-12 flex flex-col">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-5 text-xl font-bold text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <Button asChild size="lg" className="mt-auto">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle className="size-5" /> Falar pelo WhatsApp
          </a>
        </Button>
      </aside>
    </>
  );
}