// frontend - runs the browser :D
export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">My Portfolio</h1>
      <p className="mt-4">Welcome to my finance and economics projects.</p>

      {/* Option 2: Multiple buttons */}
      <div className="mt-6 flex gap-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded">
          Projects
        </button>
        <button className="bg-green-500 text-white px-6 py-2 rounded">
          Contact
        </button>
      </div>
    </main>
  );
}
