import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";
import songRouter from "./src/routes/songRoutes.js";
import albumRouter from "./src/routes/albumRoute.js";


// App config

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();


// Middleware

app.use(express.json());
app.use(cors());


// Iniciando routes

app.use("/api/song", songRouter)
app.use('/api/album',albumRouter)
app.get("/", (req, res) => res.send("Api FUNCIONA"));
app.listen(port, () => console.log(`listening on port ${port}`));
