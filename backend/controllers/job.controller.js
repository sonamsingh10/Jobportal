import { Job } from "../models/job.model.js";
// admin post karega job
export const postJob=async(req,res)=>{
    try {
        const {title,description,requirements,salary,location,jobType,experience,position,companyId}=req.body;
        const userId=req.id; 
        if(!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId)
        {
            return res.status(400).json({message:"Something missing",status:false});
        }
        const job=await Job({
            title,
            description,
            requirements:requirements.split(","),
            salary:Number(salary),
            location,
            jobType,
            experienceLevel:experience,
            position,
            company:companyId,
            created_by:userId
        })
        await job.save();
        return res.status(201).json({message:"New job created successfully.",job,success:true});
    } catch (error) {
        console.log(error);
    }
}
// student ke liye
export const getAllJobs=async(req,res)=>{
    try {
        const keyword=req.query.keyword || "";
        const query={
            $or:[
                {title:{$regex:keyword,$options:"i"}},
                {description:{$regex:keyword,$options:"i"}}
            ]
        };
        const jobs=await Job.find(query).populate("company");
        if(!jobs)
        {
            return res.status(404).json({messsage:"Job not Found.",success:false});
        }
        return res.status(200).json({jobs,success:true});
    } catch (error) {
        console.log(error);
    }
}
// student ke liye
export const getJobById=async(req,res)=>{
    try {
        const jobId=req.params.id;
        const job=await Job.findById(jobId);
        if(!job)
        {
            return res.status(404).json({messsage:"Job not Found.",success:false});
        }
        return res.status(200).json({job,success:true});
    } catch (error) {
        console.log(error);
    }
    
}
// admin kitne job create kra hai abhi tk
export const getAdminJobs=async(req,res)=>{
    try {
        const adminId=req.id;
        const jobs=await Job.find({created_by:adminId});
        if(!jobs)
            {
                return res.status(404).json({messsage:"Job not Found.",success:false});
            }
            return res.status(200).json({jobs,success:true});
    } catch (error) {
        console.log(error);
    }
}
