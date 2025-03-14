import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const books = [
    { id: 1, img: './assets/img/book1.jpg', name: 'Book-1', price: 150 },
    { id: 2, img: './assets/img/book2.jpg', name: 'book-2', price: 150 },
    { id: 3, img: './assets/img/book3.jpg', name: 'book-3', price: 150 },
    { id: 4, img: './assets/img/book4.jpg', name: 'book-4', price: 150 },
    { id: 5, img: './assets/img/book5.jpg', name: 'book-5', price: 150 },
  ];

  return (
    <>
      {/* Cart Start */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-bordered text-center mb-0">
              <thead className="bg-secondary text-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {books.map((book) => (
                  <tr key={book.id}>
                    <td className="align-middle">
                      <img src={book.img} alt="Product" style={{ width: 50 }} /> {book.name}
                    </td>
                    <td className="align-middle">Rs.{book.price}</td>
                    <td className="align-middle">
                      <div className="input-group quantity mx-auto" style={{ width: 100 }}>
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-custom btn-minus">
                            <i className="fa fa-minus text-custom"></i>
                          </button>
                        </div>
                        <input type="text" className="form-control form-control-sm bg-secondary text-center" defaultValue="1" />
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-custom btn-plus">
                            <i className="fa fa-plus text-custom"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">Rs.{book.price}</td>
                    <td className="align-middle">
                      <button className="btn btn-sm btn-custom">
                        <i className="fa fa-times text-custom"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-lg-4">

            <div className="card border-secondary mb-5">
              <div className="card-header bg-secondary border-0">
                <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3 pt-1">
                  <h6 className="font-weight-medium">Subtotal</h6>
                  <h6 className="font-weight-medium">Rs.{books.reduce((sum, p) => sum + p.price, 0)}</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">Rs.10</h6>
                </div>
              </div>
              <div className="card-footer border-secondary bg-transparent">
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Total</h5>
                  <h5 className="font-weight-bold">Rs.{books.reduce((sum, p) => sum + p.price, 0) + 10}</h5>
                </div>
                <Link to="/Checkout">
                    <button className="btn text-white btn-block btn-custom my-3 py-3" style={{ backgroundColor: '#fc6001' }}>Proceed To Checkout</button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cart End */}
    </>
  );
}
