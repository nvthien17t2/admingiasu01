import { getprofile, updateprofile, updateProfileError, updateProfileSuccess } from "../features/Auth/userSlice";
import * as axios from "axios";
import axiosClient from "./axiosClient";

export const GetProfile = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosClient.get("/api/user/profile");

    dispatch(getprofile(data));
  } catch {
    console.log("Error get profile!");
  }
};

export const UpdateProfile = async (dispatch, user) => {
  try {
    // api call
    // await axiosClient.put(`/api/user`, user)
    dispatch(updateProfileSuccess());
    GetProfile(dispatch);
  } catch {
    console.log("Error update profile!");
    dispatch(updateProfileError());
    GetProfile(dispatch);
  }
};
