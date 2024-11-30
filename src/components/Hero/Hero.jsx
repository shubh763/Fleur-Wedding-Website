import React from "react";
import Slider from "react-slick";
import "./Hero.css";

const Hero = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section
      className="hero"
      style={{ alignItems: "center", textAlign: "center" }}
    >
      <Slider {...sliderSettings} className="hero-slider">
        <div className="hero-text">
          <h1 className="animated-text">This is Beauty</h1>
          <p className="animated-text">
            <i>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit consequatur laudantium dignissimos voluptatem quidem
              nobis distinctio cupiditate optio at sit expedita error
              recusandae, itaque minima saepe eius sunt quasi minus.
            </i>
          </p>
          <button className="purchase-btn animated-text">Purchase</button>
        </div>
        <div className="hero-text">
          <h1 className="animated-text">Experience Elegance</h1>
          <p className="animated-text">
            <i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              magni nobis, sed blanditiis cum soluta! Sit a deserunt ex
              provident iure laboriosam exercitationem dolorem eius, quisquam
              tempore maiores cupiditate similique.
            </i>
          </p>
          <button className="purchase-btn animated-text">Purchase</button>
        </div>
        <div className="hero-text">
          <h1 className="animated-text">Simply Charming</h1>
          <i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni
            nobis, sed blanditiis cum soluta! Sit a deserunt ex provident iure
            laboriosam exercitationem dolorem eius, quisquam tempore maiores.
            <br />
          </i>

          <button
            className="purchase-btn animated-text"
            style={{ marginTop: "21px" }}
          >
            Purchase
          </button>
        </div>
      </Slider>
    </section>
  );
};

export default Hero;
