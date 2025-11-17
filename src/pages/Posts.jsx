import { useState, useEffect } from 'react';
import Card from '../components/Card';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  const filtered = posts.filter(p => p.title.includes(search));

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} className="border p-2" />
      {loading ? <p>Loading...</p> : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map(post => (
            <Card key={post.id} title={post.title}>
              <p>{post.body}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}