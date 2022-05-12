import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";

const Appointment = () => {
  return (
    <section className="py-20">
      <div
        className="flex bg-cover"
        style={{ backgroundImage: `url(${appointment})` }}
      >
        <div className="flex-1 -mt-14">
          <img src={doctor} alt="Doctor" />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="px-4">
            <h4 class="text-xl font-bold text-primary mb-2">Appointment</h4>
            <h2 class="text-4xl font-semibold">Make an appointment Today</h2>
            <p class="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
