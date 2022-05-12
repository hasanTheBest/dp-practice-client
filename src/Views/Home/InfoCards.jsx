import React from "react";

// icons
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const infos = [
  {
    _id: 1,
    image: clock,
    title: "Opening Hours",
    desc: "Open 8 am in the morning till 8 pm in the evening. We are careful to our patients",
  },
  {
    _id: 2,
    image: marker,
    title: "Visit our location",
    desc: "Brooklyn, NY 10036, United States",
  },
  {
    _id: 3,
    image: phone,
    title: "Contact us now",
    desc: "+000 123 456789",
  },
];

const bgs = [
  " bg-gradient-to-r from-primary to-secondary",
  "bg-accent",
  " bg-gradient-to-r from-secondary to-accent",
];

const Info = ({ image, title, desc, bg }) => (
  <div className={`card lg:card-side bg-base-100 shadow-xl p-2 ${bg}`}>
    <figure>
      <img src={image} alt={title} className="w-[86px]" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{desc}</p>
    </div>
  </div>
);

const InfoCards = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 py-16 lg:py-32">
      {infos.map((info, i) => (
        <Info key={info._id} {...info} bg={bgs[i]} />
      ))}
    </section>
  );
};

export default InfoCards;
