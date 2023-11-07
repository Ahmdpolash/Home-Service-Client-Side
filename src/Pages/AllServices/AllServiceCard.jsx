import React from "react";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const AllServiceCard = ({ service }) => {
  const { description } = service || [];

  const sliceDesc = description.split(" ").slice(0, 65).join(" ");




  return (
    <div>
      
      <div className="px-4 lg:px-16">
        <div className="">
          <div class="relative flex flex-col mb-5 lg:h-[310px] w-full border lg:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div class="relative lg:w-2/5 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
              <img
                src={service.service_image}
                alt="image"
                className="object-cover h-full lg:h-[310px] w-full "
              />
            </div>
            <div class="px-6 py-2 ">
              <div className="flex justify-between items-center">
                <h1 className="text-[18px] font-bold text-[#2E856E]">
                  {service.service_name}
                </h1>
                <div className="ml-2">
                  <span className="bg-[#2E856E] text-white roundlmd px-2 lg:px-5 -mr-[px] lg:-mr-[20px] py-2 font-bold">
                    Price : {service.price}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 py-3">{sliceDesc}</p>

              <img
                className="w-[60px] h-[60px]  mt-2 rounded-full"
                src={service.provider_image}
                alt=""
              />
              <div className="flex flex-row  justify-between items-center py-2 mt-2">
                <div className="flex gap-5">
                  <h2 className="text-[18px] font-bold">
                    {service.provider_name}
                  </h2>
                  <div className="flex gap-2 items-center">
                    <CiLocationOn className="text-[#2E856E] text-[22px]"></CiLocationOn>
                    <h1 className="font-bold ">{service.provider_location}</h1>
                  </div>
                </div>
                <div>
                  <Link to={`/details/${service._id}`}>
                    <button
                      class="flex  items-center  text-black bg-[#67eac7] border hover:bg-white hover:border gap-2 px-6 py-3 font-sans text-xs text-center font-bold uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AllServiceCard;
