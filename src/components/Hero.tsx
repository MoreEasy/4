import type { CSSProperties } from "react";
import Reveal from "./Reveal";
import { Arrow, Chili, Clock, Flame, PhoneIcon, Pin, Star } from "./icons";
import {
  heroImg,
  PHONE_DISPLAY,
  PHONE_TEL,
  RATING,
  REVIEW_COUNT,
} from "../data/content";

const floaters = [
  { cls: "top-[24%] left-[44%] h-7 w-7 text-fuego", r: "-14deg", d: "0s" },
  { cls: "top-[64%] left-[4%] h-9 w-9 text-chile", r: "10deg", d: "1.2s" },
  { cls: "top-[16%] right-[6%] h-6 w-6 text-brasa", r: "22deg", d: "2.1s" },
  { cls: "bottom-[14%] right-[38%] h-8 w-8 text-oro", r: "-8deg", d: "0.6s" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-40 pb-16 md:pb-24">
      {/* ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 42% at 12% 8%, rgba(255,77,36,.17), transparent 62%), radial-gradient(48% 40% at 88% 80%, rgba(255,138,42,.13), transparent 60%), radial-gradient(30% 30% at 60% 20%, rgba(255,192,67,.06), transparent 70%)",
        }}
      />
      {/* giant outline word */}
      <span
        aria-hidden
        className="text-outline-crema pointer-events-none absolute -bottom-4 md:bottom-0 left-0 select-none whitespace-nowrap font-display text-[23vw] leading-none opacity-[0.13]"
      >
        PICANTE
      </span>

      {/* drifting chilies */}
      {floaters.map((f, i) => (
        <span
          key={i}
          aria-hidden
          className={`animate-drift pointer-events-none absolute hidden md:block ${f.cls}`}
          style={{ "--r": f.r, animationDelay: f.d } as CSSProperties}
        >
          <Chili className="h-full w-full" />
        </span>
      ))}

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-12 lg:gap-10">
        {/* ------- left: words ------- */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs md:text-sm font-bold tracking-[0.22em] uppercase text-humo">
              <span className="flex items-center gap-1.5 text-fuego">
                <Pin className="h-4 w-4" /> Santo Domingo Este
              </span>
              <span className="h-px w-8 bg-crema/25" />
              <span>Rep. Dominicana</span>
            </p>
          </Reveal>

          <Reveal className="mt-6">
            <h1 className="font-display leading-[0.88] tracking-wide text-[17vw] sm:text-7xl md:text-8xl xl:text-[104px]">
              <span className="mask">
                <span className="mask-inner" style={{ "--d": "60ms" } as CSSProperties}>
                  AQUÍ EL
                </span>
              </span>
              <span className="mask">
                <span className="mask-inner" style={{ "--d": "200ms" } as CSSProperties}>
                  SABOR
                </span>
              </span>
              <span className="mask">
                <span className="mask-inner text-fuego" style={{ "--d": "340ms" } as CSSProperties}>
                  <span className="relative inline-block">
                    MUERDE.
                    <svg
                      viewBox="0 0 220 18"
                      className="absolute -bottom-2 left-0 w-full"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 13C42 4 84 16 122 9s76-4 95 3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                        className="text-brasa"
                      />
                    </svg>
                  </span>
                </span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={380}>
            <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-humo">
              Alitas glaseadas, papas suprema, mofongo y la{" "}
              <span className="font-bold text-crema">salsita de la casa que no perdona</span>. Sabor
              callejero de verdad, a precio de barrio y con la puerta abierta hasta la medianoche.
            </p>
          </Reveal>

          {/* chips */}
          <Reveal delay={460}>
            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              <span className="flex items-center gap-1.5 rounded-full border border-oro/40 bg-oro/10 px-3.5 py-1.5 text-xs font-extrabold text-oro transition-colors hover:bg-oro/20">
                <Star className="h-3.5 w-3.5" />
                {RATING} · {REVIEW_COUNT} opiniones
              </span>
              {["$500–1,000 p/p", "Para llevar", "Consumo en el lugar"].map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-crema/15 bg-crema/5 px-3.5 py-1.5 text-xs font-bold text-humo transition-colors hover:border-fuego/60 hover:text-crema"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={540}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="group flex items-center gap-3 rounded-full bg-fuego px-7 py-3.5 font-extrabold text-crema shadow-[0_14px_36px_-10px_rgba(255,77,36,.65)] transition-all duration-300 hover:bg-brasa hover:-translate-y-0.5"
              >
                Ver el menú
                <Arrow className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <a
                href={PHONE_TEL}
                className="flex items-center gap-2.5 rounded-full border-2 border-crema/20 px-6 py-3 font-bold text-crema transition-all duration-300 hover:border-fuego hover:text-oro"
              >
                <PhoneIcon className="h-4.5 w-4.5" />
                {PHONE_DISPLAY}
              </a>
              <span className="hidden lg:flex items-center gap-2 font-marker text-lg text-oro rotate-[-3deg]">
                ¡pide pa' llevar!
                <Arrow className="h-5 w-5 -rotate-45" />
              </span>
            </div>
          </Reveal>
        </div>

        {/* ------- right: image collage ------- */}
        <div className="lg:col-span-5">
          <Reveal delay={250} className="relative mx-auto max-w-[430px]">
            {/* spinning badge */}
            <div className="absolute -top-12 -left-6 md:-left-14 z-20 h-27 w-27 text-oro">
              <svg viewBox="0 0 120 120" className="h-full w-full animate-spin-slow">
                <defs>
                  <path id="hero-circ" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
                </defs>
                <text
                  fill="currentColor"
                  fontSize="11"
                  fontWeight="800"
                  letterSpacing="2.6"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <textPath href="#hero-circ">
                    ABIERTO HASTA LAS 12 · SABOR CALLEJERO ·
                  </textPath>
                </text>
              </svg>
              <Flame className="animate-flicker absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-fuego" />
            </div>

            {/* framed photo */}
            <div className="group relative rotate-[2.5deg] rounded-[26px] border border-crema/15 bg-lena p-2.5 shadow-[0_45px_90px_-30px_rgba(0,0,0,.9)] transition-transform duration-500 hover:rotate-0">
              <div className="overflow-hidden rounded-[18px] bg-coal">
                <img
                  src={heroImg}
                  alt="Festín de La Esquina Picante: alitas glaseadas, tostones y papas con queso"
                  className="animate-kenburns aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
              </div>

              {/* sticker: hours */}
              <span className="absolute -left-3 top-8 z-20 flex -rotate-[7deg] items-center gap-2 rounded-lg bg-oro px-4 py-2 font-display text-base md:text-lg tracking-wide text-carbon shadow-[0_12px_30px_-8px_rgba(255,192,67,.5)]">
                <Clock className="h-4.5 w-4.5" /> HASTA LAS 12 AM
              </span>

              {/* rating card */}
              <div className="absolute -bottom-7 -right-2 md:-right-8 z-20 rotate-[2deg] rounded-2xl border border-crema/15 bg-coal/95 px-5 py-4 shadow-2xl backdrop-blur transition-transform duration-300 group-hover:rotate-0">
                <div className="flex items-end gap-3">
                  <span className="font-display text-5xl leading-none text-oro">{RATING}</span>
                  <div className="pb-1">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 text-oro" />
                      ))}
                    </div>
                    <p className="mt-1 text-[11px] font-bold text-humo">
                      {REVIEW_COUNT} opiniones en Google
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* scroll hint */}
      <div className="relative mt-16 hidden justify-center md:flex">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-crema/25 p-1.5">
          <span className="animate-bob h-2 w-1 rounded-full bg-fuego" />
        </div>
      </div>
    </section>
  );
}
