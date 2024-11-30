import React from "react";
import './Clients.css'

const Clients = () => {
  return (
    <div className="row">
      <div className="container mb-5">
        <h2 className="text-center mb-4">OUR CLIENTS</h2>
        <hr
            className="border-dark"
            style={{ width: "100px", height: "2px", marginLeft: "553px" }}
          />
        <p className="text-center mt-3">
          <i>
            Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit
            auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit
            consequat ipsutis sem niuis sed odio sit amet nibh
          </i>
        </p>
        <br />
        <div className="d-flex">
          <div className="client-item text-center mx-3">
            <img
              src="/assets/client-1.png"
              alt="Rebecca Photography"
              className="img-fluid"
            />
          </div>
          <div className="client-item text-center mx-3">
            <img
              src="/assets/client-2.png"
              alt="Anna Grey Florist"
              className="img-fluid"
            />
          </div>
          <div className="client-item text-center mx-3">
            <img
              src="/assets/client-3.png"
              alt="Bakery"
              className="img-fluid"
            />
          </div>
          <div className="client-item text-center mx-3">
            <img
              src="/assets/client-4.png"
              alt="Sweet Moments Photography"
              className="img-fluid"
            />
          </div>
          <div className="client-item text-center mx-3">
            <img
              src="/assets/client-5.png"
              alt="Clients"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
