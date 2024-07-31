import mongoose from "mongoose";

const albumShema = new mongoose.Schema({
  name: { type: String, require: true },
  desc: { type: String, require: true },
  bgColour: { type: String, require: true },
  image: { type: String, require: true },
});
const albumModel = mongoose.models.album || mongoose.model("album", albumShema);

export default albumModel;
// Este archivo define un esquema y un modelo para una colección album en MongoDB usando Mongoose. El esquema especifica la estructura de los documentos, mientras que el modelo proporciona una interfaz para interactuar con la base de datos (como crear, leer, actualizar y eliminar documentos).
