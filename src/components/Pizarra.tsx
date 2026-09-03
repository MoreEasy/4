import Reveal from "./Reveal";
import { Arrow, Chili, PhoneIcon, Spark } from "./icons";
import { pizarra, PHONE_DISPLAY, PHONE_TEL } from "../data/content";

export default function Pizarra() {
  return (
    <section id="pizarra" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12">
        {/* sticky intro */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="mb-3 inline-block -rotate-2 font-marker text-lg text-oro">
                el menú completo
              </p>
              <h2 className="font-display leading-[0.9] tracking-wide text-7xl md:text-8xl">
                <span className="block">LA</span>
                <span className="block text-outline">PIZARRA</span>
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-humo">
                Todo lo que sale de la cocina, con precios en pesos dominicanos. Si no está aquí,
                pregúntale al muchacho del mostrador — casi seguro lo conseguimos.
              </p>

              {/* spice legend */}
              <div className="mt-8 space-y-2.5 border-l-2 border-fuego/50 pl-4">
                {[
                  { n: 1, t: "Suave — sabor sin susto" },
                  { n: 2, t: "Medio — calienta bonito" },
                  { n: 3, t: "Bravo — pica de verdad" },
                ].map((l) => (
                  <p key={l.n} className="flex items-center gap-2 text-xs font-bold text-humo">
                    <span className="flex gap-0.5">
                      {Array.from({ length: l.n }).map((_, i) => (
                        <Chili key={i} className="h-3.5 w-3.5 text-fuego" />
                      ))}
                    </span>
                    {l.t}
                  </p>
                ))}
              </div>

              <a
                href={PHONE_TEL}
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-fuego px-6 py-3.5 font-extrabold text-crema shadow-[0_14px_36px_-10px_rgba(255,77,36,.6)] transition-all duration-300 hover:bg-brasa hover:-translate-y-0.5"
              >
                <PhoneIcon className="h-4.5 w-4.5" />
                {PHONE_DISPLAY}
                <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <p className="mt-3 text-xs font-semibold text-ceniza">
                Pedidos para llevar listos en ~20 min.
              </p>
            </Reveal>
          </div>
        </div>

        {/* menu lists */}
        <div className="lg:col-span-8">
          {pizarra.map((cat, ci) => (
            <Reveal key={cat.title} delay={ci * 70} className={ci > 0 ? "mt-12" : ""}>
              <h3 className="mb-2 flex items-center gap-3 font-display text-2xl uppercase tracking-[0.06em] text-oro md:text-3xl">
                <Spark className="h-4 w-4 text-fuego" />
                {cat.title}
              </h3>
              <ul>
                {cat.items.map((item, ii) => (
                  <li
                    key={ii}
                    className="group flex items-baseline border-b border-crema/5 py-3.5 transition-colors hover:border-fuego/30"
                  >
                    <span className="font-bold text-[15px] text-crema transition-colors duration-300 group-hover:text-oro">
                      {item.name}
                      {item.note && (
                        <span className="ml-2 text-xs font-semibold text-ceniza">
                          · {item.note}
                        </span>
                      )}
                    </span>
                    <span className="dots" aria-hidden="true" />
                    <span
                      className={`min-w-[58px] text-right font-display text-lg transition-colors duration-300 ${
                        item.price === "Gratis"
                          ? "text-verde"
                          : "text-crema group-hover:text-fuego"
                      }`}
                    >
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal delay={200}>
            <p className="mt-10 rounded-xl border border-dashed border-crema/20 bg-crema/[0.03] p-4 text-xs leading-relaxed text-ceniza">
              Precios en RD$, sujetos a cambio sin previo aviso. El picante va por tu cuenta: la
              escala va de <span className="font-bold text-humo">suavecito</span> a{" "}
              <span className="font-bold text-fuego">modo dragón</span>. Menú disponible para
              consumo en el lugar y para llevar.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
