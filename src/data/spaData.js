const spaData = {
  name: 'Serena Spa & Wellness',
  shortName: 'Serena Spa',
  logoInitials: 'SS',
  type: 'Spa urbano premium',
  slogan: 'Un refugio para descansar, cuidar tu piel y renovar tu energia.',
  description:
    'Spa urbano en Quito con masajes relajantes, faciales profesionales, rituales corporales y paquetes de bienestar con reserva directa por WhatsApp.',
  whatsapp: '593987654321',
  whatsappMessage:
    'Hola Serena Spa, quiero reservar una experiencia de relajacion.',
  phone: '+593 98 765 4321',
  email: 'reservas@serenaspa.com',
  address: 'Av. Portugal y Republica de El Salvador, Quito, Ecuador',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.%20Portugal%20y%20Republica%20de%20El%20Salvador%2C%20Quito%2C%20Ecuador',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Av.%20Portugal%20y%20Republica%20de%20El%20Salvador%2C%20Quito%2C%20Ecuador&z=16&output=embed',

  theme: {
    accent: '#d98b72',
    accentDark: '#9f5c49',
    secondary: '#6fa68d',
    soft: '#f7f1ea',
    dark: '#09231f',
  },

  seo: {
    title: 'Serena Spa & Wellness | Spa urbano premium en Quito',
    description:
      'Reserva masajes relajantes, faciales, rituales corporales y paquetes de bienestar en Serena Spa & Wellness. Atencion premium y reserva por WhatsApp.',
    image: '/favicon.svg',
    locale: 'es_EC',
    areaServed: 'Quito, Ecuador',
    priceRange: '$$',
    businessType: 'HealthAndBeautyBusiness',
  },

  social: {
    instagram: '#',
    facebook: 'https://www.facebook.com/share/1BNpTPm6Wz/',
    tiktok: '#',
  },

  developer: {
    name: 'Mancar Software',
    text: 'Pagina creada por',
    url: 'https://www.facebook.com/share/1BNpTPm6Wz/',
  },

  hero: {
    eyebrow: 'Bienvenido a Serena Spa',
    since: 'Since 2012',
    title: 'Relajacion, belleza y bienestar en un solo lugar.',
    accentTitle: 'Tu pausa empieza aqui.',
    subtitle:
      'Un spa urbano con reserva asistida, cabinas privadas y rituales pensados para piel, cuerpo y descanso real.',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85',
    cta: 'Reservar por WhatsApp',
    secondaryHref: '#tratamientos',
    secondaryCta: 'Ver tratamientos',
    highlights: [
      { value: '01', label: 'cabina preparada' },
      { value: '02', label: 'terapeuta asignada' },
      { value: '03', label: 'ritual personalizado' },
    ],
  },

  sections: {
    about: {
      eyebrow: 'Nosotros',
      title: 'Disfruta una sesion relajante con Serena Spa',
      description:
        'Creamos un oasis urbano donde cada visita se vive como una experiencia sensorial: terapeutas profesionales, cabinas privadas, faciales, masajes y rituales disenados para renovar cuerpo y mente.',
      image:
        'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=85',
    },
    treatments: {
      eyebrow: 'Carta de tratamientos',
      title: 'Servicios claros, experiencia cuidada y reserva sin espera.',
      description:
        'Cada servicio combina tecnica, ambiente y detalles sensoriales para que la experiencia se sienta cuidada desde la bienvenida.',
    },
    process: {
      eyebrow: 'Concierge Serena',
      title: 'No eliges a ciegas. Te guiamos antes de reservar.',
      description:
        'Te guiamos por WhatsApp, confirmamos horario y preparamos la cabina segun el tratamiento elegido.',
    },
    packages: {
      eyebrow: 'Menu de experiencias',
      title: 'Tres formas de convertir una cita en una pausa completa.',
      description:
        'Opciones claras para relajacion, cuidado facial, pareja o desconexion total.',
    },
    experience: {
      eyebrow: 'Estandar Serena',
      title: 'Un sistema de atencion silencioso, preciso y memorable.',
      description:
        'Cabinas privadas, aromas equilibrados, musica suave y terapeutas que adaptan la presion, ritmo y productos a tu necesidad.',
    },
    testimonials: {
      eyebrow: 'Clientes Serena',
      title: 'Personas que vuelven por la calma y el detalle.',
      description:
        'Comentarios de clientes que reservan masajes, faciales y rituales para desconectar sin salir de la ciudad.',
    },
    location: {
      eyebrow: 'Ubicacion y horarios',
      title: 'Reserva tu pausa en una zona tranquila y facil de llegar.',
      description:
        'Estamos en Quito con horarios pensados para venir despues del trabajo, en pareja o durante una manana libre.',
    },
  },

  treatments: [
    {
      name: 'Tratamientos faciales',
      duration: '60 min',
      price: 'Desde $32',
      image:
        'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80',
      description:
        'Limpiezas, hidratacion profunda y protocolos para piel cansada, opaca o sensible.',
      whatsappMessage:
        'Hola Serena Spa, quiero informacion sobre tratamientos faciales.',
    },
    {
      name: 'Depilacion laser',
      duration: 'Por zona',
      price: 'Desde $18',
      image:
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
      description:
        'Sesiones por zona con agenda personalizada, cuidado previo y recomendaciones posteriores.',
      whatsappMessage:
        'Hola Serena Spa, quiero informacion sobre depilacion laser.',
    },
    {
      name: 'Tratamientos corporales',
      duration: '75 min',
      price: 'Desde $48',
      image:
        'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80',
      description:
        'Masajes, exfoliaciones, drenajes y rituales envolventes para relajar y renovar.',
      whatsappMessage:
        'Hola Serena Spa, quiero informacion sobre el ritual corporal.',
    },
    {
      name: 'Reduccion de medidas',
      duration: 'Plan mensual',
      price: 'Desde $65',
      image:
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
      description:
        'Protocolos corporales con seguimiento, aparatologia estetica y asesoramiento por objetivo.',
      whatsappMessage:
        'Hola Serena Spa, quiero informacion sobre reduccion de medidas.',
    },
  ],

  stats: [
    { value: '12+', label: 'anos de experiencia' },
    { value: '24', label: 'tratamientos disponibles' },
    { value: '4.9', label: 'valoracion promedio' },
    { value: '5000+', label: 'clientes atendidos' },
  ],

  process: [
    {
      title: 'Elige tu experiencia',
      description:
        'Te recomendamos tratamiento segun cansancio, piel, tiempo disponible o tipo de regalo.',
    },
    {
      title: 'Confirma horario',
      description:
        'Reservas por WhatsApp y recibes detalles de duracion, llegada y preparacion.',
    },
    {
      title: 'Llegas y desconectas',
      description:
        'Cabina lista, aroma seleccionado, musica suave y atencion personalizada.',
    },
  ],

  packages: [
    {
      name: 'Pausa Serena',
      tag: 'Relax rapido',
      price: '$35',
      duration: '60 min',
      description:
        'Ideal para soltar tension de cuello, espalda y mente despues de una semana cargada.',
      benefits: ['Masaje relajante', 'Aromaterapia suave', 'Te de bienvenida'],
      whatsappMessage:
        'Hola Serena Spa, quiero reservar el paquete Pausa Serena.',
    },
    {
      name: 'Glow Facial',
      tag: 'Mas reservado',
      price: '$52',
      duration: '80 min',
      description:
        'Para piel cansada: limpieza, hidratacion profunda y masaje facial drenante.',
      benefits: ['Diagnostico facial', 'Hidratacion profunda', 'Proteccion final'],
      whatsappMessage:
        'Hola Serena Spa, quiero reservar el paquete Glow Facial.',
      featured: true,
    },
    {
      name: 'Ritual Total',
      tag: 'Experiencia completa',
      price: '$89',
      duration: '110 min',
      description:
        'Una desconexion completa con masaje, exfoliacion corporal y cierre sensorial.',
      benefits: ['Ritual corporal', 'Masaje completo', 'Cabina premium'],
      whatsappMessage:
        'Hola Serena Spa, quiero reservar el paquete Ritual Total.',
    },
  ],

  benefits: [
    {
      title: 'Cabinas privadas',
      description:
        'Espacios silenciosos, limpios y preparados para una experiencia tranquila.',
    },
    {
      title: 'Terapeutas profesionales',
      description:
        'Presion, ritmo y tecnica se adaptan a tu cuerpo y nivel de tension.',
    },
    {
      title: 'Productos seleccionados',
      description:
        'Aromas, aceites y formulas faciales pensadas para cuidar piel y sentidos.',
    },
    {
      title: 'Reserva sin friccion',
      description:
        'Confirmas por WhatsApp, recibes instrucciones y llegas directo a relajarte.',
    },
  ],

  testimonials: [
    {
      name: 'Carolina Mena',
      role: 'Masaje relajante',
      quote:
        'Llegue con dolor de espalda y sali liviana. La cabina, el aroma y la atencion hicieron que realmente desconectara.',
      rating: '5.0',
    },
    {
      name: 'Valeria Torres',
      role: 'Facial luminosidad',
      quote:
        'Me explicaron cada paso sin apurarme. Mi piel quedo fresca y el ambiente se siente muy cuidado.',
      rating: '5.0',
    },
    {
      name: 'Daniela Ruiz',
      role: 'Ritual para parejas',
      quote:
        'Reserve por WhatsApp para aniversario y todo estuvo listo. Fue una experiencia elegante y muy relajante.',
      rating: '5.0',
    },
  ],

  scheduleBlocks: [
    { day: 'Lunes a viernes', time: '10:00 - 20:00' },
    { day: 'Sabados', time: '09:00 - 18:00' },
    { day: 'Domingos', time: 'Solo con reserva' },
  ],

  locationFeatures: [
    'Cabinas privadas',
    'Reserva por WhatsApp',
    'Tarjetas de regalo',
    'Zona tranquila',
  ],

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Antes de reservar tu experiencia',
    description:
      'Detalles utiles sobre llegada, duracion, masajes, faciales y reservas.',
    items: [
      {
        question: 'Debo reservar con anticipacion?',
        answer:
          'Si. Recomendamos reservar con al menos 24 horas para preparar cabina, terapeuta y horario ideal.',
      },
      {
        question: 'Puedo regalar un paquete?',
        answer:
          'Si. Tenemos experiencias ideales para cumpleanos, aniversarios y regalos corporativos.',
      },
      {
        question: 'Que masaje recomiendan si tengo mucho estres?',
        answer:
          'El masaje relajante de 60 minutos es la opcion inicial mas recomendada para tension acumulada.',
      },
      {
        question: 'Atienden parejas?',
        answer:
          'Si. El paquete para parejas se agenda con cupo previo para preparar la cabina y detalles especiales.',
      },
    ],
  },

  contactCta: {
    title: 'Reserva una pausa para esta semana',
    text: 'Escribenos por WhatsApp, cuentanos que necesitas y te recomendamos el tratamiento ideal.',
  },

  footerServices: [
    'Masajes relajantes',
    'Faciales',
    'Rituales corporales',
    'Spa para parejas',
  ],

  footerNote:
    'Spa urbano premium para relajacion, cuidado facial y experiencias de bienestar.',
}

export default spaData
