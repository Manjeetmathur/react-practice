import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(cookieParser());
// app.use(express.urlencoded({extended:true,limit:"16kb"}))
// app.use(express.static("public"))
import userRoutes from "./routes/userRoutes.js";
app.use("/user", userRoutes);

export { app };
