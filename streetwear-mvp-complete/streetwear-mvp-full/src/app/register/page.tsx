export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md p-8 border border-zinc-800 rounded-2xl bg-zinc-900">
        <h1 className="text-3xl font-bold mb-6">Create Account</h1>

        <form className="space-y-4">
          <input className="w-full p-4 rounded-xl bg-zinc-800" placeholder="Name" />
          <input className="w-full p-4 rounded-xl bg-zinc-800" placeholder="Email" />
          <input type="password" className="w-full p-4 rounded-xl bg-zinc-800" placeholder="Password" />

          <button className="w-full bg-yellow-500 text-black p-4 rounded-xl font-semibold">
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
