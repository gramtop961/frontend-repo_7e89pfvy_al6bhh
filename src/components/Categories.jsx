import { motion } from "framer-motion";

const categories = [
  { name: "Jewelry", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=60" },
  { name: "Keychains", img: "https://images.unsplash.com/photo-1595970360143-2d09c74a1b8a?auto=format&fit=crop&w=800&q=60" },
  { name: "Bracelets", img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=60" },
  { name: "Fridge Magnets", img: "https://images.unsplash.com/photo-1542728928-1413d1894ed1?auto=format&fit=crop&w=800&q=60" },
  { name: "Scrunchies", img: "https://images.unsplash.com/photo-1616690710400-a16d146927c7?auto=format&fit=crop&w=800&q=60" },
  { name: "Gift Sets", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60" },
];

export default function Categories() {
  return (
    <section id="collections" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl text-[#0C2340] sm:text-4xl">Featured Categories</h2>
            <p className="mt-2 text-sm text-[#0C2340]/70">A cozy mix of our most-loved collections.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <motion.a
              href="#shop"
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl bg-[#F9F5F0] shadow-sm`}
            >
              <img
                loading="lazy"
                src={c.img}
                alt={c.name}
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-[#0C2340] backdrop-blur">
                  {c.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
