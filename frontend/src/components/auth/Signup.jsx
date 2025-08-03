import React, { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../shared/Navbar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RadioGroup } from "@/components/ui/radio-group"

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: ""
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto px-4">
        <Card className="w-full max-w-md my-10 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Sign Up</CardTitle>
            <CardDescription>Create your account below</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={submitHandler}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input
                    type="text"
                    value={input.fullname}
                    name="fullname"
                    onChange={changeEventHandler}
                    placeholder="Enter Full Name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    value={input.email}
                    name="email"
                    onChange={changeEventHandler}
                    placeholder="Enter your Email"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    value={input.phoneNumber}
                    name="phoneNumber"
                    onChange={changeEventHandler}
                    placeholder="Enter Phone Number"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    value={input.password}
                    name="password"
                    onChange={changeEventHandler}
                    placeholder="Enter your Password"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label>User Type</Label>
                  <RadioGroup
                    className="flex gap-6"
                    value={input.role}
                    onValueChange={(value) =>
                      setInput({ ...input, role: value })
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <Input
                        type="radio"
                        name="role"
                        value="Applicant"
                        checked={input.role === "Applicant"}
                        className="cursor-pointer"
                        onChange={changeEventHandler}
                      />
                      <Label htmlFor="applicant" className="cursor-pointer">
                        Applicant
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input
                        type="radio"
                        name="role"
                        value="Recruiter"
                        checked={input.role === "Recruiter"}
                        className="cursor-pointer"
                        onChange={changeEventHandler}
                      />
                      <Label htmlFor="recruiter" className="cursor-pointer">
                        Recruiter
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button type="submit" className="w-full cursor-pointer">
                  Sign Up
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
