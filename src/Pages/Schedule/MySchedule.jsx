import React from "react";
import Pending from "./Pending";

const MySchedule = () => {
  return (
    <div>
      <div className="px-4 lg:px-16 py-3 lg:py-8 lg:h-[55vh]">
        <div className="space-y-2">
          <h1 className="font-bold text-2xl lg:text-4xl">My Bookings</h1>
          <p className="bg-gray-100 py-2 px-4">Total Bookings Found</p>
        </div>
      </div>
      <Pending/>
    </div>
  );
};

export default MySchedule;
