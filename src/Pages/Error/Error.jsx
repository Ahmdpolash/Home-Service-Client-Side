import Lottie from "lottie-react";
import React from "react";
import errorIcon from "../../assets/error.json";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="flex items-center mx-auto justify-center h-screen bg-gray-100">
      <div>
      <Link to= '/'>
        <button className="bg-red-400 py-3 mt-4 px-4 text-center block rounded-md font-semibold mx-auto">GO BACK</button>
      </Link>
        <Lottie className="lg:w-[660px] " animationData={errorIcon}></Lottie>
       
      </div>

    
    </div>
  );
};

export default Error;
