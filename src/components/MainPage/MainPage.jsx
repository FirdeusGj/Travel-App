import React from "react";
import "./MainPage.css";
export default function MainPage() {
  return (
    <section>
      <div className="section__wrapper">
        <div className="section__content--wrapper">
          <div className="section__content">
            <h1>Book a flight now</h1>
          </div>
        </div>
        <div>
          <img
            className="mainPage__img"
            src="https://freepngimg.com/save/26315-airplane-transparent/1000x421"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
