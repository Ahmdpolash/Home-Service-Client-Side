import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import AllServiceCard from "./AllServiceCard";

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
          <AllServiceCard key={service._id} service={service}></AllServiceCard>
        ))}
    </div>
  );
};

export default AllServices;