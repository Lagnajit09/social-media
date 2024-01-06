import React, { useState, useContext } from "react";
import Nav from "./navbar/Nav";
import NavLeft from "./navbar/NavLeft";
import "./Home.css";
import Post from "./Post";
import RightBar from "./RightBar";
import firebase from "firebase/compat/app";
import { db, storage } from "../firebase";
import Stories from "./Stories";
import NavBottom from "./navbar/NavBottom";
import Profile from "./Profile";
import UserConext from "../store/user-context";

function Home(props) {
  const ctx = useContext(UserConext);

  // const [posts, setPosts] = useState([]);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const [currentUserProfile, setCurrentUserProfile] = useState([]);
  // const [userProfiles, setUserProfiles] = useState([]);

  // useEffect(() => {
  //   db.collection("posts")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) => {
  //       setPosts(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           post: doc.data(),
  //         }))
  //       );
  //     });
  // }, []);

  // useEffect(() => {
  //   db.collection("users").onSnapshot((snapshot) => {
  //     setUserProfiles(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         profile: doc.data(),
  //       }))
  //     );
  //   });
  // }, []);

  // useEffect(() => {
  //   setCurrentUserProfile(
  //     userProfiles.filter(({ id, profile }) => {
  //       return props.user.displayName === profile.username;
  //     })
  //   );
  // }, [userProfiles, props.user]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const currentUser = ctx.users.filter(({ id, profile }) => {
      return props.user.displayName === profile.username;
    });

    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        //error function...
        console.log(error);
        alert(error.message);
      },
      () => {
        //upload function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            //post image inside db
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              postID: Date.now() + Math.floor(Math.random() * 100000),
              caption: caption,
              img: url,
              userID: currentUser[0].profile.userID,
            });
            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  const handleProfile = () => {
    setShowProfile(true);
    const currentUser = ctx.users.filter(({ id, profile }) => {
      return props.user.displayName === profile.username;
    });
    setCurrentUserProfile(currentUser);
    console.log(currentUserProfile[0]);
  };

  const handleHome = () => {
    setShowProfile(false);
    window.onscroll = function () {};
  };

  const logOutHandler = () => {
    props.onLogOut();
  };

  const searchedProfileHandler = (data) => {
    setShowProfile(true);
    setCurrentUserProfile(
      ctx.users.filter(({ id, profile }) => {
        return data === profile.username;
      })
    );
  };

  return (
    <div>
      <Nav
        username={props.user}
        onLogout={logOutHandler}
        profileClicked={handleProfile}
        searchedProfile={searchedProfileHandler}
      />
      <NavLeft
        username={props.user}
        profileClicked={handleProfile}
        homeClicked={handleHome}
      />
      <NavBottom profileClicked={handleProfile} homeClicked={handleHome} />
      {showProfile &&
        currentUserProfile.map(({ id, profile }) => (
          <Profile
            key={id}
            docID={id}
            userID={profile.userID}
            user={props.user}
            userProfile={currentUserProfile}
            username={profile.username}
            userimg={profile.userimg}
            userbio={profile.userbio}
            // posts={posts}
          />
        ))}
      {!showProfile && <RightBar />}
      {!showProfile && (
        <div className="home__container">
          <Stories />
          {/* new post section */}
          <div className="new__post">
            <h1>Create a new post...</h1>
            <progress
              className="imageupload__progress"
              value={progress}
              max="100"
            />
            <div>
              <input
                className="post__caption"
                type="text"
                placeholder="enter a caption..."
                onChange={(event) => {
                  setCaption(event.target.value);
                }}
              />
              <div className="post__opt">
                <div className="post__image">
                  <input
                    id="img__input"
                    type="file"
                    placeholder="Image"
                    onChange={handleChange}
                  />
                  <img
                    src="https://img.icons8.com/?size=40&id=80584&format=png"
                    alt=""
                  />
                  <label for="img__input">Select file</label>
                </div>
                <button
                  disabled={!image}
                  className="post__btn"
                  type="submit"
                  onClick={handleUpload}
                >
                  POST
                </button>
              </div>
            </div>
          </div>
          {/* posts section */}
          {ctx.posts.map(({ id, post }) => (
            <Post
              key={id}
              postID={id}
              postUser={post.userID}
              user={props.user}
              currentUser={ctx.users.filter(({ id, profile }) => {
                return props.user.displayName === profile.username;
              })}
              userProfile={ctx.users.filter(({ id, profile }) => {
                return profile.userID === post.userID;
              })}
              caption={post.caption}
              img={post.img}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
