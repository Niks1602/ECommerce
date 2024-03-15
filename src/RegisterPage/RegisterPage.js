import React from "react";

export default function RegisterPage() {
  return (
    <div className="container">
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
      <h6>Forgot Password</h6>
      <h6>Other issues with Sign-In</h6>
      <hr />
      <h6>New to E-Cart ?</h6>
      <button type="button" class="btn btn-outline-dark">
        Register Here
      </button>
    </div>
  );
}
