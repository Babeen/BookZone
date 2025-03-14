import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS

export default function Sidebar() {
  useEffect(() => {
    // Ensure Bootstrap dropdown works in React
    const dropdownElements = document.querySelectorAll(".dropdown-toggle");
    dropdownElements.forEach((dropdown) => {
      new window.bootstrap.Dropdown(dropdown);
    });
  }, []);

  return (
    <div className="col-lg-3 d-none d-lg-block">
      <Link
        className="btn shadow-none d-flex align-items-center justify-content-between bg- text-white w-100"
        data-bs-toggle="collapse"
        to="#navbar-vertical"
        style={{ height: 65, marginTop: -1, padding: "0 30px", background: "#fc6001" }}
      >
        <h6 className="m-0">Book Categories</h6>
        <i className="fa fa-angle-down text-dark"></i>
      </Link>

      <nav
        className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
        id="navbar-vertical"
      >
        <div className="navbar-nav w-100 overflow-hidden" style={{ height: 410 }}>
          <div className="nav-item dropdown">
            {/* Added dropdown-toggle class to activate Bootstrap dropdown */}

            <Link to="/All-books" className="nav-item nav-link">All Books</Link>
            <Link to="/New-arrival" className="nav-item nav-link">New Arrival</Link>
            <Link to="/Most-viewed" className="nav-item nav-link">Most Viewed</Link>
            <Link to="/Popular-books" className="nav-item nav-link">Popoular Books</Link>
            <Link
              to="/#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
             Categories <i className="fa fa-angle-down float-right mt-1"></i>
            </Link>
            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
              <Link to="/Text-books" className="dropdown-item">Text Books</Link>
              <Link to="/Reference-books" className="dropdown-item">Reference Books</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
