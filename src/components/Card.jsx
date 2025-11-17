export default function Card({ title, children }) {
  return (
    <div className="border p-4 rounded shadow-md bg-white dark:bg-gray-800">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
}