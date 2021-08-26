import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { SignIn } from "../../../api/authenticationAPI";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

Login.propTypes = {};

function Login(props) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const adminLogin = (e) => {
    e.preventDefault();
    const admin = {
      username,
      password,
    };

    SignIn(dispatch, admin);
  };
  return (
    <>
    <ToastContainer />
      <div className="hold-transition register-page">
        <div className="register-box">
          {/* <div className="register-logo">
            <a href="../../index2.html">
              <b>Admin</b>LTE
            </a>
          </div> */}
          <div className="card">
            <div className="card-body register-card-body" style={{ borderRadius:"16px"}}>
              <p className="login-box-msg h2">LOGIN</p>

              <form action="" method="post" onSubmit={adminLogin}>
                <div className=" mb-3">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className=" mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="row">
                  {/* <div className="col-8">
                      <div className="icheck-primary">

                        <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                        <label htmlFor="agreeTerms">
                          I agree to the <a href="#">terms</a>
                        </label>
                      </div>
                    </div> */}

                  <div className="col">
                    <button type="submit" className="btn btn-success btn-block">
                      Login
                    </button>
                  </div>
                </div>
              </form>

           
              {/* <Link to="/register" className="text-center">
                I don't have account
              </Link> */}
            </div>
            {/* /.form-box */}
          </div>
          {/* /.card */}
        </div>
        {/* /.register-box */}
      </div>
    </>
  );
}

export default Login;
