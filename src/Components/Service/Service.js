import React from "react";
import "./Service.css";

const Service = (props) => {
  const { name, image, description } = props.service;
  return (
    <div className="col-md-6 col-lg-4 col-12 text-center">
      <div className="cart py-3 px-2 m-2 border rounded">
        <div className="cart-img">
          <img src={image} alt="cart img" />
        </div>
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
