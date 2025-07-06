import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-5">
        <span className="px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium m-auto">
          No. 1 Job Hunt Website
        </span>
        <h1 className="font-bold text-4xl">
          Search , Apply &<br />
          Get Your <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio,
          rem.
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-300 pl-3 rounded-full  items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            className="outline-none border-none w-full"
          />
          <Button className="rounded-r-full bg-[#6A38c2]">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
