import { addSong, listSong } from "../controllers/SongControllers";
import express from "express";

const songRouter = express.Router();

songRouter.post("/add", addSong);
songRouter.get("/list", listSong);

export default songRouter;
