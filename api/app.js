import express from "express"
import morgan from "morgan"
import cors from "cors"
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv"
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
const app = express()
app.use("/media", express.static(path.join(__dirname, "Public/media")));
dotenv.config({path:"./.env"})
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())















export default app