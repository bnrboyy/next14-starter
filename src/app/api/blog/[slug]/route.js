import { Post } from "@/lib/models";
import { connDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connDB();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post); // return Post
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    connDB();
    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted"); // return Post
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
