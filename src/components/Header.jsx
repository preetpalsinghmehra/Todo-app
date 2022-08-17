import React from "react";
import "../components/Header.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function Header() {
  return (
    <div className="container">
      <img
        className="img"
        src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-1024x426.png"
      />
      <div className="location">
        <p>Hello</p>
        <div className="row">
          <LocationOnIcon sx={{ color: "#fff", fontSize: "15px" }} />
          <p>Select your adddress</p>
        </div>
      </div>

      {/* Search bar */}
      <div className="search">
        <input type={"search"} />
        <SearchRoundedIcon />
      </div>

      <div>
        <p>Hello,Sign In</p>
        <div className="row">
          <p>Account Lists</p>
          <ArrowDropDownRoundedIcon sx={{ color: "gray" }} />
        </div>
      </div>

      <div className="row_return">
        <span>Returns</span>
        <span>Orders</span>
      </div>

      <div className="right-icons">
        <ShoppingCartOutlinedIcon />
        <PersonOutlineOutlinedIcon />
      </div>
    </div>
  );
}

export default Header;
