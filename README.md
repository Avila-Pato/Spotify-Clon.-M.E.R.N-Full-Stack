# Full Stack Spotify Clone

## Descripción

Este proyecto es una clonación de la aplicación de música Spotify utilizando la pila MERN (MongoDB, Express, React, Node.js). 
La aplicación está dividida en tres partes: **Frontend**, **Backend**, y **Admin Panel**.



## Tecnologías Utilizadas

### **Frontend**

- **[React](https://reactjs.org/)**: Biblioteca para construir interfaces de usuario.
- **[React Router DOM](https://reactrouter.com/)**: Biblioteca para la navegación en la aplicación.
- **[Vite](https://vitejs.dev/)**: Herramienta de construcción rápida para el desarrollo.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de diseño de CSS.
- **[Prop-Types](https://www.npmjs.com/package/prop-types)**: Validación de tipos de props en React.
- **[Autoprefixer](https://github.com/postcss/autoprefixer)**: Herramienta para añadir prefijos de proveedores a CSS.
- **[PostCSS](https://postcss.org/)**: Herramienta para procesar CSS.

### **Backend**

- **[Node.js](https://nodejs.org/)**: Entorno de ejecución para JavaScript en el servidor.
- **[Express](https://expressjs.com/)**: Framework para construir aplicaciones web y APIs en Node.js.
- **[Mongoose](https://mongoosejs.com/)**: Biblioteca para modelar objetos MongoDB en Node.js.
- **[Cloudinary](https://cloudinary.com/)**: Servicio en la nube para almacenar y gestionar archivos multimedia.
- **[Multer](https://www.npmjs.com/package/multer)**: Middleware para manejar la carga de archivos.
- **[CORS](https://www.npmjs.com/package/cors)**: Middleware para permitir solicitudes de diferentes dominios.
- **[Dotenv](https://www.npmjs.com/package/dotenv)**: Carga variables de entorno desde un archivo `.env`.

### **Admin Panel**

- **[React](https://reactjs.org/)**: Biblioteca para construir interfaces de usuario.
- **[React Router DOM](https://reactrouter.com/)**: Biblioteca para la navegación en la aplicación.
- **[Vite](https://vitejs.dev/)**: Herramienta de construcción rápida para el desarrollo.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de diseño de CSS.
- **[Axios](https://axios-http.com/)**: Cliente HTTP para hacer solicitudes.
- **[React Toastify](https://github.com/fkhadra/react-toastify)**: Para mostrar notificaciones.
- **[Autoprefixer](https://github.com/postcss/autoprefixer)**: Herramienta para añadir prefijos de proveedores a CSS.
- **[PostCSS](https://postcss.org/)**: Herramienta para procesar CSS.

## Instalación

### **Frontend**

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/Avila-Pato/spotify-clone.git

## Cómo Funciona

Para levantar el proyecto, debes iniciar tres servidores: `admin`, `backend`, y `frontend`. Sigue estos pasos:

1. **Servidor Admin**
   - Ejecuta `npm run dev` en la carpeta del panel de administración para iniciar el servidor del panel administrativo.

2. **Servidor Backend**
   - Ejecuta `npm run server` en la carpeta del backend para iniciar el servidor del backend.

3. **Servidor Frontend**
   - Ejecuta `npm run dev` en la carpeta del frontend para iniciar el servidor del frontend.

### Uso del Panel de Administración

En el panel de administración, podrás agregar canciones con la siguiente información:
- **Imagen**: La imagen de la canción.
- **Nombre**: El nombre de la canción.
- **Descripción**: Una breve descripción de la canción.
- **Álbum**: El álbum al que pertenece la canción.

### Escuchar Música

Una vez que hayas agregado canciones en el panel de administración, podrás escuchar tu música desde el frontend. 

**Nota**: El archivo `.env` es proporcionado solo para fines profesionales y no debe compartirse públicamente.


