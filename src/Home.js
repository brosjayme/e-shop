import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home-container">
          <img
            src="https://thumbs.dreamstime.com/b/e-commerce-business-online-digital-
            internet-shopping-concept-virtual-screen-208063581.jpg?w=992"
            alt=""
            className="home-image"
          />
          <div className="home-row">
            <Product />
            <Product />
          </div>
          <div className="home-row">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="home-row">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
