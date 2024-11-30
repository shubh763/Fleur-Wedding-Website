import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2>RECOMENDED PRODUCTS</h2>
            <hr className="w-25 mx-auto" />
            <p className="text-muted">
              <i>Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit
              auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit
              consequat ipsutis sem niuis sed odio sit amet nibh</i>
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-3">
            <div className="card">
              <img
                src="/assets/product-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">AUTUMN BOUQUET</h5>
                <p className="card-text">$375</p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                src="/assets/product-2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">COZY ARMCHAIR</h5>
                <p className="card-text">$945</p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                src="/assets/product-3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">LUXURY SOFA</h5>
                <p className="card-text">$1,200</p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                src="/assets/product-4.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">DINING TABLE</h5>
                <p className="card-text">$850</p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
