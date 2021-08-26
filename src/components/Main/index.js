import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../Layout";

Main.propTypes = {};

function Main(props) {
  const dispatch = useDispatch();

  return (
    <>
      <ToastContainer />
      <Layout>
     

      </Layout>
    </>
  );
}

export default Main;
