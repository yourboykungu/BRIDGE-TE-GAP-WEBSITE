import React from 'react';
import OAuth from '../components/OAuth.jsx';
import { Link,useNavigate } from "react-router-dom";


export default function SignIn() {
  return (
    <div className=" min-h-screen w-full flex flex-row gap-2 mt-20 pt-2">
              
        <div className="bg-white rounded-xl mx-auto h-fit py-4 w-3/4 md:w-1/2">
        <h1 className="text-3xl font-bold underline text-center mb-4 uppercase"><span className='text-header'>SIGN</span> in </h1>
        <form className="flex flex-col gap-3 border-t-2 pt-4" >
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-xl w-1/2 mx-auto"

          id="email"
         // onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-xl w-1/2 mx-auto"

          id="password"
         // onChange={handleChange}
        />
         <button
          // disabled={loading}
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
