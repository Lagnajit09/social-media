import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import { Avatar } from "@mui/material";
import Post from "./Post";
import { db } from "../firebase";
import UserConext from "../store/user-context";

function Profile(props) {
  const ctx = useContext(UserConext);

  const [userposts, setUserposts] = useState([]);
  const [editClicked, setEditClicked] = useState(false);
  const [uname, setUname] = useState(props.username);
  const [bio, setBio] = useState(props.userbio);
  // const [bioChanged, setBioChanged] = useState(false);
  // const [updateImg, setUpdateImg] = useState(null);

  useEffect(() => {
    setUserposts(
      ctx.posts.filter(({ id, post }) => {
        return props.userID === post.userID;
      })
    );
  }, [ctx, props]);

  const editClickHandler = () => {
    setEditClicked(true);
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  };

  const updateClickHandler = () => {
    /*
    // const uploadTask = storage.ref(`images/${updateImg.name}`).put(updateImg);
    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {},
    //   (error) => {
    //     //error function...
    //     console.log(error);
    //     alert(error.message);
    //   },
    //   () => {
    //     //upload function
    //     storage
    //       .ref("images")
    //       .child(updateImg.name)
    //       .getDownloadURL()
    //       .then((url) => {
    bioChanged ? (
      db.collection("users").doc(props.docID).update({
        userbio: bio,
      })
    ) : (
      <div />
    );
    //       });
    //   }
    // ); ------------------ */

    setEditClicked(false);
    window.onscroll = function () {};
    setTimeout(() => {
      document.getElementById("userProfile").click();
    }, 1000);
  };

  // const handleImgChange = (e) => {
  //   if (e.target.files[0]) {
  //     setUpdateImg(e.target.files[0]);
  //   }
  // };

  return (
    <div>
      {editClicked && (
        <div className="update__profile">
          <button
            className="cancel__update"
            onClick={() => {
              setEditClicked(false);
              window.onscroll = function () {};
            }}
          >
            <img
              src="https://img.icons8.com/?size=18&id=8112&format=png"
              alt=""
            />
          </button>
          <input
            type="file"
            className="update__img"
            id="update__img"
            // onChange={handleImgChange}
          />
          <label for="update__img">
            <Avatar
              className="userimg"
              alt={props.username}
              src={props.username}
            />
          </label>
          <input
            className="update__info"
            type="text"
            value={uname}
            placeholder="Usernme"
            onChange={(e) => {
              setUname(e.target.value);
            }}
          />
          <input
            className="update__info"
            type="text"
            placeholder="Bio"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
          <button className="update__btn" onClick={updateClickHandler}>
            Update
          </button>
        </div>
      )}
      <div className="update__container"></div>
      <div className="user__profile">
        <div className="profileheader">
          <Avatar
            className="profileheader__left"
            alt={props.username}
            src={props.userimg}
          />
          <div className="profileheader__right">
            <div className="profile__details">
              <h1 className="profile__username">{props.username}</h1>
              {props.user.displayName === props.username ? (
                <button className="edit__profile" onClick={editClickHandler}>
                  <img
                    src="https://img.icons8.com/?size=25&id=111452&format=png"
                    alt=""
                  />
                </button>
              ) : (
                <div />
              )}
            </div>
            <div className="profile__details">
              {userposts.length === 1 ? (
                <p>
                  <strong>1</strong> post
                </p>
              ) : (
                <p>
                  <strong>{userposts.length}</strong> posts
                </p>
              )}
              <p>
                <strong>0</strong> followers
              </p>
              <p>
                <strong>0</strong> following
              </p>
            </div>
          </div>
        </div>
        <div className="profile__bio">
          <p>{props.userbio}</p>
        </div>
        <div className="profile__posts">
          <h1>POSTS</h1>
          {userposts.map(({ id, post }) => (
            <Post
              id={id}
              postID={id}
              user={props.user}
              currentUser={props.userProfile}
              userProfile={props.userProfile}
              username={post.username}
              caption={post.caption}
              img={post.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
