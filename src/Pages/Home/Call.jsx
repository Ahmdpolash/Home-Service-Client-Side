import React from "react";
import "../Home/service.css";
import CountUp from "react-countup";

const Call = () => {
  return (
    <div className="px-4 lg:mb-8 lg:px-16 py-16 bg-[#FFFFFF]">

      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-around ">

        <div className="col-span-1 lg:ml-8 mb-5 lg:mb-0 relative">
          <img
            className="lg:w-[390px] mt-3 lg:h-[390px] border-[12px]  rounded-full"
            src="https://demo.creativemox.com/beclean/wp-content/uploads/sites/2/2023/09/the-best-team-to-keep-your-office-clean-portrait-of-two-young-woman-cleaning-a-modern-office--1536x955.jpg"
            alt=""
          />
          <img className="w-[70px] -bottom-[15px] lg:bottom-[45px] left-[68%] lg:left-[69%] h-[70px] rounded-full absolute" src="https://i.ibb.co/HCvrGty/Screenshot-29.png" alt="" />
        </div>
        <div className="col-span-2 space-y-3 lg:ml-8">
          <h2 className="text-[17px] font-semibold">WE'RE EXPERT CLEANING SERVICE</h2>
          <h3 className="lg:w-[550px] text-2xl lg:text-4xl font-bold">
            Call our team, if you need it to be clean
          </h3>
          <p className="text-[17px] font-medium lg:w-[650px] text-gray-500">
            Nulla ad phasellus cras luctus convallis vivamus erat proin elit
            integer condimentum. Ipsum elit sagittis bibendum senectus integer
            pede eu volutpat augue cubilia nisl. Tempus justo habitant nostra
            inceptos himenaeos pretium placerat.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 space-y-2 justify-between items-center lg:w-[750px]">
            <div>
              <CountUp className="text-2xl  lg:text-4xl font-bold" end={240} />
              <span span className="text-2xl font-bold">+</span>

              <h1 className="text-[#2E856E] font-semibold text-[17px] lg:text-[20px]">
                Active Project
              </h1>
            </div>
            <div>
              <CountUp className="text-2xl lg:text-4xl font-bold" end={95} />
              <span span className="text-2xl font-bold">%</span>
             

              <h1 className="text-[#2E856E] font-semibold  text-[17px] lg:text-[20px]">
                 Satisfaction
              </h1>
            </div>
            <div>
              <CountUp className="text-2xl  lg:text-4xl font-bold" end={45} />
              <span span className="text-2xl font-bold">+</span>
             

              <h1 className="text-[#2E856E] font-semibold text-[17px] lg:text-[20px]">
          Award Winnings
              </h1>
            </div>
            <div>
              <CountUp className="text-2xl  lg:text-4xl font-bold" end={180} />
              <span span className="text-2xl font-bold">+</span>


              <h1 className="text-[#2E856E] font-semibold text-[17px] lg:text-[20px]">
                Expert Team
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
