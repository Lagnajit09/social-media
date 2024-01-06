import React from "react";
import "./NavBottom.css";

function NavBottom(props) {
  const showProfile = () => {
    props.profileClicked();
  };

  const showHome = () => {
    props.homeClicked();
  };

  return (
    <div>
      <div className="nav__bottomElements">
        <div className="nav__bottomElement" onClick={showHome}>
          <img src="https://img.icons8.com/?size=30&id=73&format=png" alt="" />
        </div>
        <div className="nav__bottomElement">
          <img src="https://img.icons8.com/?size=30&id=132&format=png" alt="" />
        </div>
        <div className="nav__bottomElement">
          <img
            src="https://img.icons8.com/?size=30&id=24717&format=png"
            alt=""
          />
        </div>
        <div className="nav__bottomElement">
          <img
            src="https://img.icons8.com/?size=30&id=PxI9IPCyBAOD&format=png"
            alt=""
          />
        </div>
        <div className="nav__bottomElement" onClick={showProfile}>
          <img
            src="https://img.icons8.com/?size=30&id=uOoIUTYvxnso&format=png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default NavBottom;
