import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
          headers:{
            "Content-Type":"application/json"
          },
          withCredentials:true
        })
        if(res.data.success){
          navigate("/")
          toast.success(res.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto px-4">
        <Card className="w-full max-w-md my-10 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Access your account below</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={submitHandler}>
              <div className="flex flex-col gap-6">
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
                  <RadioGroup className="flex gap-6">
                    <div className="flex items-center space-x-2">
                      <Input
                        type="radio"
                        id="applicant"
                        name="role"
                        value="Applicant"
                        checked={input.role === "Applicant"}
                        onChange={changeEventHandler}
                        className="cursor-pointer"
                      />
                      <Label htmlFor="applicant" className="cursor-pointer">
                        Applicant
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input
                        type="radio"
                        id="recruiter"
                        name="role"
                        value="Recruiter"
                        checked={input.role === "Recruiter"}
                        onChange={changeEventHandler}
                        className="cursor-pointer"
                      />
                      <Label htmlFor="recruiter" className="cursor-pointer">
                        Recruiter
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button type="submit" className="w-full cursor-pointer">
                  Login
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2">
            <p className="text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
