import {
  userAuthenticated,
  setLoginError,
  setLoginSuccess,
  setSignupError,
  setSignupSuccess,
  setUpdatePassError,
  setUpdatePassSucess,
} from "../features/Auth/authenticationSlice";

import * as axios from "axios";
import { GetProfile } from "./userApi";
import axiosClient from "./axiosClient";

const axiosInstance = axios.create({
  baseURL: `https://manage-tutor-123.herokuapp.com`,
});

export const SignUp = async (dispatch, credentials) => {
  try {
    // api call
    const { data } = await axiosInstance.post("/api/auth/signup", credentials);

    console.log(data);
    dispatch(setSignupSuccess());
  } catch {
    console.log("Error sign up!");
    dispatch(setSignupError());
  }
};

export const SignIn = async (dispatch, credentials) => {
  try {
    // api call
    const { data } = await axiosInstance.post("/api/auth/signin", credentials);

    dispatch(userAuthenticated(data));
    dispatch(setLoginSuccess());
    // GetProfile(dispatch);
  } catch {
    console.log("Error sign in!");
    dispatch(setLoginError());
  }
};

export const UpdatePassword = async (dispatch, pass) => {
  try {
    // api call
    await axiosClient.put(`/api/user/password`, pass);
    dispatch(setUpdatePassSucess());
  } catch {
    dispatch(setUpdatePassError());
  }
};