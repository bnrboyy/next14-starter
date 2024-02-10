"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connDB } from "./utils";
import { signIn, signOut } from "./auth";

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connDB();

    const newPost = new Post({ title, desc, slug, userId });
    await newPost.save();
    console.log("Post created");
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connDB();

    await Post.findByIdAndDelete(id);
    console.log("Post deleted");
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};
