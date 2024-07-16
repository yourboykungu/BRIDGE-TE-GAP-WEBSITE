import React, { useState } from 'react';
import OAuth from '../components/OAuth.jsx';
import { Link,useNavigate } from "react-router-dom";


export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/user/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json(); // Wait for JSON data
      
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
       setLoading(false);
       setError(null);
       navigate('/sign-in');
       
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
 
  return (
    <div className=" min-h-screen w-full flex flex-row gap-2  pt-2">
        <div className="bg-white rounded-xl mx-auto h-fit py-4 w-3/4 md:w-1/2">
        <h1 className="text-3xl font-bold underline text-center mb-4"><span className='text-header'>SIGN</span> UP</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 border-t-2 pt-4" >
            <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-xl w-1/2 mx-auto"
          id="username"
          onChange={handleChange}
        />
         <input
          type="number"
          placeholder="phone number"
          className="border p-3 rounded-xl w-1/2 mx-auto"

          id="number"
          onChange={handleChange}
        />
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
           disabled={loading}
          className="bg-slate-700 text-white p-3 w-1/2 mx-auto rounded-xl
        uppercase hover:opacity-95 disabled:opacity-80"
        >
            sign up
        </button>
        <OAuth />
        <div className="flex gap-2 mt-2 mx-auto">
          <p>have an account</p>
          <Link to={"/sign-in"}>
            <span className="text-blue-700">Sign in</span>
          </Link>
        </div>
        </form>
       
        </div>
    </div>
  )
}
