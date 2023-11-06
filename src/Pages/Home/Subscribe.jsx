import React from "react";
import "../Home/service.css";

const Subscribe = () => {
  return (
    <div>
      <div className="hero h-[400px] subscribe flex items-center justify-center">
        <div className="hero-content text-center text-neutral-content flex justify-center items-center">
          <div className="max-w-2xl mx-auto space-y-3">
            <h1 className=" font-bold text-2xl  lg:text-4xl text-white">
              We have expert and professional team to provide the best service
            </h1>
            <p className="mb-5 py-3 text-[18px] text-white">
            Nostra semper tempus metus massa faucibus fusce nascetur tortor maecenas amet. Imperdiet interdum ad letius ac adipiscing justo orci in fringilla dis tristique.
            </p>
            <button className="bg-[#2E856E] text-white px-4 py-3 rounded-md">Discover more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
