import { Avatar } from "flowbite-react";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 justify-center lg:grid-cols-2 lg:h-[80vh] items-center py-3 px-2">
          <div className="lg:space-y-3 lg:ml-6">
            <h1 className="text-3xl lg:text-7xl font-bold lg:w-[600px]">
              Quality Cleaning{" "}
              <span className="text-[#2E856E]">for Your Home</span>
            </h1>
            <p className="lg:w-[620px] text-[#545454] text-[18px] py-3 lg:py-6">
              Experience top-quality home services that meet your needs. Our
              trusted professionals are ready to make your home a better place.
              Book now for reliable, convenient, and affordable solutions
            </p>
            <div className="flex flex-col md:flex-row items-center">
             
                <button className="py-3 w-full lg:py-4 px-6 lg:mr-3 rounded-lg text-[18px] bg-[#2E856E] text-white mb-2 lg:mb-0 font-semibold">
                  Register Now
                </button>
            
              <button className="py-3 w-full lg:py-4 px-6 rounded-lg text-[18px] bg-white shadow-md border font-semibold">
                Read More
              </button>
              <img
                className="w-[80px] lg:w-[100px] ml-12 lg:ml-28 mb-3"
                src="https://freevetis.com/lclean/wp-content/uploads/sites/36/2022/07/46316463.png"
                alt=""
              />
            </div>

            <div className="flex justify-between lg:justify-start lg:gap-5 py-6 ml-5">
              <div>
                <Avatar.Group>
                  <Avatar
                    img="https://freevetis.com/lclean/wp-content/uploads/sites/36/2022/07/562645623.jpg"
                    rounded
                    stacked
                  />
                  <Avatar
                    img="https://freevetis.com/lclean/wp-content/uploads/sites/36/2022/07/956265.jpg"
                    rounded
                    stacked
                  />
                  <Avatar
                    img="https://freevetis.com/lclean/wp-content/uploads/sites/36/2022/07/466652.jpg"
                    rounded
                    stacked
                  />
                </Avatar.Group>
              </div>
              <div className="ml-6">
                <div className="flex">
                  <AiTwotoneStar className="text-[#2E856E] " />
                  <AiTwotoneStar className="text-[#2E856E]" />
                  <AiTwotoneStar className="text-[#2E856E]" />
                  <AiTwotoneStar className="text-[#2E856E]" />
                  <AiTwotoneStar className="text-[#2E856E]" />
                </div>
                <h2 className="text-[17px] font-bold">
                  Rated 5 out of 5 by our clients
                </h2>
              </div>
            </div>
          </div>

          <div>
            <img
              className="object-cover rounded-2xl lg:ml-16 mx-auto w-[470px] lg:w-[480px] lg:h-[500px]"
              src="https://i.ibb.co/k3xY3ZP/group-of-mixed-race-janitors-cleaning-modern-apart-2021-12-09-06-24-45-utc-1024x683.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
