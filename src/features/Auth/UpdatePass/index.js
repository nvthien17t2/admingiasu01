import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UpdatePassword } from "../../../api/authenticationAPI";
import { useFormik } from "formik";
import * as Yup from "yup";
import Layout from "../../../components/Layout";

UpdatePass.propTypes = {};
function UpdatePass(props) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      reNewPassword: "",
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string()
        .min(6, "Mật khẩu phải lớn hơn 6 kí tự")
        .required("Required"),
      newPassword: Yup.string()
        .min(6, "Mật khẩu phải lớn hơn 6 kí tự")
        .required("Required"),
      reNewPassword: Yup.string()
        .min(6, "Mật khẩu phải lớn hơn 6 kí tự")
        .oneOf([Yup.ref("newPassword")], "Password's not match")
        .required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const send = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      };
      // alert(JSON.stringify(send));
      await UpdatePassword(dispatch, send);
      resetForm({});
    },
  });

  return (
    <>
      <ToastContainer />
      <Layout>
        <div className="row container-fluid">
          <div className="col-md-3"></div>
          <div className="col-md-5">
            <div className="card card-primary" >
              <div className="card-header">
                <h3 className="card-title">CHANGE PASSWORD</h3>
              </div>
              {/* /.card-header */}
              {/* form start */}
              <form role="form" onSubmit={formik.handleSubmit}>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Password</label>
                    <input
                      type="password"
                      placeholder="Old password"
                      className="form-control"
                      name="oldPassword"
                      required
                      value={formik.values.oldPassword}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.oldPassword &&
                      formik.touched.oldPassword && (
                        <p style={{ color: "red", fontSize: "14px" }}>
                          {formik.errors.oldPassword}
                        </p>
                      )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input
                      type="password"
                      placeholder="New password"
                      className="form-control"
                      name="newPassword"
                      required
                      value={formik.values.newPassword}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.newPassword &&
                      formik.touched.newPassword && (
                        <p style={{ color: "red", fontSize: "14px" }}>
                          {formik.errors.newPassword}
                        </p>
                      )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Phonenumber</label>
                    <input
                      type="password"
                      placeholder="Repeat new password"
                      className="form-control"
                      name="reNewPassword"
                      required
                      value={formik.values.reNewPassword}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.reNewPassword &&
                      formik.touched.reNewPassword && (
                        <p style={{ color: "red", fontSize: "14px" }}>
                          {formik.errors.reNewPassword}
                        </p>
                      )}
                  </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default UpdatePass;
