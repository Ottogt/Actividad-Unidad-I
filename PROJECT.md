# 🏗️ Información Técnica del Proyecto

## Descripción General

**Mis Metas y Tareas** es una aplicación web de gestión de tareas personales construida con React y Bootstrap. Permite a los usuarios crear metas, agregar tareas asociadas y realizar un seguimiento del progreso.

## 🎯 Objetivos del Proyecto

1. **Crear una interfaz intuitiva** para gestionar metas y tareas
2. **Implementar un diseño responsive** que funcione en todos los dispositivos
3. **Utilizar React Bootstrap** para componentes profesionales
4. **Mantener estilos en archivos CSS** separados (no inline)
5. **Proporcionar documentación completa** para desarrolladores
6. **Crear un repositorio Git** con buenas prácticas

## 🏛️ Arquitectura

### Estructura de Componentes

```
App (Principal)
├── Header
└── GoalForm (Modal)
└── GoalCard[]
    ├── TaskForm
    └── TaskItem[]
```

### Flujo de Datos

```
App (Estado Global)
├── goals[] - Lista de todas las metas
└── Para cada Goal:
    ├── id - Identificador único
    ├── name - Nombre de la meta
    ├── description - Descripción
    ├── dueDate - Fecha límite
    └── tasks[] - Lista de tareas
        ├── id - Identificador único
        ├── name - Nombre de la tarea
        ├── dueDate - Fecha límite
        └── completed - Estado booleano
```

### Gestión de Estado

- **Hook useState** para manejar el estado local
- **Props drilling** para pasar datos entre componentes
- Sin Redux/Context (mantenido simple para esta fase inicial)

## 📦 Dependencias Principales

```json
{
  "react": "^19.2.5",           // Librería de UI
  "react-dom": "^19.2.5",       // Renderizador React
  "react-bootstrap": "^2.10.0", // Componentes Bootstrap
  "bootstrap": "^5.3.2",        // Framework CSS
  "react-scripts": "5.0.1"      // Herramientas Create React App
}
```

## 🗂️ Estructura de Archivos

```
todo-goals-app/
│
├── public/                      # Archivos estáticos
│   ├── index.html               # HTML principal
│   ├── favicon.ico
│   └── manifest.json            # PWA manifest
│
├── src/
│   ├── components/              # Componentes React
│   │   ├── Header.js            # Barra de navegación
│   │   ├── GoalForm.js          # Modal de nueva meta
│   │   ├── GoalCard.js          # Tarjeta de meta
│   │   ├── TaskForm.js          # Formulario de tarea
│   │   └── TaskItem.js          # Elemento de tarea
│   │
│   ├── styles/                  # Estilos CSS
│   │   ├── App.css              # Estilos principales
│   │   ├── Header.css           # Estilos del header
│   │   ├── GoalForm.css         # Estilos del formulario
│   │   ├── GoalCard.css         # Estilos de la tarjeta
│   │   ├── TaskForm.css         # Estilos del form tarea
│   │   └── TaskItem.css         # Estilos del item tarea
│   │
│   ├── App.js                   # Componente principal
│   ├── App.css                  # Estilos legacy (no usar)
│   ├── index.js                 # Punto de entrada
│   ├── index.css                # Estilos globales
│   └── ...archivos de utilidad
│
├── .github/
│   └── workflows/
│       └── build.yml            # CI/CD con GitHub Actions
│
├── node_modules/                # Dependencias instaladas
├── public/                      # Compilado por npm build
│
├── .gitignore                   # Archivos a ignorar en Git
├── .env.example                 # Variables de entorno ejemplo
├── package.json                 # Configuración del proyecto
├── package-lock.json            # Lock de dependencias
├── README.md                    # Documentación principal
├── QUICK-START.md               # Guía de inicio rápido
├── CONTRIBUIR.md                # Guía de contribución
└── PROJECT.md                   # Este archivo
```

## 🎨 Diseño y Estilos

### Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Púrpura Primario | #667eea | Botones, gradientes |
| Púrpura Oscuro | #764ba2 | Gradientes, hover |
| Gris Claro | #f5f5f5 | Fondos secundarios |
| Gris Medio | #666 | Texto secundario |
| Gris Oscuro | #333 | Texto primario |
| Rojo Error | #dc3545 | Botones de eliminar |

### Tipografía

- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Weights**: 400 (normal), 500 (medium), 600 (semi-bold), 700 (bold)

### Breakpoints Responsive

- **Desktop**: >= 1024px (3 columnas)
- **Tablet**: 768px - 1023px (2 columnas)
- **Mobile**: < 768px (1 columna)

## 🔄 Flujo de Interacción

### Crear Meta
1. Usuario hace clic en "+ AGREGAR META"
2. Se abre modal con formulario
3. Usuario ingresa datos y hace clic "Crear Meta"
4. App actualiza estado con nueva meta
5. GoalCard se renderiza para la nueva meta

