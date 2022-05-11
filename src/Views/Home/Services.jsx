import React from "react";

// images
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";

const services = [
  {
    _id: 1,
    image: fluoride,
    title: "Fluoride Treatment",
    desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  },
  {
    _id: 1,
    image: cavity,
    title: "Cavity Filling",
    desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  },
  {
    _id: 1,
    image: whitening,
    title: "Teeth whitening",
    desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  },
];

const Service = ({ title, image, desc }) => (
  <div class="card bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src={image} alt={title} class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">{title}</h2>
      <p>{desc}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <section className="pb-16 lg:pb-32">
      <header className="text-center mb-16 text-2xl">
        <h4 className="text-primary uppercase">Our Services</h4>
        <h4 className="text-5xl">Services We Provide</h4>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {services.map((service) => (
          <Service key={service._id} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
