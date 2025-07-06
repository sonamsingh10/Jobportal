import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import { isAuthenicated } from "../middlewares/isAuthenicated.js";
import { singleUpload } from "../middlewares/multer.js";
const userRouter=express.Router();
userRouter.post("/register",singleUpload,register)
userRouter.post("/login",login);
userRouter.put("/profile/update",isAuthenicated,singleUpload,updateProfile);
userRouter.get("/logout",logout);
export default userRouter;