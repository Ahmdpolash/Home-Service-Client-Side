import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Service = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const data = await axios.get("http://localhost:5000/api/services");
      return data.data;
    },
  });

  console.log(data);

  return (
    <div className="py-6 px-4 lg:px-16">
      {/* <div className="flex gap-3 justify-between">
        <Marquee>
        <img className="w-[230px]"
          src="https://demo.creativemox.com/beclean/wp-content/uploads/sites/2/2023/09/Clients-6.png"
          alt=""
        />
        <img
          src="https://demo.creativemox.com/beclean/wp-content/uploads/sites/2/2023/09/Clients-4.png"
          alt=""
        />
        <img className="w-[230px]"
          src="https://demo.creativemox.com/beclean/wp-content/uploads/sites/2/2023/09/Clients-2.png"
          alt=""
        />
        <img className="w-[230px]"
          src="https://demo.creativemox.com/beclean/wp-content/uploads/sites/2/2023/09/Clients-5.png"
          alt=""
        />
        </Marquee>
      </div> */}


      <h1 className="text-center text-4xl font-bold">Our Top Services</h1>

      <div className="grid grid-cols-1 mx-auto  lg:grid-cols-2 gap-5">
        {isLoading ? (
          <p>loading..</p>
        ) : (
          data
            ?.slice(0, 4)
            .map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
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
