import React from "react";
import Banner from "./Banner";
import Service from "./Service";
import Choose from "../../Components/choose";

const Home = () => {
  return (
    <div>
      <div className="px-4 lg:px-16 py-6 bg-[#F3F3F3]">
        <Banner />
      </div>
      <Service />
      <Choose/>
    </div>
  );
};

export default Home;
