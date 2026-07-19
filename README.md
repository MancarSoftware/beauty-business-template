# Maison Miga

Landing page premium para una panaderia y pasteleria artesanal.

La pagina esta enfocada en mostrar especialidades, productos favoritos,
desayunos, pedidos para eventos, beneficios, ubicacion, horarios y contacto
directo por WhatsApp.

## Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- Componentes reutilizables
- Datos centralizados en `src/data/bakeryData.js`

## Estructura

```txt
src/
  components/
    BakeryHero.jsx
    BakerySpecialties.jsx
    BakeryFavorites.jsx
    BakeryBreakfast.jsx
    BakeryEvents.jsx
    WhyChooseUs.jsx
    Location.jsx
    FAQ.jsx
    Footer.jsx
    WhatsAppButton.jsx
    Seo.jsx
  data/
    bakeryData.js
  utils/
    whatsapp.js
  App.jsx
  main.jsx
  index.css
```

## Ejecutar

```bash
npm install
npm run dev
```

## Personalizacion

Para adaptar la landing a otra panaderia, actualiza principalmente
`src/data/bakeryData.js`: nombre, imagenes, productos, precios, horarios,
direccion, WhatsApp, redes sociales y mensajes de pedido.
