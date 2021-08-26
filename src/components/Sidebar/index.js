import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../features/Auth/authenticationSlice";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{backgroundColor:"#a01111"}}>
    {/* <aside className="main-sidebar sidebar-dark-primary elevation-4" > */}

      <NavLink to={"#"} className="brand-link">
        <img
          src="/img/AdminLTELogo.png"
          alt="Avatar"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
        <span className="brand-text font-weight-light">Admin</span>
      </NavLink>
      <div className="sidebar">
        {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Hoàng Long Nhật
            </a>
          </div>
        </div> */}

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <NavLink to={`/home`} className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/listcustomer`} className="nav-link">
                <i class="nav-icon fas fa-users"></i>
                <p>Manage Users</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/listpost`} className="nav-link">
                <i class=" nav-icon fas fa-list-alt"></i>
                <p>Manage Posts</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/updatepass`} className="nav-link">
              <i class=" nav-icon fas fa-unlock-alt"></i>
                <p>Update Password</p>
              </NavLink>
            </li>

            <li className="nav-item">
              <a
                href="/home"
                className="nav-link"
                onClick={() => dispatch(logout())}
              >
                <i className="nav-icon fas fa-sign-out-alt"></i>
                <p>Logout</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
