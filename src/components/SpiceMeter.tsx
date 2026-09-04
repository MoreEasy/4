import { useState } from "react";
import Reveal from "./Reveal";
import { Chili, Flame } from "./icons";
import { spiceLevels } from "../data/content";

export default function SpiceMeter() {
  const [level, setLevel] = useState(3);
  const current = spiceLevels[level - 1];

  return (
    <section id="picante" className="relative scroll-mt-24 overflow-hidden border-y border-crema/10 bg-coal py-24 md:py-32">
      {/* reactive glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: 0.35 + level * 0.13,
          background: `radial-gradient(50% 55% at 75% 50%, ${current.color}26, transparent 65%)`,
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <Reveal className="text-center lg:text-left">
          <p className="mb-3 inline-block rotate-[-2deg] font-marker text-lg text-oro">
            el termómetro de la casa
          </p>
          <h2 className="font-display text-4xl leading-[0.92] tracking-wide sm:text-5xl md:text-7xl">
            ¿CUÁNTO <span className="text-fuego">AGUANTAS?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-humo lg:mx-0">
            Aquí el picante se respeta. Toda la comida sale al nivel que tú pidas, y la famosa
            salsita de la casa se prepara en cinco intensidades. Toca un ají y elige tu bando.
          </p>
          <div className="mx-auto mt-8 flex max-w-md items-start justify-center gap-3 rounded-xl border border-crema/10 bg-carbon/60 p-4 text-center lg:mx-0 lg:justify-start lg:text-left">
            <Flame className="animate-flicker mt-0.5 h-5 w-5 shrink-0 text-fuego" />
            <p className="text-sm leading-relaxed text-ceniza">
              <span className="font-bold text-crema">Dato de la casa:</span> la salsita es cortesía
              con cualquier pedido. El 80% del barrio la pide en nivel 3… y repite.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative rounded-[24px] border border-crema/10 bg-carbon p-7 md:p-10">
            <div className="flex items-center justify-between">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-ceniza">
                Tu nivel de picante
              </p>
              <span className="font-display text-lg text-crema">
                {level}<span className="text-ceniza">/5</span>
              </span>
            </div>

            <div className="mt-6 flex items-center justify-between gap-2 md:gap-3">
              {spiceLevels.map((s) => {
                const active = s.n <= level;
                const isCurrent = s.n === level;
                return (
                  <button
                    key={s.n}
                    onClick={() => setLevel(s.n)}
                    aria-pressed={isCurrent}
                    aria-label={`Nivel ${s.n}: ${s.name}`}
                    className={`grid flex-1 place-items-center rounded-2xl border-2 px-1 py-4 transition-all duration-300 hover:-translate-y-1 md:py-5 ${
                      !active && "opacity-40 hover:opacity-80"
                    } ${isCurrent ? "scale-[1.05]" : ""}`}
                    style={{
                      color: active ? s.color : "var(--color-crema)",
                      borderColor: isCurrent
                        ? s.color
                        : active
                          ? `${s.color}55`
                          : "rgba(255,243,224,.1)",
                      background: isCurrent ? `${s.color}1f` : "transparent",
                    }}
                  >
                    <Chili className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" off={!active} />
                  </button>
                );
              })}
            </div>

            <div className="mt-7">
              <p
                className="text-center font-display text-[1.75rem] tracking-wide transition-colors duration-500 sm:text-4xl md:text-5xl lg:text-left"
                style={{ color: current.color }}
              >
                {current.name.toUpperCase()}
              </p>
              <p className="mt-2 min-h-[3.5rem] text-center font-marker text-lg text-humo md:text-xl lg:text-left">
                {current.msg}
              </p>
            </div>

            {/* segments */}
            <div className="mt-6 flex gap-1.5">
              {spiceLevels.map((s) => (
                <span
                  key={s.n}
                  className="h-2 flex-1 rounded-full transition-all duration-500"
                  style={{
                    background: s.n <= level ? current.color : "rgba(255,243,224,.1)",
                  }}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
