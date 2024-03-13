import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routes/AuthRoutes.js";
dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,credentials: true
}));
app.use(express.json());

app.use("/api/auth",AuthRoutes)

const server = app.listen(process.env.PORT , ()=>{
  console.log(`Server started on port ${process.env.PORT}`);
})

