import React from "react";
import UserConext from "./user-context";

function UserProvider(props) {
  const findCurrentUser = (users) => {};

  const userContext = {
    users: [],
    currentUser: [],
    posts: [],
    currentUserHandler: findCurrentUser,
  };

  return (
    <UserConext.Provider value={userContext}>
      {props.children}
    </UserConext.Provider>
  );
}

export default UserProvider;
