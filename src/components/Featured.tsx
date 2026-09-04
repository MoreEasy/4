import Reveal from "./Reveal";
import { Arrow, Chili, PhoneIcon } from "./icons";
import { featured, PHONE_TEL } from "../data/content";

function SpiceRow({ level, label }: { level: number; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Chili
            key={i}
            off={i >= level}
            className={`h-4 w-4 ${i < level ? "text-fuego" : "text-crema/25"}`}
          />
        ))}
      </span>
      <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-ceniza">
        {label}
      </span>
    </span>
  );
}

export default function Featured() {
  return (
    <section id="menu" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        {/* header */}
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-8 text-center md:mb-16 lg:flex-row lg:items-end lg:text-left">
            <div>
              <p className="mb-3 inline-block -rotate-2 font-marker text-lg text-oro">
                los favoritos de la casa
              </p>
              <h2 className="font-display text-4xl leading-[0.92] tracking-wide sm:text-5xl md:text-7xl">
                LOS QUE MANDAN <span className="text-fuego">AQUÍ</span>
              </h2>
            </div>
            <div className="mx-auto max-w-sm lg:mx-0">
              <p className="text-sm leading-relaxed text-humo">
                Seis razones por las que el barrio vuelve una y otra vez. Todo se prepara al momento
                y al nivel de picante que tú pidas.
              </p>
              <a
                href="#pizarra"
                className="link-line mt-3 inline-block text-sm font-extrabold text-oro"
              >
                Ver la pizarra completa
              </a>
            </div>
          </div>
        </Reveal>

        {/* cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((dish, i) => (
            <Reveal key={dish.id} delay={(i % 3) * 120}>
              <article
                className={`group relative h-full overflow-hidden rounded-[20px] border border-crema/10 bg-coal transition-all duration-500 hover:-translate-y-2 hover:border-fuego/50 hover:shadow-[0_28px_70px_-24px_rgba(255,77,36,.4)] ${
                  i % 2 === 0 ? "rotate-[0.6deg]" : "-rotate-[0.6deg]"
                } hover:rotate-0`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-lena">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-transparent to-transparent opacity-70" />
                  {dish.tag && (
                    <span className="absolute left-4 top-4 -rotate-3 rounded-md bg-fuego px-3 py-1 font-marker text-[13px] text-crema shadow-lg">
                      {dish.tag}
                    </span>
                  )}
                  <span className="absolute right-4 top-4 rotate-[4deg] rounded-lg bg-crema px-3 py-1 font-display text-lg text-carbon shadow-md transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110">
                    ${dish.price}
                  </span>
                </div>

                <div className="flex flex-col p-5 md:p-6">
                  <h3 className="text-center font-display text-[22px] leading-tight tracking-wide text-crema lg:text-left">
                    {dish.name}
                  </h3>
                  <p className="mt-2 flex-1 text-center text-sm leading-relaxed text-humo lg:text-left">{dish.desc}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-crema/10 pt-4">
                    <SpiceRow level={dish.spice} label={dish.spiceLabel} />
                    <a
                      href={PHONE_TEL}
                      className="flex items-center gap-1.5 text-xs font-extrabold tracking-[0.14em] text-oro transition-colors hover:text-fuego"
                      aria-label={`Pedir ${dish.name} por teléfono`}
                    >
                      <PhoneIcon className="h-3.5 w-3.5" />
                      PEDIR
                      <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
