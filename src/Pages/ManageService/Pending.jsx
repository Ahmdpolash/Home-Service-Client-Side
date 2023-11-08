import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import PendingService from "./pendingService";

const Pending = () => {
  const [pending, setPending] = useState([]);
  const { user } = useContext(authContext);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/pending/${user.email}`).then((res) => {
      setPending(res.data);
      setStatus(res.data.status);
    });
  }, []);

  useEffect(() => {
    axios.put(`http://localhost:5000/api/pending/${user.email}`).then((res) => {
      setPending(res.data);
      setStatus(res.data.status);
    });
  }, [status]);

  console.log(pending);
  return (
    <div>
      <div className="space-y-2 px-4 lg:px-16 lg:h-[40vh] lg:py-16">
        <h1 className="font-bold text-2xl lg:text-4xl">My Pendings</h1>
        <p className="bg-gray-100 font-semibold py-2 px-4">
          Total Service Found
        </p>

        {pending.length === 0 ? (
          <p className="text-3xl font-bold text-center flex items-center lg:h-[10vh] lg:mt-16 justify-center">
            No bookings Found
          </p>
        ) : (
          <div className="overflow-x-auto lg:px-16 my-4 mx-auto text-white">
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
                {pending?.map((booking, index) => (
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

      {/* {pending?.map((item) => (
          <div key={item._id}></div>
        ))} */}
    </div>
  );
};

export default Pending;
