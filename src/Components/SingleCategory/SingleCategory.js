import React from "react";
import "./SingleCategory.css";

const SingleCategory = (props) => {
  const { image, name, price } = props.singleCategory;
  return (
    <div className="col-lg-3 col-md-4 col-12">
      <div className="cart-img">
        <img className="w-100" src={image} alt="" />
        <h4>{name}</h4>
        <h3 className="text-info mb-5">{price}</h3>
      </div>
    </div>
  );
};

export default SingleCategory;
