import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <StorefrontIcon className="header-logo-image" fontSize="large" />
        <h2 className="header-logo-title">eSHOP</h2>
      </div>
      <div className="header-searchbar">
        <input type="text" className="header-searchinput" />
        <SearchIcon className="header-searchicon" />
      </div>

      <div className="header-nav">
        <div className="nav-item">
          <span className="nav-itemlineOne">Hello Guests</span>
          <span className="nav-itemlinetwo">Sign In</span>
        </div>
        <div className="nav-item">
          <span className="nav-itemLineOne">Your</span>
          <span className="nav-itemLineTwo">Shop</span>
        </div>
        <div className="itemBasket">
          <ShoppingBasketIcon />
          <span className="nav-itemLineTwo itemBasketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;