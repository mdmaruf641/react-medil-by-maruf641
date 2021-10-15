import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact container text-center">
        <h2>Contact With Us</h2>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="form">
              <form>
                <input
                  className="input-field "
                  type="text"
                  placeholder="Enter your Name"
                />{" "}
                <br />
                <input
                  className="input-field mt-3"
                  type="email"
                  placeholder="Enter your Email"
                />{" "}
                <br />
                <input
                  className="input-field mt-3"
                  type="text"
                  placeholder="Enter your Phone"
                />{" "}
                <br />
                <input
                  className="input-submit mt-3"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="w-100"
              src="https://i.ibb.co/FVMcnDp/undraw-contact-us-15o2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
