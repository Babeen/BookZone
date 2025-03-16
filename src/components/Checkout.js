import React from 'react'

export default function Checkout() {
  return (
    <>
            {/*  Checkout Start  */}
    <div className="container-fluid pt-5">
        <div className="row px-xl-5">
            <div className="col-lg-8">
                <div className="mb-4">
                    <h4 className="font-weight-semi-bold mb-4">Billing Address</h4>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>First Name</label>
                            <input className="form-control" type="text" placeholder=""/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Last Name</label>
                            <input className="form-control" type="text" placeholder=""/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>E-mail</label>
                            <input className="form-control" type="text" placeholder=""/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Mobile No</label>
                            <input className="form-control" type="text" placeholder=""/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Address 1</label>
                            <input className="form-control" type="text" placeholder=""/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Address 2</label>
                            <input className="form-control" type="text" placeholder=""/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>City</label>
                            <input className="form-control" type="text" placeholder=""/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>State</label>
                            <input className="form-control" type="text" placeholder=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card border-secondary mb-5">
                    <div className="card-header bg-secondary border-0">
                        <h4 className="font-weight-semi-bold m-0">Order Total</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="font-weight-medium mb-3">Books</h5>
                        <div className="d-flex justify-content-between">
                            <p>Book Title 1</p>
                            <p>Rs 123</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Book Title 2</p>
                            <p>Rs 123</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Book Title 3</p>
                            <p>Rs 123</p>
                        </div>
                        <hr className="mt-0"/>
                        <div className="d-flex justify-content-between mb-3 pt-1">
                            <h6 className="font-weight-medium">Subtotal</h6>
                            <h6 className="font-weight-medium">Rs 369</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">Shipping</h6>
                            <h6 className="font-weight-medium">Rs 100</h6>
                        </div>
                    </div>
                    <div className="card-footer border-secondary bg-transparent">
                        <div className="d-flex justify-content-between mt-2">
                            <h5 className="font-weight-bold">Total</h5>
                            <h5 className="font-weight-bold">Rs 469</h5>
                        </div>
                    </div>
                </div>
                <div className="card border-secondary mb-5">
                    <div className="card-header bg-secondary border-0">
                        <h4 className="font-weight-semi-bold m-0">Payment</h4>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="payment" id="paypal"/>
                                <label className="custom-control-label" for="paypal">ESewa</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="payment" id="directcheck"/>
                                <label className="custom-control-label" for="directcheck">Khalti</label>
                            </div>
                        </div>
                        <div className="">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="payment" id="banktransfer"/>
                                <label className="custom-control-label" for="banktransfer">Bank Transfer</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer border-secondary bg-transparent">
                        <button className="btn btn-lg btn-block btn-custom font-weight-bold my-3 py-3">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  Checkout End  */}
    </>
  )
}
