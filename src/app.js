import express from "express";

import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro conexão DB"));
db.once("open", () => {
    console.log("DB conectado com sucesso.")
});

const app = express();

routes(app);

export default app;