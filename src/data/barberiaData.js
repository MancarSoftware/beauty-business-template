import barberHero from '../assets/barber-hero.png'

const barberiaData = {
  name: 'BarberPro Studio',
  shortName: 'BarberPro',
  type: 'Barbería Premium',
  slogan: 'Estilo profesional para hombres modernos',
  description:
    'Cortes precisos, barba cuidada y una experiencia premium pensada para que salgas listo para cualquier ocasión.',
  positioning:
    'Reserva rápida, acabado preciso y atención premium sin esperas largas.',
  whatsapp: '593999999999',
  whatsappMessage: 'Hola BarberPro Studio, quiero agendar una cita.',
  phone: '+593 99 999 9999',
  email: 'reservas@barberpro.ec',
  address: 'Av. Principal y Calle Central, Quito',
  schedule: 'Lunes a sábado - 09:00 a 20:00',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.%20Principal%20y%20Calle%20Central%20Quito',
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
    eyebrow: 'Barbería premium en tu ciudad',
    title: 'Cortes impecables para hombres que cuidan su estilo.',
    subtitle:
      'Agenda rápido por WhatsApp y vive una experiencia de barbería moderna: atención puntual, asesoría personalizada y acabados de alto nivel.',
    image: barberHero,
    cta: 'Agendar por WhatsApp',
    secondaryCta: 'Ver servicios',
    highlights: ['Reserva rápida', 'Atención profesional', 'Ambiente premium'],
    booking: {
      label: 'Próximo turno',
      value: 'Hoy desde 16:30',
      service: 'Corte + barba',
      duration: '40 min aprox.',
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
      name: 'Corte clásico',
      description: 'Corte limpio, sobrio y adaptable a tu estilo diario.',
      price: 'Desde $12',
    },
    {
      icon: 'fade',
      name: 'Corte degradado',
      description: 'Fade bajo, medio o alto con acabado preciso y moderno.',
      price: 'Desde $15',
    },
    {
      icon: 'beard',
      name: 'Diseño de barba',
      description: 'Perfilado, simetría y detalle para una barba definida.',
      price: 'Desde $10',
    },
    {
      icon: 'brow',
      name: 'Perfilado de cejas',
      description: 'Limpieza natural para resaltar tu expresión sin exagerar.',
      price: 'Desde $5',
    },
    {
      icon: 'style',
      name: 'Tinte y estilo',
      description: 'Color, matizado y peinado final con productos premium.',
      price: 'Desde $25',
    },
  ],
  benefits: [
    {
      title: 'Atención profesional',
      description:
        'Barberos capacitados, puntuales y enfocados en el detalle de cada corte.',
    },
    {
      title: 'Estilo moderno',
      description:
        'Tendencias actuales adaptadas a tu rostro, cabello y rutina diaria.',
    },
    {
      title: 'Reserva rápida',
      description:
        'Contacto directo por WhatsApp para coordinar horario sin complicaciones.',
    },
    {
      title: 'Ambiente cómodo',
      description:
        'Espacio limpio, elegante y pensado para una experiencia relajada.',
    },
    {
      title: 'Experiencia personalizada',
      description:
        'Recomendaciones reales según tu estilo, tipo de cabello y ocasión.',
    },
  ],
  gallery: [
    {
      title: 'Fade ejecutivo',
      category: 'Degradado',
      description: 'Laterales limpios con transición suave y acabado natural.',
      metric: 'Fade medio',
      initials: '01',
      background:
        'linear-gradient(135deg, #0f1115 0%, #2f333b 52%, #8c6428 100%)',
    },
    {
      title: 'Barba definida',
      category: 'Barba',
      description: 'Líneas precisas, volumen controlado y perfil masculino.',
      metric: 'Contorno premium',
      initials: '02',
      background:
        'linear-gradient(135deg, #15110d 0%, #3b3025 50%, #c59b57 100%)',
    },
    {
      title: 'Corte texturizado',
      category: 'Estilo',
      description: 'Movimiento, textura y peinado final para un look moderno.',
      metric: 'Textura natural',
      initials: '03',
      background:
        'linear-gradient(135deg, #111827 0%, #273449 50%, #9a7a44 100%)',
    },
    {
      title: 'Perfil premium',
      category: 'Detalle',
      description: 'Contornos limpios para una presentación impecable.',
      metric: 'Acabado nítido',
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
      description: 'Ideal para mantener tu estilo con acabado profesional.',
      benefits: ['Diagnóstico rápido', 'Corte con máquina o tijera', 'Peinado final'],
    },
    {
      name: 'Corte + barba',
      price: '$20',
      tag: 'Más elegido',
      duration: '40 min',
      description: 'Servicio completo para un look limpio y equilibrado.',
      benefits: ['Corte personalizado', 'Perfilado de barba', 'Toalla caliente'],
      featured: true,
    },
    {
      name: 'Servicio premium',
      price: '$28',
      tag: 'Detalle avanzado',
      duration: '55 min',
      description: 'Mayor detalle, asesoría y acabado con productos premium.',
      benefits: ['Asesoría de imagen', 'Corte avanzado', 'Barba o cejas'],
    },
    {
      name: 'Paquete completo',
      price: '$38',
      tag: 'Cambio total',
      duration: '75 min',
      description: 'La experiencia completa para eventos o renovación total.',
      benefits: ['Corte + barba', 'Perfilado de cejas', 'Lavado y styling'],
    },
  ],
  testimonials: [
    {
      name: 'Carlos Mendoza',
      role: 'Cliente frecuente',
      quote:
        'El corte queda exactamente como lo pido y siempre me recomiendan qué estilo me favorece más. Muy profesionales.',
    },
    {
      name: 'Daniel Ortega',
      role: 'Emprendedor local',
      quote:
        'Reservo por WhatsApp, llego a mi hora y salgo listo. El ambiente es cómodo y el servicio se siente premium.',
    },
    {
      name: 'Andres Paredes',
      role: 'Cliente nuevo',
      quote:
        'Fui por un degradado y barba. El detalle en los contornos fue excelente, se nota la experiencia.',
    },
  ],
  contactCta: {
    title: 'Agenda tu próxima cita hoy',
    text: 'Escríbenos por WhatsApp o deja tus datos y prepara tu siguiente cambio de estilo.',
  },
  footerServices: ['Corte clásico', 'Corte degradado', 'Barba', 'Tinte y estilo'],
}

export default barberiaData
