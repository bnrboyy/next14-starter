"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

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

export const register = async (previousState, formData) => {
  const { username, email, password, c_password, image } =
    Object.fromEntries(formData);

  try {
    connDB();

    const user = await User.findOne().or([{ username }, { email }]); // find by username or email

    if (user) return { error: "User already exists" };
    if (password !== c_password) return { error: "Passwords don't match" };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      image,
    });

    await newUser.save();
    console.log("User created");
    return { success: true };
  } catch (err) {
    console.log(err);
  }
};

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);
  }
};
