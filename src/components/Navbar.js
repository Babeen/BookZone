import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        {/* <!-- Navbar Start --> */}
        <div className="container-fluid mb-5">
            <div className="row border-top px-xl-5">
                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <Link to="" className="text-decoration-none d-block d-lg-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-custom font-weight-bold border px-3 mr-1">Book</span>Zone</h1>
                        </Link> 
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <Link to="/Book" className="nav-item nav-link">Book</Link>
                                <Link to="/Contact" className="nav-item nav-link">Contact</Link>
                            </div>
                            <div className="navbar-nav ml-auto py-0">
                                <Link to="/Login" className="nav-item nav-link">Login</Link>
                                <Link to="" className="nav-item nav-link">Register</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        {/* <!-- Navbar End --> */}
    </>
  )
}
