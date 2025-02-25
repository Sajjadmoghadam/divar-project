import express from "express"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
const app = express()
dotenv.config({path:"./.env"})
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())















export default app