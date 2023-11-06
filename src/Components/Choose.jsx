import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Choose = () => {
  return (
    <div className="bg-[#F3F3F3] px-7 lg:px-16 py-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-around gap-3 items-center">
        <div>
          <img
            className="lg:w-[550px] rounded-3xl"
            src="https://freevetis.com/lclean/wp-content/uploads/sites/36/2022/07/women-in-uniform-and-gloves-giving-high-five-after-2021-12-0924-50-utc-1024x1001.jpg"
            alt=""
          />
        </div>

        <div className="space-y-3">
          <h3 className="text-[17px] font-semibold text-[#2E856E]">About Us</h3>
          <h2 className="text-2xl lg:text-5xl font-bold">Why Choose Us</h2>
          <p className="text-[18px] py-3 text-gray-500">
            We pride ourselves on providing exceptional service that goes above
            and beyond your expectations. Our commitment to excellence sets us
            apart. We believe that top-quality services shouldn't break the
            bank. We offer competitive and affordable pricing without
            compromising on the quality of our work. You can expect the best
            value for your investment.
          </p>

          <div className="flex items-center gap-3">
            <AiOutlineCheckCircle className="text-[#2E856E] text-xl"></AiOutlineCheckCircle>
            <p className="text-[17px] font-semibold">
              {" "}
              Round-the-clock support for your peace of mind.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <AiOutlineCheckCircle className="text-[#2E856E] text-xl"></AiOutlineCheckCircle>
            <p className="text-[17px] font-semibold">
              {" "}
              Quality services that fit your budget.
            </p>
          </div>

          <div className="flex mb-2 items-center gap-3">
            <AiOutlineCheckCircle className="text-[#2E856E] text-xl"></AiOutlineCheckCircle>
            <p className="text-[17px]  font-semibold">
              {" "}
              Constantly evolving to meet your modern needs.
            </p>
          </div>

          <div className="flex items-center ">
            <button className="bg-[#2E856E] mt-6 text-white px-4 py-3 rounded-md">
              Read More
            </button>
            <img
              className="w-[80px] mt-3 lg:w-[90px] ml-12 lg:ml-16 mb-3"
              src="https://freevetis.com/lclean/wp-content/uploads/sites/36/2022/07/46316463.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
