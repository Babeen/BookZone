import React from 'react';

export default function Register() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 px-3">
      <div className="container" style={{ maxWidth: "400px" }}>
        <form name="registerForm" id="registerForm" noValidate="novalidate">
          <h3 className="text-center mb-4 fw-bold">Create Account</h3>

          {/* Username */}
          <div className="form-group mb-3">
            <label className="fw-bold">Username <span className="text-danger">*</span></label>
            <input
              type="text"
              className="form-control px-3 py-2"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group mb-3">
            <label className="fw-bold">Email Address <span className="text-danger">*</span></label>
            <input
              type="email"
              className="form-control px-3 py-2"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="form-group mb-3">
            <label className="fw-bold">Password <span className="text-danger">*</span></label>
            <input
              type="password"
              className="form-control px-3 py-2"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Address */}
          <div className="form-group mb-3">
            <label className="fw-bold">Address</label>
            <input
              type="text"
              className="form-control px-3 py-2"
              id="address"
              placeholder="Enter your address"
            />
          </div>

          {/* Phone */}
          <div className="form-group mb-3">
            <label className="fw-bold">Phone Number <span className="text-danger">*</span></label>
            <input
              type="tel"
              className="form-control px-3 py-2"
              id="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="form-group mb-3">
            <label className="fw-bold">Date of Birth</label>
            <input
              type="date"
              className="form-control px-3 py-2"
              id="dob"
            />
          </div>

          {/* Submit Button */}
          <div className="mb-3 ">
            <button
              className="btn btn-primary w-100 text-white py-2"
              type="submit"
              id="btnRegister"
            >
              REGISTER
            </button>
          </div>

          {/* Already have an account? */}
          <div className="mt-3 text-center">
            <p>Already have an account? <a href="Login" className="fw-bold">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
