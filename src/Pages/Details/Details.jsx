import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const filter = data.find((service) => service._id == id);

  console.log(filter);

  return (
    <div>





      <div className="px-4 lg:px-16 py-8">
        <div className="bg-[#81edd0] p-5 rounded-lg">
          <div className="flex gap-6 items-center">
            <img
              className="w-[80px] h-[80px] rounded-full "
              src={filter.provider_image}
              alt=""
            />

            <div>
              <h1 className="text-2xl font-semibold">{filter.provider_name}</h1>
              <h1 className="font-bold">
                <span className="text-gray-500">
                  This Service is available :
                </span>{" "}
                {filter.provider_location},Bangladesh
              </h1>
            </div>
          </div>
        </div>
        <div className="grid my-8 grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold mb-4">{filter.service_name} </h1>
            <p className="text-[17px] leading-6 text-gray-500 lg:leading-8">
              {filter.description}
            </p>
          </div>
          <div>
            <img
              className="rounded-lg w-full lg:h-[340px]"
              src={filter.service_image}
              alt=""
            />
            <div className="bg-[#dbf1eb] flex justify-between my-4 p-4 rounded-lg">
              <button className="bg-[#2E856E] font-semibold text-white px-4 py-3 rounded-md">
                Book Now
              </button>
              <p className="text-2xl font-bold py-2">Price: {filter.price}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-between">
          <Marquee>
            <img
              className="w-[230px]"
              src="https://demo.creativemox.com/beclean/wp-content/uploads/sites/2/2023/09/Clients-6.png"
              alt=""
            />
            <img
              className="w-[230px]"
              src="https://demo.creativemox.com/beclean/wp-content/uploads/sites/2/2023/09/Clients-4.png"
              alt=""
            />
            <img
              className="w-[230px]"
              src="https://demo.creativemox.com/beclean/wp-content/uploads/sites/2/2023/09/Clients-2.png"
              alt=""
            />
            <img
              className="w-[230px]"
              src="https://demo.creativemox.com/beclean/wp-content/uploads/sites/2/2023/09/Clients-5.png"
              alt=""
            />
            <img
              className="w-[230px]"
              src="https://demo.creativemox.com/beclean/wp-content/uploads/sites/2/2023/09/Clients-4.png"
              alt=""
            />
            <img
              className="w-[230px]"
              src="https://demo.creativemox.com/beclean/wp-content/uploads/sites/2/2023/09/Clients-2.png"
              alt=""
            />
          </Marquee>
        </div>

        
      </div>
    </div>
  );
};

export default Details;