### Agregar Tarea
1. Usuario hace clic en "+ Agregar Tarea" en una meta
2. Se despliega TaskForm
3. Usuario ingresa datos de tarea
4. Se agrega a array de tareas de la meta
5. Lista de tareas se actualiza
6. Progreso se recalcula automáticamente

### Marcar Tarea Completada
1. Usuario hace clic en checkbox de tarea
2. Estado `completed` se toggle
3. Barra de progreso se actualiza
4. Estilos visuales cambian (strikethrough)

### Eliminar Meta o Tarea
1. Usuario hace clic en botón ✕
2. Se confirma en el estado
3. Elemento se remueve de la UI

## 📊 Cálculo de Progreso

```javascript
completedTasks = goal.tasks.filter(t => t.completed).length
totalTasks = goal.tasks.length
percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100)
```

## 🧪 Testing

### Áreas de Testing Recomendadas

- [ ] Renderizado de componentes
- [ ] Creación de metas
- [ ] Creación de tareas
- [ ] Toggle de tareas completadas
- [ ] Eliminación de metas y tareas
- [ ] Cálculo de progreso
- [ ] Responsividad en diferentes pantallas

### Ejemplo de Test

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Mis Metas y Tareas/i);
  expect(titleElement).toBeInTheDocument();
});
```

## 🚀 Optimizaciones Actuales

1. **Lazy Loading**: React carga componentes eficientemente
2. **CSS Modular**: Estilos separados por componente
3. **Bootstrap Minimal**: Solo se carga lo necesario
4. **No External Fonts**: Usa fuentes del sistema
5. **Optimized Build**: Create React App optimiza automáticamente

## 🔮 Mejoras Futuras Planeadas

### Fase 2
- [ ] Persistencia en localStorage
- [ ] Importar/Exportar datos JSON
- [ ] Búsqueda y filtrado de metas

### Fase 3
- [ ] Backend Node.js + Express
- [ ] Base de datos MongoDB
- [ ] Autenticación con JWT

### Fase 4
- [ ] Sincronización en tiempo real
- [ ] Notificaciones de recordatorio
- [ ] Modo oscuro

### Fase 5
- [ ] App móvil nativa (React Native)
- [ ] Integración con calendario
- [ ] Colaboración en metas grupales

## 🔒 Consideraciones de Seguridad

Actualmente:
- ✅ No hay datos sensibles
- ✅ Todo en cliente (más seguro)
- ✅ No hay autenticación requerida

Futuro:
- [ ] Validación de entrada robusta
- [ ] HTTPS obligatorio
- [ ] CORS configurado
- [ ] Rate limiting
- [ ] Sanitización de datos

## 📈 Métricas de Rendimiento

### Tamaño del Bundle

```
JavaScript: 79.78 kB (gzip)
CSS:        34.02 kB (gzip)
Total:      ~114 kB comprimido
```

### Lighthouse (Objetivos)

- Performance: >= 90
- Accessibility: >= 90
- Best Practices: >= 90
- SEO: >= 90

## 🔄 Ciclo de Desarrollo

1. **Feature Branch**: Crear rama para cada feature
2. **Development**: Implementar y probar
3. **Pull Request**: Revisar cambios
4. **Testing**: Ejecutar tests
5. **Merge**: Integrar a main
6. **Deploy**: Subir a producción

## 📝 Convenciones de Código

### Nombres

```javascript
// Componentes - PascalCase
function MyComponent() {}

// Funciones - camelCase
const handleClick = () => {}

// Constantes - UPPER_SNAKE_CASE
const MAX_ITEMS = 100

// Variables - camelCase
let currentUser = null
```

### Estilos CSS

```css
/* Block Element Modifier (BEM) */
.goal-card { }
.goal-card__header { }
.goal-card--active { }

/* Organización */
/* 1. Display & Box Model */
/* 2. Positioning */
/* 3. Typography */
/* 4. Colors */
/* 5. Effects */
/* 6. Animations */
```

## 🛠️ Herramientas Recomendadas

- **Editor**: VS Code
- **Extensiones**: ES7+ React/Redux/React-Native snippets
- **Debugger**: React Developer Tools
- **Browser DevTools**: Chrome/Firefox
- **Git GUI**: GitHub Desktop o GitKraken

## 📚 Recursos de Referencia

- [React Hooks Documentation](https://react.dev/reference/react/hooks)
- [React Bootstrap Components](https://react-bootstrap.github.io/components)
- [Bootstrap Utilities](https://getbootstrap.com/docs/5.0/utilities/api/)
- [CSS Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [Web Accessibility](https://www.w3.org/WAI/)

## 📞 Contacto para Preguntas Técnicas

- Crea un **GitHub Issue** con etiqueta `question`
- Consulta **Documentación** en README.md
- Lee **CONTRIBUIR.md** para participar

---

**Versión**: 0.1.0  
**Última Actualización**: Abril 2026  
**Autor**: Desarrollo Web  
**Estado**: Activo 🟢
