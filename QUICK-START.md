# 📋 Guía de Inicio Rápido - Mis Metas y Tareas

## ¿Qué es esta aplicación?

**Mis Metas y Tareas** es una aplicación web moderna y totalmente responsive diseñada para ayudarte a gestionar tus objetivos personales y las tareas asociadas a cada meta. Con una interfaz intuitiva y hermosa, puedes:

- 📌 Crear metas personales con descripción y fecha límite
- ✏️ Agregar tareas específicas dentro de cada meta
- ✅ Marcar tareas como completadas
- 📊 Ver el progreso de cada meta en tiempo real
- 🎨 Disfrutar de un diseño moderno con tema morado/púrpura

## 🚀 Inicio Rápido (3 pasos)

### Paso 1: Instalar Dependencias
```bash
npm install
```

### Paso 2: Iniciar la Aplicación
```bash
npm start
```

La aplicación se abrirá automáticamente en `http://localhost:3000`

### Paso 3: ¡Empieza a usar!
Haz clic en **"+ AGREGAR META"** para crear tu primera meta.

## 💻 Requisitos del Sistema

- **Node.js** versión 14 o superior
- **npm** (incluido con Node.js)
- Navegador web moderno (Chrome, Firefox, Safari, Edge)

## 📱 Dispositivos Soportados

- ✅ Computadoras de escritorio (1920px, 1440px, 1024px)
- ✅ Tablets (768px)
- ✅ Teléfonos móviles (320px - 768px)

## 🎯 Características Principales

### Gestión de Metas
- Crea metas con nombre, descripción y fecha límite
- Visualiza todas tus metas en tarjetas interactivas
- Elimina metas que ya no necesites
- Ve el progreso de cada meta en porcentaje

### Gestión de Tareas
- Agrega tareas dentro de cada meta
- Asigna fechas límite a las tareas
- Marca tareas como completadas
- Elimina tareas innecesarias
- El progreso se actualiza automáticamente

### Diseño Responsive
- Adapta perfectamente a cualquier pantalla
- Interfaz optimizada para móvil
- Diseño limpio y moderno
- Animaciones suaves y transiciones

## 🛠️ Tecnologías Utilizadas

```
Frontend:
├── React 19 - Librería de interfaz de usuario
├── React Bootstrap 2 - Componentes responsive
├── Bootstrap 5 - Framework CSS
└── CSS3 - Estilos personalizados

Herramientas:
├── Create React App - Configuración simplificada
├── Git - Control de versiones
└── npm - Gestor de paquetes
```

## 📂 Estructura del Proyecto

```
todo-goals-app/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.js        # Encabezado de navegación
│   │   ├── GoalForm.js      # Modal para crear metas
│   │   ├── GoalCard.js      # Tarjeta de meta
│   │   ├── TaskForm.js      # Formulario de tarea
│   │   └── TaskItem.js      # Elemento de tarea
│   ├── styles/              # Archivos CSS
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── GoalForm.css
│   │   ├── GoalCard.css
│   │   ├── TaskForm.css
│   │   └── TaskItem.css
│   ├── App.js               # Componente principal
│   ├── index.js             # Punto de entrada
│   └── index.css            # Estilos globales
├── public/                  # Archivos estáticos
├── package.json             # Dependencias
├── README.md                # Documentación completa
└── QUICK-START.md          # Este archivo
```

## 📊 Estado de la Aplicación

La aplicación utiliza **React State** para mantener los datos en tiempo real:
- Las metas se almacenan en memoria mientras la aplicación esté abierta
- Los cambios se reflejan instantáneamente en la UI
- No requiere conexión a internet para funcionar

> **Nota:** Los datos se pierden al actualizar la página. En futuras versiones se implementará persistencia con localStorage o base de datos.

## 🎨 Guía de Uso Visual

### Pantalla Principal
1. **Header**: Muestra el título de la aplicación
2. **Botón "Agregar Meta"**: Crea una nueva meta
3. **Grid de Metas**: Muestra todas las metas creadas

### Tarjeta de Meta
- **Encabezado**: Nombre de la meta (colorido)
- **Descripción**: Detalles de la meta
- **Fecha Límite**: Cuándo completarla
- **Barra de Progreso**: Porcentaje de tareas completadas
- **Lista de Tareas**: Todas las tareas de la meta

### Tarea
- **Checkbox**: Marca para completar
- **Nombre**: Descripción de la tarea
- **Fecha**: Cuándo vence (si se asignó)
- **Botón Eliminar**: Elimina la tarea

## 🔧 Comandos Disponibles

```bash
# Inicia servidor de desarrollo
npm start

# Compila para producción
npm run build

# Ejecuta pruebas
npm test

# Abre la configuración avanzada
npm run eject
```

## 🐛 Solución de Problemas

### La aplicación no inicia
```bash
# Limpia dependencias y reinstala
rm -rf node_modules package-lock.json
npm install
npm start
```

### Puerto 3000 ya está en uso
```bash
# En macOS/Linux
lsof -ti:3000 | xargs kill -9

# En Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Estilos no se cargan correctamente
```bash
# Limpia la caché del navegador
# Presiona Ctrl+Shift+Delete (o Cmd+Shift+Delete en macOS)
# O ejecuta:
npm start -- --reset-cache
```

## 📚 Recursos Útiles

- [React Documentación](https://react.dev)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Bootstrap CSS](https://getbootstrap.com/docs/)
- [Node.js](https://nodejs.org/)

## 🎓 Aprendizajes Clave

Este proyecto implementa conceptos de React:
- **Componentes Funcionales** con Hooks
- **Estado Local** con `useState`
- **Props** para pasar datos entre componentes
- **Manejo de Eventos** en React
- **Listas y Keys** dinámicas
- **Estilos CSS** externos (sin inline styles)
- **Bootstrap Components** en React
- **Diseño Responsive** con CSS Media Queries

## ✨ Mejoras Futuras Planeadas

- [ ] Persistencia en localStorage
- [ ] Base de datos en la nube
- [ ] Autenticación de usuarios
- [ ] Sincronización en múltiples dispositivos
- [ ] Notificaciones de recordatorio
- [ ] Estadísticas y gráficos
- [ ] Modo oscuro
- [ ] Categorías de metas
- [ ] Exportar a PDF
- [ ] Integración con calendario

## 📞 Soporte

¿Preguntas o problemas? 
- Revisa el README.md para documentación completa
- Abre un issue en el repositorio
- Consulta la consola del navegador (F12) para mensajes de error

## 🎉 ¡Éxito!

¡Ya estás listo para usar **Mis Metas y Tareas**! 

Crea tus metas, divide ellas en tareas pequeñas, y ¡logra tus objetivos! 

**¡Que tengas un excelente día productivo! 💪**

---

**Versión:** 0.1.0  
**Última actualización:** Abril 2026  
**Licencia:** MIT
