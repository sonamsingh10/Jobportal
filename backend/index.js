import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./utils/db.js";
import userRouter from "./routes/user.route.js";
import comapnyRouter from "./routes/comapny.route.js";
import jobRouter from "./routes/job.route.js";
import applicationRouter from "./routes/application.route.js";
const app=express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173", // Frontend URL
  credentials: true,
};
app.use(cors(corsOptions));


const PORT=process.env.PORT || 3000;
connectDB();
// api
app.use("/user",userRouter);
app.use("/company",comapnyRouter);
app.use("/job",jobRouter);
app.use("/application",applicationRouter);
app.listen(PORT,()=>{
    console.log(`My Server is running on ${PORT} PORT`);
})