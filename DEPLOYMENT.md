# 🚀 Guía de Despliegue

Este documento explica cómo desplegar **Mis Metas y Tareas** en diferentes plataformas.

## 📋 Tabla de Contenidos

1. [Despliegue Local](#despliegue-local)
2. [Despliegue en GitHub Pages](#despliegue-en-github-pages)
3. [Despliegue en Vercel](#despliegue-en-vercel)
4. [Despliegue en Netlify](#despliegue-en-netlify)
5. [Despliegue en Servidor Personalizado](#despliegue-en-servidor-personalizado)

---

## 🏠 Despliegue Local

### Opción 1: Desarrollo en Vivo

```bash
cd "/Users/ottohernandez/Desktop/U/Desarrollo Web /Actividad 1/todo-goals-app"
npm install
npm start
```

La aplicación estará disponible en `http://localhost:3000`

### Opción 2: Servidor de Producción Local

```bash
# Compilar para producción
npm run build

# Instalar servidor estático
npm install -g serve

# Ejecutar servidor
serve -s build
```

La aplicación estará disponible en `http://localhost:3000`

---

## 🌐 Despliegue en GitHub Pages

### Paso 1: Configurar package.json

```bash
# Abre package.json y asegúrate de tener:
# "homepage": "https://tu-usuario.github.io/todo-goals-app"
```

### Paso 2: Instalar gh-pages

```bash
npm install --save-dev gh-pages
```

### Paso 3: Agregar Scripts de Deploy

En `package.json`, en la sección `"scripts"`:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### Paso 4: Desplegar

```bash
npm run deploy
```

Espera a que termine, luego visita: `https://tu-usuario.github.io/todo-goals-app`

---

## ⚡ Despliegue en Vercel (Recomendado)

Vercel es la plataforma más fácil para desplegar aplicaciones React.

### Opción 1: Desde GitHub

1. **Abre Vercel**: https://vercel.com
2. Haz clic en **"New Project"**
3. Conecta tu cuenta de GitHub
4. Selecciona el repositorio `todo-goals-app`
5. Haz clic en **"Deploy"**
6. ¡Listo! Tu app estará disponible en una URL como: `https://todo-goals-app.vercel.app`

### Opción 2: CLI de Vercel

```bash
# Instala Vercel CLI
npm install -g vercel

# Deploy
vercel

# Sigue las instrucciones en pantalla
```

### Ventajas de Vercel

- ✅ Deployment automático en cada push a GitHub
- ✅ Preview automático de Pull Requests
- ✅ Dominio personalizado gratis
- ✅ HTTPS automático
- ✅ CDN global
- ✅ Analytics incluido

---

## 🎨 Despliegue en Netlify

### Opción 1: Desde GitHub

1. **Abre Netlify**: https://netlify.com
2. Haz clic en **"New site from Git"**
3. Conecta GitHub y selecciona el repositorio
4. **Configuración de Build:**
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
5. Haz clic en **"Deploy site"**

### Opción 2: Drag and Drop

```bash
# Compilar localmente
npm run build

# Ve a netlify.com
# Arrastra la carpeta 'build' a la página
```

### Configuración de Redirecciones (netlify.toml)

Crea archivo `netlify.toml`:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🖥️ Despliegue en Servidor Personalizado

### Requisitos

- Servidor con Node.js instalado
- Acceso SSH al servidor
- Dominio (opcional)

### Pasos

1. **En tu máquina local:**
```bash
npm run build
```

2. **Sube la carpeta 'build' a tu servidor:**
```bash
scp -r build/ usuario@tu-servidor.com:/home/usuario/app/
```

3. **En el servidor, instala servidor estático:**
```bash
npm install -g serve
```

4. **Ejecuta la aplicación:**
```bash
serve -s /home/usuario/app/build -p 80
```

5. **Para persistencia, usa PM2:**
```bash
npm install -g pm2
pm2 start "serve -s /home/usuario/app/build" --name "todo-app"
pm2 save
pm2 startup
```

---

## 🔐 Variables de Entorno en Producción

### En el archivo `.env`

```
REACT_APP_ENV=production
REACT_APP_API_URL=https://tu-api.com
```

### En Vercel

1. Ve a **Settings** → **Environment Variables**
2. Agrega tus variables

### En Netlify

1. Ve a **Settings** → **Build & deploy** → **Environment**
2. Agrega tus variables

---

## 📊 Monitoreo y Análisis

### Google Analytics

1. Crea una propiedad en Google Analytics
2. Copia tu ID de seguimiento
3. En `public/index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Sentry (Error Tracking)

```bash
npm install @sentry/react
```

En `src/index.js`:

```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "tu-sentry-dsn",
  environment: "production",
});
```

---

## ✅ Checklist Pre-Despliegue

- [ ] Todos los tests pasan (`npm test`)
- [ ] Build compila sin errores (`npm run build`)
- [ ] No hay warnings en consola
- [ ] Responsive design verificado en móvil/tablet/desktop
- [ ] README.md está actualizado
- [ ] .env.example tiene variables necesarias
- [ ] Variables de producción configuradas
- [ ] Dominio configurado (si aplica)
- [ ] HTTPS habilitado
- [ ] CDN configurado (si aplica)

---

## 🔄 Despliegue Continuo (CI/CD)

### GitHub Actions (Ya Configurado)

Ver `.github/workflows/build.yml`

El workflow ejecuta automáticamente:
- Tests
- Build
- Verificación de errores

En cada push a `main` o `develop`

### Personalizar Workflow

Edita `.github/workflows/build.yml` para:
- Agregar más tests
- Ejecutar linters
- Hacer deploy automático
- Ejecutar análisis de seguridad

---

## 🆘 Solución de Problemas

### La aplicación no carga en producción

```bash
# Verifica que package.json tiene:
# "homepage": "https://..."

# Reconstruye
npm run build

# Revisa la carpeta build
ls -la build/
```

### Rutas no funcionan después del despliegue

Agrega un archivo `netlify.toml` o `vercel.json`:

**netlify.toml:**
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**vercel.json:**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Build falla con dependencias

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📈 Optimizaciones de Producción

### 1. Comprimir Imágenes

```bash
npm install --save-dev imagemin imagemin-cli
```

### 2. Lazy Loading de Componentes

```javascript
import React, { lazy, Suspense } from 'react';

const GoalCard = lazy(() => import('./components/GoalCard'));

<Suspense fallback={<div>Cargando...</div>}>
  <GoalCard />
</Suspense>
```

### 3. Caché en el Navegador

Vercel y Netlify lo hacen automáticamente.

---

## 📞 Soporte de Hosting

| Plataforma | Gratis | Setup | URL Custom |
|-----------|--------|-------|-----------|
| GitHub Pages | ✅ | Media | ✅ |
| Vercel | ✅ | Fácil | ✅ |
| Netlify | ✅ | Fácil | ✅ |
| Servidor Propio | ❌ | Difícil | ✅ |

---

## 🎉 ¡Felicidades!

Tu aplicación está lista para ser desplegada. Elige la plataforma que mejor se adapte a tus necesidades.

**Recomendación**: Empieza con **Vercel** o **Netlify** - es lo más fácil.

---

**Versión**: 1.0  
**Última Actualización**: Abril 2026  
**Autor**: Desarrollo Web
