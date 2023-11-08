import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loading from "../../assets/Animation - 1699267842091.json";

const Service = () => {
  
  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const data = await axios.get("http://localhost:5000/api/services");
      return data.data;
    },
  });



  return (
    <div className="py-6 px-4 lg:px-16">
     

      <h1 className="text-center text-4xl font-bold">Our Top Services</h1>

      <div className="grid grid-cols-1 mx-auto  lg:grid-cols-2 gap-5">
        {isLoading ? (
          <div className="text-center">
            <Lottie
              className="w-[120px] "
              animationData={loading}
            ></Lottie>
          </div>
        ) : (
          data
            ?.slice(0, 4)
            .map((service) => (
              <ServiceCard key={service._id} service={service} ></ServiceCard>
            ))
        )}
      </div>

      <div className="text-center py-7">
        <Link to="/services">
          <button className="bg-[#2E856E] text-white px-8 text-[18px] font-bold py-3 rounded-md">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
