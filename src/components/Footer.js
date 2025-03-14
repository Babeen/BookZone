import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
        <div className="row px-xl-5 pt-5 justify-content-center text-center">
          <div className="col-lg-6 col-md-12 mb-5">
            {/* Logo */}
            <Link to="/" className="text-decoration-none d-flex justify-content-center">
              <img src="/assets/img/readmore.png" alt="Read More" style={{ width: '150px', height: 'auto' }} />
            </Link>

            {/* Description */}
            <p className="mt-3">
              Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.
            </p>

            {/* Contact Info */}
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-custom mr-2"></i> Kuleshwor-14, Kathmandu, Nepal
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope text-custom mr-2"></i> readmorenepal@gmail.com
            </p>
            <p className="mb-0">
              <i className="fa fa-phone-alt text-custom mr-2"></i> 9801156663 / 9849022243
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="row border-top border-light mx-xl-5 py-4 text-center">
          <div className="col-md-6">
            <p className="mb-md-0 text-dark">
              Copyright &copy; <Link className="text-dark font-weight-semi-bold" to="/">ReadMore</Link>.  All Rights Reserved
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/img/payments.png" alt="Payment Methods" style={{ maxWidth: '200px', height: 'auto' }} />
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  );
}
