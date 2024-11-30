import React from "react";
import "./LatestTweets.css";

const LatestTweets = () => {
  return (
    <>
      <div className="row">
        <div className="container tweets">
          <div className="col-md-12">
            <i
              class="fa-brands fa-twitter"
              style={{
                alignItems: "center",
                color: "white",
                fontSize: "50px",
                display: "flex",
                justifyContent: "center",
              }}
            ></i>
            <div className="text">
              <h2>LATEST TWEETS</h2>
              <hr className="w-25 mx-auto" />

              <p>Couldn't connect with Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestTweets;
