import React from "react";
import { Link } from "react-router-dom";
import Microsoft from "../images/microsoft.png";
import Huawei from "../images/huawei.png";
import Ibm from "../images/IBM1.png";
import Cisco from "../images/cisco.png";

export default function certification() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <div className="bg-white rounded-xl">

        <h1 className="text-3xl font-bold underline text-center my-4 capitalize ">
          <span className="text-header">online</span> Certifications
        </h1>

        <div className=" w-fit  p-4 border-slate-200 border-t-2 pt-4   transition-colors grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-4 ">
          <div className="w-96 h-52 text-white  bg-[url('../images/microsoft.png')] rounded-md  flex justify-end items-end">
            <Link
              to="https://www.microsoft.com/en-us/"
              className="no-underline hover:no-underline focus:outline-none text-white"
            >
              <p className="text-3xl p-2">Microsoft</p>
            </Link>
          </div>
          <div className="w-96 h-52 text-white  bg-[url('../images/huawei.png')] bg-red-500 rounded-md  flex justify-end items-end">
            <Link
              to="https://www.huawei.com/en/"
              className="no-underline hover:no-underline focus:outline-none text-white"
            >
              <p className="text-3xl p-2">Huawei</p>
            </Link>
          </div>
          <div className="w-96 h-52 text-white  bg-[url('../images/IBM1.png')] bg-orange-500 rounded-md  flex justify-end items-end">
            <Link
              to="https://www.ibm.com/us-en"
              className="no-underline hover:no-underline focus:outline-none text-white"
            >
              <p className="text-3xl p-2">IBM</p>
            </Link>
          </div>
          <div className="w-96 h-52 text-white  bg-[url('../images/cisco.png')] bg-green-500 rounded-md  flex justify-end items-end">
            <Link
              to="https://www.cisco.com/c/m/en_sg/partners/cisco-networking-academy/index.html"
              className="no-underline hover:no-underline focus:outline-none text-white"
            >
              <p className="text-3xl p-2">Cisco</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
