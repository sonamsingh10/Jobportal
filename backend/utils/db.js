import mongoose from "mongoose";
const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://sonamkumari29019:nRjRWBNW6QNqzM3R@mca.2k1icwk.mongodb.net/");

            console.log("mongoDB is connected successfully...");
        } catch (error ) {
        console.log(error);
       }
}
export default connectDB;