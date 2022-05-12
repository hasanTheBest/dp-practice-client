import React from "react";
import ExceptionalServices from "./Home/ExceptionalServices";
import Hero from "./Home/Hero";
import InfoCards from "./Home/InfoCards";
import Services from "./Home/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <InfoCards />
      <Services />
      <ExceptionalServices />
    </div>
  );
};

export default Home;
