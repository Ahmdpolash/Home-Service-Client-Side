import React from "react";

const ServiceCard = ({ service }) => {
  const {
    service_image,
    service_name,
    description,
    provider_name,
    provider_image,
    price,
  } = service || [];
  return (
    <div className="px-3">
      <div class="relative flex flex-col w-full mt-8 border lg:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">

        <div class="relative lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">

          <img
            src={service_image}
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
        <div class="px-6 py-2">
          <div className="flex justify-between items-center">
            <h1 className="text-[18px] font-bold text-[#2E856E]">
              {service_name}
            </h1>
            <div className="ml-2">
              <span className="bg-red-200 px-2 lg:px-5 -mr-[px] lg:-mr-[20px] py-2 font-bold">Price : {price}</span>
            </div>
          </div>
          <p className="text-gray-600 py-3">{description}</p>

          <img
            className="w-[60px] h-[60px]  mt-2 rounded-full"
            src={provider_image}
            alt=""
          />
          <div className="flex flex-row  justify-between items-center py-2 mt-2">
            <div>
              <h2 className="text-[18px] font-bold">{provider_name}</h2>
            </div>
            <div>
              <a class="inline-block" href="#">
                <button
                  class="flex  items-center  text-black bg-[#67eac7] border hover:bg-white hover:border gap-2 px-6 py-3 font-sans text-xs text-center font-bold uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  View Details
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;