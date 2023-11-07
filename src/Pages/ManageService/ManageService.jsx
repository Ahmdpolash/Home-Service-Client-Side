import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ManageService = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BeClean | Manage Service</title>
      </Helmet>
      <div className="px-4 lg:px-16 py-3 h-[80vh] lg:py-8">
        <div className="space-y-2">
          <h1 className="font-bold text-2xl lg:text-4xl">
            Manage Your Services
          </h1>
          <p className="bg-gray-100 py-2 px-4">Total Pending Service</p>
        </div>

        <div>
          <div className="grid grid-cols-1 items-center lg:grid-cols-3 ">

            <div className="col-span-2 h-[150px]">
              <div className="relative flex flex-col  w-full border lg:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div className="relative lg:w-2/5 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                  <img
                    src="https://www.cleansweepofamerica.com/wp-content/uploads/2020/10/office-cleaning-service.jpeg"
                    alt="image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="px-6 py-2">
                  <div className="flex justify-between items-center">
                    <h1 className="text-[18px] font-bold text-[#2E856E]">
                      gsfgsg
                    </h1>
                  </div>

                  <div className="flex flex-row  justify-between items-center py-2 mt-2">
                    <div>
                      <h2 className="text-[18px] font-bold">afaf</h2>
                    </div>
                    <div>
                      <Link>
                        <button
                          className="flex  items-center  text-black bg-[#67eac7] border hover:bg-white hover:border gap-2 px-6 py-3 font-sans text-xs text-center font-bold uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 h-full bg-red-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
