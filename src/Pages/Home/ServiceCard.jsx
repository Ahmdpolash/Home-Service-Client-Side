import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";

const ServiceCard = ({ service }) => {
  const {user} = useContext(authContext)
  const {
    service_image,
    service_name,
    description,
    provider_name,
    provider_image,
    price,
    _id,
  } = service || [];

  const sliceDesc = description.split(" ").slice(0, 35).join(" ");

  return (
    <div className="px-3 ">
      <div className="relative flex flex-col  w-full mt-8 border lg:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative lg:w-2/5 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src={service_image}
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="px-6 py-2">
          <div className="flex justify-between items-center">
            <h1 className="text-[18px] font-bold text-[#2E856E]">
              {service_name} 
            </h1>
            <div className="ml-2">
              <span className="bg-[#2E856E] text-white px-2 lg:px-5 -mr-[px] lg:-mr-[20px] py-2 font-bold">
                Price : {price}
              </span>
            </div>
          </div>

          <p className="text-gray-600 py-3">{sliceDesc}</p>

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
              <Link to={`/details/${_id}`}>
                <button
                  className="flex  items-center  text-black bg-[#67eac7] border hover:bg-white hover:border gap-2 px-6 py-3 font-sans text-xs text-center font-bold uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
  );
};

export default ServiceCard;
