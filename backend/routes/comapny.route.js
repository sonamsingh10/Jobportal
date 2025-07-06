import express from "express";
import { isAuthenicated } from "../middlewares/isAuthenicated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
const comapnyRouter=express.Router();
comapnyRouter.post("/register",isAuthenicated,registerCompany)
comapnyRouter.get("/get",isAuthenicated,getCompany);
comapnyRouter.get("/get/:id",isAuthenicated,getCompanyById);
comapnyRouter.put("/update/:id",isAuthenicated,updateCompany);
export default comapnyRouter;