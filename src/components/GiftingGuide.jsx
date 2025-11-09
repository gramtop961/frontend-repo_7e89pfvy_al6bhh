import { motion } from "framer-motion";
import { Heart, Sparkles, Cake, HandHeart } from "lucide-react";

const tabs = [
  { key: "birthday", label: "Birthday", icon: Cake },
  { key: "anniversary", label: "Anniversary", icon: Heart },
  { key: "friendship", label: "Friendship", icon: HandHeart },
  { key: "selflove", label: "Self-Love", icon: Sparkles },
];

export default function GiftingGuide() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-serif text-3xl text-[#0C2340] sm:text-4xl">Find the Perfect Gift</h2>
        <p className="mt-2 text-sm text-[#0C2340]/70">Browse by occasion — Birthdays, Anniversaries, Friendship, or Self-Love.</p>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {tabs.map((t, i) => (
            <motion.a
              href="#shop"
              key={t.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group flex items-center justify-center gap-2 rounded-xl border border-[#C5A572]/30 bg-[#F9F5F0] px-4 py-6 text-sm font-medium text-[#0C2340] shadow-sm transition hover:border-[#C5A572] hover:bg-white"
            >
              <t.icon className="h-5 w-5 text-[#C5A572]" /> {t.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
