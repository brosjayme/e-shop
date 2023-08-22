import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { BrowserRouter, Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue;
  return (
    <div className="header">
      <BrowserRouter>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header-logo">
            <StorefrontIcon className="header-logo-image" fontSize="large" />
            <h2 className="header-logo-title">eSHOP</h2>
          </div>
        </Link>
      </BrowserRouter>

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
        <BrowserRouter>
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <div className="itemBasket">
              <ShoppingBasketIcon />
              <span className="nav-itemLineTwo itemBasketCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Header;
