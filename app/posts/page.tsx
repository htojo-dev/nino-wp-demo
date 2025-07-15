import Link from "next/link";
import { getPosts } from "./data";

export default async function Page() {
  const posts = await getPosts();
  return (
    <div>
      <h1>記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h2>{post.title.rendered}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
