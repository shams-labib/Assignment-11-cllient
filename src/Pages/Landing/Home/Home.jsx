import React from "react";
import Banner from "../../Banner/Banner";
import Brands from "../../Brands/Brands";
import Reviews from "../../Reviews/Reviews";
import AboutUs from "../../AboutUs/AboutUs";
import WhyChooseAndContact from "../../WhyChooseUs/WhyChooseAndContact";
import Contact from "../../Contact/Contact";
import TopCard from "../../Services Page/TopCard";
import TopDecorator from "../../Top Decorators/TopDecorator";

const reviewPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopCard></TopCard>
      <TopDecorator></TopDecorator>
      <AboutUs></AboutUs>
      <WhyChooseAndContact></WhyChooseAndContact>
      <Reviews reviewPromise={reviewPromise}></Reviews>
      <Brands></Brands>
      <Contact></Contact>
    </div>
  );
};

export default Home;
