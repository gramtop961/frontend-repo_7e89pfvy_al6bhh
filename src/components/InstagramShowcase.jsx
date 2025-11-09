import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const posts = [
  "https://images.unsplash.com/photo-1542219550-37153d387c67?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1520697222868-88c1d4ed0ef1?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1518548050441-3f6d8360cf6b?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=60",
];

export default function InstagramShowcase() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl text-[#0C2340] sm:text-4xl">Join Our Creative Family on Instagram</h2>
            <p className="mt-2 text-sm text-[#0C2340]/70">@thauya</p>
          </div>
          <a
            href="#"
            className="hidden items-center gap-2 rounded-full bg-[#C5A572] px-4 py-2 text-xs font-medium text-white shadow-sm hover:brightness-110 sm:inline-flex"
          >
            <Instagram className="h-4 w-4" /> Follow Us
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map((src, i) => (
            <motion.a
              href="#"
              key={src}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group relative block overflow-hidden rounded-xl"
            >
              <img src={src} alt="Instagram post" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
