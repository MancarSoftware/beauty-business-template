const gymData = {
  name: 'Titan Fit Gym',
  shortName: 'Titan Fit',
  logoInitials: 'TF',
  type: 'Gimnasio premium',
  slogan: 'Fuerza, disciplina y resultados reales',
  description:
    'Gimnasio premium con planes flexibles, entrenadores certificados, programas por objetivo y reservas por WhatsApp.',
  positioning:
    'Elige tu objetivo, revisa los planes y agenda una visita para empezar con acompañamiento profesional.',
  whatsapp: '593987654321',
  whatsappMessage: 'Hola Titan Fit Gym, quiero información para empezar a entrenar.',
  phone: '+593 98 765 4321',
  email: 'info@titanfitgym.com',
  address: 'Av. República de El Salvador y Portugal, Quito, Ecuador',
  schedule: 'Lunes a viernes 05:30 - 22:00 | Sábados 07:00 - 20:00',
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
      'Planes de gimnasio, entrenamiento personalizado, programas de fuerza, hipertrofia, pérdida de grasa y acondicionamiento en Quito. Agenda por WhatsApp.',
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
    title: 'Supera tus límites.',
    accentTitle: 'Transforma tu vida.',
    subtitle:
      'Entrena con planes claros, programas por objetivo y acompañamiento profesional para mejorar tu fuerza, energía y disciplina.',
    image:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=80',
    cta: 'Comienza hoy',
    secondaryHref: '#planes',
    secondaryCta: 'Ver planes',
    features: [
      { title: 'Entrenadores', text: 'certificados' },
      { title: 'Equipamiento', text: 'de primer nivel' },
      { title: 'Planes', text: 'para todos los niveles' },
    ],
  },

  sections: {
    programs: {
      eyebrow: 'Entrenamientos',
      title: 'Programas para cada objetivo',
      description:
        'Elige el programa ideal para alcanzar tus metas con el acompañamiento de expertos.',
    },
    pricing: {
      eyebrow: 'Planes que se adaptan a ti',
      title: 'Planes y membresías',
      description:
        'Elige el plan que mejor se adapte a tu rutina y comienza tu transformación.',
    },
    benefits: {
      eyebrow: 'Por qué elegir Titan Fit Gym',
      title: 'Entrena con estructura, ambiente seguro y seguimiento real',
      description:
        'No solo vendemos acceso al gimnasio. Te damos una experiencia organizada para que sepas qué hacer y cómo avanzar.',
    },
    trainers: {
      eyebrow: 'Entrenadores',
      title: 'Conoce a nuestros entrenadores',
      description:
        'Equipo preparado para guiarte en fuerza, hipertrofia, pérdida de grasa, rendimiento y clases grupales.',
    },
    location: {
      eyebrow: 'Horarios y ubicación',
      title: 'Entrena cuando puedas y llega sin complicaciones',
      description:
        'Estamos ubicados en una zona de fácil acceso. Consulta horarios, servicios disponibles y cómo llegar.',
    },
  },

  programs: [
    {
      icon: '▰',
      name: 'Hipertrofia',
      description:
        'Aumenta tu masa muscular con rutinas efectivas de crecimiento y progresión.',
      whatsappMessage:
        'Hola Titan Fit Gym, quiero información sobre el programa de hipertrofia.',
    },
    {
      icon: '●',
      name: 'Pérdida de grasa',
      description:
        'Quema grasa y mejora tu composición corporal con entrenamientos medibles.',
      whatsappMessage:
        'Hola Titan Fit Gym, quiero información sobre el programa de pérdida de grasa.',
    },
    {
      icon: '◆',
      name: 'Fuerza',
      description:
        'Desarrolla fuerza máxima y mejora tu rendimiento en cada entrenamiento.',
      whatsappMessage:
        'Hola Titan Fit Gym, quiero información sobre el programa de fuerza.',
    },
    {
      icon: '➜',
      name: 'Acondicionamiento',
      description:
        'Mejora resistencia, agilidad y salud con entrenos dinámicos y efectivos.',
      whatsappMessage:
        'Hola Titan Fit Gym, quiero información sobre acondicionamiento físico.',
    },
    {
      icon: '★',
      name: 'Entrenamiento personal',
      description:
        'Sesiones uno a uno con un coach para alcanzar tus metas más rápido.',
      whatsappMessage:
        'Hola Titan Fit Gym, quiero información sobre entrenamiento personal.',
    },
  ],

  pricing: [
    {
      name: 'Básico',
      price: '$49.900',
      period: '/mes',
      tag: 'Inicio inteligente',
      icon: '♛',
      description: 'Para empezar con acceso al gimnasio y una rutina base.',
      benefits: [
        'Acceso al gimnasio',
        'Rutina de entrenamiento',
        'Acceso a sala de pesas',
        'Asesoría inicial',
      ],
      whatsappMessage: 'Hola Titan Fit Gym, quiero información sobre el plan Básico.',
    },
    {
      name: 'Premium',
      price: '$79.900',
      period: '/mes',
      tag: 'Más popular',
      icon: '♕',
      description: 'Para avanzar con clases, seguimiento y mayor acompañamiento.',
      benefits: [
        'Todo lo del plan Básico',
        'Clases grupales ilimitadas',
        'Plan nutricional básico',
        'Evaluación mensual',
        'Invita a un amigo 1 vez al mes',
      ],
      whatsappMessage: 'Hola Titan Fit Gym, quiero información sobre el plan Premium.',
      featured: true,
    },
    {
      name: 'Titan',
      price: '$119.900',
      period: '/mes',
      tag: 'Alto rendimiento',
      icon: '◇',
      description: 'Para entrenar con guía personalizada y objetivos exigentes.',
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
      icon: '🏆',
      title: 'Entrenadores certificados',
      description: 'Profesionales con experiencia real para guiar tu progreso.',
    },
    {
      icon: '🏋️',
      title: 'Equipamiento premium',
      description: 'Maquinaria moderna para entrenamientos seguros y completos.',
    },
    {
      icon: '🥗',
      title: 'Asesoría nutricional',
      description: 'Guía práctica para mejorar tu alimentación y rendimiento.',
    },
    {
      icon: '🕒',
      title: 'Horarios flexibles',
      description: 'Entrena en la mañana, tarde o noche según tu rutina diaria.',
    },
    {
      icon: '🤝',
      title: 'Comunidad motivadora',
      description: 'Ambiente positivo para mantener constancia y disciplina.',
    },
    {
      icon: '🔒',
      title: 'Ambiente seguro',
      description: 'Instalaciones limpias, modernas y con mantenimiento regular.',
    },
  ],

  trainers: [
    {
      name: 'Andrés Vargas',
      initials: 'AV',
      role: 'Entrenador de fuerza e hipertrofia',
    },
    {
      name: 'Laura Mesa',
      initials: 'LM',
      role: 'Nutricionista deportiva',
    },
    {
      name: 'Daniel Rojas',
      initials: 'DR',
      role: 'Especialista en rendimiento',
    },
    {
      name: 'Paula Gómez',
      initials: 'PG',
      role: 'Entrenadora de clases grupales',
    },
  ],

  locationFeatures: [
    'Parqueadero gratuito',
    'Vestidores y duchas',
    'Zona de estiramiento',
    'Wi-Fi de alta velocidad',
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
      'Información rápida sobre horarios, planes, clases, membresías y forma de contacto.',
    items: [
      {
        question: '¿Cuál es el horario de atención?',
        answer:
          'Atendemos de lunes a viernes de 05:30 a 22:00, sábados de 07:00 a 20:00 y domingos de 08:00 a 14:00.',
      },
      {
        question: '¿Necesito experiencia previa para entrenar?',
        answer:
          'No. Tenemos programas para principiantes, intermedios y personas con experiencia.',
      },
      {
        question: '¿Los planes incluyen clases grupales?',
        answer:
          'El plan Premium y el plan Titan incluyen clases grupales ilimitadas. El plan Básico puede incluir clases según promoción vigente.',
      },
      {
        question: '¿Puedo congelar mi membresía?',
        answer:
          'Sí. Puedes solicitar la congelación de tu membresía según las condiciones del plan contratado.',
      },
      {
        question: '¿Qué métodos de pago aceptan?',
        answer:
          'Aceptamos efectivo, transferencia y pagos con tarjeta. Puedes confirmar opciones actualizadas por WhatsApp.',
      },
      {
        question: '¿Ofrecen planes para parejas o familias?',
        answer:
          'Sí. Tenemos opciones para parejas, grupos y empresas. Escríbenos para revisar disponibilidad.',
      },
    ],
  },

  contactCta: {
    title: '¿Listo para empezar tu cambio?',
    text: 'Escríbenos por WhatsApp y uno de nuestros asesores te ayudará a elegir el plan correcto para tu objetivo.',
  },

  footerServices: [
    'Hipertrofia',
    'Pérdida de grasa',
    'Fuerza',
    'Entrenamiento personal',
  ],

  footerNote: 'Planes, programas y asesoría por WhatsApp para nuevos miembros.',
}

export default gymData
