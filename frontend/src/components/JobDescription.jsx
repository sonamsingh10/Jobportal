import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function JobDescription() {
  const isApplied = false;

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Fronted Developer</h1>
          <div className="flex items-center mt-4 gap-2">
            <Badge className={"text-blue-700 font-bold"} variant="ghost">
              12 Position
            </Badge>
            <Badge className={"text-[#F83002] font-bold"} variant="ghost">
              Part Time
            </Badge>
            <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
              24LPA
            </Badge>
          </div>
        </div>

        <Button
          disabled={isApplied}
          className={`rounded-lg ${isApplied ? "bg-gray-600 cursor-not-allowed" : "bg-blue-700 hover:bg-[#ae7ec8]"}`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300  font-medium py-5">Job Description</h1>
      <div className="my-4">
        <h1 className="font-bold my-1">Role:<span className="pl-4 font-normal text-gray-800"> Fronted Developer</span></h1>
        <h1 className="font-bold my-1">Location:<span className="pl-4 font-normal text-gray-800"> Hyderabad</span></h1>
        <h1 className="font-bold my-1">Description:<span className="pl-4 font-normal text-gray-800"> Lorem ipsum dolor sit amet.</span></h1>
        <h1 className="font-bold my-1">Experience:<span className="pl-4 font-normal text-gray-800">2yrs</span></h1>
        <h1 className="font-bold my-1">Salary:<span className="pl-4 font-normal text-gray-800"> 12LPA</span></h1>
        <h1 className="font-bold my-1">Total Applications:<span className="pl-4 font-normal text-gray-800"> 12</span></h1>
        <h1 className="font-bold my-1">Posted Date:<span className="pl-4 font-normal text-gray-800"> 22-05-25</span></h1>
      </div>
    </div>
  );
}
