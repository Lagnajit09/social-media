import React, { useEffect, useRef, useState } from "react";
import "./Nav.css";

function Nav(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [searchedData, setSearchedData] = useState("");

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsClicked(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const showProfile = () => {
    props.profileClicked();
  };

  const logoutHandler = () => {
    props.onLogout();
  };

  const searchClicked = () => {
    if (searchedData) {
      props.searchedProfile(searchedData);
      setSearchedData("");
    }
  };

  return (
    <div>
      <nav className="Navbar" ref={menuRef}>
        <div className="navElements__left">
          <h1 className="nav__logo" onClick={logoutHandler}>
            l'sBook
          </h1>
          <div className="search__container">
            <input
              className="nav__search"
              type="text"
              placeholder="Search"
              value={searchedData}
              onChange={(e) => {
                setSearchedData(e.target.value);
              }}
            />
            <button
              className="search__btn"
              disabled={!searchedData}
              onClick={searchClicked}
            >
              <img
                src="https://img.icons8.com/?size=25&id=59878&format=png"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="navElements__right">
          <img
            className="nav__icons"
            src="https://img.icons8.com/?size=30&id=20419&format=png"
            alt=""
          />
          <img
            className="nav__icons"
            src="https://img.icons8.com/?size=30&id=17317&format=png"
            alt=""
          />
          <img
            className="nav__icons"
            src="https://img.icons8.com/?size=32&id=kDoeg22e5jUY&format=png"
            alt=""
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          />
        </div>

        {isClicked && (
          <div className="nav__profile">
            <div
              className="nav__profileIcons nav__profileUser"
              onClick={showProfile}
            >
              <div className="test">
                <img
                  className="nav__profileIcon"
                  src="https://img.icons8.com/?size=25&id=ABBSjQJK83zf&format=png"
                  alt=""
                />
                <h3>{props.username.displayName}</h3>
              </div>
            </div>
            <div className="nav__profileIcons">
              <div className="test">
                <img
                  className="nav__profileIcon"
                  src="https://img.icons8.com/?size=25&id=2969&format=png"
                  alt=""
                />
                <h3>Settings & privacy</h3>
              </div>
              <span>
                <img
                  src="https://img.icons8.com/?size=25&id=7849&format=png"
                  alt=""
                />
              </span>
            </div>
            <div className="nav__profileIcons">
              <div className="test">
                <img
                  className="nav__profileIcon"
                  src="https://img.icons8.com/?size=25&id=2908&format=png"
                  alt=""
                />
                <h3>Help & support</h3>
              </div>
              <span>
                <img
                  src="https://img.icons8.com/?size=25&id=7849&format=png"
                  alt=""
                />
              </span>
            </div>
            <div className="nav__profileIcons" onClick={logoutHandler}>
              <div className="test">
                <img
                  className="nav__profileIcon"
                  src="https://img.icons8.com/?size=25&id=dJ1Prw5a5mj4&format=png"
                  alt=""
                />
                <h3>Log out</h3>
              </div>
              <span>
                <img
                  src="https://img.icons8.com/?size=25&id=7849&format=png"
                  alt=""
                />
              </span>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Nav;
