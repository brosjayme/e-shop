import React from "react";
import "./Home.css";
import Product from "./Product";
import download from "./assets/download.jpg";
import download1 from "./assets/download1.jpg";
import download2 from "./assets/download2.jpg";
import download3 from "./assets/download3.jpg";

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
            <Product
              id="123241"
              title="shoe ndi ibe joe(black)"
              price={15}
              rating={4}
              image={download}
            />
            <Product
              id="12324"
              title="cap (black)"
              price={50}
              rating={5}
              image={download1}
            />
          </div>
          <div className="home-row">
            <Product
              id="1232"
              title="hand bag"
              price={100}
              rating={3}
              image={download2}
            />
            <Product
              id="12321"
              title="laptop bag"
              price={30}
              rating={5}
              image={download3}
            />
            <Product
              id="123241"
              title="shoe ndi ibe joe(black)"
              price={15}
              rating={4}
              image={download}
            />
          </div>
          <div className="home-row">
            <Product
              id="123241"
              title="shoe ndi ibe joe(black)"
              price={15}
              rating={4}
              image={download}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
