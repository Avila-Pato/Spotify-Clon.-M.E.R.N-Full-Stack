import express from "express";
import cors from "cors";
import "dotenv/config";

// App config

const app = express();
const port = process.env.PORT || 4000;

// Middleware

app.use(express.json());
app.use(cors());

// Iniciando routes
app.get("/", (req, res) => res.send("Api FUNCIONA"));
app.listen(port, () => console.log(`listening on port ${port}`));
