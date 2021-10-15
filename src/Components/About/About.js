import React from "react";
import "./About.css";
import aboutImg from "../../images/Banner&Background/kit.png";

const About = () => {
  return (
    <div id="about">
      <div className="about container">
        <div className="row">
          <div className="col-lg-6 py-4  px-4">
            <img className="w-100" src={aboutImg} alt="" />
          </div>
          <div className="col-lg-6 about-desc">
            <h6>
              About US
              <span>
                <img
                  src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
                  alt=""
                />
              </span>
            </h6>
            <h1>Medical Equipment & Kit</h1>
            <p>
              Pair large text with an image to give focus to your chosen
              product, collection, or blog post. Add details on availability,
              style, or even provide a review. Even if you can't afford to
              travel the world, you can take your children to the museum, zoo or
              local park. And don't be afraid to take them to grown-up spots.
              Eating out in a restaurant teaches children how to be quiet and
              polite and gives them the pleasure of knowing you trust them to
              behave.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
