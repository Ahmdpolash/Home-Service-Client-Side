import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";

const AllServices = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const data = await axios.get("http://localhost:5000/api/services");
      return data.data;
    },
  });

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="">
      <form action="" className=" text-center py-6">
        <input
          id="search-box"
          type="text"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          className="py-3 lg:py-4 lg:4 px-8 lg:w-[25%] rounded-lg rounded-r-none outline-none  placeholder:text-gray-500 placeholder:font-semibold border shadow-md"
          placeholder="Search by Name..."
        />

        <button
          onClick={handleSearch}
          className="bg-[#2E856E] text-white py-[12px] lg:py-[17px] px-7 relative right-3 rounded-r-lg text-[18px] font-semibold "
        >
          Search
        </button>
      </form>

      {data
        ?.filter((service) => {
          return search.toLowerCase() === ""
            ? service
            : service.service_name.toLowerCase().includes(search);
        })
        ?.map((service) => (

          <div className="px-4 lg:px-16">
          
              <div className="">
                <div class="relative flex flex-col mb-5 lg:h-[340px] w-full border lg:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                  <div class="relative lg:w-2/5 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                      src={service.service_image}
                      alt="image"
                      className="object-cover h-full lg:h-[340px] w-full "
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
                    <p className="text-gray-600 py-3">{service.description}</p>

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
                          <h1 className="font-bold ">
                            {service.provider_location}
                          </h1>
                        </div>
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

              
            
          </div>
          
        ))}
    </div>
  );
};

export default AllServices;
