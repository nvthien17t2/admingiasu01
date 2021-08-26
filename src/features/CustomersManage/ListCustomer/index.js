import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";

import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { GetCustomers, DeleteCustomer } from "../../../api/customersApi";
import CustomerItem from "./ItemCustomer";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Pagination from "../../../components/Pagination";

ListCustomer.propTypes = {};

function ListCustomer(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  // const [subject, setSubject] = useState("All");
  // const [grade, setGrade] = useState("All");
  // const [address, setAddress] = useState("All");
  const [listcustomer, setListcustomer] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(5);

  useEffect(() => {
    GetCustomers(dispatch);
  }, []);

  const customers = useSelector((state) => state.customers.customers);

  useEffect(() => {
    setListcustomer(customers);
  }, [customers]);

  // Get current tutors
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = listcustomer.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //  const checkfilter = (subject, grade, address, customer) => {
  //   let checka = false;
  //   let checkb = false;
  //   let checkc = false;
  //   if (subject == "All") checka = true;
  //   else checka = customer.subject === subject;
  //   if (grade == "All") checkb = true;
  //   else checkb = customer.grade === grade;
  //   if (address == "All") checkc = true;
  //   else checkc = customer.address.toLowerCase().includes(address.toLowerCase());
  //   return checka && checkb && checkc;
  // };

  // const handlefillter = (e) => {
  //   console.log(subject, grade, address);

  //   const listfillter = customers.filter((tutor) =>
  //     checkfilter(subject, grade, address, tutor)
  //   );
  //   console.log(listfillter);
  //   setListcustomer(listfillter);
  // };

  // const handleCustomerEditClick = (customer) => {
  //   console.log("Edit: ", customer);
  //   const editCustomerUrl = `/customeredit/${customer.id}`;
  //   history.push(editCustomerUrl);
  // };

  // const handleCustomerViewClick = (customer) => {
  //   console.log("View: ", customer);
  //   const viewCustomerUrl = `/customerview/${customer.id}`;
  //   history.push(viewCustomerUrl);
  // };

  const handleCustomerRemoveClick = async (customer) => {
    console.log("delete: ", customer);
    await DeleteCustomer(dispatch, customer);
  };

  return (
    <>
    
      <Layout>
        <ToastContainer />
        <h1 className="text-center">List Customer</h1>
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-10">
            <div className="card">
              {/* <div className="card-header">
                <h3 className="card-title">DataTable with default features</h3>
              </div> */}
              {/* /.card-header */}
              <div className="card-body">
                <div
                  id="example1_wrapper"
                  className="dataTables_wrapper dt-bootstrap4"
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      {/* <div className="dataTables_length" id="example1_length">
                        <label>
                          Show{" "}
                          <select
                            name="example1_length"
                            aria-controls="example1"
                            className="custom-select custom-select-sm form-control form-control-sm"
                          >
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                          </select>{" "}
                          entries
                        </label>
                      </div> */}
                      <Link className="btn btn-success" to="/addcustomer">
                        Add Customer
                      </Link>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div id="example1_filter" className="dataTables_filter">
                        <label>
                          Search:
                          <input
                            type="search"
                            className="form-control form-control-sm"
                            placeholder
                            aria-controls="example1"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table
                        id="example1"
                        className="table table-bordered table-striped dataTable dtr-inline"
                        role="grid"
                        aria-describedby="example1_info"
                      >
                        <thead data-test="datatable-head">
                          <tr>
                            <th>id</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phonenumber</th>
                            <th>Role</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody data-test="table-body">
                          {currentCustomers.map((customer) => (
                            <CustomerItem
                              customer={customer}
                              onRemoveClick={handleCustomerRemoveClick}
                              // onEditClick={handleCustomerEditClick}
                              // onViewClick={handleCustomerViewClick}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      {/* <div
                        className="dataTables_info"
                        id="example1_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 10 of 57 entries
                      </div> */}
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="example1_paginate"
                      >
                        <Pagination
                          customersPerPage={customersPerPage}
                          totalCustomers={listcustomer.length}
                          paginate={paginate}
                          currentPage={currentPage}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-body */}
            </div>
          </div>
          <div className="col-md-1" />
        </div>
      </Layout>
    
    </>
  );
}

export default ListCustomer;
