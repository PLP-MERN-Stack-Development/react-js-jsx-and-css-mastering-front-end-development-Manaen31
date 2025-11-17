import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Home() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Week 3 App</h1>
      <button onClick={toggleTheme} className="bg-gray-800 text-white px-4 py-2 rounded">
        Toggle Theme
      </button>
    </div>
  );
}