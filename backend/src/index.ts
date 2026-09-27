import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import useRouters from "./routes/controllersRoutes";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", useRouters);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor rodando na porta ${PORT || 5000}`);
});