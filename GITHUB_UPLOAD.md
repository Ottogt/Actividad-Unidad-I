# 🚀 Cómo Subir el Proyecto a GitHub

Este documento te guiará para subir el proyecto **Mis Metas y Tareas** a GitHub de forma correcta.

## 📋 Requisitos Previos

- Tener una cuenta en [GitHub](https://github.com)
- Tener Git instalado y configurado
- El proyecto local ya inicializado con Git ✅ (ya está hecho)

## 🔧 Pasos para Crear el Repositorio en GitHub

### Paso 1: Crear un Nuevo Repositorio en GitHub

1. **Inicia sesión** en tu cuenta de GitHub
2. Haz clic en **"+"** (esquina superior derecha) → **"New repository"**
3. **Completa el formulario:**
   - **Repository name**: `todo-goals-app`
   - **Description**: `Una aplicación web para gestionar tareas y metas personales con React y Bootstrap`
   - **Visibility**: Elige **Public** (para que sea accesible públicamente)
   - **Initialize this repository with:**
     - ❌ No marques "Add a README file" (ya tenemos uno)
     - ❌ No marques "Add .gitignore" (ya tenemos uno)
     - ❌ No marques "Choose a license" (agregaremos después si es necesario)
4. Haz clic en **"Create repository"**

### Paso 2: Copiar la URL del Repositorio

1. En la página del nuevo repositorio, verás un botón verde **"Code"**
2. Haz clic en el botón
3. Selecciona la pestaña **"HTTPS"** (más fácil sin SSH keys)
4. Copia la URL (ej: `https://github.com/tu-usuario/todo-goals-app.git`)

### Paso 3: Conectar el Repositorio Local con el Remoto

En tu terminal, en la carpeta del proyecto:

```bash
cd "/Users/ottohernandez/Desktop/U/Desarrollo Web /Actividad 1/todo-goals-app"

# Agregar el repositorio remoto
git remote add origin https://github.com/tu-usuario/todo-goals-app.git

# Verificar que se agregó correctamente
git remote -v
```

Deberías ver:
```
origin  https://github.com/tu-usuario/todo-goals-app.git (fetch)
origin  https://github.com/tu-usuario/todo-goals-app.git (push)
```

### Paso 4: Renombrar la Rama Principal (si es necesario)

```bash
# Algunos sistemas usan "master", GitHub espera "main"
git branch -M main
```

### Paso 5: Hacer Push del Proyecto

```bash
# Push inicial con todas las ramas
git push -u origin main
```

La primera vez te pedirá autenticación. Tienes dos opciones:

#### Opción A: Autenticación con Contraseña (más simple)
- Usa tu email de GitHub
- Usa tu contraseña de GitHub

#### Opción B: Token de Acceso Personal (más seguro)
1. En GitHub, ve a **Settings** → **Developer settings** → **Personal access tokens**
2. Haz clic en **"Tokens (classic)"** → **"Generate new token"**
3. Dale un nombre descriptivo (ej: "CLI")
4. Selecciona estos permisos:
   - ✅ `repo` (acceso completo a repositorios)
   - ✅ `workflow` (para ejecutar workflows)
5. Haz clic en **"Generate token"**
6. **Copia el token** (solo se muestra una vez)
7. Usa este token como contraseña

## ✅ Verificar que se Subió Correctamente

1. Abre tu navegador y ve a `https://github.com/tu-usuario/todo-goals-app`
2. Deberías ver:
   - Todos los archivos del proyecto
   - El README.md mostrado en la página principal
   - El historial de commits en la esquina derecha
   - Los archivos en la carpeta `src/components/` y `src/styles/`

## 📝 Próximos Pasos

### Agregar una Licencia

```bash
# En la carpeta del proyecto
git pull origin main  # Asegúrate de tener los últimos cambios

# Agrega un archivo LICENSE
echo "MIT License

Copyright (c) 2026 [Tu Nombre]

..." > LICENSE

git add LICENSE
git commit -m "docs: Add MIT License"
git push origin main
```

### Agregar Topics (Etiquetas)

En GitHub, en tu repositorio:
1. Haz clic en el engranaje **⚙️ Settings** (en la barra superior)
2. En la sección "Code, planning, and automation" → **General**
3. En **Repository topics**, agrega:
   - `react`
   - `bootstrap`
   - `todo-list`
   - `task-management`
   - `responsive-design`

### Habilitar GitHub Pages (Opcional - para publicar online)

1. Ve a **Settings** → **Pages**
2. En **Build and deployment**:
   - **Source**: Selecciona **Deploy from a branch**
   - **Branch**: Selecciona **main** y carpeta **root** (o `/docs` si la tienes)
3. Espera a que se complete el deployment
4. Tu sitio estará disponible en: `https://tu-usuario.github.io/todo-goals-app`

## 🔄 Flujo de Trabajo Diario

Después de hacer cambios locales:

```bash
# Ver cambios
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción de cambios"

# Push a GitHub
git push origin main
```

## 🎓 Comandos Git Útiles

```bash
# Ver el historial completo
git log

# Ver cambios sin hacer commit
git diff

# Ver cambios ya en staging area
git diff --staged

# Deshacer cambios no confirmados
git checkout -- .

# Deshacer el último commit (mantiene cambios)
git reset --soft HEAD~1

# Ver todas las ramas
git branch -a

# Ver estado del proyecto
git status
```

## 🔒 Proteger la Rama Principal

Para evitar cambios accidentales:

1. Ve a **Settings** → **Branches**
2. En **Branch protection rules**, haz clic en **Add rule**
3. En **Branch name pattern**, escribe: `main`
4. Marca estas opciones:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
5. Haz clic en **Create**

## 🐛 Si Algo Sale Mal

### Error: "fatal: remote origin already exists"
```bash
# Elimina el remote existente
git remote remove origin

# Agrega el correcto
git remote add origin https://github.com/tu-usuario/todo-goals-app.git
```

### Error de Autenticación
```bash
# Borra las credenciales guardadas
git credential-osxkeychain erase  # En macOS
# o
git credential-manager-core erase  # En Windows

# Intenta de nuevo - te pedirá las credenciales
git push origin main
```

### Necesito cambiar la URL del repositorio remoto
```bash
git remote set-url origin https://github.com/nuevo-usuario/nuevo-repo.git
```

## 📚 Recursos Útiles

- [Documentación oficial de GitHub](https://docs.github.com)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Markdown Guide](https://guides.github.com/features/mastering-markdown/)

## 🎉 ¡Lo Lograste!

Ahora tu proyecto está en GitHub y accesible públicamente. Puedes:

- 📊 Ver estadísticas de tu repositorio
- 👥 Invitar colaboradores
- 🔄 Hacer pull requests
- 📝 Crear issues para bugs o features
- 🚀 Desplegar automáticamente con GitHub Pages
- 🤖 Usar GitHub Actions para CI/CD

---

**Próximos pasos recomendados:**

1. ✅ Subir el proyecto a GitHub
2. ⬜ Crear ramas para nuevas features (`git checkout -b feature/nombre`)
3. ⬜ Implementar tests unitarios
4. ⬜ Configurar GitHub Actions para CI/CD
5. ⬜ Publicar en GitHub Pages

¡Felicidades por completar tu proyecto! 🎊
