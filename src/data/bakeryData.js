const imageParams = 'auto=format&fit=crop&w=1200&q=80'

const bakeryData = {
  name: 'Maison Miga',
  shortName: 'Maison Miga',
  logoInitials: 'MM',
  type: 'Panaderia y pasteleria premium',
  slogan: 'Pan fresco, postres artesanales y mesas que se comparten.',
  description:
    'Panaderia y pasteleria premium en Quito con pan artesanal, postres por porcion, desayunos, tortas personalizadas y pedidos para eventos.',
  whatsapp: '593987654321',
  whatsappMessage:
    'Hola Maison Miga, quiero hacer un pedido y conocer las opciones disponibles.',
  phone: '+593 98 765 4321',
  email: 'hola@maisonmiga.com',
  address: 'Av. Republica de El Salvador y Portugal, Quito, Ecuador',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.%20Republica%20de%20El%20Salvador%20y%20Portugal%2C%20Quito%2C%20Ecuador',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Av.%20Republica%20de%20El%20Salvador%20y%20Portugal%2C%20Quito%2C%20Ecuador&z=16&output=embed',
  theme: {
    background: '#f8f1e7',
    surface: '#fffaf3',
    dark: '#2b1d14',
    coffee: '#5a3825',
    caramel: '#c9863a',
    border: 'rgba(90, 56, 37, 0.15)',
  },
  seo: {
    title: 'Maison Miga | Panaderia y pasteleria artesanal en Quito',
    description:
      'Maison Miga es una panaderia y pasteleria premium en Quito con pan fresco, postres artesanales, desayunos, tortas personalizadas y pedidos para eventos.',
    keywords: [
      'panaderia premium Quito',
      'pasteleria artesanal',
      'tortas personalizadas Quito',
      'desayunos a domicilio',
      'postres por porcion',
      'catering dulce Quito',
    ],
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?' +
      imageParams,
    imageAlt: 'Mesa de panaderia artesanal de Maison Miga',
    businessType: 'Bakery',
    areaServed: 'Quito, Ecuador',
    priceRange: '$$',
    currency: 'USD',
    locale: 'es_EC',
  },
  social: {
    instagram: '#',
    facebook: '#',
    tiktok: '#',
  },
  developer: {
    name: 'Mancar Software',
    text: 'Page created by Mancar Software',
  },
  hero: {
    eyebrow: 'Panaderia artesanal en Quito',
    title: 'Pan fresco, postres de autor y desayunos para compartir.',
    accent: 'Horneado con detalle cada manana.',
    subtitle:
      'Una experiencia de panaderia premium con masas artesanales, tortas elegantes, desayunos completos, postres por porcion y pedidos especiales para celebraciones.',
    cta: 'Pedir por WhatsApp',
    secondaryCta: 'Ver especialidades',
    secondaryHref: '#especialidades',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?' +
      imageParams,
    imageAlt: 'Pan artesanal recien horneado sobre una mesa de panaderia',
    highlights: [
      { value: '07:00', label: 'pan fresco desde temprano' },
      { value: '48h', label: 'para tortas personalizadas' },
      { value: '8+', label: 'favoritos listos para pedir' },
      { value: '100%', label: 'produccion artesanal' },
    ],
  },
  sections: {
    specialties: {
      eyebrow: 'Especialidades',
      title: 'Una vitrina pensada para antojos dulces, salados y celebraciones.',
      description:
        'Cada linea de producto tiene una razon: desayuno, regalo, reunion, pausa de cafe o mesa especial para eventos.',
    },
    favorites: {
      eyebrow: 'Favoritos de la casa',
      title: 'Productos que se piden una vez y se vuelven costumbre.',
      description:
        'Una seleccion comercial lista para ordenar por WhatsApp, sin carrito ni pasos innecesarios.',
    },
    breakfast: {
      eyebrow: 'Desayunos y cafe',
      title: 'Empieza el dia con pan caliente, cafe fresco y algo preparado con calma.',
      description:
        'Combos para la manana, opciones saladas, jugos naturales y piezas dulces para quedarse o llevar.',
    },
    events: {
      eyebrow: 'Eventos y pedidos especiales',
      title: 'Mesas dulces, tortas y cajas premium para celebrar mejor.',
      description:
        'Preparamos propuestas a medida para cumpleanos, reuniones corporativas, regalos y celebraciones familiares.',
    },
    benefits: {
      eyebrow: 'Por que elegirnos',
      title: 'Detalle artesanal con una experiencia de compra clara.',
      description:
        'Maison Miga combina producto fresco, presentacion premium y atencion directa para que cada pedido llegue como debe.',
    },
    location: {
      eyebrow: 'Visitanos',
      title: 'Un rincon calido para desayunar, comprar pan o recoger tu pedido.',
      description:
        'Estamos en una zona accesible de Quito, con horarios amplios y pedidos coordinados por WhatsApp.',
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Todo claro antes de pedir.',
      description:
        'Resolvemos las dudas mas comunes para que puedas ordenar rapido y sin vueltas.',
    },
  },
  specialties: [
    {
      name: 'Pan artesanal',
      description:
        'Baguettes, hogazas, focaccias y panes de masa lenta con corteza crujiente y miga suave.',
      cta: 'Consultar pan del dia',
      image:
        'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?' +
        imageParams,
      whatsappMessage:
        'Hola Maison Miga, quiero saber que panes artesanales tienen disponibles hoy.',
    },
    {
      name: 'Tortas y pasteleria',
      description:
        'Tortas elegantes, capas suaves, rellenos equilibrados y acabados listos para celebrar.',
      cta: 'Ver tortas',
      image:
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?' +
        imageParams,
      whatsappMessage:
        'Hola Maison Miga, quiero cotizar una torta o postre entero.',
    },
    {
      name: 'Postres por porcion',
      description:
        'Cheesecake, tiramisu, carrot cake y postres individuales para una pausa especial.',
      cta: 'Pedir porciones',
      image:
        'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?' +
        imageParams,
      whatsappMessage:
        'Hola Maison Miga, quiero pedir postres por porcion.',
    },
    {
      name: 'Desayunos',
      description:
        'Combos con cafe, pan fresco, sandwiches, jugos y opciones dulces para empezar bien.',
      cta: 'Armar desayuno',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?' +
        imageParams,
      whatsappMessage:
        'Hola Maison Miga, quiero ordenar un desayuno.',
    },
    {
      name: 'Galletas y bocaditos',
      description:
        'Galletas, macarons, alfajores y piezas pequenas para compartir, regalar o llevar.',
      cta: 'Consultar cajas',
      image:
        'https://images.unsplash.com/photo-1569864358642-9d1684040f43?' +
        imageParams,
      whatsappMessage:
        'Hola Maison Miga, quiero consultar cajas de galletas o bocaditos.',
    },
    {
      name: 'Eventos y catering',
      description:
        'Cajas corporativas, mesas dulces, desayunos empresariales y detalles personalizados.',
      cta: 'Cotizar evento',
      image:
        'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?' +
        imageParams,
      whatsappMessage:
        'Hola Maison Miga, quiero cotizar productos para un evento.',
    },
  ],
  products: [
    {
      name: 'Croissant de mantequilla',
      category: 'Panaderia',
      description: 'Laminado crujiente, centro aireado y mantequilla real.',
      price: '$2.80',
      image:
        'https://images.unsplash.com/photo-1555507036-ab1f4038808a?' +
        imageParams,
      whatsappMessage: 'Hola Maison Miga, quiero pedir croissants de mantequilla.',
    },
    {
      name: 'Cheesecake de frutos rojos',
      category: 'Postres',
      description: 'Base crocante, crema suave y compota artesanal.',
      price: '$4.20',
      image:
        'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?' +
        imageParams,
      whatsappMessage:
        'Hola Maison Miga, quiero pedir cheesecake de frutos rojos.',
    },
    {
      name: 'Porcion de carrot cake',
      category: 'Tortas',
      description: 'Especias suaves, nueces y frosting de queso crema.',
      price: '$3.90',
      image:
        'https://images.unsplash.com/photo-1621303837174-89787a7d4729?' +
        imageParams,
      whatsappMessage: 'Hola Maison Miga, quiero pedir carrot cake.',
    },
    {
      name: 'Tiramisu',
      category: 'Postres',
      description: 'Cafe, crema mascarpone y cacao en una porcion elegante.',
      price: '$4.50',
      image:
        'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?' +
        imageParams,
      whatsappMessage: 'Hola Maison Miga, quiero pedir tiramisu.',
    },
    {
      name: 'Torta humeda de chocolate',
      category: 'Tortas',
      description: 'Chocolate intenso, miga suave y cobertura sedosa.',
      price: '$24.00',
      image:
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?' +
        imageParams,
      whatsappMessage:
        'Hola Maison Miga, quiero pedir una torta humeda de chocolate.',
    },
    {
      name: 'Sandwich de la casa',
      category: 'Salados',
      description: 'Pan artesanal, queso, proteina, vegetales y salsa de casa.',
      price: '$6.50',
      image:
        'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?' +
        imageParams,
      whatsappMessage: 'Hola Maison Miga, quiero pedir el sandwich de la casa.',
    },
    {
      name: 'Combo desayuno',
      category: 'Desayunos',
      description: 'Cafe, pan fresco, huevos y jugo natural.',
      price: '$8.90',
      image:
        'https://images.unsplash.com/photo-1493770348161-369560ae357d?' +
        imageParams,
      whatsappMessage: 'Hola Maison Miga, quiero pedir un combo desayuno.',
    },
    {
      name: 'Caja de macarons',
      category: 'Regalos',
      description: 'Sabores surtidos, empaque premium y presentacion lista.',
      price: '$14.00',
      image:
        'https://images.unsplash.com/photo-1569864358642-9d1684040f43?' +
        imageParams,
      whatsappMessage: 'Hola Maison Miga, quiero pedir una caja de macarons.',
    },
  ],
  breakfast: {
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?' +
      imageParams,
    cta: 'Pedir desayuno',
    whatsappMessage:
      'Hola Maison Miga, quiero pedir desayuno y conocer los combos disponibles.',
    items: [
      'Cafe de especialidad',
      'Pan recien horneado',
      'Sandwiches artesanales',
      'Jugos naturales',
      'Croissants y bolleria',
    ],
    combos: [
      { name: 'Miga Clasico', price: '$7.50', detail: 'Cafe, croissant y jugo' },
      { name: 'Brunch Suave', price: '$9.80', detail: 'Sandwich, cafe y postre' },
      { name: 'Dulce Manana', price: '$6.90', detail: 'Capuccino y porcion dulce' },
    ],
  },
  events: [
    'Tortas de cumpleanos',
    'Desayunos corporativos',
    'Mesas dulces',
    'Cajas de catering',
    'Postres personalizados',
    'Celebraciones especiales',
  ],
  eventImage:
    'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?' +
    imageParams,
  eventCta: 'Solicitar cotizacion',
  eventWhatsappMessage:
    'Hola Maison Miga, quiero cotizar un pedido para evento.',
  benefits: [
    {
      title: 'Produccion hecha a mano',
      description:
        'Trabajamos masas, rellenos y acabados en pequenos lotes para cuidar textura y sabor.',
    },
    {
      title: 'Ingredientes frescos',
      description:
        'Priorizamos insumos de buena calidad, frutas frescas y recetas equilibradas.',
    },
    {
      title: 'Presentacion premium',
      description:
        'Cada producto se entrega con empaque limpio, elegante y listo para regalar.',
    },
    {
      title: 'Pedidos personalizados',
      description:
        'Adaptamos tortas, cajas y mesas dulces segun la ocasion y cantidad de invitados.',
    },
    {
      title: 'Retiro o entrega',
      description:
        'Coordinamos horarios por WhatsApp para retiro en local o entrega bajo disponibilidad.',
    },
    {
      title: 'Atencion al detalle',
      description:
        'Confirmamos sabores, tiempos y presentacion antes de preparar pedidos especiales.',
    },
  ],
  scheduleBlocks: [
    { day: 'Lunes a viernes', time: '07:00 - 20:00' },
    { day: 'Sabado', time: '08:00 - 20:00' },
    { day: 'Domingo', time: '08:00 - 14:00' },
  ],
  locationFeatures: [
    'Pedidos por WhatsApp',
    'Retiro en local',
    'Desayunos desde temprano',
    'Cotizaciones para eventos',
  ],
  faq: {
    items: [
      {
        question: 'Hacen tortas personalizadas?',
        answer:
          'Si. Preparamos tortas por pedido con sabores, tamanos y acabados definidos segun la celebracion.',
      },
      {
        question: 'Puedo pedir por WhatsApp?',
        answer:
          'Si. Puedes escribirnos directo por WhatsApp para consultar disponibilidad, precios y horarios de entrega o retiro.',
      },
      {
        question: 'Ofrecen combos de desayuno?',
        answer:
          'Si. Tenemos combos con cafe, pan fresco, sandwiches, jugos naturales y opciones dulces.',
      },
      {
        question: 'Preparan postres para eventos?',
        answer:
          'Si. Armamos mesas dulces, cajas de catering, bocaditos y postres personalizados para eventos sociales o corporativos.',
      },
      {
        question: 'Tienen entrega o retiro?',
        answer:
          'Coordinamos retiro en local y entregas bajo disponibilidad segun zona, horario y tipo de pedido.',
      },
      {
        question: 'Con cuanto tiempo debo pedir?',
        answer:
          'Para productos del dia puedes consultar disponibilidad inmediata. Para tortas y eventos recomendamos 48 a 72 horas de anticipacion.',
      },
    ],
  },
  contactCta: {
    title: 'Hoy puede empezar con pan caliente.',
    text: 'Escribenos por WhatsApp y te contamos que salio del horno, que postres hay en vitrina y como reservar tu pedido.',
  },
  footerServices: [
    'Pan artesanal',
    'Tortas y postres',
    'Desayunos',
    'Eventos y catering',
  ],
  footerNote:
    'Maison Miga es una marca ficticia creada como landing page premium para panaderias, pastelerias y negocios gastronomicos locales.',
}

export default bakeryData
