import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = true;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Frontend Developer</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-blue-700 font-bold" variant="ghost">
              Positions
            </Badge>
            <Badge className="text-red-600 font-bold" variant="ghost">
              Job Type
            </Badge>
            <Badge className="text-violet-900 font-bold" variant="ghost">
              --LPA
            </Badge>
          </div>
        </div>
        <Button
          onClick={(e) => {
            if (isApplied) e.preventDefault(); // Prevent click action
          }}
          className={`rounded-lg ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-violet-800 hover:bg-[#431386]"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium my-4 py-2">Job Description</h1>
      <div>
          <h1 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">Frontend Developer</span></h1>
          <h1 className="font-bold my-1">Location: <span className="pl-4 font-normal text-gray-800">Delhi</span></h1>
          <h1 className="font-bold my-1">Description: <span className="pl-4 font-normal text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis, nam nemo ratione atque quidem?</span></h1>
          <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">2 years</span></h1>
          <h1 className="font-bold my-1">Salary: <span className="pl-4 font-normal text-gray-800">9.6LPA</span></h1>
          <h1 className="font-bold my-1">Total Applicants: <span className="pl-4 font-normal text-gray-800">8</span></h1>
          <h1 className="font-bold my-1">Posted Date: <span className="pl-4 font-normal text-gray-800">10-08-2025</span></h1>
      </div>
    </div>
  );
};

export default JobDescription;
