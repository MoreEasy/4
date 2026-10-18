import { useInView } from "./Reveal";
import Reveal from "./Reveal";
import { Clock, Flame } from "./icons";
import { peakHours, peakLabels } from "../data/content";

function barColor(v: number) {
  if (v >= 80) return "var(--color-fuego)";
  if (v >= 45) return "var(--color-chile)";
  return "rgba(255,243,224,.16)";
}

function hourLabel(h: string) {
  const num = h.replace(/[ap]$/, "");
  const suffix = h.endsWith("a") ? "a.m." : "p.m.";
  return `${num} ${suffix}`;
}

export default function PeakHours() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section id="horarios" className="scroll-mt-24 border-t border-crema/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-8 text-center lg:flex-row lg:items-end lg:text-left">
            <div>
              <p className="mb-3 inline-block rotate-[-2deg] font-marker text-lg text-oro">
                planifica tu antojo
              </p>
              <h2 className="font-display text-4xl leading-[0.95] tracking-wide sm:text-5xl md:text-6xl">
                A QUÉ HORA SE <span className="text-fuego">PONE BUENO</span>
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
              <span className="rounded-full border border-fuego/40 bg-fuego/10 px-3.5 py-1.5 text-xs font-extrabold text-fuego">
                Miércoles · día de muestra
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-crema/15 px-3.5 py-1.5 text-xs font-bold text-humo">
                <Clock className="h-3.5 w-3.5" /> Cierra 12 a.m.
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[24px] border border-crema/10 bg-coal p-6 md:p-10">
            <div ref={ref} className="flex h-44 items-end gap-1 md:h-64 md:gap-1.5">
              {peakHours.map((p, i) => (
                <div key={p.h} className="group relative flex h-full flex-1 items-end">
                  {/* tooltip */}
                  <span className="pointer-events-none absolute -top-1 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-crema px-2.5 py-1 text-[10px] font-extrabold text-carbon opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 sm:block">
                    {hourLabel(p.h)} · {p.v}% del pico
                  </span>
                  <div
                    className="w-full rounded-t-[5px] transition-[height] duration-700 ease-out group-hover:brightness-125"
                    style={{
                      height: inView ? `${p.v}%` : "3%",
                      background: barColor(p.v),
                      transitionDelay: `${i * 40}ms`,
                      boxShadow: p.v >= 90 ? "0 0 24px -4px rgba(255,77,36,.65)" : undefined,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* axis labels */}
            <div className="mt-3 flex justify-between border-t border-crema/10 pt-3 text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.14em] text-ceniza">
              {peakLabels.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="flex items-start justify-center gap-3 text-center font-marker text-lg text-oro md:text-xl lg:justify-start lg:text-left">
                <Flame className="animate-flicker mt-1 h-5 w-5 shrink-0 text-fuego" />
                8–10 p.m. es la hora buena: llega temprano o toca compartir la mesa.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-bold text-ceniza lg:justify-start">
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm" style={{ background: "var(--color-fuego)" }} />
                  Lleno total
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm" style={{ background: "var(--color-chile)" }} />
                  Movido
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-crema/20" />
                  Tranquilo
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
