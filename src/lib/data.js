import { Post, User } from "./models";
import { connDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connDB();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Falied to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connDB();
    const post = await Post.findOne({slug});
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Falied to fetch post!");
  }
};

export const getUsers = async () => {
  try {
    connDB();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Falied to fetch users!");
  }
};

export const getUserById = async (id) => {
  noStore()
  try {
    connDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Falied to fetch user by ID !");
  }
};
