import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Feature from "./components/Feature/Feature";
import Model from "./components/Models/Model";
import Testimonial from "./components/Testimonials/Testimonial";
import Info from "./components/Info/Info";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Users from "./components/Users/Users.jsx";
import Teams from "./components/Teams/Teams.jsx";
import Products from "./components/Products/Products.jsx";
import LatestTweets from "./components/Latesttweets/LatestTweets.jsx";
import Clients from "./components/Clients/Clients.jsx";
import Footer from "./components/Footer/Footer.jsx";
// import Solutions from "./components/Solutions/Solutions.jsx";
import Extra from "./components/Extra/Extra.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Model />
      <Testimonial />
      <Info />
      <Portfolio />
      <Users />
      <Teams />
      <Products />
      <LatestTweets/>
      <Clients/>
      {/* <Solutions/> */}
      <Extra/>
      <Footer/>
    </>
  );
};

export default App;
