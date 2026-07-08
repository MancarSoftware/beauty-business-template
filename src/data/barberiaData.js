import barberHero from '../assets/barber-hero.png'
import galleryBeard from '../assets/gallery-beard.png'
import galleryDetail from '../assets/gallery-detail.png'
import galleryFade from '../assets/gallery-fade.png'
import galleryTexture from '../assets/gallery-texture.png'

const barberiaData = {
  name: 'BarberPro Studio',
  shortName: 'BarberPro',
  type: 'Barbería masculina',
  slogan: 'Cortes, barba y estilo con acabado profesional',
  description:
    'Barbería especializada en cortes masculinos, degradados, barba y styling profesional en Quito.',
  positioning:
    'Agenda por WhatsApp, confirma tu horario y llega directo a tu silla.',
  whatsapp: '593999999999',
  whatsappMessage: 'Hola BarberPro Studio, quiero agendar una cita.',
  phone: '+593 99 999 9999',
  email: 'reservas@barberpro.ec',
  address: 'Av. República de El Salvador N34-211, Quito',
  schedule: 'Lunes a sábado - 09:00 a 20:00',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.%20Rep%C3%BAblica%20de%20El%20Salvador%20N34-211%20Quito',
  theme: {
    accent: '#d6a85a',
    dark: '#08090a',
    surface: '#111315',
  },
  social: {
    instagram: '#',
    facebook: '#',
    tiktok: '#',
  },
  hero: {
    eyebrow: 'Barbería masculina en Quito',
    title: 'Corte, barba y estilo listo para salir impecable.',
    subtitle:
      'Agenda tu turno en BarberPro Studio por WhatsApp. Te atendemos con puntualidad, diagnóstico antes del corte, productos profesionales y acabado final para que salgas listo.',
    image: barberHero,
    cta: 'Agendar por WhatsApp',
    secondaryCta: 'Ver servicios',
    highlights: ['Reserva rápida', 'Atención profesional', 'Ambiente premium'],
    booking: {
      label: 'Reserva directa',
      value: 'Consulta disponibilidad',
      service: 'Corte + barba',
      duration: 'Te confirmamos horario, duración y barbero disponible.',
    },
    stats: [
      { value: '+8', label: 'años de experiencia' },
      { value: '4.9', label: 'calificación promedio' },
      { value: '25 min', label: 'tiempo estimado por corte' },
    ],
  },
  services: [
    {
      icon: 'classic',
      label: 'Corte',
      name: 'Corte clásico',
      description: 'Corte con máquina o tijera, contornos limpios y peinado final para el día a día.',
      price: 'Desde $12',
    },
    {
      icon: 'fade',
      label: 'Fade',
      name: 'Corte degradado',
      description: 'Fade bajo, medio o alto con transición limpia, navaja en contornos y acabado moderno.',
      price: 'Desde $15',
    },
    {
      icon: 'beard',
      label: 'Barba',
      name: 'Diseño de barba',
      description: 'Perfilado con navaja, simetría y control de volumen para una barba definida.',
      price: 'Desde $10',
    },
    {
      icon: 'brow',
      label: 'Cejas',
      name: 'Perfilado de cejas',
      description: 'Limpieza precisa de cejas para mantener una expresión natural y ordenada.',
      price: 'Desde $5',
    },
    {
      icon: 'style',
      label: 'Color',
      name: 'Tinte y estilo',
      description: 'Aplicación de color, matizado y styling final con productos profesionales.',
      price: 'Desde $25',
    },
  ],
  benefits: [
    {
      title: 'Diagnóstico antes del corte',
      description:
        'Revisamos tu tipo de cabello, forma del rostro y referencia antes de empezar.',
    },
    {
      title: 'Degradados bien trabajados',
      description:
        'Cuidamos la transición del fade, los contornos y el acabado para que el corte se vea limpio.',
    },
    {
      title: 'Reserva confirmada',
      description:
        'Coordinas por WhatsApp, confirmamos disponibilidad y respetamos tu horario.',
    },
    {
      title: 'Estación limpia y ordenada',
      description:
        'Trabajamos con herramientas preparadas, productos profesionales y un espacio cómodo.',
    },
    {
      title: 'Recomendación final',
      description:
        'Te explicamos cómo peinar y mantener el corte para que conserve la forma por más tiempo.',
    },
  ],
  gallery: [
    {
      title: 'Fade ejecutivo',
      category: 'Degradado',
      description: 'Laterales limpios con transición suave y acabado natural.',
      metric: 'Fade medio',
      image: galleryFade,
      initials: '01',
      background:
        'linear-gradient(135deg, #0f1115 0%, #2f333b 52%, #8c6428 100%)',
    },
    {
      title: 'Barba definida',
      category: 'Barba',
      description: 'Líneas precisas, volumen controlado y perfil masculino.',
      metric: 'Contorno premium',
      image: galleryBeard,
      initials: '02',
      background:
        'linear-gradient(135deg, #15110d 0%, #3b3025 50%, #c59b57 100%)',
    },
    {
      title: 'Corte texturizado',
      category: 'Estilo',
      description: 'Movimiento, textura y peinado final para un look moderno.',
      metric: 'Textura natural',
      image: galleryTexture,
      initials: '03',
      background:
        'linear-gradient(135deg, #111827 0%, #273449 50%, #9a7a44 100%)',
    },
    {
      title: 'Perfil premium',
      category: 'Detalle',
      description: 'Contornos limpios para una presentación impecable.',
      metric: 'Acabado nítido',
      image: galleryDetail,
      initials: '04',
      background:
        'linear-gradient(135deg, #09090b 0%, #2d2a27 48%, #7f5539 100%)',
    },
  ],
  pricing: [
    {
      name: 'Corte básico',
      price: '$12',
      tag: 'Mantenimiento',
      duration: '25 min',
      description: 'Ideal para retocar tu corte, limpiar contornos y salir peinado.',
      benefits: ['Diagnóstico rápido', 'Corte con máquina o tijera', 'Peinado final'],
    },
    {
      name: 'Corte + barba',
      price: '$20',
      tag: 'Más elegido',
      duration: '40 min',
      description: 'Corte personalizado, barba perfilada y acabado equilibrado en una sola cita.',
      benefits: ['Corte personalizado', 'Perfilado de barba', 'Toalla caliente'],
      featured: true,
    },
    {
      name: 'Servicio premium',
      price: '$28',
      tag: 'Detalle avanzado',
      duration: '55 min',
      description: 'Asesoría, corte avanzado y terminación con productos de styling profesional.',
      benefits: ['Asesoría de imagen', 'Corte avanzado', 'Barba o cejas'],
    },
    {
      name: 'Paquete completo',
      price: '$38',
      tag: 'Cambio total',
      duration: '75 min',
      description: 'Corte, barba, cejas, lavado y styling para cambio completo o evento.',
      benefits: ['Corte + barba', 'Perfilado de cejas', 'Lavado y styling'],
    },
  ],
  testimonials: [
    {
      name: 'Carlos Mendoza',
      role: 'Fade medio + barba',
      quote:
        'El corte queda exactamente como lo pido y siempre me recomiendan qué estilo me favorece más. Muy profesionales.',
    },
    {
      name: 'Daniel Ortega',
      role: 'Corte antes de reunión',
      quote:
        'Reservo por WhatsApp, llego a mi hora y salgo listo. El ambiente es cómodo y el servicio se siente premium.',
    },
    {
      name: 'Andres Paredes',
      role: 'Primer degradado',
      quote:
        'Fui por un degradado y barba. El detalle en los contornos fue excelente, se nota la experiencia.',
    },
  ],
  contactCta: {
    title: 'Agenda tu cita en BarberPro Studio',
    text: 'Escríbenos por WhatsApp para confirmar disponibilidad. Indica el servicio que quieres, tu horario preferido y te respondemos con el tiempo estimado.',
  },
  footerServices: ['Corte clásico', 'Corte degradado', 'Barba', 'Tinte y estilo'],
}

export default barberiaData
