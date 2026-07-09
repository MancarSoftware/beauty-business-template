# Bella Aura Studio

Landing page profesional para un salon de belleza premium en Quito.

La pagina esta enfocada en reservas por WhatsApp para color, corte, balayage,
tratamientos capilares, peinados y maquillaje social.

## Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- Componentes reutilizables
- Datos centralizados en `src/data/salonData.js`

## Estructura

```txt
src/
  assets/
  components/
  data/
    salonData.js
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

La informacion principal del salon se edita en:

```txt
src/data/salonData.js
```

Ahi puedes cambiar nombre, telefono, WhatsApp, direccion, horarios, servicios,
precios, testimonios, galeria, colores y textos de cada seccion.

## Git recomendado

```bash
git checkout -b feature/landing-salon-belleza
git add .
git commit -m "feat: create premium beauty salon landing page"
git push -u origin feature/landing-salon-belleza
```
