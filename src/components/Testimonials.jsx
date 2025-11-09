import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aisha",
    quote:
      "Absolutely loved the packaging and attention to detail. The bracelet felt so personal!",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=60",
    rating: 5,
  },
  {
    name: "Rahul",
    quote:
      "Perfect anniversary gift. Premium finish and arrived on time!",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=400&q=60",
    rating: 5,
  },
  {
    name: "Meera",
    quote:
      "The keychain was adorable. Loved the blush tones and quality!",
    img: "https://images.unsplash.com/photo-1541534401786-2077eed87a72?auto=format&fit=crop&w=400&q=60",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F7E9E4] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-serif text-3xl text-[#0C2340] sm:text-4xl">What Our Customers Say</h2>
        <div className="no-scrollbar mt-8 -mx-6 flex gap-6 overflow-x-auto px-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="min-w-[300px] max-w-[300px] rounded-2xl bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-medium text-[#0C2340]">{t.name}</p>
                  <div className="flex text-[#C5A572]">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-[#0C2340]/80">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
