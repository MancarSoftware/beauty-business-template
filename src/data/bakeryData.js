const imageParams = 'auto=format&fit=crop&w=1400&q=82'

const images = {
  breadHero:
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?' +
    imageParams,
  bread:
    'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?' +
    imageParams,
  baguette:
    'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?' +
    imageParams,
  croissant:
    'https://images.unsplash.com/photo-1555507036-ab1f4038808a?' +
    imageParams,
  cake:
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?' +
    imageParams,
  cheesecake:
    'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?' +
    imageParams,
  carrot:
    'https://images.unsplash.com/photo-1621303837174-89787a7d4729?' +
    imageParams,
  tiramisu:
    'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?' +
    imageParams,
  coffee:
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?' +
    imageParams,
  breakfast:
    'https://images.unsplash.com/photo-1493770348161-369560ae357d?' +
    imageParams,
  sandwich:
    'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?' +
    imageParams,
  cookies:
    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?' +
    imageParams,
  macarons:
    'https://images.unsplash.com/photo-1569864358642-9d1684040f43?' +
    imageParams,
  event:
    'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?' +
    imageParams,
  catering:
    'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?' +
    imageParams,
}

const products = [
  {
    id: 'bread-country',
    slug: 'pan-de-campo',
    name: 'Pan de Campo',
    categorySlug: 'panaderia-artesanal',
    categoryLabel: 'Panaderia',
    shortDescription: 'Hogaza rustica de corteza crujiente y miga suave.',
    description:
      'Pan artesanal de fermentacion lenta, ideal para desayunos, tablas, sandwiches y comidas familiares. Su corteza dorada mantiene una miga humeda y aromatica.',
    price: '$2.25',
    image: images.bread,
    tags: ['Panes', 'Masa madre', 'Del dia'],
    allergens: ['Gluten'],
    portion: 'Pieza mediana',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Pan de Campo.',
  },
  {
    id: 'bread-baguette',
    slug: 'baguette-tradicional',
    name: 'Baguette Tradicional',
    categorySlug: 'panaderia-artesanal',
    categoryLabel: 'Panaderia',
    shortDescription: 'Baguette de corteza fina, dorada y muy crujiente.',
    description:
      'Baguette artesanal hecha para acompanar quesos, cafe, sopas o reuniones. Se hornea cada manana para mantener textura y aroma.',
    price: '$1.75',
    image: images.baguette,
    tags: ['Baguettes', 'Crujiente'],
    allergens: ['Gluten'],
    portion: 'Unidad',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Baguette Tradicional.',
  },
  {
    id: 'bread-multigrain',
    slug: 'pan-multigrano',
    name: 'Pan Multigrano',
    categorySlug: 'panaderia-artesanal',
    categoryLabel: 'Panaderia',
    shortDescription: 'Pan con semillas, cereales y sabor profundo.',
    description:
      'Una opcion con mas textura, preparada con mezcla de semillas y granos. Perfecta para desayunos nutritivos o tostadas.',
    price: '$2.50',
    image: images.breadHero,
    tags: ['Integrales', 'Semillas'],
    allergens: ['Gluten', 'Semillas'],
    portion: 'Pieza mediana',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Pan Multigrano.',
  },
  {
    id: 'bread-croissant',
    slug: 'croissant-de-mantequilla',
    name: 'Croissant de Mantequilla',
    categorySlug: 'panaderia-artesanal',
    categoryLabel: 'Panaderia',
    shortDescription: 'Laminado crujiente, centro aireado y mantequilla real.',
    description:
      'Croissant clasico con capas delicadas y aroma a mantequilla. Ideal para cafe, desayuno o una pausa dulce y ligera.',
    price: '$1.50',
    image: images.croissant,
    tags: ['Croissants', 'Favorito'],
    allergens: ['Gluten', 'Lacteos'],
    portion: 'Unidad',
    available: true,
    featured: true,
    whatsappMessage:
      'Hola Maison Miga, quiero ordenar Croissant de Mantequilla.',
  },
  {
    id: 'bread-brioche',
    slug: 'brioche',
    name: 'Brioche',
    categorySlug: 'panaderia-artesanal',
    categoryLabel: 'Panaderia',
    shortDescription: 'Pan suave, ligeramente dulce y muy aromatico.',
    description:
      'Brioche esponjoso para desayunos, tostadas francesas o sandwiches premium. Hecho con una masa enriquecida y delicada.',
    price: '$1.80',
    image:
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?' +
      imageParams,
    tags: ['Brioche', 'Dulce suave'],
    allergens: ['Gluten', 'Lacteos', 'Huevo'],
    portion: 'Unidad',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Brioche.',
  },
  {
    id: 'bread-wholegrain',
    slug: 'pan-integral',
    name: 'Pan Integral',
    categorySlug: 'panaderia-artesanal',
    categoryLabel: 'Panaderia',
    shortDescription: 'Pan integral para desayunos diarios y tostadas.',
    description:
      'Pan de textura firme, sabor tostado y buena humedad. Preparado para quienes buscan una opcion cotidiana y equilibrada.',
    price: '$2.30',
    image:
      'https://images.unsplash.com/photo-1585478259715-4d3f99d3be4f?' +
      imageParams,
    tags: ['Integrales', 'Panes'],
    allergens: ['Gluten'],
    portion: 'Pieza mediana',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Pan Integral.',
  },
  {
    id: 'bread-olive',
    slug: 'pan-de-aceitunas',
    name: 'Pan de Aceitunas',
    categorySlug: 'panaderia-artesanal',
    categoryLabel: 'Panaderia',
    shortDescription: 'Pan salado con aceitunas y aroma mediterraneo.',
    description:
      'Una pieza especial para tablas, reuniones o acompanamientos salados. Tiene miga suave y trozos de aceituna.',
    price: '$2.60',
    image:
      'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?' +
      imageParams,
    tags: ['Especiales', 'Panes'],
    allergens: ['Gluten'],
    portion: 'Pieza mediana',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Pan de Aceitunas.',
  },
  {
    id: 'bread-cheese',
    slug: 'pan-de-queso',
    name: 'Pan de Queso',
    categorySlug: 'panaderia-artesanal',
    categoryLabel: 'Panaderia',
    shortDescription: 'Pan suave con queso dorado y sabor casero.',
    description:
      'Pan salado de textura tierna, ideal para media manana, reuniones o desayunos rapidos.',
    price: '$2.20',
    image:
      'https://images.unsplash.com/photo-1612182062633-9ff3b3598e96?' +
      imageParams,
    tags: ['Especiales', 'Queso'],
    allergens: ['Gluten', 'Lacteos'],
    portion: 'Unidad',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Pan de Queso.',
  },
  {
    id: 'cake-chocolate',
    slug: 'torta-de-chocolate',
    name: 'Torta de Chocolate',
    categorySlug: 'tortas-pasteleria',
    categoryLabel: 'Pasteleria',
    shortDescription: 'Torta intensa de chocolate con acabado brillante.',
    description:
      'Torta humeda de chocolate con relleno cremoso y decoracion elegante. Perfecta para cumpleanos, regalos y reuniones.',
    price: '$32.00',
    image: images.cake,
    tags: ['Chocolate', 'Cumpleanos', 'Mas vendido'],
    allergens: ['Gluten', 'Lacteos', 'Huevo'],
    portion: '8 a 10 porciones',
    available: true,
    featured: true,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Torta de Chocolate.',
  },
  {
    id: 'cake-cheesecake-red',
    slug: 'cheesecake-frutos-rojos',
    name: 'Cheesecake Frutos Rojos',
    categorySlug: 'tortas-pasteleria',
    categoryLabel: 'Pasteleria',
    shortDescription: 'Cheesecake cremoso con compota de frutos rojos.',
    description:
      'Cheesecake de textura suave, base crocante y cobertura de frutos rojos. Una opcion fresca y elegante para compartir.',
    price: '$35.00',
    image: images.cheesecake,
    tags: ['Frutales', 'Cream', 'Favorito'],
    allergens: ['Gluten', 'Lacteos'],
    portion: '8 a 10 porciones',
    available: true,
    featured: true,
    whatsappMessage:
      'Hola Maison Miga, quiero ordenar Cheesecake Frutos Rojos.',
  },
  {
    id: 'cake-carrot',
    slug: 'torta-de-zanahoria',
    name: 'Torta de Zanahoria',
    categorySlug: 'tortas-pasteleria',
    categoryLabel: 'Pasteleria',
    shortDescription: 'Bizcocho especiado con frosting de queso crema.',
    description:
      'Torta suave con zanahoria, especias y cobertura cremosa. Ideal para quienes buscan un sabor clasico y equilibrado.',
    price: '$30.00',
    image: images.carrot,
    tags: ['Cumpleanos', 'Cream'],
    allergens: ['Gluten', 'Lacteos', 'Huevo', 'Nueces'],
    portion: '8 a 10 porciones',
    available: true,
    featured: true,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Torta de Zanahoria.',
  },
  {
    id: 'cake-tres-leches',
    slug: 'torta-de-tres-leches',
    name: 'Torta de Tres Leches',
    categorySlug: 'tortas-pasteleria',
    categoryLabel: 'Pasteleria',
    shortDescription: 'Bizcocho humedo, crema suave y decoracion delicada.',
    description:
      'Torta clasica de tres leches con presentacion premium. Fresca, ligera y perfecta para celebraciones familiares.',
    price: '$29.00',
    image:
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?' +
      imageParams,
    tags: ['Cream', 'Cumpleanos'],
    allergens: ['Gluten', 'Lacteos', 'Huevo'],
    portion: '8 a 10 porciones',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Torta de Tres Leches.',
  },
  {
    id: 'cake-red-velvet',
    slug: 'torta-red-velvet',
    name: 'Torta Red Velvet',
    categorySlug: 'tortas-pasteleria',
    categoryLabel: 'Pasteleria',
    shortDescription: 'Capas rojas suaves con crema de queso.',
    description:
      'Red velvet de sabor delicado, color intenso y relleno cremoso. Ideal para regalos y ocasiones especiales.',
    price: '$32.00',
    image:
      'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?' +
      imageParams,
    tags: ['Cumpleanos', 'Cream'],
    allergens: ['Gluten', 'Lacteos', 'Huevo'],
    portion: '8 a 10 porciones',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Torta Red Velvet.',
  },
  {
    id: 'cake-vanilla',
    slug: 'torta-de-vainilla',
    name: 'Torta de Vainilla',
    categorySlug: 'tortas-pasteleria',
    categoryLabel: 'Pasteleria',
    shortDescription: 'Vainilla suave con relleno cremoso y decoracion limpia.',
    description:
      'Una torta clasica, elegante y adaptable para cumpleanos, bautizos o celebraciones sencillas.',
    price: '$26.00',
    image:
      'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?' +
      imageParams,
    tags: ['Cumpleanos', 'Custom'],
    allergens: ['Gluten', 'Lacteos', 'Huevo'],
    portion: '8 a 10 porciones',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Torta de Vainilla.',
  },
  {
    id: 'cake-passion',
    slug: 'torta-maracuya',
    name: 'Torta Maracuya',
    categorySlug: 'tortas-pasteleria',
    categoryLabel: 'Pasteleria',
    shortDescription: 'Torta fresca con crema y acidez tropical.',
    description:
      'Capas suaves con relleno de maracuya, pensada para quienes prefieren sabores frescos y frutales.',
    price: '$30.00',
    image:
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?' +
      imageParams,
    tags: ['Frutales', 'Cream'],
    allergens: ['Gluten', 'Lacteos', 'Huevo'],
    portion: '8 a 10 porciones',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Torta Maracuya.',
  },
  {
    id: 'cake-ferrero',
    slug: 'torta-ferrero-rocher',
    name: 'Torta Ferrero Rocher',
    categorySlug: 'tortas-pasteleria',
    categoryLabel: 'Pasteleria',
    shortDescription: 'Chocolate, avellanas y decoracion premium.',
    description:
      'Torta intensa con crema de chocolate, notas de avellana y una presentacion ideal para ocasiones especiales.',
    price: '$38.00',
    image:
      'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?' +
      imageParams,
    tags: ['Chocolate', 'Custom'],
    allergens: ['Gluten', 'Lacteos', 'Huevo', 'Nueces'],
    portion: '8 a 10 porciones',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Torta Ferrero Rocher.',
  },
  {
    id: 'dessert-tiramisu',
    slug: 'tiramisu',
    name: 'Tiramisu',
    categorySlug: 'postres-en-porcion',
    categoryLabel: 'Postres',
    shortDescription: 'Cafe, mascarpone y cacao en una porcion elegante.',
    description:
      'Postre frio de capas suaves, cafe aromatico y cacao. Perfecto para acompanar un espresso o cerrar el dia.',
    price: '$4.00',
    image: images.tiramisu,
    tags: ['Clasicos', 'Frios', 'Creamy'],
    allergens: ['Lacteos', 'Huevo', 'Gluten'],
    portion: 'Individual',
    available: true,
    featured: true,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Tiramisu.',
  },
  {
    id: 'dessert-cheesecake-slice',
    slug: 'cheesecake-frutos-rojos-porcion',
    name: 'Cheesecake F. Rojos',
    categorySlug: 'postres-en-porcion',
    categoryLabel: 'Postres',
    shortDescription: 'Porcion cremosa con frutos rojos y base crocante.',
    description:
      'Cheesecake individual con compota de frutos rojos, ideal para llevar o regalar.',
    price: '$4.25',
    image: images.cheesecake,
    tags: ['Frutales', 'Creamy'],
    allergens: ['Gluten', 'Lacteos'],
    portion: 'Individual',
    available: true,
    featured: true,
    whatsappMessage:
      'Hola Maison Miga, quiero ordenar Cheesecake Frutos Rojos por porcion.',
  },
  {
    id: 'dessert-brownie-ice',
    slug: 'brownie-con-helado',
    name: 'Brownie con Helado',
    categorySlug: 'postres-en-porcion',
    categoryLabel: 'Postres',
    shortDescription: 'Brownie intenso con helado cremoso.',
    description:
      'Brownie de chocolate con centro suave, servido con helado. Un postre directo, intenso y muy pedido.',
    price: '$4.00',
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?' +
      imageParams,
    tags: ['Chocolate', 'Frios'],
    allergens: ['Gluten', 'Lacteos', 'Huevo'],
    portion: 'Individual',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Brownie con Helado.',
  },
  {
    id: 'dessert-mousse',
    slug: 'mousse-de-chocolate',
    name: 'Mousse de Chocolate',
    categorySlug: 'postres-en-porcion',
    categoryLabel: 'Postres',
    shortDescription: 'Mousse aireado con chocolate profundo.',
    description:
      'Postre cremoso de chocolate, servido frio y con textura ligera. Ideal para una pausa dulce.',
    price: '$4.00',
    image:
      'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?' +
      imageParams,
    tags: ['Chocolate', 'Creamy', 'Frios'],
    allergens: ['Lacteos'],
    portion: 'Individual',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Mousse de Chocolate.',
  },
  {
    id: 'dessert-lemon-pie',
    slug: 'pie-de-limon',
    name: 'Pie de Limon',
    categorySlug: 'postres-en-porcion',
    categoryLabel: 'Postres',
    shortDescription: 'Base crocante, crema citrica y merengue suave.',
    description:
      'Un clasico fresco y equilibrado, perfecto para quienes buscan un postre menos pesado.',
    price: '$4.25',
    image:
      'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?' +
      imageParams,
    tags: ['Clasicos', 'Frutales'],
    allergens: ['Gluten', 'Lacteos', 'Huevo'],
    portion: 'Individual',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Pie de Limon.',
  },
  {
    id: 'dessert-fruit-tart',
    slug: 'tartaleta-de-frutas',
    name: 'Tartaleta de Frutas',
    categorySlug: 'postres-en-porcion',
    categoryLabel: 'Postres',
    shortDescription: 'Crema suave, masa crocante y fruta fresca.',
    description:
      'Tartaleta artesanal con crema pastelera y frutas de temporada. Ligera, colorida y elegante.',
    price: '$4.25',
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?' +
      imageParams,
    tags: ['Frutales', 'Clasicos'],
    allergens: ['Gluten', 'Lacteos', 'Huevo'],
    portion: 'Individual',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Tartaleta de Frutas.',
  },
  {
    id: 'dessert-eclair',
    slug: 'eclair',
    name: 'Eclair',
    categorySlug: 'postres-en-porcion',
    categoryLabel: 'Postres',
    shortDescription: 'Masa choux rellena y cubierta con chocolate.',
    description:
      'Eclair de crema delicada con cubierta brillante. Una pieza clasica de pasteleria francesa.',
    price: '$2.75',
    image:
      'https://images.unsplash.com/photo-1612203985729-70726954388c?' +
      imageParams,
    tags: ['Clasicos', 'Creamy'],
    allergens: ['Gluten', 'Lacteos', 'Huevo'],
    portion: 'Individual',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Eclair.',
  },
  {
    id: 'dessert-milhojas',
    slug: 'milhojas',
    name: 'Milhojas',
    categorySlug: 'postres-en-porcion',
    categoryLabel: 'Postres',
    shortDescription: 'Capas crocantes con crema pastelera.',
    description:
      'Postre de capas delicadas, textura crujiente y relleno suave. Un favorito para acompanarse con cafe.',
    price: '$4.50',
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?' +
      imageParams,
    tags: ['Clasicos', 'Creamy'],
    allergens: ['Gluten', 'Lacteos', 'Huevo'],
    portion: 'Individual',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Milhojas.',
  },
  {
    id: 'breakfast-classic',
    slug: 'desayuno-clasico',
    name: 'Desayuno Clasico',
    categorySlug: 'desayunos-cafe',
    categoryLabel: 'Desayunos',
    shortDescription: 'Cafe, pan fresco, huevos y jugo natural.',
    description:
      'Desayuno balanceado con productos de la casa, ideal para empezar la manana sin prisa.',
    price: '$5.50',
    image: images.breakfast,
    tags: ['Desayunos', 'Combos'],
    allergens: ['Gluten', 'Lacteos', 'Huevo'],
    portion: 'Combo individual',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Desayuno Clasico.',
  },
  {
    id: 'breakfast-complete',
    slug: 'desayuno-completo',
    name: 'Desayuno Completo',
    categorySlug: 'desayunos-cafe',
    categoryLabel: 'Desayunos',
    shortDescription: 'Sandwich, cafe, jugo y una pieza dulce.',
    description:
      'Combo mas completo para una manana con energia. Incluye opciones dulces y saladas.',
    price: '$7.50',
    image:
      'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?' +
      imageParams,
    tags: ['Combos', 'Desayunos'],
    allergens: ['Gluten', 'Lacteos'],
    portion: 'Combo individual',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Desayuno Completo.',
  },
  {
    id: 'breakfast-ham-sandwich',
    slug: 'sandwich-de-jamon',
    name: 'Sandwich de Jamon',
    categorySlug: 'desayunos-cafe',
    categoryLabel: 'Desayunos',
    shortDescription: 'Pan artesanal, jamon, queso y vegetales.',
    description:
      'Sandwich fresco preparado con pan de la casa. Practico, sabroso y listo para llevar.',
    price: '$4.75',
    image: images.sandwich,
    tags: ['Sandwiches'],
    allergens: ['Gluten', 'Lacteos'],
    portion: 'Unidad',
    available: true,
    featured: true,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Sandwich de Jamon.',
  },
  {
    id: 'breakfast-sweet-combo',
    slug: 'combo-dulce',
    name: 'Combo Dulce',
    categorySlug: 'desayunos-cafe',
    categoryLabel: 'Desayunos',
    shortDescription: 'Cafe y pieza dulce del dia.',
    description:
      'Una opcion sencilla para quienes buscan cafe con algo recien horneado.',
    price: '$6.00',
    image: images.croissant,
    tags: ['Combos', 'Cafe'],
    allergens: ['Gluten', 'Lacteos'],
    portion: 'Combo individual',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Combo Dulce.',
  },
  {
    id: 'coffee-cappuccino',
    slug: 'capuccino',
    name: 'Capuccino',
    categorySlug: 'desayunos-cafe',
    categoryLabel: 'Cafe',
    shortDescription: 'Espresso con leche vaporizada y espuma cremosa.',
    description:
      'Cafe de la casa preparado al momento. Ideal para acompanar croissants, tortas o sandwiches.',
    price: '$2.50',
    image: images.coffee,
    tags: ['Cafe', 'Bebidas'],
    allergens: ['Lacteos'],
    portion: 'Taza',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Capuccino.',
  },
  {
    id: 'coffee-latte',
    slug: 'latte',
    name: 'Latte',
    categorySlug: 'desayunos-cafe',
    categoryLabel: 'Cafe',
    shortDescription: 'Cafe suave con leche cremosa.',
    description:
      'Latte balanceado para quienes prefieren un cafe mas suave y cremoso.',
    price: '$2.50',
    image:
      'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?' +
      imageParams,
    tags: ['Cafe'],
    allergens: ['Lacteos'],
    portion: 'Taza',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Latte.',
  },
  {
    id: 'coffee-americano',
    slug: 'americano',
    name: 'Americano',
    categorySlug: 'desayunos-cafe',
    categoryLabel: 'Cafe',
    shortDescription: 'Cafe negro aromatico y ligero.',
    description:
      'Americano para acompanarlo con pan fresco, galletas o una porcion dulce.',
    price: '$2.00',
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?' +
      imageParams,
    tags: ['Cafe'],
    allergens: [],
    portion: 'Taza',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Americano.',
  },
  {
    id: 'drink-natural-juice',
    slug: 'jugo-natural',
    name: 'Jugo Natural',
    categorySlug: 'desayunos-cafe',
    categoryLabel: 'Bebidas',
    shortDescription: 'Jugo natural preparado al momento.',
    description:
      'Bebida fresca para desayunos o combos de la manana. Consulta sabores disponibles.',
    price: '$2.75',
    image:
      'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?' +
      imageParams,
    tags: ['Bebidas'],
    allergens: [],
    portion: 'Vaso',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Jugo Natural.',
  },
  {
    id: 'cookies-chip',
    slug: 'galletas-de-chispas',
    name: 'Galletas de Chispas',
    categorySlug: 'galletas-bocaditos',
    categoryLabel: 'Galletas',
    shortDescription: 'Galletas con chispas de chocolate y centro suave.',
    description:
      'Galletas artesanales con bordes dorados y centro tierno. Se pueden pedir por unidad o caja.',
    price: '$3.00',
    image: images.cookies,
    tags: ['Galletas', 'Boxes'],
    allergens: ['Gluten', 'Lacteos', 'Huevo'],
    portion: 'Unidad grande',
    available: true,
    featured: true,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Galletas de Chispas.',
  },
  {
    id: 'cookies-macarons',
    slug: 'macarons-caja',
    name: 'Macarons Box',
    categorySlug: 'galletas-bocaditos',
    categoryLabel: 'Bocaditos',
    shortDescription: 'Caja surtida de macarons con sabores delicados.',
    description:
      'Macarons de colores suaves, textura delicada y empaque listo para regalar.',
    price: '$8.50',
    image: images.macarons,
    tags: ['Macarons', 'Boxes', 'Regalo'],
    allergens: ['Almendra', 'Huevo'],
    portion: '6 unidades',
    available: true,
    featured: true,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Macarons Box.',
  },
  {
    id: 'cookies-oat',
    slug: 'galletas-de-avena',
    name: 'Galletas de Avena',
    categorySlug: 'galletas-bocaditos',
    categoryLabel: 'Galletas',
    shortDescription: 'Galletas suaves con avena y toque especiado.',
    description:
      'Una opcion casera y aromatica para cafe, lonchera o media tarde.',
    price: '$3.00',
    image:
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?' +
      imageParams,
    tags: ['Galletas'],
    allergens: ['Gluten', 'Lacteos'],
    portion: 'Unidad grande',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Galletas de Avena.',
  },
  {
    id: 'bites-brownie',
    slug: 'brownie-bites',
    name: 'Brownie Bites',
    categorySlug: 'galletas-bocaditos',
    categoryLabel: 'Bocaditos',
    shortDescription: 'Bocaditos de brownie para compartir.',
    description:
      'Mini brownies intensos de chocolate, ideales para cajas, reuniones o mesas dulces.',
    price: '$6.00',
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?' +
      imageParams,
    tags: ['Brownies', 'Bites'],
    allergens: ['Gluten', 'Lacteos', 'Huevo'],
    portion: '6 unidades',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Brownie Bites.',
  },
  {
    id: 'bites-alfajores',
    slug: 'alfajores',
    name: 'Alfajores',
    categorySlug: 'galletas-bocaditos',
    categoryLabel: 'Bocaditos',
    shortDescription: 'Alfajores suaves con relleno de dulce de leche.',
    description:
      'Bocaditos clasicos con textura delicada y relleno generoso. Perfectos para regalar.',
    price: '$4.50',
    image:
      'https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?' +
      imageParams,
    tags: ['Bites', 'Boxes'],
    allergens: ['Gluten', 'Lacteos'],
    portion: '6 unidades',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Alfajores.',
  },
  {
    id: 'cookies-chocolate',
    slug: 'galletas-de-chocolate',
    name: 'Galletas de Chocolate',
    categorySlug: 'galletas-bocaditos',
    categoryLabel: 'Galletas',
    shortDescription: 'Galletas intensas de cacao y chocolate.',
    description:
      'Galletas con sabor profundo a chocolate, textura suave y borde ligeramente crocante.',
    price: '$3.25',
    image:
      'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?' +
      imageParams,
    tags: ['Galletas', 'Chocolate'],
    allergens: ['Gluten', 'Lacteos', 'Huevo'],
    portion: 'Unidad grande',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Galletas de Chocolate.',
  },
  {
    id: 'bites-cupcakes',
    slug: 'mini-cupcakes',
    name: 'Mini Cupcakes',
    categorySlug: 'galletas-bocaditos',
    categoryLabel: 'Bocaditos',
    shortDescription: 'Mini cupcakes decorados para cajas y eventos.',
    description:
      'Bocaditos dulces con decoracion delicada. Se preparan por caja y por pedido.',
    price: '$7.00',
    image:
      'https://images.unsplash.com/photo-1519869325930-281384150729?' +
      imageParams,
    tags: ['Bites', 'Boxes'],
    allergens: ['Gluten', 'Lacteos', 'Huevo'],
    portion: '6 unidades',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Mini Cupcakes.',
  },
  {
    id: 'bites-truffles',
    slug: 'trufas-caja',
    name: 'Trufas Box',
    categorySlug: 'galletas-bocaditos',
    categoryLabel: 'Bocaditos',
    shortDescription: 'Caja de trufas de chocolate para regalar.',
    description:
      'Trufas suaves, intensas y presentadas en caja premium. Ideales para detalles o mesas dulces.',
    price: '$7.50',
    image:
      'https://images.unsplash.com/photo-1548907040-4d2be55d2c1f?' +
      imageParams,
    tags: ['Bites', 'Chocolate', 'Boxes'],
    allergens: ['Lacteos'],
    portion: '6 unidades',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero ordenar Trufas Box.',
  },
  {
    id: 'event-custom-cakes',
    slug: 'tortas-personalizadas-eventos',
    name: 'Tortas Personalizadas',
    categorySlug: 'eventos-catering',
    categoryLabel: 'Eventos',
    shortDescription: 'Tortas a medida para celebraciones especiales.',
    description:
      'Disenamos tortas segun ocasion, numero de invitados, estilo visual y sabores preferidos.',
    price: 'Desde $32.00',
    image: images.cake,
    tags: ['Cumpleanos', 'Custom Cakes'],
    allergens: ['Consultar'],
    portion: 'Segun pedido',
    available: true,
    featured: false,
    whatsappMessage:
      'Hola Maison Miga, quiero informacion sobre tortas personalizadas para eventos.',
  },
  {
    id: 'event-sweet-table',
    slug: 'mesas-dulces',
    name: 'Mesas Dulces',
    categorySlug: 'eventos-catering',
    categoryLabel: 'Eventos',
    shortDescription: 'Mesa con postres, bocaditos y presentacion premium.',
    description:
      'Creamos mesas dulces con una seleccion de postres, bocaditos, torta central y montaje visual.',
    price: 'Por cotizar',
    image: images.event,
    tags: ['Sweet tables', 'Eventos'],
    allergens: ['Consultar'],
    portion: 'Desde 20 personas',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero cotizar una mesa dulce.',
  },
  {
    id: 'event-corporate-breakfast',
    slug: 'desayunos-corporativos',
    name: 'Desayunos Corporativos',
    categorySlug: 'eventos-catering',
    categoryLabel: 'Eventos',
    shortDescription: 'Cajas y combos para equipos, reuniones y empresas.',
    description:
      'Desayunos empacados para reuniones corporativas, capacitaciones o regalos empresariales.',
    price: 'Por cotizar',
    image: images.breakfast,
    tags: ['Empresas', 'Desayunos'],
    allergens: ['Consultar'],
    portion: 'Desde 8 unidades',
    available: true,
    featured: false,
    whatsappMessage:
      'Hola Maison Miga, quiero cotizar desayunos corporativos.',
  },
  {
    id: 'event-catering-boxes',
    slug: 'cajas-de-catering',
    name: 'Cajas de Catering',
    categorySlug: 'eventos-catering',
    categoryLabel: 'Eventos',
    shortDescription: 'Cajas surtidas con piezas dulces y saladas.',
    description:
      'Cajas pensadas para reuniones, celebraciones pequenas o detalles premium.',
    price: 'Por cotizar',
    image: images.catering,
    tags: ['Boxes', 'Reuniones'],
    allergens: ['Consultar'],
    portion: 'Segun pedido',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero cotizar cajas de catering.',
  },
  {
    id: 'event-dessert-trays',
    slug: 'bandejas-de-postres',
    name: 'Bandejas de Postres',
    categorySlug: 'eventos-catering',
    categoryLabel: 'Eventos',
    shortDescription: 'Bandejas listas para compartir en reuniones.',
    description:
      'Postres porcionados en bandejas elegantes para reuniones familiares o corporativas.',
    price: 'Por cotizar',
    image: images.cheesecake,
    tags: ['Postres', 'Reuniones'],
    allergens: ['Consultar'],
    portion: 'Desde 12 porciones',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero cotizar bandejas de postres.',
  },
  {
    id: 'event-celebration-packs',
    slug: 'packs-de-celebracion',
    name: 'Packs de Celebracion',
    categorySlug: 'eventos-catering',
    categoryLabel: 'Eventos',
    shortDescription: 'Torta, bocaditos y detalles en un solo pedido.',
    description:
      'Packs completos para celebraciones pequenas con torta, bocaditos y productos de la casa.',
    price: 'Por cotizar',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?' +
      imageParams,
    tags: ['Cumpleanos', 'Packs'],
    allergens: ['Consultar'],
    portion: 'Segun pedido',
    available: true,
    featured: false,
    whatsappMessage: 'Hola Maison Miga, quiero cotizar un pack de celebracion.',
  },
]

