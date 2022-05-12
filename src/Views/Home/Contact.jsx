import React from "react";

const Contact = () => {
  return (
    <section className="pb-16 lg:pb-32">
      <header className="text-center mb-16 text-2xl">
        <h4 className="text-primary uppercase">Contact</h4>
        <h4 className="text-3xl">Get connected with us</h4>
      </header>

      <form className="flex flex-col gap-6 max-w-sm mx-auto items-center">
        <input
          type="email"
          placeholder="Email Address"
          className="input w-full bg-base-200"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full bg-base-200"
        />
        <textarea
          className="textarea bg-base-200 w-full"
          placeholder="Your Message"
        ></textarea>

        <button className="btn btn-wide btn-primary">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
