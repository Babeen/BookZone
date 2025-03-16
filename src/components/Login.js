import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center  px-3">
      <div className="container" style={{ maxWidth: "400px" }}>
        <form name="sentMessage" id="loginForm" noValidate="novalidate">
          <h3 className="text-center mb-4 fw-bold">Login</h3>
          <div className="form-group mb-3">
            <label className="text-capitalize fw-bold">
              Email address<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control px-3 py-2"
              id="email"
              placeholder="Your Email"
              required="required"
              data-validation-required-message="Please enter your email"
            />
          </div>
          <div className="form-group mb-3">
            <label className="text-capitalize fw-bold">
              Password <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              className="form-control px-3 py-2"
              id="password"
              placeholder="Password"
              required="required"
              data-validation-required-message="Please enter password"
            />
          </div>
          <div className="mb-3">
            <button
              className="btn btn-primary w-100 text-white py-2"
              type="submit"
              id="btnLogin"
            >
              LOGIN
            </button>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="ms-1">Remember me</label>
            </div>
            <Link to="#" className="text-danger">Lost your password?</Link>
          </div>
          <div className="mt-3 text-center">
            <Link to="Signup" className="fw-bold">Create Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
