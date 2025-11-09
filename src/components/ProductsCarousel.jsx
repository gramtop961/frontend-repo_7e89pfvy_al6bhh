import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const products = [
  { id: 1, name: "Pearl Bracelet", price: 899, img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=60" },
  { id: 2, name: "Floral Keychain", price: 299, img: "https://images.unsplash.com/photo-1573148195900-7845dcb9b127?auto=format&fit=crop&w=800&q=60" },
  { id: 3, name: "Minimal Necklace", price: 1299, img: "https://images.unsplash.com/photo-1612214070475-1ff54d34c4a1?auto=format&fit=crop&w=800&q=60" },
  { id: 4, name: "Polaroid Magnet", price: 199, img: "https://images.unsplash.com/photo-1542728928-1413d1894ed1?auto=format&fit=crop&w=800&q=60" },
  { id: 5, name: "Velvet Scrunchie", price: 149, img: "https://images.unsplash.com/photo-1616690710400-a16d146927c7?auto=format&fit=crop&w=800&q=60" },
];

export default function ProductsCarousel() {
  return (
    <section className="bg-[#F9F5F0] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl text-[#0C2340] sm:text-4xl">Best-Selling Gifts of the Month</h2>
            <p className="mt-2 text-sm text-[#0C2340]/70">Handpicked favorites loved by our community.</p>
          </div>
        </div>

        <div className="no-scrollbar -mx-6 flex gap-6 overflow-x-auto px-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="min-w-[240px] max-w-[240px] overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="relative">
                <img
                  loading="lazy"
                  src={p.img}
                  alt={p.name}
                  className="h-48 w-full object-cover transition duration-700 hover:scale-105"
                />
                <button
                  className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-[#0C2340] px-3 py-2 text-xs font-medium text-white shadow-md hover:brightness-110"
                  aria-label={`Add ${p.name} to cart`}
                >
                  <ShoppingCart className="h-4 w-4" /> Add
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-[#0C2340]">{p.name}</h3>
                <p className="mt-1 text-sm text-[#0C2340]/70">₹{p.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
