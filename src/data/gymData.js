const gymData = {
  name: 'Titan Fit Gym',
  shortName: 'Titan Fit',
  logoInitials: 'TF',
  type: 'Performance Club',
  slogan: 'Entrena como atleta. Vive como miembro.',
  description:
    'Club de entrenamiento premium con método propio, membresías claras, coaches certificados y seguimiento real.',
  whatsapp: '593987654321',
  whatsappMessage: 'Hola Titan Fit Gym, quiero agendar una evaluación inicial.',
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
    title: 'Titan Fit Gym | Performance Club en Quito',
    description:
      'Club de entrenamiento premium en Quito con evaluación inicial, método propio, coaches certificados y membresías para fuerza, definición, masa muscular y rendimiento.',
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
    eyebrow: 'Performance club en Quito',
    title: 'Entrena como atleta.',
    accentTitle: 'Vive como miembro.',
    subtitle:
      'Un club de entrenamiento para personas que quieren fuerza, disciplina y progreso medible sin improvisar.',
    image:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=80',
    cta: 'Agendar evaluación',
    secondaryHref: '#planes',
    secondaryCta: 'Ver membresías',
    features: [
      { title: '01', text: 'evaluación inicial' },
      { title: '02', text: 'plan personalizado' },
      { title: '03', text: 'seguimiento real' },
    ],
  },

  sections: {
    process: {
      eyebrow: 'Titan Method',
      title: 'No entrenas al azar. Entrenas con método.',
      description:
        'Un sistema simple: evaluamos, diseñamos, entrenamos y ajustamos. Así tu progreso deja de depender de la improvisación.',
    },
    programs: {
      eyebrow: 'Rutas de transformación',
      title: 'Elige una ruta. Nosotros diseñamos el plan.',
      description:
        'Cada miembro entra con un objetivo distinto. Por eso organizamos el entrenamiento por rutas, no por rutinas genéricas.',
    },
    pricing: {
      eyebrow: 'Planes',
      title: 'Elige tu plan de entrenamiento',
      description:
        'Planes por tiempo para entrenar con acceso completo, mejor precio mensual y beneficios claros.',
    },
    benefits: {
      eyebrow: 'Experiencia Titan',
      title: 'Un club creado para entrenar con estándar',
      description:
        'Ambiente profesional, coaches preparados, espacios cuidados y una experiencia pensada para progresar.',
    },
    trainers: {
      eyebrow: 'Coaches',
      title: 'Personas que corrigen, guían y exigen',
      description:
        'No solo cuidamos máquinas. Acompañamos tu técnica, tu ritmo y tu evolución.',
    },
    location: {
      eyebrow: 'Horarios y ubicación',
      title: 'Entrena en un espacio diseñado para avanzar',
      description:
        'Horarios amplios, ubicación accesible y contacto directo para agendar tu primera evaluación.',
    },
  },

  process: [
    {
      title: 'Evaluamos',
      description:
        'Conocemos tu objetivo, experiencia, disponibilidad y punto de partida.',
    },
    {
      title: 'Diseñamos',
      description:
        'Creamos una ruta de entrenamiento según tu meta y nivel actual.',
    },
    {
      title: 'Entrenamos',
      description:
        'Trabajas con estructura, técnica y acompañamiento profesional.',
    },
    {
      title: 'Ajustamos',
      description:
        'Medimos avances y actualizamos tu plan para mantener progreso real.',
    },
  ],

  programs: [
    {
      icon: '01',
      name: 'Masa muscular',
      description:
        'Para quienes buscan volumen, técnica y progresión real en sala de pesas.',
      whatsappMessage:
        'Hola Titan Fit Gym, quiero información sobre la ruta de masa muscular.',
    },
    {
      icon: '02',
      name: 'Definición corporal',
      description:
        'Entrenamiento enfocado en perder grasa, mantener músculo y mejorar condición.',
      whatsappMessage:
        'Hola Titan Fit Gym, quiero información sobre definición corporal.',
    },
    {
      icon: '03',
      name: 'Fuerza funcional',
      description:
        'Para construir fuerza útil, control corporal y rendimiento físico.',
      whatsappMessage:
        'Hola Titan Fit Gym, quiero información sobre fuerza funcional.',
    },
    {
      icon: '04',
      name: 'Rendimiento',
      description:
        'Sesiones para mejorar resistencia, potencia, movilidad y capacidad atlética.',
      whatsappMessage:
        'Hola Titan Fit Gym, quiero información sobre rendimiento.',
    },
    {
      icon: '05',
      name: 'Coach privado',
      description:
        'Acompañamiento uno a uno para objetivos específicos y mayor seguimiento.',
      whatsappMessage:
        'Hola Titan Fit Gym, quiero información sobre coach privado.',
    },
  ],

    pricing: [
    {
      name: 'Trimestral',
      duration: '3 Meses',
      price: '$60',
      period: '/total',
      equivalent: 'Equivale a $20.00/mes',
      tag: 'Inicio',
      description: 'Ideal para empezar con constancia y acceso completo al club.',
      benefits: [
        'Acceso total al gimnasio',
        'Pesas y cardio ilimitado',
        'Sin costo de matrícula',
        'Acceso 7 días a la semana',
      ],
      whatsappMessage:
        'Hola Titan Fit Gym, quiero información sobre el plan Trimestral.',
      featured: true,
    },
    {
      name: 'Semestral',
      duration: '6 Meses',
      price: '$108',
      period: '/total',
      equivalent: 'Equivale a $18.00/mes',
      tag: 'Ahorro',
      description: 'Para entrenar con mayor continuidad y mejor precio mensual.',
      benefits: [
        'Acceso total al gimnasio',
        'Pesas y cardio ilimitado',
        'Sin costo de matrícula',
        'Acceso 7 días a la semana',
      ],
      whatsappMessage:
        'Hola Titan Fit Gym, quiero información sobre el plan Semestral.',
    },
    {
      name: '9 Meses',
      duration: 'Compromiso Fitness',
      price: '$153',
      period: '/total',
      equivalent: 'Equivale a $17.00/mes',
      tag: 'Mayor ahorro',
      description: 'Para miembros que buscan disciplina, ahorro y progreso sostenido.',
      benefits: [
        'Acceso total al gimnasio',
        'Pesas y cardio ilimitado',
        'Sin costo de matrícula',
        'Acceso 7 días a la semana',
      ],
      whatsappMessage:
        'Hola Titan Fit Gym, quiero información sobre el plan de 9 Meses.',
    },
  ],

  benefits: [
    {
      title: 'Método propio',
      description:
        'Entrenas con una estructura clara desde la primera evaluación.',
    },
    {
      title: 'Coaches reales',
      description:
        'Personas preparadas para corregir técnica y guiar tu progreso.',
    },
    {
      title: 'Ambiente premium',
      description:
        'Un espacio limpio, sobrio y diseñado para entrenar con concentración.',
    },
    {
      title: 'Seguimiento medible',
      description:
        'Tu avance se revisa para ajustar cargas, rutinas y enfoque.',
    },
    {
      title: 'Membresías claras',
      description:
        'Planes simples, sin confusión y con beneficios concretos.',
    },
    {
      title: 'Comunidad disciplinada',
      description:
        'Un entorno donde la constancia y el progreso forman parte de la cultura.',
    },
  ],

  trainers: [
    {
      name: 'Andrés Vargas',
      initials: 'AV',
      role: 'Strength Coach',
    },
    {
      name: 'Laura Mesa',
      initials: 'LM',
      role: 'Nutrición deportiva',
    },
    {
      name: 'Daniel Rojas',
      initials: 'DR',
      role: 'Performance Coach',
    },
    {
      name: 'Paula Gómez',
      initials: 'PG',
      role: 'Clases y movilidad',
    },
  ],

  locationFeatures: [
    'Parqueadero gratuito',
    'Vestidores y duchas',
    'Zona de movilidad',
    'Wi-Fi disponible',
  ],

  scheduleBlocks: [
    { day: 'Lunes a viernes', time: '05:30 - 22:00' },
    { day: 'Sábados', time: '07:00 - 20:00' },
    { day: 'Domingos y feriados', time: '08:00 - 14:00' },
  ],

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Antes de convertirte en miembro',
    description:
      'Información rápida sobre evaluación, membresías, horarios y entrenamiento.',
    items: [
      {
        question: '¿Necesito experiencia previa?',
        answer:
          'No. La evaluación inicial nos permite ubicarte en la ruta correcta según tu nivel.',
      },
      {
        question: '¿Puedo entrenar sin coach privado?',
        answer:
          'Sí. Puedes empezar con Essential o Performance. Titan Black incluye mayor acompañamiento.',
      },
      {
        question: '¿Qué membresía recomiendan?',
        answer:
          'Performance es la opción más completa para la mayoría de miembros porque incluye ruta, clases y seguimiento.',
      },
      {
        question: '¿Puedo agendar una visita antes de pagar?',
        answer:
          'Sí. Puedes escribir por WhatsApp y agendar una evaluación inicial.',
      },
    ],
  },

  contactCta: {
    title: 'Agenda tu evaluación inicial',
    text: 'Escríbenos por WhatsApp y revisamos qué membresía se adapta mejor a tu objetivo.',
  },

  footerServices: [
    'Masa muscular',
    'Definición corporal',
    'Fuerza funcional',
    'Coach privado',
  ],

  footerNote:
    'Performance club con método, membresías y acompañamiento profesional.',
}

export default gymData