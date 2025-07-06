import express from "express";
import { isAuthenicated } from "../middlewares/isAuthenicated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";
const jobRouter=express.Router();
jobRouter.post("/post",isAuthenicated,postJob)
jobRouter.get("/get",isAuthenicated,getAllJobs);
jobRouter.get("/getadminjobs",isAuthenicated,getAdminJobs);
jobRouter.get("/get/:id",isAuthenicated,getJobById);
export default jobRouter;