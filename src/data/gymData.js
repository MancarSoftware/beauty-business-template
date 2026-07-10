const gymData = {
  name: 'Titan Fit Gym',
  shortName: 'Titan Fit',
  logoInitials: 'TF',
  type: 'Gimnasio premium',
  slogan: 'Entrena con propósito, estructura y resultados reales',
  description:
    'Gimnasio premium con programas por objetivo, planes flexibles, entrenadores certificados y contacto directo por WhatsApp.',
  whatsapp: '593987654321',
  whatsappMessage: 'Hola Titan Fit Gym, quiero información para empezar a entrenar.',
  phone: '+593 98 765 4321',
  email: 'info@titanfitgym.com',
  address: 'Av. República de El Salvador y Portugal, Quito, Ecuador',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.%20Rep%C3%BAblica%20de%20El%20Salvador%20y%20Portugal%2C%20Quito%2C%20Ecuador',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Av.%20Rep%C3%BAblica%20de%20El%20Salvador%20y%20Portugal%2C%20Quito%2C%20Ecuador&z=16&output=embed',

  theme: {
    accent: '#c98914',
    accentDark: '#9d690c',
    dark: '#101010',
    surface: '#ffffff',
  },

  seo: {
    title: 'Titan Fit Gym | Gimnasio premium en Quito',
    description:
      'Planes de gimnasio, entrenamiento personalizado, programas de fuerza, hipertrofia, pérdida de grasa y acondicionamiento en Quito.',
    image: '/favicon.svg',
    locale: 'es_EC',
    areaServed: 'Quito, Ecuador',
    priceRange: '$$',
    businessType: 'ExerciseGym',
  },

  social: {
    instagram: '#',
    facebook: 'https://www.facebook.com/share/1BNpTPm6Wz/',
    tiktok: '#',
  },

  developer: {
    name: 'Mancar Software',
    text: 'Página creada por',
    url: 'https://www.facebook.com/share/1BNpTPm6Wz/',
  },

  hero: {
    eyebrow: 'Gimnasio premium en Quito',
    title: 'Entrena con propósito',
    accentTitle: 'y resultados reales',
    subtitle:
      'Programas por objetivo, planes flexibles y acompañamiento profesional para mejorar fuerza, energía y disciplina.',
    image:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=80',
    cta: 'Comenzar ahora',
    secondaryHref: '#planes',
    secondaryCta: 'Ver planes',
    features: [
      { title: '+500', text: 'miembros activos' },
      { title: '24/7', text: 'acceso disponible' },
      { title: '12', text: 'entrenadores' },
    ],
  },

  sections: {
    programs: {
      eyebrow: 'Programas',
      title: 'Entrenamiento según tu objetivo',
      description:
        'Elige el camino correcto: fuerza, hipertrofia, pérdida de grasa o entrenamiento personalizado.',
    },
    pricing: {
      eyebrow: 'Membresías',
      title: 'Planes claros para empezar sin complicaciones',
      description:
        'Opciones flexibles para entrenar a tu ritmo con una experiencia profesional.',
    },
    benefits: {
      eyebrow: 'Por qué elegirnos',
      title: 'Un gimnasio diseñado para entrenar con orden',
      description:
        'Espacios modernos, entrenadores preparados y seguimiento para que sepas cómo avanzar.',
    },
    trainers: {
      eyebrow: 'Equipo profesional',
      title: 'Entrenadores que guían tu progreso',
      description:
        'Acompañamiento en fuerza, hipertrofia, rendimiento, nutrición y clases grupales.',
    },
    location: {
      eyebrow: 'Horarios y ubicación',
      title: 'Entrena cuando puedas',
      description:
        'Estamos ubicados en una zona de fácil acceso con horarios amplios y contacto directo por WhatsApp.',
    },
  },

  programs: [
    {
      icon: '01',
      name: 'Hipertrofia',
      description:
        'Rutinas progresivas para aumentar masa muscular con técnica y control.',
      whatsappMessage:
        'Hola Titan Fit Gym, quiero información sobre el programa de hipertrofia.',
    },
    {
      icon: '02',
      name: 'Pérdida de grasa',
      description:
        'Entrenamientos medibles para mejorar composición corporal y condición física.',
      whatsappMessage:
        'Hola Titan Fit Gym, quiero información sobre pérdida de grasa.',
    },
    {
      icon: '03',
      name: 'Fuerza',
      description:
        'Programa para mejorar potencia, técnica y rendimiento en sala de pesas.',
      whatsappMessage:
        'Hola Titan Fit Gym, quiero información sobre el programa de fuerza.',
    },
    {
      icon: '04',
      name: 'Acondicionamiento',
      description:
        'Sesiones dinámicas para resistencia, agilidad y energía diaria.',
      whatsappMessage:
        'Hola Titan Fit Gym, quiero información sobre acondicionamiento.',
    },
    {
      icon: '05',
      name: 'Personal trainer',
      description:
        'Entrenamiento uno a uno con seguimiento directo según tu objetivo.',
      whatsappMessage:
        'Hola Titan Fit Gym, quiero información sobre entrenamiento personalizado.',
    },
  ],

  pricing: [
    {
      name: 'Básico',
      price: '$49.900',
      period: '/mes',
      tag: 'Inicio',
      description: 'Para empezar con acceso al gimnasio y rutina base.',
      benefits: [
        'Acceso al gimnasio',
        'Rutina inicial',
        'Sala de pesas',
        'Asesoría inicial',
      ],
      whatsappMessage: 'Hola Titan Fit Gym, quiero información sobre el plan Básico.',
    },
    {
      name: 'Premium',
      price: '$79.900',
      period: '/mes',
      tag: 'Más elegido',
      description: 'Para entrenar con más acompañamiento y clases grupales.',
      benefits: [
        'Todo lo del plan Básico',
        'Clases grupales ilimitadas',
        'Evaluación mensual',
        'Plan nutricional básico',
        'Seguimiento por WhatsApp',
      ],
      whatsappMessage: 'Hola Titan Fit Gym, quiero información sobre el plan Premium.',
      featured: true,
    },
    {
      name: 'Titan',
      price: '$119.900',
      period: '/mes',
      tag: 'Avanzado',
      description: 'Para objetivos exigentes con entrenamiento personalizado.',
      benefits: [
        'Todo lo del plan Premium',
        'Entrenamiento personalizado',
        'Plan nutricional avanzado',
        'Evaluaciones semanales',
        'Acceso 24/7',
      ],
      whatsappMessage: 'Hola Titan Fit Gym, quiero información sobre el plan Titan.',
    },
  ],

  benefits: [
    {
      title: 'Entrenadores certificados',
      description: 'Profesionales preparados para guiar tu progreso con seguridad.',
    },
    {
      title: 'Equipamiento premium',
      description: 'Máquinas modernas y espacios adecuados para entrenar cómodo.',
    },
    {
      title: 'Horarios flexibles',
      description: 'Entrena en la mañana, tarde o noche según tu rutina.',
    },
    {
      title: 'Seguimiento real',
      description: 'Evaluaciones y orientación para medir tu avance.',
    },
    {
      title: 'Ambiente profesional',
      description: 'Espacios limpios, organizados y enfocados en resultados.',
    },
    {
      title: 'Comunidad activa',
      description: 'Un entorno motivador para mantener disciplina y constancia.',
    },
  ],

  trainers: [
    {
      name: 'Andrés Vargas',
      initials: 'AV',
      role: 'Fuerza e hipertrofia',
    },
    {
      name: 'Laura Mesa',
      initials: 'LM',
      role: 'Nutrición deportiva',
    },
    {
      name: 'Daniel Rojas',
      initials: 'DR',
      role: 'Rendimiento físico',
    },
    {
      name: 'Paula Gómez',
      initials: 'PG',
      role: 'Clases grupales',
    },
  ],

  locationFeatures: [
    'Parqueadero gratuito',
    'Vestidores y duchas',
    'Zona de estiramiento',
    'Wi-Fi disponible',
  ],

  scheduleBlocks: [
    { day: 'Lunes a viernes', time: '05:30 - 22:00' },
    { day: 'Sábados', time: '07:00 - 20:00' },
    { day: 'Domingos y feriados', time: '08:00 - 14:00' },
  ],

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Resolvemos tus dudas antes de empezar',
    description:
      'Información rápida sobre horarios, planes, clases y contacto.',
    items: [
      {
        question: '¿Necesito experiencia previa?',
        answer:
          'No. Tenemos programas para principiantes, intermedios y avanzados.',
      },
      {
        question: '¿Los planes incluyen clases?',
        answer:
          'El plan Premium y Titan incluyen clases grupales ilimitadas.',
      },
      {
        question: '¿Puedo pagar mensual?',
        answer:
          'Sí. Puedes consultar disponibilidad y formas de pago por WhatsApp.',
      },
      {
        question: '¿Hay entrenamiento personalizado?',
        answer:
          'Sí. El plan Titan incluye acompañamiento personalizado.',
      },
    ],
  },

  contactCta: {
    title: '¿Listo para empezar?',
    text: 'Escríbenos por WhatsApp y te ayudamos a elegir el plan correcto.',
  },

  footerServices: [
    'Hipertrofia',
    'Pérdida de grasa',
    'Fuerza',
    'Personal trainer',
  ],

  footerNote: 'Programas, membresías y asesoría por WhatsApp para nuevos miembros.',
}

export default gymData