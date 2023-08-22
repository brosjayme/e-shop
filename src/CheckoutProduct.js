import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img src="" alt="" className="checkoutProduct_image" />
      <div className="checkoutproduct_info">
        <p className="checkoutProduct_title">laptop bag</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>50</strong>
        </p>
        <div className="checkoutProduct_rating">⭐⭐</div>
      </div>
      <button className="checkoutProduct_remove">Remove from Basket</button>
    </div>
  );
}

export default CheckoutProduct;
