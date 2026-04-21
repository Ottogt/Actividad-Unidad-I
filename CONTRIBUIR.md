# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a **Mis Metas y Tareas**! Aquí te compartimos cómo puedes ayudar.

## 📋 Código de Conducta

Este proyecto adhiere a un Código de Conducta. Al participar, esperas mantener una comunidad respetuosa y acogedora.

## ¿Cómo Contribuir?

### 🐛 Reportar Bugs

Si encontraste un bug, por favor:

1. **Verifica que no exista ya** un reporte del mismo problema
2. **Crea un nuevo issue** con:
   - Título claro y descriptivo
   - Descripción detallada del bug
   - Pasos para reproducirlo
   - Comportamiento esperado vs actual
   - Screenshots si es relevante
   - Tu entorno (navegador, SO, versión de Node.js)

### 💡 Sugerir Mejoras

Para sugerir nuevas características:

1. **Verifica que no exista ya** una solicitud similar
2. **Crea un nuevo issue** con:
   - Título descriptivo
   - Descripción clara de la mejora
   - Casos de uso
   - Beneficios potenciales
   - Ejemplos de cómo se usaría

### 🔧 Contribución de Código

#### Configuración del Entorno

1. **Fork el repositorio**
   ```bash
   # En GitHub, haz clic en "Fork"
   ```

2. **Clona tu fork localmente**
   ```bash
   git clone https://github.com/tu-usuario/todo-goals-app.git
   cd todo-goals-app
   ```

3. **Agrega el repositorio original como upstream**
   ```bash
   git remote add upstream https://github.com/original-usuario/todo-goals-app.git
   ```

4. **Crea una rama para tu feature**
   ```bash
   git checkout -b feature/mi-feature
   # o para bugs:
   git checkout -b fix/mi-bug
   ```

5. **Instala dependencias**
   ```bash
   npm install
   ```

#### Desarrollo

1. **Realiza tus cambios** en la rama creada
2. **Prueba tu código** localmente
   ```bash
   npm start
   npm test
   npm run build
   ```

3. **Sigue las convenciones de código**:
   - Componentes: PascalCase (`MyComponent.js`)
   - Funciones: camelCase (`myFunction()`)
   - Constantes: UPPER_SNAKE_CASE (`MY_CONSTANT`)
   - Estilos en archivos CSS separados, no inline

4. **Escribe commits claros**:
   ```bash
   git add .
   git commit -m "feat: Add feature description"
   # o:
   git commit -m "fix: Fix bug description"
   # o:
   git commit -m "docs: Update README"
   ```

   **Prefijos de commit recomendados:**
   - `feat:` Nueva característica
   - `fix:` Corrección de bug
   - `docs:` Cambios en documentación
   - `style:` Cambios que no afectan la lógica (CSS, formato)
   - `refactor:` Cambios de código sin nuevas features
   - `perf:` Mejoras de performance
   - `test:` Agregar o actualizar tests
   - `chore:` Cambios en configuración

5. **Mantén tu rama actualizada**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

6. **Push a tu fork**:
   ```bash
   git push origin feature/mi-feature
   ```

#### Pull Request

1. **Crea un Pull Request** en GitHub
2. **Rellena el template** completamente:
   - Descripción clara de cambios
   - Issue relacionado (si existe)
   - Tipos de cambios
   - Checklist de testing

3. **Espera revisión** de los mantenedores
4. **Responde a los comentarios** y realiza cambios si se solicitan
5. **Celebra** cuando se merge tu PR 🎉

### 📝 Escribiendo Documentación

La documentación es tan importante como el código:

1. **Actualiza README.md** si cambias funcionalidad
2. **Agrega comentarios** a código complejo
3. **Crea ejemplos** de uso para nuevas features
4. **Mantén QUICK-START.md** actualizado
5. **Documenta pasos de instalación** si cambian

## 🎨 Estándares de Código

### Estructura de Componentes

```javascript
// Imports
import React, { useState } from 'react';
import { Component } from 'react-bootstrap';
import '../styles/MyComponent.css';

// Componente
function MyComponent({ prop1, prop2 }) {
  // Estado y hooks
  const [state, setState] = useState(initial);
  
  // Funciones
  const handleAction = () => {
    // Lógica
  };
  
  // Render
  return (
    <div className="my-component">
      {/* JSX */}
    </div>
  );
}

export default MyComponent;
```

### Convenciones CSS

```css
/* Usar BEM (Block Element Modifier) */
.component-name { }
.component-name__element { }
.component-name--modifier { }

/* Variables de color */
.primary-color: #667eea;
.secondary-color: #764ba2;

/* Mobile First */
@media (min-width: 768px) {
  /* Tablets y superior */
}
```

## 🧪 Testing

- **Corre tests** antes de hacer push:
  ```bash
  npm test
  ```

- **Agrega tests** para nuevas funcionalidades
- **Asegúrate** que todos los tests pasen

## 📚 Recursos

- [Documentación de React](https://react.dev)
- [React Bootstrap Docs](https://react-bootstrap.github.io/)
- [Guía Git](https://git-scm.com/docs)
- [Conventional Commits](https://www.conventionalcommits.org/)

## ✅ Checklist Antes de Hacer Push

- [ ] Código funciona localmente
- [ ] Tests pasan (`npm test`)
- [ ] Build exitoso (`npm run build`)
- [ ] No hay warnings en consola
- [ ] Código sigue convenciones del proyecto
- [ ] Commits tienen mensajes claros
- [ ] Documentación está actualizada
- [ ] No hay cambios sin relación al objetivo

## 🎯 Áreas donde Necesitamos Ayuda

- [ ] Mejoras de performance
- [ ] Tests unitarios
- [ ] Documentación
- [ ] Nuevas características
- [ ] Soporte para más idiomas
- [ ] Diseño responsive (más dispositivos)
- [ ] Accesibilidad (a11y)

## 💬 Contacto

- Abre un **issue** para preguntas
- Comenta en **pull requests**
- Sé respetuoso y constructivo

## 🙌 Reconocimientos

¡Gracias por contribuir! Todos los contribuidores serán reconocidos en la lista de colaboradores.

---

**¡Estamos emocionados de contar con tu ayuda!** 🚀

Para más información, lee [README.md](./README.md) y [QUICK-START.md](./QUICK-START.md).
