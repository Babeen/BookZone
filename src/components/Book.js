import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Book() {
  // Sample books array (replace with actual book data from an API if needed)
  const books = [...Array(20)].map((_, index) => ({
    id: index + 1, 
    title: `Book Title ${index + 1}`,
    price: 123.0,
    image: `./assets/img/book${(index % 8) + 1}.jpg`,
  }));

  // Pagination state
  const booksPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(books.length / booksPerPage);

  // Get books for the current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Handle page change
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="container-fluid pt-5 d-flex">
        {/* Sidebar */}

        {/* Content aligned to the right */}
        <div className="row w-100">
          <div className="col-lg-9 col-md-12 ml-auto">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <form action="">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-custom">
                          <i className="fa fa-search"></i>
                        </span>
                      </div>
                    </div>
                  </form>
                  <div className="dropdown ml-4"></div>
                </div>
              </div>

              {/* Book items */}
              {currentBooks.map((book) => (
                <div key={book.id} className="col-lg-4 col-md-6 col-sm-12 pb-1">
                  <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                      <img className="img-fluid w-100" src={book.image} alt="Book" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">{book.title}</h6>
                      <div className="d-flex justify-content-center">
                        <h6>Rs.{book.price.toFixed(2)}</h6>
                        <h6 className="text-muted ml-2">
                          <del>Rs.{(book.price + 20).toFixed(2)}</del>
                        </h6>
                      </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                      <Link to="" className="btn btn-sm text-dark p-0">
                        <i className="fas fa-eye text-custom mr-1"></i>View Detail
                      </Link>
                      <Link to="" className="btn btn-sm text-dark p-0">
                        <i className="fas fa-shopping-cart text-custom mr-1"></i>Add To Cart
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="col-12 pb-1">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center mb-3">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                      <Link
                        className="page-link"
                        to="#"
                        onClick={() => handlePageChange(currentPage - 1)}
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </Link>
                    </li>

                    {[...Array(totalPages)].map((_, index) => (
                      <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                        <Link
                          className="page-link"
                          to="#"
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </Link>
                      </li>
                    ))}

                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                      <Link
                        className="page-link"
                        to="#"
                        onClick={() => handlePageChange(currentPage + 1)}
                        aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
