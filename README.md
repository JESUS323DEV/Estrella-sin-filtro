# Estrella Sin Filtro — Web Site

Portfolio y sitio de servicios para **Estrella Sin Filtro**, Social Media Manager en Barcelona.

## Stack

- **React 19** + **Vite 7** (build tool con SWC)
- **React Router DOM 7** (navegación SPA)
- **Lucide React** (iconos)
- CSS puro con variables y responsive design

## Instalación

```bash
cd web-site
npm install
```

## Variables de entorno

Copia el archivo de ejemplo y rellena los valores reales:

```bash
cp .env.example .env
```

| Variable | Descripción |
|---|---|
| `VITE_WHATSAPP_NUMBER` | Número de WhatsApp con prefijo país (ej: +34600000000) |
| `VITE_EMAIL` | Email de contacto |
| `VITE_INSTAGRAM_URL` | URL del perfil de Instagram |
| `VITE_TIKTOK_URL` | URL del perfil de TikTok |
| `VITE_FACEBOOK_URL` | URL de la página de Facebook (dejar vacío para ocultar el botón) |

## Scripts

```bash
npm run dev       # Servidor de desarrollo (http://localhost:5173)
npm run build     # Build de producción en /dist
npm run preview   # Vista previa del build de producción
npm run lint      # Verificar errores con ESLint
npm run format    # Formatear código con Prettier
```

## Estructura

```
src/
├── components/
│   ├── layout/        # Header y Footer
│   ├── ProjectCard    # Tarjeta de proyecto con carrusel
│   ├── ScrollHandler  # Sincroniza scroll con rutas
│   └── ScrollSections # Scroll suave a secciones
├── sections/          # Secciones de la página (Hero, Services, Projects…)
├── assets/            # Imágenes, iconos y fotos de proyectos
└── styles/            # CSS organizado por sección y componente
```

## Despliegue

El sitio está desplegado en Netlify: https://estrellasinfiltro.netlify.app

Para hacer un deploy manual:

```bash
npm run build
# Sube la carpeta /dist a Netlify
```
