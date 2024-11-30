import React from "react";
import "./Teams.css";

const Teams = () => {
  return (
    <>
      <div className="row">
        <div className="container teams">
          <div className="col-md-12">
            <h2 className="text-center">OUR AMAZING TEAM</h2>
            <hr className="w-25 mx-auto" />
            <p className="text-center" style={{ fontSize: "13px" }}>
              <i>
                Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit
                auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci
                elit <br />
                consequat ipsutis sem niuis sed odio sit amet nibh
              </i>
            </p>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="team-member">
                <img
                  src="/assets/team1.png"
                  className="img-fluid rounded-circle mx-auto d-block"
                  alt="Team Member"
                  style={{ width: "60px", height: "60px" }}
                />
                <h5 className="text-center mt-3" style={{ fontSize: "13px" }}>
                  CYNTHIA FOWLER
                </h5>
                <p className="text-center" style={{ fontSize: "13px" }}>
                  Senior Designer
                </p>
                <p className="text-center" style={{ fontSize: "13px" }}>
                  “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt itudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsutis sem nibh id
                  elit.”
                </p>
                <ul className="list-inline social-icons text-center">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <img
                  src="/assets/team2.png"
                  className="img-fluid rounded-circle mx-auto d-block"
                  alt="Team Member"
                  style={{ width: "60px", height: "60px" }}
                />
                <h5 className="text-center mt-3" style={{ fontSize: "13px" }}>
                  JAMES SMITH
                </h5>
                <p className="text-center" style={{ fontSize: "13px" }}>
                  Lead Developer
                </p>
                <p className="text-center" style={{ fontSize: "13px" }}>
                  “Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et."
                </p>
                <ul className="list-inline social-icons text-center">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <img
                  src="/assets/team3.png"
                  className="img-fluid rounded-circle mx-auto d-block"
                  alt="Team Member"
                  style={{ width: "60px", height: "60px" }}
                />
                <h5 className="text-center mt-3" style={{ fontSize: "13px" }}>
                  SARAH JOHNSON
                </h5>
                <p className="text-center" style={{ fontSize: "13px" }}>
                  Project Manager
                </p>
                <p className="text-center" style={{ fontSize: "13px" }}>
                  “At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi"
                </p>
                <ul className="list-inline social-icons text-center">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
