import React from "react";
import "./Hamburger.css";

const Hamburger = ({ onClose }) => {
  return (
    <div className="hamburger-menu">
      <div className="hamburger-header">
        <div className="sidearea-logo" style={{height: "20px", marginTop: "8px"}}>
        <img src="/assets/logo-sidearea.png" alt="" />
        </div>
        <button className="close-btn" onClick={onClose}>
          <i className="fa-solid fa-times"></i>
        </button>
      </div>
      <div className="hamburger-content">
        <p>
          Lorem ipsum dolor sit amet, consecte adipi. Suspendisse ultrices
          hendrerit a vitae vel a sodales ac lectus.
        </p>
        <h3>Links</h3>
        <ul>
          <li>Pinterest Portfolio List</li>
          <br />
          <li>Portfolio Gallery List</li>
          <br />
          <li>Portfolio Masonry Single</li>
        </ul>
        <br />
        <h3>Instagram Feed</h3>
        <br />
        <div className="instagram-grid">
          {[...Array(6)].map((_, idx) => (
            <div className="instagram-item" key={idx}>
              <img
                src={`https://picsum.photos/200/200?random=${idx}`}
                alt={`Instagram ${idx + 1}`}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
