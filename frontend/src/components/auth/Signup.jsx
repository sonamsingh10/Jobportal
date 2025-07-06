// import React, { useState } from "react";
// import Navbar from "../shared/Navbar";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
// import { Button } from "../ui/button";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { USER_API_END_POINT } from "@/utils/constant";
// import { toast } from "sonner";

// export default function Signup() {
//   const [input, setInput] = useState({
//     fullname: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     role: "",
//     file: "",
//   });
//   const navigate = useNavigate();
//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };
//   const changeFileHandler = (e) => {
//     setInput({ ...input, file: e.target.files?.[0] });
//   };
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("fullname", input.fullname);
//     formData.append("email", input.email);
//     formData.append("password", input.password);
//     formData.append("phoneNumber", input.phoneNumber);
//     formData.append("role", input.role);
//     if (input.file) {
//       formData.append("file", input.file);
//     }

//     try {
//        console.log(formData);
//        console.log(input.file);
//        console.log(input);
//       const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data", // Correct
//         },

//         withCredentials: true,
//       });
//       if (res.data.success) {
//         navigate("/login");
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response.data.message);
//     }
//   };
//   return (
//     <>
//       <Navbar />
//       <div className="flex items-center justify-center max-w-7xl mx-auto">
//         <form
//           onSubmit={submitHandler}
//           className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
//         >
//           <h1 className="font-bold text-xl mb-5">Signup</h1>
//           <div className="my-2">
//             <Label>Full Name</Label>
//             <Input
//               type="text"
//               value={input.fullname}
//               name="fullname"
//               onChange={changeEventHandler}
//               placeholder="Enter your name"
//             />
//           </div>
//           <div className="my-2">
//             <Label>Email</Label>
//             <Input
//               type="email"
//               value={input.email}
//               name="email"
//               onChange={changeEventHandler}
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="my-2">
//             <Label>Phone Number</Label>
//             <Input
//               type="number"
//               value={input.phoneNumber}
//               name="phoneNumber"
//               onChange={changeEventHandler}
//               placeholder="Enter your phone number"
//             />
//           </div>
//           <div className="my-2">
//             <Label>Password</Label>
//             <Input
//               type="password"
//               value={input.password}
//               name="password"
//               onChange={changeEventHandler}
//               placeholder="Enter your password"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <RadioGroup className="flex items-center gap-4 my-5">
//               <div className="flex items-center space-x-2">
//                 <Input
//                   type="radio"
//                   name="role"
//                   value="student"
//                   checked={input.role === "student"}
//                   onChange={changeEventHandler}
//                   className="cursor-pointer"
//                 />
//                 <Label htmlFor="r1">Student</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Input
//                   type="radio"
//                   name="role"
//                   value="recruiter"
//                   checked={input.role === "recruiter"}
//                   onChange={changeEventHandler}
//                   className="cursor-pointer"
//                 />
//                 <Label htmlFor="r2">Recruiter</Label>
//               </div>
//             </RadioGroup>
//             <div className="flex items-center gap-2">
//               <Label>Profile</Label>
//               <Input
//                 type="file"
//                 onChange={changeFileHandler}
//                 className="cursor-pointer"
//                 accept="image/*"
//               />
//             </div>
//           </div>
//           <Button type="submit" className="w-full my-4">
//             Signup
//           </Button>
//           <span className="text-sm">
//             Allready have an account?
//             <Link to="/login" className="text-blue-800">
//               Login
//             </Link>
//           </span>
//         </form>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import store from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

export default function Signup() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const navigate = useNavigate();
  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Validate fields
    if (
      !input.fullname ||
      !input.email ||
      !input.phoneNumber ||
      !input.password ||
      !input.role
    ) {
      toast.error("Please fill in all the fields.");
      return;
    }

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Correct header
        },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message || "Registration failed.");
      }
    } catch (error) {
      console.error(error); // Log the error for debugging
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Signup</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Enter your name"
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter your email"
            />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="number"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                type="file"
                onChange={changeFileHandler}
                className="cursor-pointer"
                accept="image/*"
              />
            </div>
          </div>
          {/* <Button type="submit" className="w-full my-4">
            Signup
          </Button> */}
          {loading ? (
            <Button className="w-full my-4">
              <Loader2 className=" *:mr-2 h-4 w-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Signup
            </Button>
          )}
          <span className="text-sm">
            Already have an account?
            <Link to="/login" className="text-blue-800">
              Login
            </Link>
          </span>
        </form>
      </div>
    </>
  );
}
