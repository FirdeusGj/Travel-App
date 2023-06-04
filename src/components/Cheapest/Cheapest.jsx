import React from "react";
import "./Cheapest.css";
import Hotel from "../Images/hotel.jpg";

export default function Cheapest() {
  return (
    <section className="cheap">
      <div className="cheap__content--wrapper">
        <div>
          <h1>
            <span className="stroke__text2">Cheapest Deals</span>
          </h1>
        </div>
        <div className="cheap__hotel--wrapper">
          <div className="hotel__content">
            <div className="cheap__text">
              <h1>Lorem ipsum dolor.</h1>
              <p>
                <span>$29.99</span>$19.99
              </p>
            </div>
            <img className="cheap__hotel" src={Hotel} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
