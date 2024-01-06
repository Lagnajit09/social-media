import React, { useEffect, useState } from "react";
// import UserConext from "../store/user-context";
import "./Register.css";
import { db } from "../firebase";

function Register(props) {
  // const ctx = useContext(UserConext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setUsers(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(
        email.includes("@") &&
          password.trim().length >= 8 &&
          username &&
          !users.map((user) => user.username).includes(username)
      );
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [username, email, password, users]);

  const validateUsernameHandler = () => {
    if (!username || users.map((user) => user.username).includes(username)) {
      setUsernameIsValid(true);
    }
  };

  const validateEmailHandler = () => {
    if (!email.includes("@")) {
      setEmailIsValid(true);
    }
  };

  const validatePasswordHandler = () => {
    if (!(password.trim().length >= 8)) {
      setPasswordIsValid(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onRegister(username, email, password);
  };

  const loginPagehandler = () => {
    console.log("login btn clicked");
    props.onLoginClicked();
  };

  return (
    <div className="register__div">
      <nav className="mobile__nav">
        <h1 className="nav__logo">l'sBook</h1>
        <button onClick={loginPagehandler}>Login</button>
      </nav>
      <div className="login-container">
        <div className="card">
          <div className="card-left">
            <h1>
              L's.
              <br />
              BOOK
            </h1>
            <p>
              Share your memories. Chat with your friends, Like and Comment on
              their post.
            </p>
            <span>Already have an account?</span>
            <button onClick={loginPagehandler}>Login</button>
          </div>
          <div className="card-right">
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
              <div
                className={`input ${usernameIsValid ? "invalidUsername" : ""}`}
              >
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  onBlur={validateUsernameHandler}
                />
                <p
                  className={`error ${
                    usernameIsValid ? "errorUsernameMsg" : ""
                  }`}
                >
                  {!username && "Username is required."}
                  {users.map((user) => user.username).includes(username) &&
                    "Username already exists."}
                </p>
              </div>
              <div className={`input ${emailIsValid ? "invalidEmail" : ""}`}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  onBlur={validateEmailHandler}
                />
                <p className={`error ${emailIsValid ? "errorEmailMsg" : ""}`}>
                  Please enter a valid email adress.
                </p>
              </div>
              <div
                className={`input ${passwordIsValid ? "invalidPassword" : ""}`}
              >
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  onBlur={validatePasswordHandler}
                />
                <p
                  className={`error ${
                    passwordIsValid ? "errorPasswordMsg" : ""
                  }`}
                >
                  Password must have atleast 8 characters.
                </p>
              </div>
              <button disabled={!formIsValid} type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
