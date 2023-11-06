import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const AddService = () => {
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const serviceName = form.ServiceName.value;
    const providerEmail = form.providerEmail.value;
    const yourEmail = form.yourEmail.value;
    const price = form.price.value;
    const area = form.area.value;
    const description = form.description.value;
    const formData = {
      image,
      serviceName,
      providerEmail,
      yourEmail,
      price,
      area,
      description,
    };
    console.log(formData);

    axios.post("http://localhost:5000/api/services", formData).then((res) => {
      console.log(res.data);
      if (res.data.insertedCount > 0) {
        Swal.fire({
          title: "Good job!",
          text: "Service Added Successfully!",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <div>
        <div className="bg-gray-100 p-4">
          <form
            onSubmit={handleAddService}
            className="py-4 mt-3 px-10 lg:w-3/4 bg-white rounded-md mx-auto border-2 shadow-lg"
          >
            <h2 className="text-3xl text-[#2E856E] lg:text-5xl mb-3 font-bold text-center">
              Add New Services{" "}
            </h2>
            <div className="flex flex-col lg:flex-row gap-3 lg:lg:px-4 mb-2">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text text-[17px] dark:text-white font-semibold">
                    Service Name
                  </span>
                </label>
                <label className="input-group w-full">
                  <input
                    type="text"
                    placeholder="Service Name"
                    name="serviceName"
                    className="input w-full input-bordered"
                  />
                </label>
              </div>

              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text dark:text-white text-[17px] font-semibold">
                    Service Image URL
                  </span>
                </label>
                <label className="input-group w-full">
                  <input
                    type="text"
                    placeholder="Service Image URL."
                    name="image"
                    className="input outline-red-400 w-full input-bordered"
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 lg:px-4 mb-2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text dark:text-white text-[17px] font-semibold">
                    Service Provider Email
                  </span>
                </label>

                <input
                  type="text"
                  placeholder="Service Provider Email"
                  name="providerEmail"
                  className="input outline-red-400 w-full input-bordered"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text dark:text-white text-[17px] font-semibold">
                    Your Email
                  </span>
                </label>

                <input
                  type="email"
                  placeholder="Your Email"
                  name="yourEmail"
                  className="input outline-red-400 w-full input-bordered"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 lg:px-4 mb-2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text dark:text-white text-[17px] font-semibold">
                    Price
                  </span>
                </label>
                <label className="input-group w-full">
                  <input
                    type="text"
                    placeholder="$Price"
                    name="price"
                    className="input w-full input-bordered"
                  />
                </label>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text dark:text-white text-[17px] font-semibold">
                    Service Area
                  </span>
                </label>
                <label className="input-group w-full">
                  <input
                    type="text"
                    placeholder="Area"
                    name="area"
                    className="input bg-white w-full input-bordered"
                  />
                </label>
              </div>
            </div>

            <div className="form-control w-full lg:px-4 mb-4">
              <label className="label">
                <span className="label-text dark:text-white text-[17px] font-semibold">
                  Description
                </span>
              </label>{" "}
              <br />
              <textarea
                name="description"
                className="w-full border-2 p-4"
                id=""
                placeholder="Description"
                cols="30"
                rows="7"
              ></textarea>
            </div>

            <div className="mb-4 lg:px-4">
              <input
                className="bg-[#2E856E] text-white font-semibold text-[18px] w-full rounded-md py-3 "
                type="submit"
                value="Add Service"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