const categoryDetails = {
  'panaderia-artesanal': {
    label: 'Panaderia Artesanal',
    fallbackGallery: [images.bread, images.baguette, images.breadHero, images.croissant],
    features: [
      'Hecho cada dia',
      'Ingredientes seleccionados',
      'Fermentacion natural',
      'Hecho con amor',
    ],
    ingredients: [
      'Harina de trigo',
      'Masa madre',
      'Agua',
      'Sal marina',
      'Levadura natural',
    ],
  },
  'tortas-pasteleria': {
    label: 'Tortas & Pasteleria',
    fallbackGallery: [images.cake, images.cheesecake, images.carrot, images.catering],
    features: [
      'Decoracion artesanal',
      'Rellenos premium',
      'Reserva por pedido',
      'Lista para celebrar',
    ],
    ingredients: [
      'Harina de trigo',
      'Huevos',
      'Mantequilla',
      'Crema',
      'Fruta o chocolate',
    ],
  },
  'postres-en-porcion': {
    label: 'Postres en Porcion',
    fallbackGallery: [images.tiramisu, images.cheesecake, images.carrot, images.coffee],
    features: [
      'Porcion individual',
      'Preparacion fresca',
      'Ideal con cafe',
      'Empaque cuidado',
    ],
    ingredients: [
      'Crema',
      'Bizcocho',
      'Fruta o chocolate',
      'Azucar',
      'Vainilla',
    ],
  },
  'desayunos-cafe': {
    label: 'Desayunos & Cafe',
    fallbackGallery: [images.breakfast, images.coffee, images.sandwich, images.croissant],
    features: [
      'Preparado al momento',
      'Cafe fresco',
      'Pan del dia',
      'Listo para llevar',
    ],
    ingredients: [
      'Pan artesanal',
      'Cafe',
      'Fruta fresca',
      'Queso',
      'Ingredientes de temporada',
    ],
  },
  'galletas-bocaditos': {
    label: 'Galletas & Bocaditos',
    fallbackGallery: [images.cookies, images.macarons, images.catering, images.cheesecake],
    features: [
      'Perfecto para compartir',
      'Cajas para regalo',
      'Pequenos lotes',
      'Dulce equilibrado',
    ],
    ingredients: [
      'Harina de trigo',
      'Mantequilla',
      'Azucar',
      'Chocolate',
      'Frutos secos segun receta',
    ],
  },
  'eventos-catering': {
    label: 'Eventos & Catering',
    fallbackGallery: [images.event, images.catering, images.cake, images.breakfast],
    features: [
      'Cotizacion personalizada',
      'Presentacion premium',
      'Montaje coordinado',
      'Para empresas y familias',
    ],
    ingredients: [
      'Productos seleccionados',
      'Postres artesanales',
      'Panes frescos',
      'Frutas',
      'Rellenos segun pedido',
    ],
  },
}

