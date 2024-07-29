import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/songModel.js";

const addSong = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const album = req.body.album;
    const audioFile = req.files.audio[0];
    const imageFile = req.files.image[0];

    // Sube el archivo de audio
    const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
      resource_type: "video",
    });
    // Sube el archivo de imagen
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    // Calcula la duración en minutos y segundos
    const minutes = Math.floor(audioUpload.duration / 60);
    const seconds = Math.floor(audioUpload.duration % 60);
    const duration = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    // Crea el objeto con los datos de la canción
    const songData = {
      name,
      desc,
      album,
      image: imageUpload.secure_url,
      file: audioUpload.secure_url,
      duration,
    };

    // Guarda la canción en la base de datos
    const song = new songModel(songData);
    await song.save();

    res.json({ success: true, message: "Canción agregada" });
  } catch (error) {
    console.error(error); // Loguea el error para debug
    res
      .status(500)
      .json({ success: false, message: "Error al agregar la canción" });
  }
};

const listSong = async (req, res) => {
  try {
    const songs = await songModel.find({}); // Obtén todas las canciones
    res.json({ success: true, songs: songs });
  } catch (error) {
    console.error(error); // Loguea el error para debug
    res
      .status(500)
      .json({ success: false, message: "Error al obtener las canciones" });
  }
};

const removeSong = async (req, res) => {
  try {
    await songModel.findByIdAndDelete(req.body.id); // Elimina la canción con el id especificado
    res.json({ success: true, message: "Canción eliminada" });
  } catch (error) {
    console.error(error); // Loguea el error para debug
    res
      .status(500)
      .json({ success: false, message: "Error al eliminar la canción" });
  }
};

export { addSong, listSong, removeSong };
