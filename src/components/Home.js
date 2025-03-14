import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" style={{height: 410}}>
                    <img className="./assets/img-fluid" src="./assets/img/collections.jpg" alt=""/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: 700}}>
                            <h3 className="display-4 text-white font-weight-semi-bold mb-4">CATEGORIES & BOOKS</h3>
                            <Link to="/Book" className="btn btn-light py-2 px-3">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link className="carousel-control-prev" to="#header-carousel" data-slide="prev">
            </Link>
            <Link className="carousel-control-next" to="#header-carousel" data-slide="next">
            </Link>
        </div>

    {/* <!-- Products Start --> */}
    <div className="container-fluid pt-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">New Arrivals</span></h2>
        </div>
        <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src="./assets/img/book1.jpg" alt=""/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Book-1</h6>
                        <div className="d-flex justify-content-center">
                            <h6>Rs.123.00</h6><h6 className="text-muted ml-2"><del>Rs.123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-custom mr-1"></i>View Detail</Link>
                        <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-custom mr-1"></i>Add To Cart</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src="./assets/img/book2.jpg" alt=""/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Book-2</h6>
                        <div className="d-flex justify-content-center">
                            <h6>Rs.123.00</h6><h6 className="text-muted ml-2"><del>Rs.123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-custom mr-1"></i>View Detail</Link>
                        <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-custom mr-1"></i>Add To Cart</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src="./assets/img/book3.jpg" alt=""/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Book-3</h6>
                        <div className="d-flex justify-content-center">
                            <h6>Rs.123.00</h6><h6 className="text-muted ml-2"><del>Rs.123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-custom mr-1"></i>View Detail</Link>
                        <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-custom mr-1"></i>Add To Cart</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="./assets/img-fluid w-100" src="./assets/img/book4.jpg" alt=""/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Book-4</h6>
                        <div className="d-flex justify-content-center">
                            <h6>Rs.123.00</h6><h6 className="text-muted ml-2"><del>Rs.123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-custom mr-1"></i>View Detail</Link>
                        <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-custom mr-1"></i>Add To Cart</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="./assets/img-fluid w-100" src="./assets/img/book5.jpg" alt=""/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Book-5</h6>
                        <div className="d-flex justify-content-center">
                            <h6>Rs.123.00</h6><h6 className="text-muted ml-2"><del>Rs.123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-custom mr-1"></i>View Detail</Link>
                        <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-custom mr-1"></i>Add To Cart</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="./assets/img-fluid w-100" src="./assets/img/book6.jpg" alt=""/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Book-6</h6>
                        <div className="d-flex justify-content-center">
                            <h6>Rs.123.00</h6><h6 className="text-muted ml-2"><del>Rs.123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-custom mr-1"></i>View Detail</Link>
                        <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-custom mr-1"></i>Add To Cart</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="./assets/img-fluid w-100" src="./assets/img/book7.jpg" alt=""/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Book-7</h6>
                        <div className="d-flex justify-content-center">
                            <h6>Rs.123.00</h6><h6 className="text-muted ml-2"><del>Rs.123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-custom mr-1"></i>View Detail</Link>
                        <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-custom mr-1"></i>Add To Cart</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src="./assets/img/book8.jpg" alt=""/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Book-8</h6>
                        <div className="d-flex justify-content-center">
                            <h6>Rs.123.00</h6><h6 className="text-muted ml-2"><del>Rs.123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-custom mr-1"></i>View Detail</Link>
                        <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-custom mr-1"></i>Add To Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Products End --> */}

    </>
  )
}
