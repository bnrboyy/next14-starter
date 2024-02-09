import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";
// import { getPosts } from "@/lib/data";

const postData = [
  {
    id: "1",
    img: "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg",
    createdAt: "22/12/2023 10:10:10",
    title: "Post1",
    body: "This is a new post.",
    slug: "/"
  },
  {
    id: "2",
    img: "https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg",
    createdAt: "22/12/2023 10:10:10",
    title: "Post2",
    body: "This is a new post.",
    slug: "/"
  },
  {
    id: "3",
    img: "https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg",
    createdAt: "22/12/2023 10:10:10",
    title: "Post3",
    body: "This is a new post.",
    slug: "/"
  },
  {
    id: "4",
    img: "https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg",
    createdAt: "22/12/2023 10:10:10",
    title: "Post4",
    body: "This is a new post.",
    slug: "/"
  },
]

// FETCH DATA WITH AN API
const getData = async () => {

  // const url = "http://localhost:3000/api/blog"
  const url = "https://jsonplaceholder.typicode.com/posts"

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
  // const posts = await getData();

  // FETCH DATA WITHOUT AN API
  const posts = await getPosts();

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
