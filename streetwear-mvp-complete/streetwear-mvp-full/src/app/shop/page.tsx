import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-12">Shop Collection</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
