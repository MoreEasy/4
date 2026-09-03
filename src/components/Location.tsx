import Reveal from "./Reveal";
import {
  Arrow,
  Bag,
  Clock,
  Instagram,
  PhoneIcon,
  Pin,
  Plate,
} from "./icons";
import {
  ADDRESS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  PLUS_CODE,
} from "../data/content";

export default function Location() {
  return (
    <section id="ubicacion" className="scroll-mt-24 border-t border-crema/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <p className="mb-3 inline-block rotate-[-2deg] font-marker text-lg text-oro">
            aquí nos encuentras
          </p>
          <h2 className="mb-14 font-display text-4xl leading-[0.92] tracking-wide sm:text-5xl md:text-7xl">
            CAE POR <span className="text-fuego">LA ESQUINA</span>
          </h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* info */}
          <Reveal>
            <div className="flex h-full flex-col rounded-[24px] border border-crema/10 bg-coal p-7 md:p-9">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full bg-verde opacity-75"
                    style={{ animation: "pulse-ring 1.8s cubic-bezier(0,0,.2,1) infinite" }}
                  />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-verde" />
                </span>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-verde">
                  Abierto ahora · cierra 12 a.m.
                </p>
              </div>

              <ul className="mt-6 flex-1">
                {[
                  {
                    icon: <Pin className="h-5 w-5" />,
                    label: "Dirección",
                    value: ADDRESS,
                    extra: (
                      <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="link-line mt-1 inline-block text-xs font-extrabold text-oro"
                      >
                        Cómo llegar →
                      </a>
                    ),
                  },
                  {
                    icon: <Clock className="h-5 w-5" />,
                    label: "Horario",
                    value: "Todos los días · 5:00 p.m. – 12:00 a.m.",
                    extra: (
                      <p className="mt-1 text-xs font-semibold text-ceniza">
                        Cocina abierta hasta 11:30 p.m.
                      </p>
                    ),
                  },
                  {
                    icon: <PhoneIcon className="h-5 w-5" />,
                    label: "Pedidos por teléfono",
                    value: PHONE_DISPLAY,
                    href: PHONE_TEL,
                  },
                  {
                    icon: <Instagram className="h-5 w-5" />,
                    label: "Instagram",
                    value: INSTAGRAM_HANDLE,
                    href: INSTAGRAM_URL,
                  },
                ].map((row) => (
                  <li
                    key={row.label}
                    className="group flex items-start gap-4 border-b border-crema/8 py-5"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-crema/12 bg-carbon text-fuego transition-colors duration-300 group-hover:border-fuego/50">
                      {row.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-ceniza">
                        {row.label}
                      </p>
                      {row.href ? (
                        <a
                          href={row.href}
                          target={row.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="mt-0.5 block font-bold text-crema transition-colors hover:text-oro"
                        >
                          {row.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 font-bold text-crema">{row.value}</p>
                      )}
                      {row.extra}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <span className="flex items-center gap-1.5 rounded-full border border-crema/15 px-3.5 py-1.5 text-xs font-bold text-humo">
                  <Plate className="h-3.5 w-3.5 text-chile" /> Consumo en el lugar
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-crema/15 px-3.5 py-1.5 text-xs font-bold text-humo">
                  <Bag className="h-3.5 w-3.5 text-chile" /> Para llevar
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3.5">
                <a
                  href={PHONE_TEL}
                  className="group flex items-center gap-2.5 rounded-full bg-fuego px-6 py-3.5 font-extrabold text-crema shadow-[0_14px_36px_-10px_rgba(255,77,36,.6)] transition-all duration-300 hover:bg-brasa hover:-translate-y-0.5"
                >
                  <PhoneIcon className="h-4.5 w-4.5" />
                  Llamar para pedir
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2.5 rounded-full border-2 border-crema/20 px-6 py-3 font-bold text-crema transition-all duration-300 hover:border-oro hover:text-oro"
                >
                  <Pin className="h-4.5 w-4.5" />
                  Google Maps
                  <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* stylized map */}
          <Reveal delay={150}>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[24px] border border-crema/10 bg-coal p-2.5">
              <div className="relative h-full w-full overflow-hidden rounded-[16px] bg-[#1b130d]">
                <svg viewBox="0 0 480 360" className="h-full w-full" aria-hidden="true">
                  {/* blocks */}
                  <g fill="#241a12">
                    <rect x="14" y="14" width="86" height="70" rx="6" />
                    <rect x="124" y="14" width="100" height="70" rx="6" />
                    <rect x="248" y="14" width="106" height="70" rx="6" />
                    <rect x="14" y="108" width="86" height="64" rx="6" />
                    <rect x="124" y="108" width="100" height="50" rx="6" />
                    <rect x="392" y="14" width="74" height="70" rx="6" />
                    <rect x="392" y="208" width="74" height="138" rx="6" />
                    <rect x="14" y="208" width="86" height="138" rx="6" />
                    <rect x="124" y="236" width="100" height="110" rx="6" />
                    <rect x="248" y="262" width="120" height="84" rx="6" />
                  </g>
                  {/* streets */}
                  <g stroke="#2e2115" strokeWidth="2">
                    <line x1="0" y1="96" x2="480" y2="96" strokeDasharray="6 8" opacity=".7" />
                    <line x1="0" y1="190" x2="480" y2="190" strokeDasharray="6 8" opacity=".7" />
                    <line x1="112" y1="0" x2="112" y2="360" strokeDasharray="6 8" opacity=".7" />
                    <line x1="236" y1="0" x2="236" y2="360" strokeDasharray="6 8" opacity=".7" />
                    <line x1="378" y1="0" x2="378" y2="360" strokeDasharray="6 8" opacity=".7" />
                  </g>
                  {/* highlighted street: C. Paralela 16 */}
                  <path
                    d="M-10 250 C 120 210, 300 160, 490 128"
                    fill="none"
                    stroke="rgba(255,77,36,.28)"
                    strokeWidth="20"
                    strokeLinecap="round"
                  />
                  <path
                    d="M-10 250 C 120 210, 300 160, 490 128"
                    fill="none"
                    stroke="rgba(255,192,67,.5)"
                    strokeWidth="2"
                    strokeDasharray="10 10"
                  />
                  <defs>
                    <path id="calle16" d="M-10 244 C 120 204, 300 154, 490 122" />
                  </defs>
                  <text
                    fill="#c7b09a"
                    fontSize="11"
                    fontWeight="800"
                    letterSpacing="3.5"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    <textPath href="#calle16" startOffset="6%">
                      C. PARALELA 16
                    </textPath>
                  </text>
                  {/* street names */}
                  <text x="404" y="200" fill="#8f7a66" fontSize="9" fontWeight="700" letterSpacing="2.5" transform="rotate(90 404 200)" style={{ fontFamily: "Manrope, sans-serif" }}>
                    AV. SAN VICENTE
                  </text>
                  <text x="20" y="184" fill="#8f7a66" fontSize="9" fontWeight="700" letterSpacing="2.5" style={{ fontFamily: "Manrope, sans-serif" }}>
                    C. DUARTE
                  </text>
                  {/* compass */}
                  <g transform="translate(440 322)">
                    <circle r="17" fill="none" stroke="rgba(255,243,224,.2)" strokeWidth="1.5" />
                    <path d="M0 -11 L4 4 L0 1 L-4 4 Z" fill="#ff4d24" />
                    <text x="0" y="-22" textAnchor="middle" fill="#c7b09a" fontSize="10" fontWeight="800" style={{ fontFamily: "Manrope, sans-serif" }}>N</text>
                  </g>
                </svg>

                {/* pin */}
                <div className="absolute left-[52%] top-[46%] -translate-x-1/2 -translate-y-full">
                  <div className="relative flex flex-col items-center">
                    <span
                      className="rounded-lg border border-fuego/40 bg-carbon/95 px-3 py-1.5 font-display text-sm tracking-wide text-crema shadow-xl whitespace-nowrap"
                    >
                      LA ESQUINA <span className="text-fuego">PICANTE</span>
                    </span>
                    <span className="relative mt-1">
                      <span
                        className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuego/40"
                        style={{ animation: "pulse-ring 2s cubic-bezier(0,0,.2,1) infinite" }}
                      />
                      <Pin className="relative h-8 w-8 text-fuego drop-shadow-[0_4px_10px_rgba(255,77,36,.6)]" />
                    </span>
                  </div>
                </div>

                {/* plus code chip */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-xl border border-crema/15 bg-carbon/95 px-3.5 py-2.5 backdrop-blur">
                  <Pin className="h-4 w-4 text-oro" />
                  <div>
                    <p className="font-display text-base leading-none text-oro">{PLUS_CODE}</p>
                    <p className="mt-0.5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-ceniza">
                      Plus code · Sto. Dgo. Este
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
