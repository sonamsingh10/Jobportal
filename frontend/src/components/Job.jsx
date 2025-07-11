import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

export default function Job() {
  const navigate=useNavigate();
  const jobId="lkdfkaskdjdkasjkdka";
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">2 Days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Comapny Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          laborum laudantium, quo odit explicabo itaque!
        </p>
      </div>
      <div className="flex items-center mt-4 gap-2">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">12 Position</Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">Part Time</Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">24LPA</Badge>
      </div>
      <div  className="flex items-center gap-4 mt-5">
        <Button onClick={()=>navigate(`/description/${jobId}`)}  variant="outline">Details</Button>
         <Button className="bg-[#7209b7]"> Save For Later</Button>
      </div>
    </div>
  );
}
