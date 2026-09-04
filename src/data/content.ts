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
    "https://image.qwenlm.ai/generated-images/51441b7b-30ba-4267-944e-1a7aefb2b071/_result.png",
  yaroa: "https://image.qwenlm.ai/generated-images/4f32beee-c8d3-4c91-9a82-fafa56f18b20/_result.png",
  mofongoRes:
    "https://image.qwenlm.ai/generated-images/0aed6bd6-3aac-41af-b297-7c5037e523ed/_result.png",
  mofongoLonganiza:
    "https://image.qwenlm.ai/generated-images/a1d4923a-3438-4ebc-8f36-72814f1d7306/_result.png",
  mofongoCamarones:
    "https://image.qwenlm.ai/generated-images/0a64fbae-5775-4bce-8ea7-b7770c0d0d6c/_result.png",
  mofongoPollo:
    "https://image.qwenlm.ai/generated-images/ead87dec-82ee-4cca-91d6-b1a24dd7efa5/_result.png",
  mofongoDosPorUno:
    "https://image.qwenlm.ai/generated-images/7db91a14-e747-40d6-83df-45fbf4adffa2/_result.png",
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

export type MofongoDish = {
  id: string;
  name: string;
  desc: string;
  price: number;
  spice: 0 | 1 | 2 | 3 | 4 | 5;
  spiceLabel: string;
  tag?: string;
  img: string;
};

