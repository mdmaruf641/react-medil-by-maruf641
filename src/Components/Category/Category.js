import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Category.css";
import SingleCategory from "./../SingleCategory/SingleCategory";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("./faakeData.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div id="shop">
      <div className="category container my-5">
        <div className="top-part py-3  text-center">
          <h5>
            <span>
              <img
                src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
                alt=""
              />
            </span>
            OUR PRODUCTS
            <span>
              <img
                src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
                alt=""
              />
            </span>
          </h5>
        </div>
        <div className="category-heading text-center">
          <h1 className="fw-bold">How to Prevent Yourself</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            ligula eget dolor. Aenean massa.
          </p>

          <Button variant="primary">New Arrivals</Button>
          <Button variant="outline-primary" className="mx-4">
            Featured
          </Button>
          <Button variant="outline-primary">Best Sellers</Button>
        </div>

        <div className="category-cart">
          <div className="row text-center mt-5">
            {category.map((singleCategory) => (
              <SingleCategory
                key={singleCategory.id}
                singleCategory={singleCategory}
              ></SingleCategory>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
