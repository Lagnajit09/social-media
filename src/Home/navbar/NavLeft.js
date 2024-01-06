import React from "react";
import "./NavLeft.css";
import { Avatar } from "@mui/material";

function NavLeft(props) {
  const showProfile = () => {
    props.profileClicked();
  };

  const showHome = () => {
    props.homeClicked();
  };

  return (
    <div>
      <nav className="leftNavbar">
        {props.username && (
          <div id="userProfile" className="nav__elements" onClick={showProfile}>
            <Avatar alt={props.username.displayName} src="apf.jpg" />
            <h3>{props.username.displayName}</h3>
          </div>
        )}
        <div id="home" className="nav__elements" onClick={showHome}>
          <img
            src="https://img.icons8.com/?size=40&id=12229&format=png"
            alt=""
          />
          <h3>Home</h3>
        </div>
        <div className="nav__elements">
          <img
            className="nav__icon"
            src="https://img.icons8.com/?size=40&id=55460&format=png"
            alt=""
          />
          <h3>Friends</h3>
        </div>
        <div className="nav__elements">
          <img
            src="https://img.icons8.com/?size=40&id=13652&format=png"
            alt=""
          />
          <h3>Groups</h3>
        </div>

        {/* <div className="nav__elements">
          <img
            src="https://img.icons8.com/?size=40&id=chS9utjiN2xq&format=png"
            alt=""
          />
          <h3>Marketplace</h3>
        </div> */}
        <div className="nav__elements">
          <img
            src="https://img.icons8.com/?size=40&id=uNToIe0zQRBV&format=png"
            alt=""
          />
          <h3>Watch</h3>
        </div>
        <div className="nav__elements">
          <img
            src="https://img.icons8.com/?size=40&id=EYOe5z0CyyYB&format=png"
            alt=""
          />
          <h3>Pages</h3>
        </div>
        <div className="nav__elements">
          <img
            src="https://img.icons8.com/?size=40&id=26089&format=png"
            alt=""
          />
          <h3>Saved</h3>
        </div>
        <div className="nav__elements">
          <img
            src="https://img.icons8.com/?size=40&id=12784&format=png"
            alt=""
          />
          <h3>Settings</h3>
        </div>
        <div className="copyright">
          <p>@LM. All rights reserved. 2023.</p>
        </div>
      </nav>
    </div>
  );
}

export default NavLeft;
