import React from 'react';
import './Info.css';

const Info = () => {
  return (
    <>
      <div className="row">
        <div className="container info-left">
          <h1>ENGAGING, CREATIVE PAGE <br /> AND PURPOSEFUL THEME.</h1>
          <p><i>Express yourself and your business through this amazing theme</i></p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. 
            Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum.
          </p>
        </div>
        <div className="info-right">
          <div className="about-skill">
            <p>Design</p>
            <hr style={{ width: "50%" }} />
          </div>
          <div className="about-skill">
            <p>Marketing</p>
            <hr style={{ width: "70%" }} />
          </div>
          <div className="about-skill">
            <p>Development</p>
            <hr style={{ width: "80%" }} />
          </div>
          <div className="about-skill">
            <p>User Experience</p>
            <hr style={{ width: "60%" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
