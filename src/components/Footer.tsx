import Reveal from "./Reveal";
import Ticker from "./Ticker";
import { Arrow, Flame, Instagram, PhoneIcon, Pin } from "./icons";
import {
  ADDRESS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "../data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-crema/10">
      <Ticker
        variant="fire"
        items={["Pide ya", PHONE_DISPLAY, "Abierto hasta las 12 a.m.", "Sabor callejero", "Santo Domingo Este"]}
      />

      <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="text-center lg:col-span-6 lg:text-left">
            <p className="inline-block -rotate-2 font-marker text-lg text-oro">no digas que no te avisamos</p>
            <p className="mt-3 font-display leading-[0.9] tracking-wide text-5xl sm:text-6xl md:text-8xl">
              ¿SE TE
              <br />
              <span className="text-outline">ANTOJÓ?</span>
            </p>
            <a
              href={PHONE_TEL}
              className="group mt-8 inline-flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-2xl tracking-wide text-oro transition-colors hover:text-fuego sm:text-3xl md:text-5xl"
            >
              <PhoneIcon className="h-8 w-8 md:h-10 md:w-10" />
              {PHONE_DISPLAY}
              <Arrow className="h-7 w-7 transition-transform duration-300 group-hover:translate-x-2 md:h-9 md:w-9" />
            </a>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-humo lg:mx-0">
              Llama, pide y pasa buscando. O quédate en la esquina a comer con la familia — aquí
              siempre hay mesa y nunca falta la salsita.
            </p>
          </Reveal>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-6">
            <Reveal delay={100} className="text-center sm:text-left">
              <h3 className="font-display text-lg tracking-widest text-fuego">MENÚ</h3>
              <ul className="mt-4 space-y-2.5 text-sm font-semibold text-humo">
                {[
                  { l: "Los destacados", h: "#menu" },
                  { l: "La pizarra", h: "#pizarra" },
                  { l: "Nivel de picante", h: "#picante" },
                  { l: "Horarios", h: "#horarios" },
                ].map((x) => (
                  <li key={x.l}>
                    <a href={x.h} className="link-line transition-colors hover:text-crema">
                      {x.l}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={180} className="text-center sm:text-left">
              <h3 className="font-display text-lg tracking-widest text-fuego">HORARIO</h3>
              <ul className="mt-4 space-y-2.5 text-sm font-semibold text-humo">
                <li>Lunes a Domingo</li>
                <li className="text-crema">5:00 p.m. – 12:00 a.m.</li>
                <li className="text-xs text-ceniza">Cierra a las 12 a.m. en punto… casi siempre.</li>
              </ul>
            </Reveal>
            <Reveal delay={260} className="text-center sm:text-left">
              <h3 className="font-display text-lg tracking-widest text-fuego">CONTACTO</h3>
              <ul className="mt-4 space-y-3.5 text-sm font-semibold text-humo">
                <li className="flex items-start justify-center gap-2.5 sm:justify-start">
                  <Pin className="mt-0.5 h-4 w-4 shrink-0 text-fuego" />
                  <a href={MAPS_URL} target="_blank" rel="noreferrer" className="link-line hover:text-crema">
                    {ADDRESS}
                  </a>
                </li>
                <li className="flex items-start justify-center gap-2.5 sm:justify-start">
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-fuego" />
                  <a href={PHONE_TEL} className="link-line hover:text-crema">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-start justify-center gap-2.5 sm:justify-start">
                  <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-fuego" />
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="link-line hover:text-crema">
                    {INSTAGRAM_HANDLE}
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="border-t border-crema/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs font-bold text-ceniza sm:flex-row">
          <p>© 2026 La Esquina Picante · Todos los derechos reservados</p>
          <p className="flex items-center gap-1.5">
            Hecho con
            <Flame className="animate-flicker h-3.5 w-3.5 text-fuego" />
            en Santo Domingo Este
          </p>
        </div>
      </div>
    </footer>
  );
}
