import {
  newPost,
  editPost,
  deletePost,
  setPosts,
  setPostError,
  newPostError,
  editPostError,
  deletePostError,
} from "../features/PostsManage/PostSlice";
import {
  newCustomer,
  editCustomer,
  deleteCustomer,
  setCustomers,
  setCustomerError,
  newCustomerError,
  editCustomerError,
  deleteCustomerError,
} from "../features/CustomersManage/CustomerSlice";
import {
  setLoginError,
  setLoginSuccess,
  setSignupError,
  setSignupSuccess,
  setUpdatePassSucess,
  setUpdatePassError,
} from "../features/Auth/authenticationSlice";
import { toast } from "react-toastify";

const ToastMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case setPosts.type:
      toast.success("call api posts successfully");
      break;
    case newPost.type:
      toast.success("New post added successfully");
      break;
    case editPost.type:
      toast.success("Post edited successfully");
      break;
    case deletePost.type:
      toast.success("Post deleted successfully");
      break;
    case setPostError.type:
      toast.error("Error loading post");
      break;
    case newPostError.type:
      toast.error("Error adding new post");
      break;
    case editPostError.type:
      toast.error("Error editing post");
      break;
    case deletePostError.type:
      toast.error("Error deleting post");
      break;
    case setCustomers.type:
      toast.success("call api Customer successfully");
      break;
    case newCustomer.type:
      toast.success("New Customer added successfully");
      break;
    case editCustomer.type:
      toast.success("Customer edited successfully");
      break;
    case deleteCustomer.type:
      toast.success("Customer deleted successfully");
      break;
    case setCustomerError.type:
      toast.error("Error loading Customer");
      break;
    case newCustomerError.type:
      toast.error("Error adding new Customer");
      break;
    case editCustomerError.type:
      toast.error("Error editing Customer");
      break;
    case deleteCustomerError.type:
      toast.error("Error deleting Customer");
      break;
    case setLoginError.type:
      toast.error("Login fail, please valid username or password");
      break;
    case setLoginSuccess.type:
      toast.success("Login success");
      break;
    case setSignupError.type:
      toast.error("Sign up  fail, username or email already taken");
      break;
    case setSignupSuccess.type:
      toast.success("sign up success");
      break;
    case setUpdatePassSucess.type:
      toast.success("update password success");
      break;
    case setUpdatePassError.type:
      toast.error("update password error");
      break;
    default:
      break;
  }
  return next(action);
};

export default ToastMiddleware;
