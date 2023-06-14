import React from "react";
import "./Cheapest.css";
import Hotel1 from "../Images/hotel.jpg";
import Hotel2 from "../Images/hotel2.jpg";
import Hotel3 from "../Images/hotel3.png";
import Hotel4 from "../Images/hotel4.jpg";

export default function Cheapest() {
  return (
    <section className="cheap">
      <div className="cheap__content--wrapper">
        <div className="cheap__content--texts">
          <h1>
            <span className="stroke__cheap">Cheapest Deals</span>
          </h1>
          <p>
            Some of the best hotels that have the cheapest deals.
          </p>
        </div>
        <div className="cheap__hotel--wrapper">
          <div className="hotel__content">
              <h1>Hotel 1</h1>
              <p>
                <span>$79.99</span> $39.99
              </p>
              <button>View More</button>
            <img className="cheap__hotel" src={Hotel1} alt="" />
          </div>
          <div className="hotel__content">
              <h1>Hotel 2</h1>
              <p>
                <span>$119.50</span> $59.00
              </p>
              <button>View More</button>
            <img className="cheap__hotel" src={Hotel2} alt="" />
          </div>
          <div className="hotel__content">
              <h1>Hotel 3</h1>
              <p>
                <span className="offer">$82.95</span> $45.95
              </p>
              <button>View More</button>
            <img className="cheap__hotel" src={Hotel3} alt="" />
          </div>
          <div className="hotel__content">
              <h1>Hotel 4</h1>
              <p>
                <span>$119.50</span> $55.95
              </p>
              <button>View More</button>
            <img className="cheap__hotel" src={Hotel4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}