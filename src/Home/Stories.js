import { Avatar } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./Stories.css";

function Stories() {
  const [isClicked, setIsClicked] = useState(false);
  let uploadRef = useRef();

  const showStoryUploadPage = () => {
    setIsClicked(!isClicked);
    // Get the current page scroll position
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  };

  useEffect(() => {
    let handler = (e) => {
      if (!uploadRef.current.contains(e.target)) {
        setIsClicked(false);
        window.onscroll = function () {};
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div ref={uploadRef}>
      {isClicked && (
        <div className="story__upload" id="story__upload">
          <input type="file" id="story__img" />
          <label for="story__img">
            <img
              src="https://img.icons8.com/?size=30&id=57212&format=png"
              alt=""
            />
            Add Image
          </label>
          <div className="story__caption">
            <input type="text" placeholder="Add a caption..." />
            <button>Add</button>
          </div>
        </div>
      )}
      <div className="stories">
        <div className="story">
          <button className="add__story" onClick={showStoryUploadPage}>
            +
          </button>
          <p className="user__name">Add to Story</p>
        </div>
        <div className="story">
          <Avatar
            className="user__image"
            alt="username"
            src="https://c4.wallpaperflare.com/wallpaper/106/962/482/death-note-lawliet-l-black-background-simple-wallpaper-preview.jpg"
          />
          <p className="user__name">L</p>
        </div>
        <div className="story">
          <Avatar
            className="user__image"
            alt="username"
            src="https://img.freepik.com/premium-photo/cute-anime-girl-kawaiistyle-cartoon-anime-style-girl-ai-generated_755721-14204.jpg?size=626&ext=jpg&ga=GA1.1.553828089.1687008485&semt=ais"
          />
          <p className="user__name">smiley.me</p>
        </div>
        <div className="story">
          <Avatar
            className="user__image"
            alt="username"
            src="https://c4.wallpaperflare.com/wallpaper/439/19/825/sono-bisque-doll-wa-koi-wo-suru-kitagawa-marin-cosplay-hd-wallpaper-preview.jpg"
          />
          <p className="user__name">scarlett.77</p>
        </div>
        <div className="story">
          <Avatar
            className="user__image"
            alt="username"
            src="https://img.freepik.com/free-photo/galaxy-nature-aesthetic-background-starry-sky-mountain-remixed-media_53876-126761.jpg?size=626&ext=jpg&ga=GA1.1.553828089.1687008485&semt=sph"
          />
          <p className="user__name">Nyx</p>
        </div>
        <div className="story">
          <Avatar
            className="user__image"
            alt="username"
            src="https://img.freepik.com/free-photo/closeup-multicolored-wooden-pencils-drawing-isolated_169016-19939.jpg?size=626&ext=jpg&ga=GA1.1.553828089.1687008485&semt=sph"
          />
          <p className="user__name">sketchify99</p>
        </div>
        <div className="story">
          <Avatar
            className="user__image"
            alt="username"
            src="https://img.freepik.com/premium-photo/digital-artwork_456341-2249.jpg?size=626&ext=jpg&ga=GA1.1.553828089.1687008485&semt=sph"
          />
          <p className="user__name">light.yagami</p>
        </div>
        <div className="story">
          <Avatar
            className="user__image"
            alt="username"
            src="https://img.freepik.com/free-photo/red-black-brush-stroke-banner-background-perfect-canva_1361-3597.jpg?size=626&ext=jpg&ga=GA1.2.553828089.1687008485&semt=sph"
          />
          <p className="user__name">shin</p>
        </div>
      </div>
    </div>
  );
}

export default Stories;
