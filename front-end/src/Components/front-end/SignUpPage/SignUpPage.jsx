import axios from "axios";
//import "./LoginPage.css";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const nameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  async function handleClick() {
    {
      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          usernameRef.current.value
        )
      ) {
        alert("You have entered an invalid email address!");
        usernameRef.current.focus();
        return;
      }

      await axios
        .post("http://localhost:9000/register", {
          name: nameRef.current.value,
          phoneNumber: phoneNumberRef.current.value,
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        })
        .then((res) => {
          if (res.data.msg == "false") {
            alert("Ten dang nhap da ton tai !");
            passwordRef.current.value = "";
            return;
          }

          alert("Sign up succesful");
          navigate("/LoginPage");
        });
    }
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
                      Please enter your Information!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        ref={nameRef}
                        type="text"
                        id="typeEmail"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeEmail">
                        Name
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        ref={phoneNumberRef}
                        type="number"
                        id="typeEmail"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeEmail">
                        Phone Number
                      </label>
                    </div>

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

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={handleClick}
                    >
                      Sign Up
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
