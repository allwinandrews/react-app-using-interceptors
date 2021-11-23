import React, { useContext, Suspense } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthContext from "./store/auth-context";

import Home from "./components/Home";
const Login = React.lazy(() => import("./components/Login"));
const Profile = React.lazy(() => import("./components/Profile"));
const Register = React.lazy(() => import("./components/Register"));
const UserDetails = React.lazy(() => import("./components/UserDetails"));

function App() {
  const authCtx = useContext(AuthContext);

  const logOut = () => {
    authCtx.logout();
  };

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            reqres
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
          </div>

          {authCtx.isLoggedIn ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link" onClick={logOut}>
                  LogOut
                </Link>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/" element={<Navigate to="/home" />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/profile"
              element={
                authCtx.isLoggedIn ? <Profile /> : <Navigate to="/home" />
              }
            />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/user/:userId" element={<UserDetails />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
