# 📋 Mis Metas y Tareas - Gestor de Tareas Personal

Una aplicación web moderna y responsive para gestionar tus tareas y metas personales. Crea metas, agrega tareas asociadas, establece fechas límite y realiza un seguimiento de tu progreso.

## 🎯 Características

- ✅ **Crear Metas**: Agrega nuevas metas con nombre, descripción y fecha límite
- ✅ **Gestionar Tareas**: Crea tareas dentro de cada meta
- ✅ **Seguimiento de Progreso**: Visualiza el porcentaje de tareas completadas
- ✅ **Marcar Completadas**: Marca tareas como completadas con un simple clic
- ✅ **Diseño Responsive**: Funciona perfectamente en desktop, tablet y móvil
- ✅ **Interfaz Moderna**: Diseño limpio y atractivo con gradientes y animaciones
- ✅ **Bootstrap Integration**: Utiliza React Bootstrap para componentes profesionales

## 🛠️ Tecnologías Utilizadas

- **React** - Librería de UI
- **React Bootstrap** - Componentes de Bootstrap para React
- **CSS3** - Estilos personalizados y responsive
- **Create React App** - Herramienta de construcción

## 📦 Instalación

### Requisitos Previos
- Node.js (v14 o superior)
- npm o yarn

### Pasos para Instalar

1. **Clonar el repositorio**
   ```bash
   git clone <URL-DEL-REPOSITORIO>
   cd todo-goals-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm start
   ```

4. **Abrir en el navegador**
   - La aplicación se abrirá automáticamente en `http://localhost:3000`

## 🚀 Uso

### Crear una Nueva Meta
1. Haz clic en el botón **"+ AGREGAR META"**
2. Completa el formulario:
   - **Nombre**: El nombre de tu meta
   - **Descripción**: Una descripción detallada (opcional)
   - **Fecha Límite**: Selecciona una fecha objetivo (opcional)
3. Haz clic en **"Crear Meta"**

### Agregar Tareas a una Meta
1. En la tarjeta de la meta, haz clic en **"+ Agregar Tarea"**
2. Ingresa el nombre de la tarea
3. Selecciona una fecha límite (opcional)
4. Haz clic en **"Agregar"**

### Completar una Tarea
1. Marca el checkbox al lado de la tarea para marcarla como completada
2. El progreso de la meta se actualizará automáticamente

### Eliminar Meta o Tarea
1. Haz clic en el botón **✕** en la esquina de la tarjeta o tarea para eliminarla

## 📱 Responsive Design

La aplicación está completamente optimizada para diferentes tamaños de pantalla:
- **Desktop** (1024px+): Grid de 3 columnas
- **Tablet** (768px - 1023px): Grid de 2 columnas
- **Mobile** (< 768px): Una sola columna con optimización completa

## 🎨 Estructura de Carpetas

```
todo-goals-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── GoalForm.js
│   │   ├── GoalCard.js
│   │   ├── TaskForm.js
│   │   └── TaskItem.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── GoalForm.css
│   │   ├── GoalCard.css
│   │   ├── TaskForm.css
│   │   └── TaskItem.css
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

## 🏗️ Estructura de Componentes

### App.js
Componente principal que maneja el estado global de metas y tareas.

### Header.js
Barra de navegación con el título de la aplicación.

### GoalForm.js
Modal para crear nuevas metas con validación de formulario.

### GoalCard.js
Tarjeta que muestra una meta con su información, progreso y tareas asociadas.

### TaskForm.js
Formulario para agregar nuevas tareas a una meta.

### TaskItem.js
Componente individual de una tarea con opciones para completar o eliminar.

## 🎯 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`
Inicia el servidor de desarrollo y abre la app en el navegador.

### `npm run build`
Crea una versión optimizada para producción en la carpeta `build`.

### `npm test`
Ejecuta los tests (si existen).

### `npm run eject`
Expone toda la configuración de Create React App (no se puede revertir).

## 🌈 Paleta de Colores

- **Gradiente Principal**: #667eea a #764ba2 (Púrpura)
- **Texto Primario**: #333
- **Texto Secundario**: #666
- **Accento**: #667eea
- **Fondo Claro**: #f5f5f5
- **Error**: #dc3545

## 💡 Características Futuras

- 📊 Estadísticas y gráficos de progreso
- 🔔 Notificaciones de recordatorio
- 💾 Persistencia en localStorage o base de datos
- 🌙 Modo oscuro
- 🏷️ Categorías de metas
- 🔍 Búsqueda y filtrado
- 📤 Exportar tareas a PDF

## 📄 Licencia

Este proyecto está licenciado bajo la licencia MIT.

## 👤 Autor

Creado como parte de la Actividad 1 de Desarrollo Web.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto y Soporte

Si tienes preguntas o sugerencias, por favor abre un issue en el repositorio.

---

**¡Gracias por usar Mis Metas y Tareas! ¡Que tengas éxito alcanzando tus metas! 🎉**
