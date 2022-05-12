import React from "react";
import { Link } from "react-router-dom";
import footer from "../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <div className="container px-4 lg:px-8 xl:px-16">
        <div className="footer p-10">
          <div>
            <span className="footer-title">Services</span>
            <Link className="link link-hover" to="/">
              Branding
            </Link>
            <Link className="link link-hover" to="/">
              Design
            </Link>
            <Link className="link link-hover" to="/">
              Marketing
            </Link>
            <Link className="link link-hover" to="/">
              Advertisement
            </Link>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link className="link link-hover" to="/">
              About us
            </Link>
            <Link className="link link-hover" to="/">
              Contact
            </Link>
            <Link className="link link-hover" to="/">
              Jobs
            </Link>
            <Link className="link link-hover" to="/">
              Press kit
            </Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link className="link link-hover" to="/">
              Terms of use
            </Link>
            <Link className="link link-hover" to="/">
              Privacy policy
            </Link>
            <Link className="link link-hover" to="/">
              Cookie policy
            </Link>
          </div>
        </div>

        <p className="text-center p-4">
          &copy; Doctors Portal | All Rights reserved,{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
