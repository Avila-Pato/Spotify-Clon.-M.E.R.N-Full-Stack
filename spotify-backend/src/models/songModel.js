import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    name:{ type: String, require: true },
    desc:{ type: String, require: true },
    album:{ type: String, require: true },
    image:{ type: String, require: true },
    file:{ type: String, require: true },
    duration:{ type: String, require: true },
})
const songModel = mongoose.models.song || mongoose.model("song", songSchema)

export default songModel;
//El esquema especifica la estructura y los campos de los documentos de la colección, y el modelo proporciona métodos para interactuar con esos documentos (como crear, leer, actualizar y eliminar canciones).