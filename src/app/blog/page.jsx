import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";
// import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async () => {

  const url = "http://localhost:3000/api/blog"
  // const url = "https://jsonplaceholder.typicode.com/posts"

  const res = await fetch(url, {
    next: { revalidate: 3600 }, // refresh data ทุกๆ 3600 วินาที
    // cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async ({ searchParams }) => {
  
  // FETCH DATA WITH AN API
  const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
