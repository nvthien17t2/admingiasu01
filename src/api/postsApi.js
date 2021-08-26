import axiosClient from "./axiosClient";
import {
  setPosts,
  newPost,
  deletePost,
  editPost,
  newPostError,
  editPostError,
  deletePostError,
  setPostError,
} from "../features/PostsManage/PostSlice";

export const GetPosts = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosClient.get("/admin/post");
    dispatch(setPosts(data));
    return { data };
  } catch {
    dispatch(setPostError());
  }
};


export const DeletePost = async (dispatch, post) => {
  try {
    // api call
    await axiosClient.delete(`/admin/post/${post.id}`);
    // await axiosClient.delete('/posts/${post.id}', { data: { ...post } });
    dispatch(deletePost(post));
  } catch {
    dispatch(deletePostError());
  }
};
