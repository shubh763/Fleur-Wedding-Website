import React from "react";
import "./Feature.css";
const Feature = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="icon-container">
              <i className="fas fa-globe"></i>
            </div>
            <div className="text-container">
              <h3>DISCOVER WHAT'S POSSIBLE</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                sollicitudin, lorem quis bibendum auci elit consequat ipsutis.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon-container">
              <i className="fas fa-paper-plane"></i>
            </div>
            <div className="text-container">
              <h3>PEOPLE REALLY MATTER</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                sollicitudin, lorem quis bibendum auci elit consequat ipsutis.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon-container">
              <i className="fas fa-heart"></i>
            </div>
            <div className="text-container">
              <h3>HAVING A PLAN FEELS GOOD</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                sollicitudin, lorem quis bibendum auci elit consequat ipsutis.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="cart-container">
          <i className="fas fa-shopping-cart"></i>
        </div> */}
      </div>
    </>
  );
};

export default Feature;
