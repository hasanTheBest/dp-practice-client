import React from "react";
import treatment from "../../assets/images/treatment.png";

const ExceptionalServices = () => {
  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            className="max-w-sm rounded-lg shadow-2xl mr-8"
            alt="Exceptional Services"
          />
          <div>
            <h2 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h2>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExceptionalServices;
