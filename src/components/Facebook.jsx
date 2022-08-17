import React from "react";
import "../components/Facebook.css";
import Form from "./Form";

function Facebook() {
  return (
    <div>
      <div className="title">
        <h1>facebook</h1>
      </div>
      <div className="container">
        <div className="content">
          <div className="content-1">
            <h3>Create a new account</h3>
            <p>It's quick and easy.</p>
          </div>

          <Form />
          <div className="text-container">
            <p className="text">
              People who use our service may have uploaded your contact
              information to Facebook.{" "}
              <a href="#">Learn more.</a>
            </p>

            <p className="text">
              {" "}
              By clicking Sign Up, you agree to our{" "}
              <a href="#">Terms, Privacy Policy </a>and <a href="#">Cookies </a>
              Policy. You may receive SMS notifications from us and can opt out
              at any time.
            </p>
          </div>
          <div className="btns">
            <div className="btn">
              Sign Up
            </div>
            <p>
            <a href="#">Already have an account?</a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Facebook;
