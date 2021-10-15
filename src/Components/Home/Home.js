import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuBar from "../Shared/Footer/MenuBar/MenuBar";
import "./Home.css";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import About from "../About/About";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Category></Category>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
