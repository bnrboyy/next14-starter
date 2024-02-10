import { addPost, deletePost } from "@/lib/action";

export default function ServerActionTestPage() {

  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>Create Post</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="id" name="id" />
        <button>Delete Post</button>
      </form>
    </div>
  );
}
