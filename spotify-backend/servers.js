import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";

// App config

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middleware

app.use(express.json());
app.use(cors());



// Definiendo la ruta /api/song/add para manejar POST requests
app.post("/api/song/add", (req, res) => {
    const newSong = req.body;
    // Aquí agrega  la lógica para guardar la canción en la base de datos
    res.status(201).json({ message: "Song added successfully", song: newSong });
});


// Iniciando routes
app.get("/", (req, res) => res.send("Api FUNCIONA"));

app.listen(port, () => console.log(`listening on port ${port}`));
