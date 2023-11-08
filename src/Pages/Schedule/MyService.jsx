import React, { useContext, useEffect, useState } from "react";

import { Helmet } from "react-helmet";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { authContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { CiLogin } from "react-icons/ci";

const MyService = () => {

  const [service, setServices] = useState([]);
  const { user } = useContext(authContext);
  const url = `http://localhost:5000/api/services/${user?.email}`;


  useEffect(() => {
    axios.get(url,{withCredentials:true}).then((res) => {
      setServices(res.data);
    });
  }, [url, user]);



  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/api/services/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            console.log(res.data);
            const remaining = service.filter((item) => item._id !== id);
            setServices(remaining);

            Swal.fire({
              title: "Deleted!",
              text: "Your Service is Deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BeClean | My Service</title>
      </Helmet>
      <div className="px-4 lg:px-16 py-3 lg:py-8 ">
        <div className="space-y-2">
          <h1 className="font-bold text-2xl lg:text-4xl">
            Manage Your Service
          </h1>
          <p className="bg-gray-100 py-2 px-4">
            Total {service.length} Service Found
          </p>
        </div>

        <div>
          <div className="overflow-x-auto my-4 mx-auto text-white">
            <table className="table">
              <thead>
                <tr className="text-center font-semibold text-[16px] text-white bg-[#2E856E]">
                  <th className=" ">No</th>
                  <th className=" ">Service Image</th>
                  <th>Service Name</th>
                  <th>Provider Name</th>
                  <th>Price</th>
                  <th>Area </th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {service?.map((service, index) => (
                  <>
                    <tr key={service._id} className=" text-center bg-gray-300">
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
                                src={service.service_image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="text-black bg- font-semibold">
                        {service.service_name}
                      </td>
                      <td className="text-black font-semibold">
                        {service.provider_name}
                      </td>
                      <td className="flex items-center justify-center">
                        <h2 className="text-black font-semibold mt-4">
                          ${service?.price}
                        </h2>
                      </td>

                      <td className="text-black font-bold">
                        {service?.provider_location}
                      </td>

                      <th>
                        <button
                          onClick={() => handleDelete(service._id)}
                          type="submit"
                          className="btn btn-ghost mr-2 bg-red-500 py-2 lg:py-3 px-3 text-white "
                        >
                          <AiOutlineDelete className="text-2xl"></AiOutlineDelete>
                        </button>
                        <Link to={`/update/${service?._id}`}>
                          <button
                            type="submit"
                            className="btn btn-ghost bg-[#2E856E] py-2 lg:py-3 px-3 text-white "
                          >
                            <AiOutlineEdit className="text-2xl"></AiOutlineEdit>
                          </button>
                        </Link>
                      </th>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyService;
