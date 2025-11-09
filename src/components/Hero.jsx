import { motion } from "framer-motion";
import { ArrowRight, Gift } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F9F5F0]">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-[#C5A572]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-80 w-80 rounded-full bg-[#F7E9E4]/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A572]/30 bg-white/60 px-3 py-1 text-xs text-[#0C2340] backdrop-blur">
            <Gift className="h-4 w-4 text-[#C5A572]" />
            Handcrafted in Kerala with love
          </div>
          <h1 className="mt-6 text-4xl font-serif tracking-tight text-[#0C2340] sm:text-5xl lg:text-6xl">
            Thoughtful Gifts, Made with Love.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#0C2340]/80">
            From jewelry to keychains, every Thauya piece is crafted to celebrate
            small moments beautifully.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#collections"
              className="inline-flex items-center gap-2 rounded-full bg-[#C5A572] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/60"
            >
              Explore Collections <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#shop"
              className="inline-flex items-center gap-2 rounded-full border border-[#C5A572]/40 bg-white px-6 py-3 text-sm font-medium text-[#0C2340] shadow-sm transition hover:bg-[#F9F5F0] focus:outline-none focus:ring-2 focus:ring-[#C5A572]/40"
            >
              Shop Gifts
            </a>
          </div>
        </motion.div>

        {/* Collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 mt-12 grid flex-1 grid-cols-3 gap-4 lg:mt-0"
        >
          {["bracelet","magnet","keychain","scrunchie","giftset","jewelry"].map((type, idx) => (
            <div
              key={type}
              className={`relative aspect-[3/4] overflow-hidden rounded-2xl bg-white shadow-sm ${idx % 2 === 0 ? "translate-y-6" : ""}`}
            >
              <img
                loading="lazy"
                src={`https://images.unsplash.com/photo-${
                  idx % 2 === 0 ? "1512499617640-c2f999098cba" : "1512207853267-8ad625ed1d71"
                }?auto=format&fit=crop&w=800&q=60`}
                alt="Thauya handcrafted product"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0C2340]/20 to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
