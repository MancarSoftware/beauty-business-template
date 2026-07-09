import salonBalayage from '../assets/salon-balayage.png'
import salonColor from '../assets/salon-color.png'
import salonHero from '../assets/salon-hero.png'
import salonStyling from '../assets/salon-styling.png'
import salonTreatment from '../assets/salon-treatment.png'

const salonData = {
  name: 'Bella Aura Studio',
  shortName: 'Bella Aura',
  logoInitials: 'BA',
  type: 'Salón de belleza premium',
  slogan: 'Color, corte y styling con asesoría profesional',
  description:
    'Salón especializado en coloración, cortes, tratamientos capilares, peinados y maquillaje social en Quito.',
  positioning:
    'Agenda por WhatsApp, confirma tu horario y recibe una asesoría antes de cada servicio.',
  whatsapp: '593987654321',
  whatsappMessage: 'Hola Bella Aura Studio, quiero agendar una cita.',
  phone: '+593 98 765 4321',
  email: 'reservas@bellaaura.ec',
  address: 'Av. Portugal E10-57 y República de El Salvador, Quito',
  schedule: 'Lunes a sábado - 10:00 a 19:00',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.%20Portugal%20E10-57%20y%20Rep%C3%BAblica%20de%20El%20Salvador%20Quito',
  theme: {
    accent: '#e7b7c8',
    accentDark: '#9f4f68',
    dark: '#130f12',
    surface: '#21191f',
  },
  seo: {
  title: 'Bella Aura Studio | Salón de belleza premium en Quito',
  description:
    'Reserva por WhatsApp servicios de color profesional, corte, balayage, tratamientos capilares, peinados y maquillaje social en Quito.',
  image: '/favicon.svg',
  locale: 'es_EC',
  areaServed: 'Quito, Ecuador',
  priceRange: '$$',
  },
  social: {
    instagram: '#',
    facebook: '#',
    tiktok: '#',
  },
  hero: {
    eyebrow: 'Salón boutique en Quito',
    title: 'Bella Aura Studio',
    subtitle:
      'Color, corte, tratamientos y styling con una experiencia tranquila, elegante y pensada para cuidar tu cabello desde la asesoría hasta el acabado final.',
    image: salonHero,
    cta: 'Agendar por WhatsApp',
    secondaryCta: 'Ver servicios',
    highlights: ['Color profesional', 'Asesoría personalizada', 'Reserva confirmada'],
    booking: {
      label: 'Reserva de salón',
      value: 'Consulta disponibilidad',
      suggestedLabel: 'Servicio destacado',
      service: 'Color + brushing',
      duration: 'Te confirmamos horario, duración y estilista disponible.',
      price: '$35',
      priceLabel: 'Desde',
    },
    stats: [
      { value: '+6', label: 'años de experiencia' },
      { value: '4.8', label: 'calificación promedio' },
      { value: '60 min', label: 'tiempo promedio' },
    ],
  },
  sections: {
    services: {
      eyebrow: 'Servicios Bella Aura',
      title: 'Color, corte, peinado y cuidado capilar en un solo lugar',
      description:
        'Reserva el servicio que necesitas y cuéntanos tu objetivo. Antes de empezar revisamos tu cabello, historial de color y resultado esperado.',
    },
    benefits: {
      eyebrow: 'Experiencia Bella Aura',
      title: 'Te asesoramos antes de tocar tu cabello',
      description:
        'Cada cita empieza con una evaluación rápida del cabello y una conversación clara sobre tonos, mantenimiento, largo, textura y acabado.',
      cardTitle: 'Cómo cuidamos tu resultado',
      cardText:
        'Confirmamos tu reserva por WhatsApp, preparamos el servicio según tu cabello y te damos recomendaciones para mantener el color, brillo y forma en casa.',
    },
    gallery: {
      eyebrow: 'Resultados Bella Aura',
      title: 'Inspírate con acabados de color, ondas y brillo saludable',
      description:
        'Trabajos de coloración, balayage, styling y tratamiento capilar realizados para clientas que buscan un cambio elegante y fácil de mantener.',
    },
    pricing: {
      eyebrow: 'Precios Bella Aura',
      title: 'Elige tu servicio y confirma tu cita por WhatsApp',
      description:
        'Los precios son desde y pueden variar según largo, volumen e historial del cabello. Te orientamos antes de confirmar la reserva.',
    },
    testimonials: {
      eyebrow: 'Clientas Bella Aura',
      title: 'Clientas que vuelven por el color, el trato y el acabado',
      description:
        'Nos visitan por asesoría honesta, puntualidad, color bien trabajado y peinados que duran más allá de la cita.',
    },
    location: {
      eyebrow: 'Ubicación y horarios',
      title: 'Estamos en Av. Portugal, sector República de El Salvador',
      description:
        'Agenda antes de venir para separar tu espacio con una estilista y confirmar el tiempo de tu servicio.',
      mapLabel: 'Bella Aura Studio',
    },
  },
  services: [
    {
      icon: 'cut',
      label: 'Corte',
      name: 'Corte y brushing',
      description:
        'Corte según tu rostro, limpieza de puntas, secado y acabado con movimiento natural.',
      price: 'Desde $18',
    },
    {
      icon: 'color',
      label: 'Color',
      name: 'Color completo',
      description:
        'Aplicación de color con diagnóstico previo, cobertura uniforme y brillo profesional.',
      price: 'Desde $35',
    },
    {
      icon: 'balayage',
      label: 'Balayage',
      name: 'Balayage iluminado',
      description:
        'Iluminación personalizada para dar dimensión, luz al rostro y acabado elegante.',
      price: 'Desde $70',
    },
    {
      icon: 'care',
      label: 'Cuidado',
      name: 'Hidratación profunda',
      description:
        'Tratamiento nutritivo para recuperar suavidad, brillo y control del frizz.',
      price: 'Desde $25',
    },
    {
      icon: 'makeup',
      label: 'Evento',
      name: 'Peinado y maquillaje',
      description:
        'Producción para eventos sociales con peinado duradero y maquillaje luminoso.',
      price: 'Desde $45',
    },
  ],
  benefits: [
    {
      title: 'Diagnóstico de cabello',
      description:
        'Revisamos textura, porosidad, color previo y objetivo antes de recomendar un servicio.',
    },
    {
      title: 'Color con intención',
      description:
        'Buscamos tonos que favorezcan tu piel, rutina y frecuencia real de mantenimiento.',
    },
    {
      title: 'Reserva organizada',
      description:
        'Coordinas por WhatsApp y confirmamos tiempo estimado, disponibilidad y servicio.',
    },
    {
      title: 'Acabado de salón',
      description:
        'Cada servicio termina con brushing, styling o recomendación de producto según el resultado.',
    },
    {
      title: 'Cuidado posterior',
      description:
        'Te explicamos cómo mantener el color, brillo y forma para que el resultado dure más.',
    },
  ],
  gallery: [
    {
      title: 'Balayage champagne',
      category: 'Color',
      description:
        'Iluminación suave para dar dimensión al cabello sin perder naturalidad.',
      metric: 'Luz natural',
      image: salonBalayage,
      initials: '01',
      background:
        'linear-gradient(135deg, #1d151a 0%, #5f3947 52%, #e7b7c8 100%)',
    },
    {
      title: 'Color glossy',
      category: 'Tono',
      description:
        'Color uniforme con brillo intenso y acabado pulido para renovar la imagen.',
      metric: 'Brillo intenso',
      image: salonColor,
      initials: '02',
      background:
        'linear-gradient(135deg, #21191f 0%, #8b5366 50%, #f0cfdb 100%)',
    },
    {
      title: 'Ondas para evento',
      category: 'Styling',
      description:
        'Peinado con ondas suaves, volumen controlado y duración para una ocasión especial.',
      metric: 'Acabado social',
      image: salonStyling,
      initials: '03',
      background:
        'linear-gradient(135deg, #171114 0%, #6c4657 50%, #d8b16f 100%)',
    },
    {
      title: 'Hidratación premium',
      category: 'Cuidado',
      description:
        'Cabello más suave, brillante y manejable después del tratamiento nutritivo.',
      metric: 'Brillo saludable',
      image: salonTreatment,
      initials: '04',
      background:
        'linear-gradient(135deg, #120f12 0%, #4d3a42 48%, #e7b7c8 100%)',
    },
  ],
  pricing: [
    {
      name: 'Corte + brushing',
      price: '$18',
      tag: 'Mantenimiento',
      duration: '45 min',
      description:
        'Ideal para renovar forma, limpiar puntas y salir con acabado de salón.',
      benefits: ['Diagnóstico rápido', 'Corte personalizado', 'Brushing final'],
    },
    {
      name: 'Color + styling',
      price: '$35',
      tag: 'Más reservado',
      duration: '90 min',
      description:
        'Coloración completa con brillo, secado y recomendación de cuidado.',
      benefits: ['Evaluación de tono', 'Aplicación de color', 'Styling final'],
      featured: true,
    },
    {
      name: 'Balayage premium',
      price: '$70',
      tag: 'Cambio de look',
      duration: '180 min',
      description:
        'Iluminación personalizada para un resultado elegante y de bajo mantenimiento.',
      benefits: ['Diseño de color', 'Matizado', 'Tratamiento post-color'],
    },
    {
      name: 'Evento completo',
      price: '$60',
      tag: 'Social',
      duration: '120 min',
      description:
        'Peinado y maquillaje para bodas, graduaciones, cenas o sesiones de fotos.',
      benefits: ['Preparación de piel', 'Maquillaje social', 'Peinado duradero'],
    },
  ],
  testimonials: [
    {
      name: 'Camila Torres',
      role: 'Balayage champagne',
      quote:
        'Me explicaron el proceso antes de empezar y el color quedó justo como quería: luminoso, suave y fácil de mantener.',
    },
    {
      name: 'Valeria Molina',
      role: 'Corte + brushing',
      quote:
        'Reservé por WhatsApp, me atendieron a la hora y salí con el cabello con forma y movimiento. Muy buena atención.',
    },
    {
      name: 'Daniela Paredes',
      role: 'Peinado para evento',
      quote:
        'El peinado me duró toda la noche y el maquillaje quedó natural pero elegante. Volvería sin pensarlo.',
    },
  ],
  contactCta: {
    title: 'Agenda tu cita en Bella Aura Studio',
    text: 'Escríbenos por WhatsApp, cuéntanos qué servicio necesitas y te confirmamos disponibilidad, duración y precio desde según tu cabello.',
  },
  contactForm: {
    eyebrow: 'Reserva directa',
    title: 'Cuéntanos qué quieres hacerte',
    responseLabel: 'Respuesta por WhatsApp',
    initialMessage: 'Hola, quiero agendar una cita en Bella Aura Studio.',
    submitLabel: 'Enviar por WhatsApp',
  },
  footerServices: ['Corte y brushing', 'Color completo', 'Balayage', 'Peinado social'],
  footerNote: 'Reservas por WhatsApp para color, corte, tratamientos y peinados.',
}

export default salonData
