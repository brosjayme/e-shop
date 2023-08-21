import React from "react";
import "./Product.css";
// import download from "./assets";

function Product({ id, title, image, price, rating }) {
  return (
    <div>
      <div className="product">
        <div className="product-info">
          <p>{title}</p>
          <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product-ratings">⭐⭐⭐⭐</div>
        </div>
        <img src={image} alt="" />
        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
