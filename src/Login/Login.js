import React, { useEffect, useState } from "react";
import "./Login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(email.includes("@") && password.trim().length > 8);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [email, password]);

  const validateEmailHandler = () => {
    if (!email.includes("@")) {
      setEmailIsValid(true);
    }
  };

  const validatePasswordHandler = () => {
    if (!(password.trim().length > 8)) {
      setPasswordIsValid(true);
    }
  };

  const loginHandler = (e) => {
    console.log("login form valid.... calling login page");
    e.preventDefault();
    props.onLogin(email, password);
  };

  const showRegisterPage = () => {
    console.log("register btn clicked");
    props.onRegisterClicked();
  };

  return (
    <div className="register__div">
      <nav className="mobile__nav">
        <h1 className="nav__logo">l'sBook</h1>
        <button onClick={showRegisterPage}>Register</button>
      </nav>
      <div className="login-container">
        <div className="card">
          <div className="card-left">
            <h1>
              HELLO
              <br />
              WORLD
            </h1>
            <p>
              Upload images and videos online to share with your friends across
              the world. Communicate with new people everyday.
            </p>
            <span>Don't have an account?</span>
            <button onClick={showRegisterPage}>Register</button>
          </div>
          <div className="card-right">
            <h1>Login</h1>
            <form>
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
                  {" "}
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
                  {" "}
                  Password must have atleast 8 characters.
                </p>
              </div>
              <button
                disabled={!email && !password}
                type="submit"
                onClick={loginHandler}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
