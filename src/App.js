import "./App.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
function App() {
  return (
    <div className="App">
      <div className="header-logo"></div>
      <StorefrontIcon fontSize="large" />

      <div className="header-searchbar"></div>
      <div className="header-nav">
        <div className="nav-item">
          <span className="nav-itemlineOne">Hello Guests</span>
          <span className="nav-itemlinetwo">Sign In</span>
        </div>
        <div className="nav-item">
          <span className="nav-itemLineOne">Your</span>
          <span className="nav-itemLineTwo">Shop</span>
        </div>
        <div className="nav-item">
          <ShoppingBasketIcon fontSize="large" />
          <span className="nav-itemLineTwo">0</span>
        </div>
      </div>
    </div>
  );
}

export default App;
