# Beauty Business Template

Plantilla profesional reutilizable para vender páginas web a negocios locales de belleza y cuidado personal: barberías, salones, spas, peluquerías y centros estéticos.

## Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- Componentes reutilizables
- Datos centralizados por tipo de negocio

## Estructura

```txt
src/
  assets/
  components/
  data/
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

La demo activa está en `src/App.jsx` importando `src/data/barberiaData.js`.
Para cambiar a salon o spa, importa otro archivo de datos con la misma forma:

```js
import spaData from './data/spaData'
```

Luego asigna:

```js
const business = spaData
```

Los componentes leen arrays de servicios, beneficios, galeria, paquetes y testimonios. La idea es adaptar contenido, precios, colores, imagen hero, WhatsApp y datos de contacto sin reescribir la interfaz.

## Git recomendado

```bash
git checkout -b feature/landing-barberia
git add .
git commit -m "feat: create initial barber landing page"
git push -u origin feature/landing-barberia
```
