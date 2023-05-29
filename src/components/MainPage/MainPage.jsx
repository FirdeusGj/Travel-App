import React from "react";
import "./MainPage.css";
export default function MainPage() {
  return (
    <section>
      <div className="section__wrapper">
        <div className="section__content--wrapper">
          <div className="section__content">
            <h1>What we have :</h1>
            <ul className="section__ul">
              <li className="section__li">Best Hotels</li>
              <li className="section__li">Cheap Flights</li>
              <li className="section__li">Best Deals</li>
              <li className="section__li">Top rated places</li>
            </ul>
          </div>
          <div>
            <img
              className="mainPage__img"
              src="https://freepngimg.com/save/26315-airplane-transparent/1000x421"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
