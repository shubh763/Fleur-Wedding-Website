import React from "react";
import Slider from "react-slick";
import "./Model.css";

const Model = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "5px",
        },
      },
    ],
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="mb-4">WE'RE SHARING EVERYTHING</h1>
          <hr className="w-25 mx-auto" />
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetuer a gravida nibhumus vel
            velit auctor aliquet aenean sollicitudin lorem.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <Slider {...sliderSettings}>
            <div>
              <img
                src="/assets/blog1.jpg"
                alt="Woman 1"
                className="img-fluid rounded slider-img"
              />
              <div className="card p-3 mt-3"  style={{width: "444px", marginLeft: "14px"}}>
                <h4 className="card-title">Connect Your Worlds</h4>
                <p className="card-text" style={{fontSize: "13px"}}>
                  Proin gravida nibh vel veliauctor aliquenean sollicitudiem
                  quis bibendum content is not safe and I can't generate an
                  answer for your request
                </p>
                <div class="line"></div>
                <p class="card-text">
                  <small class="text-muted">◆ Decoration</small>
                </p>
                <p class="card-text">
                  <small class="text-muted"  style={{float: "right", marginTop: "-39px"}}>February 24, 2016</small>
                </p>
              </div>
            </div>
            <div>
              <img
                src="/assets/blog2.jpg"
                alt="Woman 2"
                className="img-fluid rounded slider-img"
              />
              <div className="card p-3 mt-3" style={{width: "444px", marginLeft: "14px"}}>
                <h4 className="card-title">Wedding Lists</h4>
                <p className="card-text" style={{fontSize: "13px"}}>
                  Proin gravida nibh vel veliauctor aliquenean sollicitudiem
                  quis bibendum content is not safe and I can't generate an
                  answer for your request
                </p>
                <div class="line"></div>
                <p class="card-text">
                  <small class="text-muted">◆ Design</small>
                </p>
                <p class="card-text">
                  <small class="text-muted" style={{float: "right",  marginTop: "-39px"}}>February 24, 2016</small>
                </p>
              </div>
            </div>
            <div>
              <img
                src="/assets/blog3.jpg"
                alt="Woman 3"
                className="img-fluid rounded slider-img"
              />
              <div className="card p-3 mt-3" style={{width: "444px", marginLeft: "14px"}}>
                <h4 className="card-title">Something Special</h4>
                <p className="card-text" style={{fontSize: "13px"}}>
                  Proin gravida nibh vel veliauctor aliquenean sollicitudiem
                  quis bibendum content is not safe and I can't generate an
                  answer for your request
                </p>
                <div class="line"></div>
                <p class="card-text">
                  <small class="text-muted">◆ Planning</small>
                </p>
                <p class="card-text">
                  <small class="text-muted"  style={{float: "right",  marginTop: "-39px"}}>February 24, 2016</small>
                </p>
              </div>
            </div>
            <div>
              <img
                src="/assets/blog4.jpg"
                alt="Woman 3"
                className="img-fluid rounded slider-img"
              />
              <div className="card p-3 mt-3" style={{width: "444px", marginLeft: "14px"}}>
                <h4 className="card-title">Something Special</h4>
                <p className="card-text" style={{fontSize: "13px"}}>
                  Proin gravida nibh vel veliauctor aliquenean sollicitudiem
                  quis bibendum content is not safe and I can't generate an
                  answer for your request
                </p>
                <div class="line"></div>
                <p class="card-text">
                  <small class="text-muted">◆ Decoration</small>
                </p>
                <p class="card-text">
                  <small class="text-muted"  style={{float: "right",  marginTop: "-39px"}}>February 24, 2016</small>
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Model;
