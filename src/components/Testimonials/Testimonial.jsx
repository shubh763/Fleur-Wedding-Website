import React from "react";
import Slider from "react-slick";
import "./Testimonial.css";

const Testimonial = () => {
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
    <div className="row testimonial">
      <div className="container">
        <div className="col-md-12 text-center">
          <h2 className="mb-4">TESTIMONIALS</h2>
          <hr
            className="border-dark"
            style={{ width: "100px", height: "2px", marginLeft: "553px" }}
          />

          <Slider {...sliderSettings} className="mt-4">
            {/* Testimonial 1 */}
            <div className="text-center">
              <p className="mt-4">
                <i>
                  "Nam nec tellus a odio tincidunt auctor a ornare odio. Lorem
                  ipsum dolor sit amet, consectetuer gravida nibh vel velit
                  auctor aliquet. Aenean sollicitudin, lorem quis bibendum,
                  auctor elit consequat ipsum, sem nibh id elit. Odio sit amet
                  nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                  velit."
                </i>
              </p>
              <div className="mt-4">
                <h6 className="text-muted">DANIEL MITCHELL</h6>
                <br />
                <span className="text-muted">Google Analytics</span>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="text-center">
              <i>
                "Nam nec tellus a odio tincidunt auctor a ornare odio. Lorem
                ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor
                aliquet. Aenean sollicitudin, lorem quis bibendum, auctor elit
                consequat ipsum, sem nibh id elit. Odio sit amet nibh vulputate
                cursus a sit amet mauris. Morbi accumsan ipsum velit."
              </i>
              <div className="mt-4">
                <h6 className="text-muted">JESSICA SMITH</h6>
                <br />
                <span className="text-muted">Businessman</span>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="text-center">
              <i>
                "Nam nec tellus a odio tincidunt auctor a ornare odio. Lorem
                ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor
                aliquet. Aenean sollicitudin, lorem quis bibendum, auctor elit
                consequat ipsum, sem nibh id elit. Odio sit amet nibh vulputate
                cursus a sit amet mauris. Morbi accumsan ipsum velit."
              </i>
              <div className="mt-4">
                <h6 className="text-muted">ROBERT JOHNSON</h6>
                <br />
                <span className="text-muted">Entrepreneur</span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
