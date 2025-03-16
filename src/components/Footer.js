import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
        <div className="row px-xl-5 pt-5 justify-content-center text-center">
          <div className="col-lg-6 col-md-12 mb-5">
            {/* Logo */}
            <Link href="/" className="text-decoration-none">
                    <h1 class="mb-4 display-5 font-weight-semi-bold"><span class="text-primary font-weight-bold border border-white px-3 mr-1">Book</span>Zone</h1>
                </Link>

            {/* Description */}
            <p className="mt-3">
             <h3>Find your next great read—classics, bestsellers, and more!</h3> 
            </p>
          </div>
        </div>

        {/* Contact Info
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8 mb-5 text-start">
            <div className="d-flex flex-column ml-auto">
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-custom mr-3"></i>Kuleshwor-14, Kathmandu, Nepal
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-custom mr-3"></i>readmorenepal@gmail.com
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt text-custom mr-3"></i>9801156663 / 9849022243
              </p>
            </div>
          </div>
        </div> */}

        {/* Footer Bottom Section */}
        <div className="row border-top border-light mx-xl-5 py-4 text-center">
          <div className="col-md-6">
            <p className="mb-md-0 text-dark">
              Copyright &copy; <Link className="text-dark font-weight-semi-bold" to="/">ReadMore</Link>. All Rights Reserved
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/img/payments.png" alt="Payment Methods" style={{ maxWidth: '200px', height: 'auto' }} />
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
}