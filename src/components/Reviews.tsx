import type { CSSProperties } from "react";
import Reveal from "./Reveal";
import { Arrow, Quote, Star } from "./icons";
import {
  MAPS_URL,
  RATING,
  ratingBreakdown,
  REVIEW_COUNT,
  reviews,
} from "../data/content";

export default function Reviews() {
  return (
    <section id="opiniones" className="relative scroll-mt-24 border-t border-crema/10 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 40% at 90% 10%, rgba(255,192,67,.08), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5">
        <Reveal>
          <p className="mb-3 inline-block -rotate-2 font-marker text-lg text-oro">el barrio habla</p>
          <h2 className="mb-14 font-display text-4xl leading-[0.92] tracking-wide sm:text-5xl md:text-7xl">
            LO QUE DICEN <span className="text-fuego">DE NOSOTROS</span>
          </h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* summary */}
          <Reveal className="lg:col-span-5">
            <div className="h-full rounded-[24px] border border-crema/10 bg-coal p-7 md:p-9">
              <div className="flex items-end gap-5">
                <span className="font-display text-6xl leading-none text-crema sm:text-8xl md:text-[92px]">{RATING}</span>
                <div className="pb-2">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-oro" />
                    ))}
                  </div>
                  <p className="mt-2 text-sm font-bold text-humo">
                    {REVIEW_COUNT} opiniones en Google
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-2.5">
                {ratingBreakdown.map((count, idx) => {
                  const stars = 5 - idx;
                  const pct = (count / REVIEW_COUNT) * 100;
                  return (
                    <div key={stars} className="flex items-center gap-3">
                      <span className="w-3 text-right text-xs font-extrabold text-humo">{stars}</span>
                      <Star className="h-3 w-3 shrink-0 text-oro" />
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-crema/10">
                        <div
                          className="grow-x h-full rounded-full bg-oro"
                          style={{ width: `${pct}%`, "--d": `${idx * 110}ms` } as CSSProperties}
                        />
                      </div>
                      <span className="w-6 text-right text-xs font-bold text-ceniza">{count}</span>
                    </div>
                  );
                })}
              </div>

              <p className="mt-6 text-xs leading-relaxed text-ceniza">
                Casi todas las opiniones son de 5 estrellas. El barrio no regala notas, así que
                algo estaremos haciendo bien.
              </p>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="group mt-7 inline-flex items-center gap-2 rounded-full border-2 border-crema/20 px-5 py-2.5 text-sm font-extrabold text-crema transition-all duration-300 hover:border-oro hover:text-oro"
              >
                Escribir una opinión
                <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          {/* postcards */}
          <div className="flex flex-col gap-8 lg:col-span-7">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 130} className={i === 1 ? "lg:ml-10" : i === 2 ? "lg:mr-6" : ""}>
                <article
                  className="group rounded-xl bg-crema p-6 text-carbon shadow-[0_30px_60px_-28px_rgba(0,0,0,.85)] transition-transform duration-500 hover:-translate-y-1.5 md:p-7"
                  style={{ transform: `rotate(${r.rotate})` }}
                >
                  <div className="flex items-start gap-3.5">
                    <span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-lg text-crema"
                      style={{ background: r.color }}
                    >
                      {r.initial}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-extrabold text-sm">{r.name}</p>
                      <p className="text-[11px] font-semibold text-carbon/55">{r.meta}</p>
                    </div>
                    <Quote className="ml-auto h-7 w-7 shrink-0 text-brasa/25 transition-colors duration-300 group-hover:text-brasa/60" />
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-3.5 w-3.5 text-brasa" />
                      ))}
                    </span>
                    <span className="text-[11px] font-bold text-carbon/50">{r.time}</span>
                  </div>

                  <p className="mt-3 text-[15px] font-medium leading-relaxed text-carbon/85">
                    “{r.text}”
                  </p>

                  <div className="mt-4 flex gap-5 border-t border-carbon/10 pt-3 text-[11px] font-extrabold text-carbon/45">
                    <span className="cursor-pointer transition-colors hover:text-brasa">Me gusta</span>
                    <span className="cursor-pointer transition-colors hover:text-brasa">Compartir</span>
                  </div>
                </article>
              </Reveal>
            ))}

            <Reveal delay={380}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="link-line inline-flex items-center gap-2 text-sm font-extrabold text-oro"
              >
                Leer las 33 opiniones restantes en Google
                <Arrow className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
