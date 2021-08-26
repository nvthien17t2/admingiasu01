import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout = (props) => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Sidebar />
        {/* <!-- Main content --> */}
        <div class="content-wrapper">
          <section className="content">
            <div className="container-fluid" style={{ paddingTop: "20px" }}>
            </div>
          </section>
          {props.children}
        </div>

        <Footer />
        {/* <!-- Control Sidebar --> */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* <!-- Control sidebar content goes here --> */}
        </aside>
      </div>
    </>
  );
};

export default Layout;
