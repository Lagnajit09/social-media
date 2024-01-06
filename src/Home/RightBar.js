import React from "react";
import "./RightBar.css";
import { Avatar } from "@mui/material";

function RightBar() {
  return (
    <div className="rightbar">
      <div className="friends">
        <h3>Friends</h3>
        <div className="friend">
          <div className="friend__user">
            <Avatar
              className="friend__avatar"
              alt="username"
              src="https://c4.wallpaperflare.com/wallpaper/106/962/482/death-note-lawliet-l-black-background-simple-wallpaper-preview.jpg"
            />
            <p>L</p>
            <img
              src="https://img.icons8.com/?size=18&id=2sZ0sdlG9kWP&format=png"
              alt=""
            />
          </div>
          <div className="online"></div>
        </div>
        <div className="friend">
          <div className="friend__user">
            <Avatar
              className="friend__avatar"
              alt="username"
              src="https://c4.wallpaperflare.com/wallpaper/93/409/220/anime-death-note-shinigami-ryuk-wallpaper-thumb.jpg"
            />
            <p>shinigami</p>
          </div>
          <div className="online"></div>
        </div>
        <div className="friend">
          <div className="friend__user">
            <Avatar
              className="friend__avatar"
              alt="username"
              src="https://c1.wallpaperflare.com/preview/182/936/1023/hacker-silhouette-hack-anonymous.jpg"
            />
            <p>hacker_tom</p>
          </div>
          <div className="online"></div>
        </div>
        <div className="friend">
          <div className="friend__user">
            <Avatar
              className="friend__avatar"
              alt="username"
              src="https://c4.wallpaperflare.com/wallpaper/439/19/825/sono-bisque-doll-wa-koi-wo-suru-kitagawa-marin-cosplay-hd-wallpaper-preview.jpg"
            />
            <p>scarlett.77</p>
          </div>
          <div className="online"></div>
        </div>
        <div className="friend">
          <div className="friend__user">
            <Avatar
              className="friend__avatar"
              alt="username"
              src="https://c4.wallpaperflare.com/wallpaper/596/276/906/anime-ssss-gridman-akane-shinjou-hd-wallpaper-preview.jpg"
            />
            <p>akane_rin</p>
          </div>
          <div className="online"></div>
        </div>
      </div>
      <div className="suggestions">
        <h3>Suggested for you:</h3>
        <div className="suggestion">
          <div className="friend__user">
            <Avatar
              className="friend__avatar"
              alt="username"
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            />
            <p>Art_World</p>
            <img
              src="https://img.icons8.com/?size=18&id=2sZ0sdlG9kWP&format=png"
              alt=""
            />
          </div>
          <div className="follow">follow</div>
        </div>
        <div className="suggestion">
          <div className="friend__user">
            <Avatar
              className="friend__avatar"
              alt="username"
              src="https://images.unsplash.com/photo-1621768216002-5ac171876625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            />
            <p>Apple Inc.</p>
            <img
              src="https://img.icons8.com/?size=18&id=2sZ0sdlG9kWP&format=png"
              alt=""
            />
          </div>
          <div className="follow">follow</div>
        </div>
        <div className="suggestion">
          <div className="friend__user">
            <Avatar
              className="friend__avatar"
              alt="username"
              src="https://wallpapercave.com/dwp1x/wp9029030.jpg"
            />
            <p>ufotable.Inc.</p>
            <img
              src="https://img.icons8.com/?size=18&id=2sZ0sdlG9kWP&format=png"
              alt=""
            />
          </div>
          <div className="follow">follow</div>
        </div>
        <div className="suggestion">
          <div className="friend__user">
            <Avatar
              className="friend__avatar"
              alt="username"
              src="https://c4.wallpaperflare.com/wallpaper/186/380/857/your-name-sky-stars-kimi-no-na-wa-wallpaper-preview.jpg"
            />
            <p>anime.Official</p>
            <img
              src="https://img.icons8.com/?size=18&id=2sZ0sdlG9kWP&format=png"
              alt=""
            />
          </div>
          <div className="follow">follow</div>
        </div>
        <div className="suggestion">
          <div className="friend__user">
            <Avatar
              className="friend__avatar"
              alt="username"
              src="https://c4.wallpaperflare.com/wallpaper/269/278/550/anime-attack-on-titan-scouting-legion-wings-of-dom-hd-wallpaper-preview.jpg"
            />
            <p>Isayama_Hajime</p>
            <img
              src="https://img.icons8.com/?size=18&id=2sZ0sdlG9kWP&format=png"
              alt=""
            />
          </div>
          <div className="follow">follow</div>
        </div>
        <div className="suggestion">
          <div className="friend__user">
            <Avatar
              className="friend__avatar"
              alt="username"
              src="https://c4.wallpaperflare.com/wallpaper/237/534/454/google-general-atomics-mq-9-reaper-simple-background-logo-wallpaper-preview.jpg"
            />
            <p>Google</p>
            <img
              src="https://img.icons8.com/?size=18&id=2sZ0sdlG9kWP&format=png"
              alt=""
            />
          </div>
          <div className="follow">follow</div>
        </div>
        <div className="suggestion">
          <div className="friend__user">
            <Avatar
              className="friend__avatar"
              alt="username"
              src="https://c4.wallpaperflare.com/wallpaper/535/151/730/minimalism-logo-logo-studio-wallpaper-preview.jpg"
            />
            <p>MARVEL</p>
            <img
              src="https://img.icons8.com/?size=18&id=2sZ0sdlG9kWP&format=png"
              alt=""
            />
          </div>
          <div className="follow">follow</div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
