import React from "react";
import CardItem from "./CardItem.jsx";
import "./CardItem.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check Out Epic Destinations! </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://kazakhstan.travel/static/images/regions/astana.jpg"
              text="Astana - the Modernest City in Central Asia"
              label="City tour"
              path="/services"
            />
            <CardItem
              src="https://kazakhstan.travel/static/images/regions/almatinskayaobl.jpg"
              text="Big Almaty Lake"
              label="Outdoor-Adventure"
              path="/services"
            />
            <CardItem
              src="https://files.kazakhstan.travel/files/public/201811/22/91086744a368404eb4ae79b3554afe2c/%D0%91%D0%B0%D0%B9%D0%BA%D0%BE%D0%BD%D1%83%D1%802.jpg"
              text="Baikonur cosmodrome tour"
              label="Space-Tour"
              path="/services"
            />
            <CardItem
              src="https://files.kazakhstan.travel/files/public/202212/15/734788fc3d11455688e2be6e2ea76be6/%D0%90%D0%9B%D0%A2%D0%AB%D0%9D-1.jpg"
              text="National Parks"
              label="Hiking"
              path="/services"
            />
            <CardItem
              src="https://files.kazakhstan.travel/files/public/201911/13/e4deb96af6d04117b89b8cc3a09c7e01/%D0%91%D0%9E%D0%97%D0%96%D0%AB%D0%A0%D0%90.jpg"
              text="Canyons from Another Planet"
              label="Canyon"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