export const mofongos: MofongoDish[] = [
  {
    id: "mofongo-mixto",
    name: "Mofongo Mixto",
    desc: "Mofongo tradicional de plátano verde acompañado de pollo y cerdo. El más completo de la casa.",
    price: 890,
    spice: 2,
    spiceLabel: "Con carácter",
    tag: "El más completo",
    img: IMG.mofongoPollo,
  },
  {
    id: "mofongo-cerdo",
    name: "Mofongo de Cerdo",
    desc: "Mofongo tradicional de plátano verde acompañado de cerdo.",
    price: 830,
    spice: 2,
    spiceLabel: "Con carácter",
    img: IMG.mofongo,
  },
  {
    id: "mofongo-res",
    name: "Mofongo de Res al Ajillo",
    desc: "Mofongo tradicional de plátano verde acompañado de res al ajillo.",
    price: 800,
    spice: 2,
    spiceLabel: "Con carácter",
    img: IMG.mofongoRes,
  },
  {
    id: "mofongo-camarones",
    name: "Mofongo de Camarones",
    desc: "Mofongo tradicional de plátano verde acompañado de camarones.",
    price: 850,
    spice: 2,
    spiceLabel: "Con carácter",
    img: IMG.mofongoCamarones,
  },
  {
    id: "mofongo-2x1",
    name: "Mofongo 2x1",
    desc: "Pollo o cerdo. Dos mofongos bien servidos para compartir en pareja.",
    price: 780,
    spice: 2,
    spiceLabel: "Con carácter",
    tag: "Para compartir",
    img: IMG.mofongoDosPorUno,
  },
  {
    id: "mofongo-alitas",
    name: "Mofongo de Alitas",
    desc: "Mofongo tradicional de plátano verde acompañado de alitas.",
    price: 810,
    spice: 3,
    spiceLabel: "Pica rico",
    img: IMG.mofongoPollo,
  },
  {
    id: "mofongo-pollo",
    name: "Mofongo de Pollo",
    desc: "Mofongo tradicional de plátano verde con pollo.",
    price: 650,
    spice: 1,
    spiceLabel: "Suave",
    img: IMG.mofongoPollo,
  },
  {
    id: "mofongo-longaniza",
    name: "Mofongo de Longaniza",
    desc: "Mofongo tradicional de plátano verde acompañado de longaniza frita.",
    price: 535,
    spice: 2,
    spiceLabel: "Con carácter",
    img: IMG.mofongoLonganiza,
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
      { name: "Hot Dog de la Casa", note: "acompañado de papas fritas", price: "$600" },
      { name: "Hot Dog tradicional", note: "acompañado de papas fritas", price: "$255" },
      { name: "Club Sandwich tradicional", note: "auténtico de la casa", price: "$445" },
      { name: "Tacos de res", note: "3 uds con papas fritas", price: "$550" },
      { name: "Tacos de pollo", note: "3 uds con papas fritas", price: "$550" },
      { name: "Tacos de cerdo", note: "3 uds con papas fritas", price: "$580" },
      { name: "Quesadillas", note: "carnes a elegir", price: "$525" },
      { name: "Burrito de res", note: "acompañado de papas fritas", price: "$485" },
      { name: "Burrito mixto", note: "acompañado de papas fritas", price: "$600" },
      { name: "Burrito de pollo", note: "acompañado de papas fritas", price: "$435" },
    ],
  },
  {
    title: "Plato de la Casa",
    items: [
      { name: "Ensalada César", note: "lechuga, pechuga y salsa ranch", price: "$600" },
      { name: "Pechuga a la plancha", note: "guarnición a elegir", price: "$670" },
      { name: "Chuleta con tostones", note: "servicio", price: "$550" },
      { name: "El Picaito Grande", note: "servicio grande de pierna de cerdo con pancitos", price: "$625" },
      {
        name: "Mofongo de costillitas BBQ",
        note: "costillitas suaves en salsa BBQ · bola de mofongo · ensalada de la casa",
        price: "$980",
      },
      {
        name: "La Delicia con pechuga a la crema",
        note: "canoa de plátano maduro con pechuga a la crema y ensalada",
        price: "$630",
      },
      { name: "Salchipapa", note: "tamaño a elegir", price: "$300" },
      { name: "Carne de res al ajillo", note: "grande · con tostones", price: "$625" },
      { name: "Longaniza", note: "guarnición a elegir", price: "$525" },
      { name: "Pechuga a la crema", note: "guarnición a elegir", price: "$780" },
      { name: "Carne de res al ajillo", note: "mediana · tamaño y guarnición a elegir", price: "$500" },
      {
        name: "La Delicia",
        note: "canoa de plátano maduro con camarones a la crema",
        price: "$870",
      },
      { name: "El Picaito", note: "servicio mediano de pierna de cerdo y pancitos", price: "$670" },
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
      { name: "Papa Suprema pequeña", note: "carne a elegir", price: "$400" },
      { name: "Papa Suprema mediana", note: "carne a elegir", price: "$610" },
      { name: "Papa Suprema grande", note: "carne a elegir", price: "$625" },
      { name: "Suprema de plátano maduro", note: "mediana · carnes a elegir", price: "$625" },
      { name: "Suprema mixta grande", note: "pollo y cerdo", price: "$675" },
      { name: "Suprema mixta mediana", note: "pollo y cerdo", price: "$770" },
      {
        name: "La Doble",
        note: "2 carnes de 7 oz, doble bacon, pan brioche, queso cheddar, papas sazonadas y salsa de la casa",
        price: "$820",
      },
      { name: "Hamburguesa clásica", note: "tradicional, acompañada de papas fritas", price: "$620" },
      {
        name: "La Mamá de lo Pollito",
        note: "carne 8 oz, lechuga, tomate, queso, plátano maduro, bacon, huevo, papas fritas y salsa de la casa",
        price: "$950",
      },
      {
        name: "Bacon Cheese Burger",
        note: "carne 7 oz, pan brioche, bacon, salsa de la casa y papas sazonadas",
        price: "$670",
      },
      {
        name: "Cheese Burger",
        note: "carne de res, vegetales y queso, acompañada de papas fritas",
        price: "$710",
      },
      {
        name: "Smash Burger",
        note: "doble carne premium aplastada, pan brioche, cebolla caramelizada, pepinillos y salsa de la casa · incluye papas sazonadas",
        price: "$780",
      },
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
    title: "Picalonga",
    items: [
      {
        name: "Servicio para 2 personas",
        note: "res, pechuga, longaniza y ensalada · guarnición a elegir",
        price: "$1,300",
      },
      {
        name: "Servicio para 4 personas",
        note: "res, pechuga, longaniza y ensalada · guarnición a elegir",
        price: "$1,800",
      },
      {
        name: "Servicio para 6 personas",
        note: "res, pechuga, longaniza y ensalada · guarnición a elegir",
        price: "$2,480",
      },
    ],
  },
  {
    title: "Bebidas",
    items: [
      { name: "Refresco de sabores", note: "refresco de soda", price: "$85" },
      { name: "Coca-Cola 355 ml", note: "refresco de soda", price: "$85" },
      { name: "Sprite 400 ml", note: "gaseosa", price: "$85" },
      { name: "Refresco rojo", note: "refresco de soda", price: "$85" },
      { name: "7Up 450 ml", note: "refresco de soda", price: "$65" },
      { name: "Jugo natural del día", price: "$150" },
      { name: "Morir soñando", note: "china con leche evaporada", price: "$190" },
      { name: "Jugo de tamarindo", note: "natural", price: "$155" },
      { name: "Jugo de fresa", note: "fresa natural", price: "$247" },
      { name: "Jugo de limón", note: "100% natural", price: "$200" },
      { name: "Jugo de chinola", note: "100% natural", price: "$202" },
      { name: "Jugo de china", note: "100% natural", price: "$155" },
      { name: "Batida de frutas", price: "$220" },
      { name: "Malta", price: "$120" },
      { name: "Agua", price: "$60" },
    ],
  },
  {
    title: "Postres",
    items: [
      { name: "Flan de leche", note: "riquísimo", price: "$360" },
      { name: "Cheesecake", note: "de dulce de leche y Nutella", price: "$400" },
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
