import { useFetch } from "../hooks/useFetch";

export default function Posts() {
  const { data: posts, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Posts</h1>
      {posts.slice(0, 5).map(post => (
        <div key={post.id} className="mb-4 p-4 border rounded shadow">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}