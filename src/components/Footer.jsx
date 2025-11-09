import { Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#C5A572]/20 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="text-2xl font-serif text-[#0C2340]">Thauya</div>
            <p className="mt-2 text-sm text-[#0C2340]/70">Handcrafted gifting made warm, personal, and premium.</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-[#0C2340]">Quick Links</div>
            <ul className="mt-3 space-y-2 text-sm text-[#0C2340]/80">
              <li><a href="#shop" className="hover:text-[#C5A572]">Shop</a></li>
              <li><a href="#about" className="hover:text-[#C5A572]">About</a></li>
              <li><a href="#contact" className="hover:text-[#C5A572]">Contact</a></li>
              <li><a href="#policy" className="hover:text-[#C5A572]">Policy</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-[#0C2340]">Follow Us</div>
            <div className="mt-3 flex gap-3 text-[#0C2340]">
              <a aria-label="Instagram" href="#" className="rounded-full border border-[#C5A572]/30 p-2 hover:bg-[#F9F5F0]"><Instagram className="h-4 w-4" /></a>
              <a aria-label="WhatsApp" href="#" className="rounded-full border border-[#C5A572]/30 p-2 hover:bg-[#F9F5F0]"><MessageCircle className="h-4 w-4" /></a>
              <a aria-label="Facebook" href="#" className="rounded-full border border-[#C5A572]/30 p-2 hover:bg-[#F9F5F0]"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[#C5A572]/20 pt-6 text-xs text-[#0C2340]/70">
          © 2025 Thauya | Designed by Zyr1cs
        </div>
      </div>
    </footer>
  );
}
