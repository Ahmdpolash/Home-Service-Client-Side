import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";
import Other from "./Other";

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const{user} = useContext(authContext)

  const filter = data.find((service) => service._id === id);
  const [otherServices, setOtherServices] = useState([]);

  useEffect(() => {
    // Filter other services by the same provider's email
    const otherServices = data.filter(
      (service) => service.yourEmail === filter.yourEmail && service._id !== id
    );

    setOtherServices(otherServices);
  }, [data, filter, id]);


  // console.log(data);

  const handleAddService = (e) => {
    e.preventDefault();

    const form = e.target;
    const price = form.price.value;
    const serviceName = form.serviceName.value;
    const image = form.image.value;
    const userEmail = form.userEmail.value;
    const providerEmail = form.providerEmail.value;
    const description = form.description.value;
    const date = form.date.value;
    const providerName = filter.provider_name;
    const addFormData = {
      price,
      date,
      serviceName,
      image,
      userEmail,
      providerEmail,
      description,
      providerName,
      status:'pending'
    };

    axios
      .post("http://localhost:5000/api/bookings", addFormData)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
        });
      });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BeClean | {filter.service_name}</title>
      </Helmet>
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
              <button
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
                className="bg-[#2E856E] font-semibold text-white px-4 py-3 rounded-md"
              >
                Book Now
              </button>

              <p className="text-2xl font-bold py-2">Price: {filter.price}</p>
            </div>
          </div>
        </div>




        {otherServices.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold">Other Services by {filter.provider_name}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {otherServices.map((otherService) => (
              <Other key={otherService._id} otherService={otherService}>
               
              </Other>
            ))}
          </div>
        </div>
      )}



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

        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h1 className="font-bold text-xl">
              Service Provider & Service Details
            </h1>

            <form
              onSubmit={handleAddService}
              className="grid grid-cols-1 gap-3 lg:grid-cols-2"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Service Name</span>
                </label>
                <input
                  type="text"
                  name="serviceName"
                  defaultValue={filter.service_name}
                  placeholder="Service Name"
                  className="input input-bordered"
                  disabled
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Service Image URL
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={filter.service_image}
                  disabled
                  placeholder="Image"
                  name="image"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Service Provider Email
                  </span>
                </label>
                <input
                  type="email"
                  disabled
                  placeholder="Provider Email"
                  name="providerEmail"
                  defaultValue={filter.yourEmail}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">User Email</span>
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  disabled
                  name="userEmail"
                  placeholder="User Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Price</span>
                </label>
                <input
                  type="text"
                  defaultValue={filter.price}
                  placeholder="Price"
                  name="price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text font-semibold">Description</span>
                </label>
                <textarea
                  name="description"
                  defaultValue={filter.description}
                  className="border-2 p-4 placeholder:text-gray-600 w-full"
                  id=""
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div className="form-control lg:col-span-2 mt-6">
                <button type="submit" className="btn btn-primary">
                  Purchase This Service
                </button>
              </div>
            </form>

            <div className="modal-action">
              <form className="mx-auto" method="dialog">
                <button type="submit" className="btn">
                  Order Later
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

     
    </div>
  );
};

export default Details;
