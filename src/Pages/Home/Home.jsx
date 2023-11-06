import React from "react";
import Banner from "./Banner";
import Service from "./Service";
import Choose from "../../Components/choose";
import Faq from "./Faq";
import Subscribe from "./Subscribe";
import Call from "./Call";

const Home = () => {
  return (
    <div>
      <div className="px-3 lg:px-16 py-6 bg-[#F3F3F3]">
        <Banner />
      </div>
      <Service />
      <Choose/>
      <Faq/>
      <Subscribe/>
      <Call/>
    </div>
  );
};

export default Home;
