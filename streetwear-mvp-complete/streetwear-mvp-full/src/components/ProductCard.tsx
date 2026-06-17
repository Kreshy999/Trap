import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
      <div className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1523398002811-999ca8dec234"
          alt="Product"
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-white">Oversized Hoodie</h2>
        <p className="text-zinc-400 mt-2">$120</p>

        <button className="mt-6 w-full bg-yellow-500 text-black py-3 rounded-xl font-semibold">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
