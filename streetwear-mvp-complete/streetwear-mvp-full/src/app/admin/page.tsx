export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">Admin Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-6">
        {[
          "Revenue",
          "Orders",
          "Users",
          "Products"
        ].map((item) => (
          <div
            key={item}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
          >
            <p className="text-zinc-400">{item}</p>
            <h2 className="text-4xl font-bold mt-4">0</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
