import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";

const testimonials = [
  {
    _id: 1,
    name: "Winson Herry",
    image: people1,
    designation: "California",
    text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
  },
  {
    _id: 2,
    name: "Winson Herry",
    designation: "California",
    image: people2,
    text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
  },
  {
    _id: 3,
    name: "Winson Herry",
    designation: "California",
    image: people3,
    text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
  },
];
const Testimony = ({ name, text, designation, image }) => (
  <div className="card bg-base-100 shadow-xl">
    <div className="card-body">
      <p>{text}</p>
      <div className="flex gap-4 items-center mt-10">
        <img src={image} alt={name} />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <h6 className="text-sm">{designation}</h6>
        </div>
      </div>
    </div>
  </div>
);

const Testimonial = () => {
  return (
    <section className="pb-16 lg:pb-32">
      <header
        className="py-8 text-2xl bg-right bg-no-repeat mb-16"
        style={{ backgroundImage: `url(${quote})`, backgroundSize: "192px" }}
      >
        <h4 className="text-primary">Testimonials</h4>
        <h4 className="text-4xl">What Our Patients Says</h4>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {testimonials.map((testimonial) => (
          <Testimony key={testimonial._id} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
