import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="row">
      <div className="container portfolio">
        <h1 className="text-center mt-5 mb-4">OUR AMAZING WORK</h1>
        <hr className="w-25 mx-auto" />
        <p className="text-center mb-5">
          <i>
            Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit
            auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit
            consequat ipsutis sem niuis sed odio sit amet nibh
          </i>
        </p>
        <div className="row mb-5">
          <div className="col-12 d-flex justify-content-center">
            <ul className="nav-links">
              <li className="active">All</li>
              <li>Artistic</li>
              <li>Modern</li>
              <li>Photography</li>
              <li>Print</li>
            </ul>
          </div>
        </div>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-all"
            role="tabpanel"
          >
            <div className="photo-container">
              <div className="card" style={{ width: "250px", height: "250px" }}>
                <img
                  src="/assets/work1.jpg"
                  className="card-img-top"
                  alt="Work 1"
                />
                <div className="overlay">
                  <i className="fas fa-search search-icon"></i>
                </div>
              </div>
              <div className="card" style={{ width: "250px", height: "250px" }}>
                <img
                  src="/assets/work2.jpg"
                  className="card-img-top"
                  alt="Work 2"
                />
                <div className="overlay">
                  <i className="fas fa-search search-icon"></i>
                </div>
              </div>
              <div className="card" style={{ width: "250px", height: "250px" }}>
                <img
                  src="/assets/work3.jpg"
                  className="card-img-top"
                  alt="Work 3"
                />
                <div className="overlay">
                  <i className="fas fa-search search-icon"></i>
                </div>
              </div>
              <div className="card" style={{ width: "250px", height: "250px" }}>
                <img
                  src="/assets/work4.jpg"
                  className="card-img-top"
                  alt="Work 4"
                />
                <div className="overlay">
                  <i className="fas fa-search search-icon"></i>
                </div>
              </div>
              <div className="card" style={{ width: "250px", height: "250px" }}>
                <img
                  src="/assets/work5.jpg"
                  className="card-img-top"
                  alt="Work 5"
                />
                <div className="overlay">
                  <i className="fas fa-search search-icon"></i>
                </div>
              </div>
              <div className="card" style={{ width: "250px", height: "250px" }}>
                <img
                  src="/assets/work6.jpg"
                  className="card-img-top"
                  alt="Work 6"
                />
                <div className="overlay">
                  <i className="fas fa-search search-icon"></i>
                </div>
              </div>
              <div className="card" style={{ width: "250px", height: "250px" }}>
                <img
                  src="/assets/work7.jpg"
                  className="card-img-top"
                  alt="Work 7"
                />
                <div className="overlay">
                  <i className="fas fa-search search-icon"></i>
                </div>
              </div>
              <div className="card" style={{ width: "250px", height: "250px" }}>
                <img
                  src="/assets/work8.jpg"
                  className="card-img-top"
                  alt="Work 8"
                />
                <div className="overlay">
                  <i className="fas fa-search search-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
