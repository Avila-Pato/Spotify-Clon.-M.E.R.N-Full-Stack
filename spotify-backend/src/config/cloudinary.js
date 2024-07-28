import { v2 as cloudinary } from 'cloudinary';

const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    });
};

export default connectCloudinary;


// este archivo configura la conexión con Cloudinary y maneja cualquier error que pueda surgir durante este proceso. Es una buena práctica encapsular esta configuración en una función asíncrona y manejar los errores para asegurar que tu aplicación pueda gestionar problemas de conexión adecuadamente.