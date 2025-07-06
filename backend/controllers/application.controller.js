import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";
// export const applyJob=async(req,res)=>{
//     try {
//         const userId=req.id;
//         const jobId=req.params.id;
//         if(!jobId){
//             return res.status(400).json({message:"Job id is required",success:false});
//         }
//         // check if the user has allreday applied for the job
//         const existingApplication=await Application.findOne({job:jobId,applicant:userId});
//         if(existingApplication)
//         {
//             return res.status(400).json({message:"You have allready applied for this job",success:false});
//         }
//         // check if the job exists
//         const job=await Job.findById(jobId);
//         if(!job){
//             return res.status(400).json({message:"Job not Found.",success:false});
//         }
//         // create a new application
//         const newApplication=await Application({
//             applicant:userId,
//             job:jobId
//         });
//         await newApplication.save();
//         // job.application.push(newApplication._id);
//         console.log('Before push:', job.application);
//        job.application.push(newApplication._id);
//        console.log('After push:', job.application);

//         await job.save();
//         return res.status(200).json({message:"Job applied successfully",success:true});
//     } catch (error) {
//        console.log(error);
//        res.status(400).send(error);
//     }
// }
export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res
        .status(400)
        .json({ message: "Job id is required", success: false });
    }
    // Check if the user has already applied for the job
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res
        .status(400)
        .json({
          message: "You have already applied for this job",
          success: false,
        });
    }
    // Check if the job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res
        .status(400)
        .json({ message: "Job not Found.", success: false });
    }
    // Ensure the job.application is an array
    if (!Array.isArray(job.application)) {
      job.application = []; // Initialize as an empty array if it's undefined
    }
    // Create a new application
    const newApplication = new Application({
      applicant: userId,
      job: jobId,
    });
    await newApplication.save();

    // Add the new application ID to the job's application array
    job.application.push(newApplication._id);
    await job.save();

    return res
      .status(200)
      .json({ message: "Job applied successfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });
    if (!application) {
      return res
        .status(400)
        .json({ message: "No Applications", success: false });
    }
    return res.status(200).json({ application, success: true });
  } catch (error) {
    console.log(error);
  }
};
// admin dekhega kitna user ne apply kiya hai
export const getApplications = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "application",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
      },
    });
    if (!job) {
      return res.status(404).json({ message: "Job not Found", success: false });
    }
    return res.status(200).json({ job, success: true });
  } catch (error) {
    console.log(error);
  }
};
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res
        .status(404)
        .json({ message: "status is required", success: false });
    }
    // find the applcation by applicion Id
    const applcation = await Application.findOne({ _id: applicationId });
    if (!applcation) {
      return res
        .status(404)
        .json({ message: "Application not Found", success: false });
    }
    // update status
    applcation.status = status.toLowerCase();
    await applcation.save();
    return res
      .status(200)
      .json({ message: "Status update successfully", status: true });
  } catch (error) {
    console.log(error);
  }
};
