import axios from "axios";
import "./LoginPage.css";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../../contexts/ProductContext.jsx";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useEffect } from "react";

export default function LoginPage() {
  const AuthContext = useAuthContext();
  const ProductContext = useProductContext();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (ProductContext.cookies.username) {
      navigate("/");
    } else {
      console.log("error");
    }
  }, []);

  //Check Login
  const changeRouteToSignUpPage = () => {
    navigate("/SignUpPage");
  };
  async function handleClick() {
    await axios
      .post("http://localhost:9000/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      })
      .then(() => {
        alert("Log in succesful");
        ProductContext.setCookies("username", usernameRef.current.value);
        ProductContext.setCookies("password", passwordRef.current.value);
        navigate("/");
      });
  }

  return (
    <>
      <section className=" gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        ref={usernameRef}
                        type="email"
                        id="typeEmail"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeEmail">
                        Email
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        ref={passwordRef}
                        type="password"
                        id="typePassword"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typePassword">
                        Password
                      </label>
                    </div>

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={handleClick}
                    >
                      Login
                    </button>

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <a
                        href="#!"
                        className="text-white-50 fw-bold"
                        onClick={changeRouteToSignUpPage}
                      >
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
