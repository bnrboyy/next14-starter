import { Post } from "@/lib/models";
import { connDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connDB();
    const posts = await Post.find();
    return NextResponse.json(posts); // return Posts

  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
