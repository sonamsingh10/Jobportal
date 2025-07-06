import express from "express";
import { isAuthenicated } from "../middlewares/isAuthenicated.js";
import { applyJob, getApplications, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";
const applicationRouter=express.Router();
applicationRouter.get("/apply/:id",isAuthenicated,applyJob);
applicationRouter.get("/get",isAuthenicated,getAppliedJobs);
applicationRouter.get("/:id/applicants",isAuthenicated,getApplications);
applicationRouter.post("/status/:id/update",isAuthenicated,updateStatus);
export default applicationRouter;