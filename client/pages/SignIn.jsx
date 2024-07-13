import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";

import OAuth from "../components/OAuth";



export default function SignIn() {
  const [formData, setFormData] = useState({});
 //const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  //const dispatch= useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
   // dispatch(signInStart());
    try {
      const res = await fetch("http://localhost:3000/user/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        withCredentials: true, 
        credentials: 'include'
      });

      const data = await res.json(); // Wait for JSON data
      
      
       navigate('/');
       
    } catch (error) {
     console.log("Login failed", (error.message));
    }
  };
 
  return (
    <div className=" min-h-screen w-full flex flex-row gap-2  pt-2">
              
        <div className="bg-white rounded-xl mx-auto h-fit py-4 w-3/4 md:w-1/2">
        <h1 className="text-3xl font-bold underline text-center mb-4 uppercase"><span className='text-header'>SIGN</span> in </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 border-t-2 pt-4" >
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-xl w-1/2 mx-auto"

          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-xl w-1/2 mx-auto"

          id="password"
          onChange={handleChange}
        />
         <button
        //   disabled={loading}
          className="bg-slate-700 text-white p-3 w-1/2 mx-auto rounded-xl
        uppercase hover:opacity-95 disabled:opacity-80"
        >
            sign in
        </button>
        <OAuth />
        <div className="flex gap-2 mt-2 mx-auto">
          <p>have an account</p>
          <Link to={"/sign-up"}>
            <span className="text-blue-700">Sign up</span>
          </Link>
        </div>
        </form>
       
        </div>
    </div>
  )
}
