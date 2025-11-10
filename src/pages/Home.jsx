import Button from "../components/Button";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <Button label="Click Me" onClick={() => alert("Hello from Home!")} />
    </div>
  );
}