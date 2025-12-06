import React from "react";
import Banner from "../../Banner/Banner";
import Brands from "../../Brands/Brands";
import Reviews from "../../Reviews/Reviews";
import AboutUs from "../../AboutUs/AboutUs";

const reviewPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Reviews reviewPromise={reviewPromise}></Reviews>
      <Brands></Brands>
    </div>
  );
};

export default Home;
