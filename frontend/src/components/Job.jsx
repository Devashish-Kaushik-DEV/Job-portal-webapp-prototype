import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from './ui/badge'

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">2 days ago</p>
        <Button variant="outline" className="rounded-full cursor-pointer" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage
              src="https://static.vecteezy.com/system/resources/previews/008/098/749/non_2x/logo-high-rise-city-building-with-blue-color-and-wings-bird-eagle-dove-flay-in-the-sky-suitable-for-architecture-civil-construction-company-business-vector.jpg"
            />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem quibusdam atque odio.</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
          <Badge className='text-blue-700 font-bold' variant="ghost" >Positions</Badge>
          <Badge className='text-red-600 font-bold' variant="ghost" >Job Type</Badge>
          <Badge className='text-violet-900 font-bold' variant="ghost" >--LPA</Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button className="bg-slate-200" variant="outline">Details</Button>
        <Button className="bg-violet-900">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
