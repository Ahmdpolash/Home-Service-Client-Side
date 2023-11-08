import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Pending from "./Pending";

const MySchedule = () => {
  const { user } = useContext(authContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/api/bookings/${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setBookings(res.data);
    });
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BeClean | Manage Service</title>
      </Helmet>

      <div className="px-4 lg:px-16 py-3 lg:py-8">
        <div className="space-y-2">
          <h1 className="font-bold text-2xl lg:text-4xl">My Bookings</h1>
          <p className="bg-gray-100 font-semibold py-2 px-4">
            Total {bookings.length} Service Found
          </p>
        </div>

        {bookings.length === 0 ? (
          <p className="text-3xl font-bold text-center flex items-center lg:h-[10vh] lg:mt-16 justify-center">No bookings Found</p>
        ) : (
          <div className="overflow-x-auto my-4 mx-auto text-white">
            <table className="table">
              <thead>
                <tr className="text-center font-semibold text-[16px] text-white bg-[#2E856E]">
                  <th className=" ">No</th>
                  <th className=" ">Service Image</th>
                  <th>Service Name</th>
                  <th>Provider Name</th>
                  <th>Price</th>
                  <th>Date </th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings?.map((booking, index) => (
                  <>
                    <tr key={booking._id} className=" text-center bg-gray-300">
                      <td className="text-black text-[16px] font-semibold ">
                        {" "}
                        {index + 1}
                      </td>
                      <td className="">
                        <div className="flex items-center space-x-3">
                          <div className="avatar text-center mx-auto">
                            <div className="mask mask-squircle  w-16 h-16">
                              <img
                                className=""
                                src={booking.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="text-black bg- font-semibold">
                        {booking.serviceName}
                      </td>
                      <td className="text-black font-semibold">
                        {booking.providerName}
                      </td>
                      <td className="flex items-center justify-center">
                        <h2 className="text-black font-semibold mt-4">
                          ${booking?.price}
                        </h2>
                      </td>

                      <td className="text-black font-bold">{booking?.date}</td>

                      <th>
                        <span className="bg-red-300 py-2 px-2 text-black rounded-lg">
                          {booking.status}
                        </span>
                      </th>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div>
        <Pending />
      </div>
    </div>
  );
};

export default MySchedule;
