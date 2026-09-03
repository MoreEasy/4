export const PHONE_DISPLAY = "(809) 285-3189";
export const PHONE_TEL = "tel:+18092853189";
export const INSTAGRAM_URL = "https://www.instagram.com/laesquinapicante";
export const INSTAGRAM_HANDLE = "@laesquinapicante";
export const ADDRESS = "C. Paralela 16, Santo Domingo Este 11515";
export const PLUS_CODE = "G5C4+G5X";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("G5C4+G5X Santo Domingo Este");

export const RATING = 4.9;
export const REVIEW_COUNT = 36;

const IMG = {
  hero: "https://image.qwenlm.ai/generated-images/ca3f6846-1dda-4e07-85b3-d3473fb3d17b/_result.png",
  alitas: "https://image.qwenlm.ai/generated-images/3930c7ed-b191-4713-942e-c74d600f9b63/_result.png",
  papas: "https://image.qwenlm.ai/generated-images/79a36893-fd4a-4797-ab90-dcc49d512151/_result.png",
  mofongo: "https://image.qwenlm.ai/generated-images/6c919b0a-05a6-4996-9f45-5d8d62932821/_result.png",
  hamburguesa:
    "https://image.qwenlm.ai/generated-images/8c3c9524-23b8-4464-b848-4947671b617d/_result.png",
  tostones:
    "https://image.qwenlm.ai/generated-images/51441b7d-30ba-4267-944e-1a7aefb2b071/_result.png",
  yaroa: "https://image.qwenlm.ai/generated-images/4f32beee-c8d3-4c91-9a82-fafa56f18b20/_result.png",
};

export type FeaturedDish = {
  id: string;
  name: string;
  desc: string;
  price: number;
  spice: 0 | 1 | 2 | 3 | 4 | 5;
  spiceLabel: string;
  tag?: string;
  img: string;
};

export const featured: FeaturedDish[] = [
  {
    id: "alitas",
    name: "Alitas con Ensalada y Tostones",
    desc: "Glaseadas en nuestra salsa picante de la casa, con ensalada fresca y tostones bien crujientes.",
    price: 550,
    spice: 3,
    spiceLabel: "Pica rico",
    tag: "La más pedida",
    img: IMG.alitas,
  },
  {
    id: "papas",
    name: "Papas Suprema",
    desc: "Papas fritas bañadas en queso cheddar, bacon y maíz. Las que enamoran, según el barrio.",
    price: 450,
    spice: 1,
    spiceLabel: "Suave",
    tag: "Favorita del barrio",
    img: IMG.papas,
  },
  {
    id: "mofongo",
    name: "Mofongo de Chicharrón",
    desc: "Plátano verde majado con ajo y chicharrón crujiente, con su caldito caliente al lado.",
    price: 500,
    spice: 2,
    spiceLabel: "Con carácter",
    img: IMG.mofongo,
  },
  {
    id: "hamburguesa",
    name: "Hamburguesa Picante",
    desc: "Carne jugosa, queso derretido, jalapeños y mayo de chipotle. Ella muerde primero.",
    price: 520,
    spice: 4,
    spiceLabel: "Fuego medio",
    tag: "Brava",
    img: IMG.hamburguesa,
  },
  {
    id: "tostones",
    name: "Tostones Rellenos",
    desc: "Tostones de plátano verde con salami frito y una lluvia de queso derretido por encima.",
    price: 380,
    spice: 1,
    spiceLabel: "Suave",
    img: IMG.tostones,
  },
  {
    id: "yaroa",
    name: "Yaroa de la Esquina",
    desc: "Capas de maduro, carne y queso gratinado, coronadas con sus salsitas de la casa.",
    price: 480,
    spice: 1,
    spiceLabel: "Dulzona",
    img: IMG.yaroa,
  },
];

export type PizarraItem = { name: string; note?: string; price: string };
export type PizarraCategory = { title: string; items: PizarraItem[] };

