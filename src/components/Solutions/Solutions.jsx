import React from "react";
import "./Solutions.css";

function Solutions() {
  return (
    <div className="row">
      <div className="container-fluid" style={{ height: "910px" }}>
        <div className="col-md-12">
          <div className="text-center">
            <h1>SIMPLE AND CLEAN SOLUTIONS</h1>
            <hr className="w-25 mx-auto" />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit
              auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit
              consequat ipsutis sem niuis sed odio sit amet nibh
            </p>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="/assets/solution_img1.png"
                className="card-img-top"
                alt="img1"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="/assets/solution_img3.png"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="/assets/solution_img2.png"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
