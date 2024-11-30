import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [mail, setMail] = useState("");

  const getEmail = (e) => {
    setMail(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Email Registered Successfully..");
    setMail("")
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section mb-4">
          <div className="footer-column mb-3">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, nam ut vero scribentur, mel veritus
              omnesque ei. Mutat labores mea ex, mei cu option indoctum sumo
              errem partiendo ex 1 cum.
            </p>
            <br />
            <h5>Subscribe to Our Newsletter</h5>
            <form>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={mail}
                onChange={getEmail}
              />
              <button type="submit">
                <i className="fas fa-paper-plane" onClick={handleSubmit}></i>
              </button>
            </form>
          </div>

          <div className="footer-column mb-3">
            <h5>Latest Tweets</h5>
            <p>Couldn't connect with Twitter</p>
          </div>

          <div className="footer-column mb-3">
            <h5>Instagram</h5>
            <div className="instagram-grid">
              {[...Array(8)].map((_, idx) => (
                <div className="instagram-item" key={idx}>
                  <img
                    src={`/assets/insta${idx + 1}.png`}
                    alt={`Instagram ${idx + 1}`}
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="w-full mx-500" />

        <div className="footer-bottom d-flex justify-content-between">
          <div className="footer-links">
            <img src="/assets/logo-footer.png" alt="" />
            <ul className="footer-menu" style={{ marginLeft: "100px" }}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div style={{ marginTop: "9px" }}>
            <p>© 2017 Onderneaction, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
