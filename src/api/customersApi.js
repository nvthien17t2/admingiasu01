import axiosClient from "./axiosClient";
import {
  setCustomers,
  newCustomer,
  deleteCustomer,
  editCustomer,
  newCustomerError,
  editCustomerError,
  deleteCustomerError,
  setCustomerError,
} from "../features/CustomersManage/CustomerSlice";

export const GetCustomers = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosClient.get("/admin/user");
    dispatch(setCustomers(data));
    return { data };
  } catch {
    dispatch(setCustomerError());
  }
};

export const GetCustomerById = async (dispatch, customer) => {
  try {
    // api call
    await axiosClient.get(`/admin/user/${customer.id}`);
  } catch {
    console.log("get customerbyid error")
  }
};

export const NewCustomer = async (dispatch, customer) => {
  try {
    // api call
    const { data } = await axiosClient.post("/api/auth/signup", customer);
    dispatch(newCustomer(data));
  } catch {
    dispatch(newCustomerError());
  }
};

export const EditCustomer = async (dispatch, customer) => {
  try {
    // api call
    await axiosClient.put(`/admin/user/${customer.id}`, customer);
    dispatch(editCustomer(customer));
  } catch {
    dispatch(editCustomerError());
  }
};

export const DeleteCustomer = async (dispatch, customer) => {
  try {
    // api call
    await axiosClient.delete(`/admin/user/${customer.id}`);
    dispatch(deleteCustomer(customer));
  } catch {
    dispatch(deleteCustomerError());
  }
};
