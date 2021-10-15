import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "./../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./CategoryData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="services container my-5">
        <div className="top-part py-3  text-center">
          <h5>
            <span>
              <img
                src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
                alt=""
              />
            </span>
            PREVENTION
            <span>
              <img
                src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
                alt=""
              />
            </span>
          </h5>
        </div>
        <div className="services-heading text-center">
          <h1 className="fw-bold">How to Prevent Yourself</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            ligula eget dolor. Aenean massa.
          </p>
        </div>
        <div className="services-cart">
          <div className="row mt-3">
            {services.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
