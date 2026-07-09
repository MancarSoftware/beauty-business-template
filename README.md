# Titan Fit Gym

Landing page profesional para un gimnasio premium.

La pagina esta enfocada en mostrar programas por objetivo, planes y membresias,
beneficios del gimnasio, entrenadores, horarios, ubicacion y contacto directo por
WhatsApp.

## Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- Componentes reutilizables
- Datos centralizados en `src/data/gymData.js`

## Estructura

```txt
src/
  components/
    Hero.jsx
    Programs.jsx
    Pricing.jsx
    WhyChooseUs.jsx
    Location.jsx
    FAQ.jsx
    Footer.jsx
    WhatsAppButton.jsx
  data/
    gymData.js
  utils/
  App.jsx
  main.jsx
  index.css
```

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Personalizacion

La informacion principal del gimnasio se edita en:

```txt
src/data/gymData.js
```

Ahi puedes cambiar nombre, telefono, WhatsApp, direccion, horarios, programas,
planes, entrenadores, colores y textos de cada seccion.

## Rama de trabajo

```bash
git checkout feature/landing-gimnasio
```
