import "./App.css";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Home from "./Home/Home";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import UserConext from "./store/user-context";

function App() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(true);
  const [home, setHome] = useState(false);
  const [user, setuser] = useState(null);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          profile: doc.data(),
        }))
      );
    });
  }, []);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setuser(authUser);
      } else {
        setuser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  useEffect(() => {
    const loginPageInformation = localStorage.getItem("login");
    const storedUserLoggedInInformation = localStorage.getItem("home");

    if (loginPageInformation === "1") {
      setLogin(true);
      setHome(false);
      setRegister(false);
    }

    if (storedUserLoggedInInformation === "1") {
      setHome(true);
      setRegister(false);
      setLogin(false);
    }
  }, [home, login, register]);

  useEffect(() => {});

  const registerHandler = (username, email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: username,
        });
        db.collection("users").add({
          userID: Date.now() + Math.floor(Math.random() * 100000),
          username: username,
          userimg: "url",
          userbio: "Your bio",
        });
        setuser(authUser);
        setHome(true);
        setLogin(false);
        setRegister(false);
        localStorage.setItem("home", "1");
      })
      .catch((error) => {
        alert(error.message);
        return;
      });
  };

  const loginHandler = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        setuser(authUser);
        setHome(true);
        setLogin(false);
        setRegister(false);
        localStorage.setItem("home", "1");
      })
      .catch((err) => {
        alert(err.message);
        return;
      });
  };

  const loginPageHandler = () => {
    setuser(null);
    setHome(false);
    setLogin(true);
    setRegister(false);
    localStorage.setItem("login", "1");
  };

  const registerPageHandler = () => {
    setuser(null);
    setHome(false);
    setLogin(false);
    setRegister(true);
    localStorage.removeItem("home");
    localStorage.removeItem("login");
    console.log(user);
  };

  // const findCurrUser = () => {
  //   const currentUser = users.filter(({ id, profile }) => {
  //     return user.displayName === profile.username;
  //   });
  //   setCurrUser(currentUser);
  // };

  return (
    <UserConext.Provider
      value={{
        users: users,
        posts: posts,
      }}
    >
      <div className="App">
        {register && (
          <Register
            onRegister={registerHandler}
            onLoginClicked={loginPageHandler}
          />
        )}
        {login && (
          <Login
            onLogin={loginHandler}
            onRegisterClicked={registerPageHandler}
          />
        )}
        {home && <Home onLogOut={registerPageHandler} user={user} />}
      </div>
    </UserConext.Provider>
  );
}

export default App;
