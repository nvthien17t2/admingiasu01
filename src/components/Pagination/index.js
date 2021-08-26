import React from "react";

const Pagination = ({ customersPerPage, totalCustomers, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCustomers / customersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage == number
                ? "paginate_button page-item active"
                : "paginate_button page-item "
            }
          >
            <a
              aria-controls="example1"
              data-dt-idx={1}
              tabIndex={0}
              className="page-link"
              onClick={() => paginate(number)}
              href="#"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
