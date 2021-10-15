import React from "react";
import "./Footer.css";
import logo from "../../images/Banner&Background/logo.png";

const Footer = () => {
  return (
    <div className="footer mt-5">
      <div className=" container text-center text-white">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 mt-3">
            <div className="col-heading mb-3">
              <img src={logo} alt="" />
            </div>
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt-3">
            <div className="col-heading">
              <h1>Hello world</h1>
            </div>
            <form>
              <input
                className="footer-input mt-2"
                type="text"
                placeholder="Name"
              />{" "}
              <br />
              <input
                className="footer-input mt-2"
                type="email"
                placeholder="Email"
              />{" "}
              <br />
              <input
                className="footer-submit mt-2"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt-3">
            <div className="col-heading">
              <h1>Useful Links</h1>
            </div>
            <p>Privacy Policy</p>
            <p>Privacy Policy</p>
            <p>Privacy Policy</p>
            <p>Privacy Policy</p>
            <p>Privacy Policy</p>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt-3">
            <div className="col-heading">
              <h1>Contact Us</h1>
            </div>
            <p>Office: 12 Fake Street,New York</p>
            <p>Phone: (08) 8827 633354</p>
            <p>Fax: 08) 08 4752 1499</p>
            <p>Mail: support.goaltheme.com</p>
          </div>
        </div>
        <hr />
        <p className="text-white">© 2021 Medil || Designed by Md. Maruf.</p>
      </div>
    </div>
  );
};

export default Footer;
