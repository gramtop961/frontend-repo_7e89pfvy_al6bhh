import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="relative bg-white py-16">
      <div className="mx-auto max-w-7xl items-center gap-10 px-6 lg:grid lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl shadow-sm"
        >
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=60"
            alt="Thauya workspace"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 lg:mt-0"
        >
          <h2 className="font-serif text-3xl text-[#0C2340] sm:text-4xl">Our Handmade Story</h2>
          <p className="mt-4 text-base leading-relaxed text-[#0C2340]/80">
            Started in Calicut, Kerala, Thauya brings handcrafted gifting items that
            blend charm, creativity, and love. Every piece is designed to make moments
            memorable.
          </p>
          <a
            href="#about"
            className="mt-6 inline-block border-b-2 border-[#C5A572] pb-1 text-sm font-medium text-[#0C2340] transition hover:text-[#C5A572]"
          >
            <span className="bg-gradient-to-r from-[#C5A572] to-[#C5A572] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]">
              Discover Our Story
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
