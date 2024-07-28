// Middleware de multer
import multer from "multer";
const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
const upload = multer({ storage });
export default upload;

// Funciona con expresss y acilita la recepcion y el procesamiento de archivos enviados desde el ciente al servidor