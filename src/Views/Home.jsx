import React from "react";
import Appointment from "./Home/Appointment";
import ExceptionalServices from "./Home/ExceptionalServices";
import Hero from "./Home/Hero";
import InfoCards from "./Home/InfoCards";
import Services from "./Home/Services";
import Testimonial from "./Home/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <InfoCards />
      <Services />
      <ExceptionalServices />
      <Appointment />
      <Testimonial />
    </div>
  );
};

export default Home;
