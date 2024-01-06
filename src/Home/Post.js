import React, { useContext, useEffect, useState } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import firebase from "firebase/compat/app";
import { db } from "../firebase";
import UserConext from "../store/user-context";

function Post(props) {
  const ctx = useContext(UserConext);

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [deleteClicked, setDeleteClicked] = useState(false);
  // const [username, setUsername] = useState("");

  // useEffect(() => {
  //   // const { id, profile } = props.userProfile;
  //   // setUsername(profile.username);
  //   console.log(props.userProfile[0].username);
  // }, [props]);

  useEffect(() => {
    let unsubscribe;
    if (props.postID) {
      unsubscribe = db
        .collection("posts")
        .doc(props.postID)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              comment: doc.data(),
            }))
          );
        });
    }

    return () => {
      unsubscribe();
    };
  }, [props.postID]);

  const getCurrentUser = () => {
    const loggedInUser = ctx.users.filter(({ id, profile }) => {
      return props.user.displayName === profile.username;
    });
    return loggedInUser[0].profile.userID;
  };

  const postComment = (event) => {
    event.preventDefault();
    db.collection("posts").doc(props.postID).collection("comments").add({
      text: comment,
      userID: getCurrentUser(),
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  const deletePostHandler = () => {
    setDeleteClicked(true);
    // Get the current page scroll position
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  };
  const deletePost = () => {
    db.collection("posts").doc(props.postID).delete();
    setDeleteClicked(false);
    window.onscroll = function () {};
  };
  const cancelDelete = () => {
    setDeleteClicked(false);
    window.onscroll = function () {};
  };

  const getCommentUserName = (commentUserID) => {
    const commentUser = ctx.users.filter(({ id, profile }) => {
      return commentUserID === profile.userID;
    });
    return commentUser[0].profile.username;
  };

  return (
    <div>
      {deleteClicked && (
        <div className="delete__post">
          <div className="delete__text">
            <h1>Delete Post?</h1>
            <p>Are you sure you want to delete this post?</p>
          </div>
          <button className="delete__btn" onClick={deletePost}>
            Delete
          </button>
          <button className="cancel__btn" onClick={cancelDelete}>
            Cancel
          </button>
        </div>
      )}
      <div className="post">
        <div className="post__header">
          <div className="postheader__name">
            <Avatar
              className="post__avatar"
              alt={props.userProfile[0].profile.username}
              src="abc.jpg"
            />
            <h1 className="profile__username">
              {props.userProfile[0].profile.username}
            </h1>
          </div>
          {props.userProfile[0].profile.username === props.user.displayName && (
            <button className="delete" onClick={deletePostHandler}>
              <img
                src="https://img.icons8.com/?size=20&id=67884&format=png"
                alt=""
              />
            </button>
          )}
        </div>

        <div className="post__caption">
          <p>{props.caption}</p>
        </div>

        <img className="post__img" src={props.img} alt="" />

        <div className="post__comments">
          <p>
            <strong>Comments:</strong>
          </p>
          {comments.map(({ id, comment }) => (
            <div className="comment">
              <p>
                <strong>{getCommentUserName(comment.userID)}:</strong>{" "}
                {comment.text}
              </p>
              {/* {comment.username === props.user.displayName && (
                <button className="delete" onClick={deleteCommentHandler}>
                  <img
                    src="https://img.icons8.com/?size=20&id=67884&format=png"
                    alt=""
                  />
                </button>
              )} */}
            </div>
          ))}
        </div>

        {props.user && (
          <form className="post__commentBox">
            <input
              className="post__input"
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              disabled={!comment}
              className="post__button"
              type="submit"
              onClick={postComment}
            >
              Post
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Post;
