import { useEffect, useState } from "react";
import { Flame, PhoneIcon } from "./icons";
import { PHONE_DISPLAY, PHONE_TEL } from "../data/content";

const links = [
  { label: "El Menú", href: "#menu" },
  { label: "Mofongo", href: "#mofongo" },
  { label: "La Pizarra", href: "#pizarra" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Visítanos", href: "#ubicacion" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-carbon/90 backdrop-blur-md border-b border-crema/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,.8)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 md:h-[76px] max-w-7xl items-center justify-between px-5">
        {/* logo */}
        <a href="#top" className="group flex items-center gap-2.5" aria-label="La Esquina Picante — inicio">
          <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-lena border border-crema/10 overflow-hidden">
            <Flame className="h-5.5 w-5.5 text-fuego animate-flicker" />
          </span>
          <span className="font-display leading-[0.95] tracking-wide">
            <span className="block text-[13px] text-crema">LA ESQUINA</span>
            <span className="block text-[15px] text-fuego group-hover:text-oro transition-colors">PICANTE</span>
          </span>
        </a>

        {/* desktop links */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-line text-sm font-semibold text-humo hover:text-crema transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* right side */}
        <div className="flex items-center gap-3">
          <span className="hidden xl:flex items-center gap-2 rounded-full border border-verde/30 bg-verde/10 px-3.5 py-1.5 text-xs font-bold text-verde">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-verde opacity-75" style={{ animation: "pulse-ring 1.8s cubic-bezier(0,0,.2,1) infinite" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-verde" />
            </span>
            Abierto · hasta 12 a.m.
          </span>
          <a
            href={PHONE_TEL}
            className="hidden sm:flex items-center gap-2 rounded-full bg-fuego px-4.5 py-2.5 text-sm font-extrabold text-crema shadow-[0_8px_24px_-8px_rgba(255,77,36,.7)] transition-all duration-300 hover:bg-brasa hover:-translate-y-0.5"
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden md:inline">{PHONE_DISPLAY}</span>
            <span className="md:hidden">Llamar</span>
          </a>
          {/* burger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative grid h-10 w-10 place-items-center rounded-lg border border-crema/15 text-crema"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            <span
              className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`}
            />
          </button>
        </div>
      </div>

      {/* mobile panel */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 border-b border-crema/10 bg-coal/95 backdrop-blur-md" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-crema/5 py-3.5 font-display text-2xl tracking-wide text-crema hover:text-fuego transition-colors"
            >
              {l.label}
              <span className="text-xs font-body font-bold text-ceniza">0{i + 1}</span>
            </a>
          ))}
          <a
            href={PHONE_TEL}
            className="mt-4 mb-2 flex items-center justify-center gap-2 rounded-full bg-fuego py-3 font-extrabold text-crema"
          >
            <PhoneIcon className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </nav>
      </div>
    </header>
  );
}