export const pizarra: PizarraCategory[] = [
  {
    title: "Pa' empezar",
    items: [
      { name: "Alitas BBQ o picantes", note: "1 lb", price: "$420" },
      { name: "Alitas BBQ o picantes", note: "2 lb · pa' compartir", price: "$800" },
      { name: "Chicharrón crujiente", note: "con su limoncito", price: "$350" },
      { name: "Yuca frita con mojo", price: "$220" },
      { name: "Maduros con queso", price: "$250" },
      { name: "Nuggets", note: "10 pzas", price: "$300" },
    ],
  },
  {
    title: "Los fuertes",
    items: [
      { name: "Mofongo mixto", note: "chicharrón + pollo", price: "$580" },
      { name: "Hamburguesa doble de la casa", price: "$620" },
      { name: "Chimi de la esquina", note: "bien cargado", price: "$480" },
      { name: "Pica pollo", note: "1/4, con tostones", price: "$350" },
      { name: "Pechuga a la plancha", note: "con tostones y ensalada", price: "$520" },
    ],
  },
  {
    title: "Pa' acompañar",
    items: [
      { name: "Tostones", price: "$150" },
      { name: "Maduros", price: "$150" },
      { name: "Papas fritas", price: "$180" },
      { name: "Ensalada rusa", price: "$120" },
      { name: "Arroz blanco", price: "$100" },
    ],
  },
  {
    title: "Bebidas",
    items: [
      { name: "Refresco", price: "$75" },
      { name: "Jugo natural del día", price: "$150" },
      { name: "Batida de frutas", price: "$220" },
      { name: "Malta", price: "$120" },
      { name: "Agua", price: "$60" },
    ],
  },
  {
    title: "Extras",
    items: [
      { name: "Queso extra", price: "$60" },
      { name: "Bacon extra", price: "$75" },
      { name: "Salsita picante de la casa", note: "la famosa", price: "Gratis" },
    ],
  },
];

export const spiceLevels = [
  { n: 1, name: "Suavecito", msg: "Todo el sabor, cero lágrimas. Pa' empezar con calma.", color: "#a8c858" },
  { n: 2, name: "Tranquilo", msg: "Un toque que se deja sentir, pero sin drama.", color: "#ffc043" },
  { n: 3, name: "El punto del barrio", msg: "El favorito de la casa: pica rico y te pide más.", color: "#ff8a2a" },
  { n: 4, name: "Fuego medio", msg: "Ya estás sudando… y vas a pedir otra.", color: "#ff4d24" },
  { n: 5, name: "Modo Dragón", msg: "Bajo tu propia responsabilidad. Trae agua.", color: "#d92e12" },
];

export type Review = {
  name: string;
  initial: string;
  meta: string;
  time: string;
  text: string;
  color: string;
  rotate: string;
};

export const reviews: Review[] = [
  {
    name: "Fernando Agramonte",
    initial: "F",
    meta: "Local Guide · 163 opiniones · 1,213 fotos",
    time: "Hace 6 meses",
    text: "La Esquina Picante es una buena opción si buscas comer sabroso sin gastar mucho. Sus precios son accesibles y el sabor es muy bueno, destacándose como un lugar ideal para resolver antojos con calidad. La variedad es aceptable, con opciones…",
    color: "#ff4d24",
    rotate: "-2deg",
  },
  {
    name: "Juana M. M. Rodriguez",
    initial: "J",
    meta: "1 opinión · 8 fotos",
    time: "Hace 2 años",
    text: "Todo es excelente, el servicio y la comida es igual que en las fotos de Insta y es riquisiiiiima. Lo que más me encantó fue las papas suprema, ¡uuufff!",
    color: "#ffc043",
    rotate: "1.6deg",
  },
  {
    name: "María Lisandra / R. Dominicana",
    initial: "M",
    meta: "3 opiniones",
    time: "Hace un año",
    text: "Excelente lugar donde compartir con la familia, la atención es muy buena y los alimentos bien elaborados, el ambiente es agradable. Precios cómodos.",
    color: "#a8c858",
    rotate: "-1.2deg",
  },
];

/** 5★ → 1★ distribution, sum = 36 (weighted avg ≈ 4.9) */
export const ratingBreakdown = [34, 1, 0, 1, 0];

/** Wednesday, 6 a.m. – 11 p.m. — % of peak traffic */
export const peakHours = [
  { h: "6a", v: 5 },
  { h: "7a", v: 7 },
  { h: "8a", v: 8 },
  { h: "9a", v: 10 },
  { h: "10a", v: 12 },
  { h: "11a", v: 14 },
  { h: "12p", v: 18 },
  { h: "1p", v: 16 },
  { h: "2p", v: 14 },
  { h: "3p", v: 13 },
  { h: "4p", v: 17 },
  { h: "5p", v: 26 },
  { h: "6p", v: 40 },
  { h: "7p", v: 64 },
  { h: "8p", v: 86 },
  { h: "9p", v: 96 },
  { h: "10p", v: 88 },
  { h: "11p", v: 70 },
];

export const peakLabels = ["6a.m.", "9a.m.", "12p.m.", "3p.m.", "6p.m.", "9p.m."];

export const marqueeItems = [
  "Alitas glaseadas",
  "Papas suprema",
  "Mofongo",
  "Hamburguesas",
  "Tostones",
  "Yaroa",
  "Chimi",
  "Pica pollo",
  "Salsita de la casa",
];

export const heroImg = IMG.hero;