const enrichedProducts = products.map((product) => {
  const details = categoryDetails[product.categorySlug] ?? categoryDetails['panaderia-artesanal']
  const gallery = [...new Set([product.image, ...(product.gallery ?? []), ...details.fallbackGallery])]

  return {
    ...product,
    categoryLabel: details.label,
    gallery: gallery.slice(0, 4),
    features: product.features ?? details.features,
    ingredients: product.ingredients ?? details.ingredients,
  }
})

const categories = [
  {
    slug: 'panaderia-artesanal',
    title: 'Panaderia Artesanal',
    eyebrow: 'Especialidades',
    subtitle:
      'Pan fresco hecho cada manana con ingredientes seleccionados, fermentacion lenta y proceso artesanal.',
    description:
      'Masas maduras, ingredientes seleccionados y horneado artesanal para lograr cortezas crujientes y aromas de pan recien hecho.',
    heroImage: images.breadHero,
    breadcrumbLabel: 'Panaderia Artesanal',
    features: [
      'Fresco cada manana',
      'Hecho a mano',
      'Ingredientes seleccionados',
      'Fermentacion natural',
    ],
    filters: [
      'Todos',
      'Panes',
      'Baguettes',
      'Brioche',
      'Integrales',
      'Croissants',
      'Especiales',
    ],
    productSlugs: [
      'pan-de-campo',
      'baguette-tradicional',
      'pan-integral',
      'croissant-de-mantequilla',
      'pan-multigrano',
      'brioche',
      'pan-de-aceitunas',
      'pan-de-queso',
    ],
    cta: {
      title: 'Necesitas un pedido especial?',
      text: 'Encarga tus panes para desayuno, reuniones o empresas.',
      button: 'Pedir por WhatsApp',
      message:
        'Hola Maison Miga, quiero hacer un pedido especial de pan artesanal.',
    },
  },
  {
    slug: 'tortas-pasteleria',
    title: 'Tortas & Pasteleria',
    eyebrow: 'Especialidades',
    subtitle:
      'Tortas artesanales elaboradas con ingredientes premium y disenos unicos para cada ocasion.',
    description:
      'Tortas elegantes, rellenos equilibrados y decoracion cuidada para cumpleanos, regalos y celebraciones importantes.',
    heroImage: images.cake,
    breadcrumbLabel: 'Tortas & Pasteleria',
    features: [
      'Tortas personalizadas',
      'Rellenos premium',
      'Decoracion elegante',
      'Reserva por pedido',
    ],
    filters: ['Todos', 'Cumpleanos', 'Chocolate', 'Frutales', 'Cream', 'Custom'],
    productSlugs: [
      'torta-de-chocolate',
      'cheesecake-frutos-rojos',
      'torta-de-zanahoria',
      'torta-de-tres-leches',
      'torta-red-velvet',
      'torta-de-vainilla',
      'torta-maracuya',
      'torta-ferrero-rocher',
    ],
    cta: {
      title: 'Necesitas una torta personalizada?',
      text: 'Cuentanos tu idea y te ayudamos a crear la torta perfecta.',
      button: 'Cotizar por WhatsApp',
      message:
        'Hola Maison Miga, quiero informacion sobre una torta personalizada.',
    },
  },
  {
    slug: 'postres-en-porcion',
    title: 'Postres en Porcion',
    eyebrow: 'Especialidades',
    subtitle:
      'Pequenos placeres hechos para disfrutar en cualquier momento del dia.',
    description:
      'Postres individuales para cafe, regalos, antojos y cajas variadas. Frescos, elegantes y listos para pedir.',
    heroImage: images.tiramisu,
    breadcrumbLabel: 'Postres en Porcion',
    features: [
      'Porciones individuales',
      'Postres frescos',
      'Perfectos con cafe',
      'Ideales para regalo',
    ],
    filters: ['Todos', 'Chocolate', 'Frutales', 'Creamy', 'Clasicos', 'Frios'],
    productSlugs: [
      'tiramisu',
      'cheesecake-frutos-rojos-porcion',
      'brownie-con-helado',
      'mousse-de-chocolate',
      'pie-de-limon',
      'tartaleta-de-frutas',
      'eclair',
      'milhojas',
    ],
    cta: {
      title: 'Quieres una caja variada?',
      text: 'Armamos tu caja de 6, 12 o mas porciones.',
      button: 'Armar caja',
      message:
        'Hola Maison Miga, quiero armar una caja variada de postres.',
    },
  },
  {
    slug: 'desayunos-cafe',
    title: 'Desayunos & Cafe',
    eyebrow: 'Especialidades',
    subtitle:
      'Empieza tu dia con lo mejor: pan recien horneado, cafe aromatico y combinaciones que encantan.',
    description:
      'Combos de desayuno, cafe, sandwiches, jugos y piezas dulces para empezar la manana con calma.',
    heroImage: images.coffee,
    breadcrumbLabel: 'Desayunos & Cafe',
    features: ['Cafe fresco', 'Combos de desayuno', 'Sandwiches', 'Jugos naturales'],
    filters: ['Todos', 'Desayunos', 'Combos', 'Sandwiches', 'Cafe', 'Bebidas'],
    productSlugs: [
      'desayuno-clasico',
      'desayuno-completo',
      'sandwich-de-jamon',
      'combo-dulce',
      'capuccino',
      'latte',
      'americano',
      'jugo-natural',
    ],
    cta: {
      title: 'Sin tiempo en la manana?',
      text: 'Pide por WhatsApp y retira tu desayuno sin esperar.',
      button: 'Pedir desayuno',
      message:
        'Hola Maison Miga, quiero pedir desayuno para retirar sin esperar.',
    },
  },
  {
    slug: 'galletas-bocaditos',
    title: 'Galletas & Bocaditos',
    eyebrow: 'Especialidades',
    subtitle:
      'Ideales para compartir, disfrutar o regalar en cualquier momento.',
    description:
      'Galletas, macarons, alfajores, brownies y bocaditos pequenos para cajas, regalos o eventos.',
    heroImage: images.cookies,
    breadcrumbLabel: 'Galletas & Bocaditos',
    features: ['Cajas para regalo', 'Por unidad', 'Mini postres', 'Bocaditos para evento'],
    filters: ['Todos', 'Galletas', 'Macarons', 'Brownies', 'Bites', 'Boxes'],
    productSlugs: [
      'galletas-de-chispas',
      'macarons-caja',
      'galletas-de-avena',
      'brownie-bites',
      'alfajores',
      'galletas-de-chocolate',
      'mini-cupcakes',
      'trufas-caja',
    ],
    cta: {
      title: 'Caja personalizada',
      text: 'Elige tus favoritos y armamos tu caja.',
      button: 'Personalizar caja',
      message:
        'Hola Maison Miga, quiero armar una caja personalizada de bocaditos.',
    },
  },
  {
    slug: 'eventos-catering',
    title: 'Eventos & Catering',
    eyebrow: 'Eventos',
    subtitle:
      'Hacemos unicos tus momentos especiales con mesas dulces, tortas y bocaditos.',
    description:
      'Propuestas a medida para cumpleanos, reuniones, bodas, empresas y celebraciones especiales.',
    heroImage: images.event,
    breadcrumbLabel: 'Eventos & Catering',
    features: ['Cumpleanos', 'Reuniones', 'Bodas', 'Empresas', 'Fiestas'],
    filters: ['Todos', 'Cumpleanos', 'Empresas', 'Reuniones', 'Boxes', 'Packs'],
    productSlugs: [
      'tortas-personalizadas-eventos',
      'mesas-dulces',
      'desayunos-corporativos',
      'cajas-de-catering',
      'bandejas-de-postres',
      'packs-de-celebracion',
    ],
    cta: {
      title: 'Cuentanos tu idea',
      text: 'Te ayudamos a hacerla realidad.',
      button: 'Cotizar por WhatsApp',
      message:
        'Hola Maison Miga, quiero cotizar un evento. Fecha, personas y tipo de evento:',
    },
    services: [
      'Tortas Personalizadas',
      'Mesas Dulces',
      'Catering',
      'Bocaditos',
      'Desayunos corporativos',
      'Cajas de regalo',
    ],
    process: [
      'Cuentanos tu idea',
      'Elige productos',
      'Confirma fecha y cantidad',
      'Recibe o retira tu pedido',
    ],
  },
]

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
    caramelDark: '#a96822',
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
    image: images.breadHero,
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
  navbarLinks: [
    { label: 'Inicio', href: '/' },
    { label: 'Especialidades', href: '/especialidades/panaderia-artesanal' },
    { label: 'Favoritos', href: '/productos' },
    { label: 'Desayunos', href: '/especialidades/desayunos-cafe' },
    { label: 'Eventos', href: '/especialidades/eventos-catering' },
    { label: 'Ubicacion', href: '/#ubicacion' },
    { label: 'FAQ', href: '/#faq' },
  ],
  hero: {
    eyebrow: 'Hecho con tiempo, dedicado a ti',
    title: 'Pan recien hecho, postres artesanales y momentos para disfrutar.',
    accent: 'para disfrutar.',
    subtitle:
      'En Maison Miga creamos cada producto con ingredientes de calidad, tecnicas artesanales y mucho amor.',
    cta: 'Pedir por WhatsApp',
    secondaryCta: 'Ver especialidades',
    secondaryHref: '/especialidades/panaderia-artesanal',
    image: images.breadHero,
    imageAlt: 'Pan artesanal recien horneado sobre una mesa de panaderia',
    highlights: [
      { value: 'Trigo', label: 'Fresco cada manana' },
      { value: 'Torta', label: 'Tortas personalizadas' },
      { value: 'Cafe', label: 'Desayunos y cafe' },
      { value: 'Mesa', label: 'Eventos y catering' },
    ],
  },
  sections: {
    specialties: {
      eyebrow: 'Nuestras especialidades',
      title: 'Sabores que hablan de nosotros',
      description:
        'Cada linea de producto tiene una razon: desayuno, regalo, reunion, pausa de cafe o mesa especial para eventos.',
    },
    favorites: {
      eyebrow: 'Lo mas amado',
      title: 'Nuestros favoritos',
      description: 'Los productos que conquistan a todos nuestros clientes.',
    },
    breakfast: {
      eyebrow: 'Desayunos y cafe',
      title: 'Empieza el dia con pan caliente, cafe fresco y algo preparado con calma.',
      description:
        'Combos para la manana, opciones saladas, jugos naturales y piezas dulces para quedarse o llevar.',
    },
    events: {
      eyebrow: 'Para cada ocasion',
      title: 'Hacemos de tus momentos algo inolvidable',
      description:
        'Tortas personalizadas, bocaditos, mesas dulces y catering para cumpleanos, reuniones y eventos corporativos.',
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
  categories,
  products: enrichedProducts,
  specialties: categories.map((category) => ({
    name: category.title,
    slug: category.slug,
    description: category.description,
    cta: 'Ver categoria',
    image: category.heroImage,
    href: `/especialidades/${category.slug}`,
    whatsappMessage: category.cta.message,
  })),
  breakfast: {
    image: images.coffee,
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
  eventImage: images.event,
  eventCta: 'Solicitar cotizacion',
  eventWhatsappMessage:
    'Hola Maison Miga, quiero cotizar un pedido para evento.',
  eventServices: [
    {
      title: 'Tortas Personalizadas',
      description: 'Disenos unicos para tu celebracion.',
      image: images.cake,
    },
    {
      title: 'Mesas Dulces',
      description: 'Variedad de postres y bocaditos.',
      image: images.event,
    },
    {
      title: 'Catering',
      description: 'Desayunos, coffee breaks y mas.',
      image: images.breakfast,
    },
    {
      title: 'Bocaditos',
      description: 'Salados y dulces para eventos.',
      image: images.catering,
    },
  ],
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
  footerLinks: [
    { label: 'Inicio', href: '/' },
    { label: 'Especialidades', href: '/especialidades/panaderia-artesanal' },
    { label: 'Productos', href: '/productos' },
    { label: 'Eventos', href: '/especialidades/eventos-catering' },
    { label: 'Ubicacion', href: '/#ubicacion' },
  ],
  footerServices: [
    'Pan artesanal',
    'Tortas y postres',
    'Desayunos',
    'Eventos y catering',
  ],
  footerNote:
    'Maison Miga es una marca ficticia creada como landing page premium para panaderias, pastelerias y negocios gastronomicos locales.',
}

export function getCategoryBySlug(slug) {
  return bakeryData.categories.find((category) => category.slug === slug)
}

export function getProductBySlug(slug) {
  return bakeryData.products.find((product) => product.slug === slug)
}

export function getProductsByCategory(categorySlug) {
  return bakeryData.products.filter(
    (product) => product.categorySlug === categorySlug,
  )
}

export default bakeryData
