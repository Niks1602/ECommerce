import React, { useState } from "react";
import "./SignUpPage.css";
export default function SignUp(props) {
  const [registerDisplayMode, changeRegisterDisplayMode] = useState("none");
  const [logInDisplayMode, changelogInDisplayMode] = useState("block");

  function displayRegisterPage() {
    changeRegisterDisplayMode("block");
    changelogInDisplayMode("none");
  }

  function displayLogInPage() {
    changeRegisterDisplayMode("none");
    changelogInDisplayMode("block");
  }

  return (
    <div className="Container" style={{ display: props.displayStyle }}>
      <div className="logInContainer" style={{ display: logInDisplayMode }}>
        <h1>Sign In</h1>
        <p>Email or Mobile phone Number.</p>
        <input type="email" className="containerInput" />
        <button type="button" class="btn btn-warning">
          Continue
        </button>
        <hr />
        <p>
          By continuing, you agree to E-Cart's Conditions of Use and Privacy
          Notice.
        </p>

        <h6>Other issues with Sign-In</h6>
        <hr />
        <h6>New to E-Cart ?</h6>
        <button
          type="button"
          class="btn btn-outline-dark"
          onClick={displayRegisterPage}
        >
          Register Here
        </button>
        <h6 style={{ paddingTop: "20px" }} onClick={props.closeFun}>
          Go back to Home
        </h6>
      </div>

      {/**************************/}

      <div
        className="registerPageContainer"
        style={{ display: registerDisplayMode }}
      >
        <h1>Create Account</h1>

        <h6>Your Name</h6>
        <input
          type="email"
          className="containerInput"
          placeholder="First and last Name"
        />

        <h6>Phone Number</h6>
        <input
          type="email"
          className="containerInput"
          placeholder="Phone Number"
        />

        <h6>Password</h6>
        <input
          type="password"
          className="containerInput"
          placeholder="At least 6 characters"
        />
        <p>Passwords must be at least 6 characters.</p>

        <button type="button" class="btn btn-warning">
          Register
        </button>
        <hr />
        <p>
          To verify your number, we will send you a text message with a
          temporary code. Message and data rates may apply.
        </p>
        <hr />
        <h6>Already have an Account</h6>
        <button
          type="button"
          class="btn btn-outline-dark"
          onClick={displayLogInPage}
        >
          Sign In
        </button>
        <h6
          style={{ marginTop: "20px", width: "96px" }}
          onClick={props.closeFun}
        >
          Go back to Home
        </h6>
      </div>
    </div>
  );
}
