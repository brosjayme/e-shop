import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img src="" alt="" className="checkout_ad" />
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout_right"></div>
    </div>
  );
}

export default Checkout;
