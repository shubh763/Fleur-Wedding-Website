import React, { useEffect, useRef, useState } from "react";
import "./Users.css";

const Users = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]); // Initial values for counters
  const sectionRef = useRef(null);
  const numbers = [168, 2590, 347, 191]; // Final values for counters

  const startCounting = () => {
    numbers.forEach((number, index) => {
      let current = 0;
      const increment = Math.ceil(number / 100); // Adjust the speed
      const interval = setInterval(() => {
        current += increment;
        if (current >= number) {
          current = number;
          clearInterval(interval);
        }
        setCounters((prev) => {
          const updatedCounters = [...prev];
          updatedCounters[index] = current;
          return updatedCounters;
        });
      }, 20); // Adjust animation speed
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = sectionRef.current;
      if (
        element &&
        window.scrollY + window.innerHeight >= element.offsetTop &&
        window.scrollY <= element.offsetTop + element.offsetHeight
      ) {
        startCounting();
        window.removeEventListener("scroll", handleScroll); // Run once
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mt-5" ref={sectionRef}>
      <div className="row text-center">
        <div className="col-md-3">
          <i className="bi bi-star-fill icon"></i>
          <h2 className="mt-3">{counters[0]}</h2>
          <p>Design</p>
        </div>
        <div className="col-md-3">
          <i className="bi bi-envelope-fill icon"></i>
          <h2 className="mt-3">{counters[1]}</h2>
          <p>Marketing</p>
        </div>
        <div className="col-md-3">
          <i className="bi bi-heart-fill icon"></i>
          <h2 className="mt-3">{counters[2]}</h2>
          <p>Development</p>
        </div>
        <div className="col-md-3">
          <i className="bi bi-suit-club-fill icon"></i>
          <h2 className="mt-3">{counters[3]}</h2>
          <p>User Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Users;
