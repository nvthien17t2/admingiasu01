import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "../features/Auth/authenticationSlice";
import postReducer from "../features/PostsManage/PostSlice";
import customerReducer from "../features/CustomersManage/CustomerSlice";
import userReducer from "../features/Auth/userSlice";
import ToastMiddleware from '../middlewares/ToastMiddleware';

const rootReducer = {
  auth: authenticationSlice,
  posts: postReducer,
  customers: customerReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ToastMiddleware),
});

export default store;
