import Reveal from "./Reveal";
import { Arrow, Chili, PhoneIcon, Spark } from "./icons";
import { mofongos, PHONE_TEL } from "../data/content";

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

export default function Mofongo() {
  const [featured, ...rest] = mofongos;

  return (
    <section
      id="mofongo"
      className="relative scroll-mt-24 overflow-hidden border-t border-crema/10 py-24 md:py-32"
    >
      {/* ember glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 40% at 15% 15%, rgba(255,77,36,.10), transparent 60%), radial-gradient(40% 35% at 90% 80%, rgba(255,192,67,.07), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5">
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-8 text-center lg:flex-row lg:items-end lg:text-left">
            <div>
              <p className="mb-3 inline-block -rotate-2 font-marker text-lg text-oro">
                la especialidad de la casa
              </p>
              <h2 className="font-display text-4xl leading-[0.92] tracking-wide sm:text-5xl md:text-7xl">
                EL REINO DEL <span className="text-fuego">MOFONGO</span>
              </h2>
            </div>
            <div className="mx-auto max-w-sm lg:mx-0">
              <p className="text-sm leading-relaxed text-humo">
                Plátano verde majado al momento con ajo y chicharrón. Elige tu proteína favorita —
                todas salen con su caldito caliente al lado.
              </p>
            </div>
          </div>
        </Reveal>

        {/* featured card: Mofongo Mixto */}
        <Reveal delay={80}>
          <article className="group relative mb-7 overflow-hidden rounded-[24px] border border-oro/30 bg-coal transition-all duration-500 hover:border-oro/60 hover:shadow-[0_28px_70px_-24px_rgba(255,192,67,.35)]">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden bg-lena md:aspect-auto md:h-full">
                <img
                  src={featured.img}
                  alt={featured.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 via-transparent to-transparent opacity-60" />
                <span className="absolute left-4 top-4 -rotate-3 rounded-md bg-oro px-3 py-1 font-marker text-[13px] text-carbon shadow-lg">
                  {featured.tag}
                </span>
              </div>
              <div className="flex flex-col justify-center p-7 text-center md:p-10 lg:text-left">
                <p className="mb-2 flex items-center justify-center gap-2 lg:justify-start">
                  <Spark className="h-4 w-4 text-oro" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-oro">
                    La joya de la corona
                  </span>
                </p>
                <h3 className="font-display text-3xl leading-tight tracking-wide text-crema md:text-4xl">
                  {featured.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-humo">{featured.desc}</p>
                <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-between">
                  <span className="rounded-lg bg-oro px-4 py-1.5 font-display text-2xl text-carbon shadow-md transition-transform duration-300 group-hover:scale-110">
                    ${featured.price}
                  </span>
                  <div className="flex items-center gap-4">
                    <SpiceRow level={featured.spice} label={featured.spiceLabel} />
                    <a
                      href={PHONE_TEL}
                      className="flex items-center gap-1.5 text-xs font-extrabold tracking-[0.14em] text-oro transition-colors hover:text-fuego"
                      aria-label={`Pedir ${featured.name} por teléfono`}
                    >
                      <PhoneIcon className="h-3.5 w-3.5" />
                      PEDIR
                      <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* rest of the mofongos */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((dish, i) => (
            <Reveal key={dish.id} delay={(i % 3) * 120}>
              <article
                className={`group relative h-full overflow-hidden rounded-[20px] border border-crema/10 bg-coal transition-all duration-500 hover:-translate-y-2 hover:border-fuego/50 hover:shadow-[0_28px_70px_-24px_rgba(255,77,36,.4)] ${
                  i % 2 === 0 ? "lg:rotate-[0.6deg]" : "lg:-rotate-[0.6deg]"
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
                  <p className="mt-2 flex-1 text-center text-sm leading-relaxed text-humo lg:text-left">
                    {dish.desc}
                  </p>
                  <div className="mt-5 flex flex-col items-center gap-3 border-t border-crema/10 pt-4 lg:flex-row lg:justify-between">
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
