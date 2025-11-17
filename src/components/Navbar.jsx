import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/posts">Posts</Link>
    </nav>
  );
}