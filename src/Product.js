import React from "react";
import "./Product.css";
import download from "./assets/download.jpg";

function Product() {
  return (
    <div>
      <div className="product">
        <div className="product-info">
          <p>Titleoijhkl/.jhgsffghj,mhngb</p>
          <p className="product-price">
            <small>$</small>
            <strong>40</strong>
          </p>
          <div className="product-ratings">⭐⭐⭐⭐</div>
        </div>
        <img src={download} alt="" />
        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
