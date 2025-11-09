import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#C5A572]/20 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="text-xl font-serif text-[#0C2340]">Thauya</div>
        <nav className="hidden gap-6 text-sm text-[#0C2340]/80 md:flex">
          <a href="#collections" className="hover:text-[#C5A572]">Collections</a>
          <a href="#shop" className="hover:text-[#C5A572]">Shop</a>
          <a href="#about" className="hover:text-[#C5A572]">About</a>
          <a href="#contact" className="hover:text-[#C5A572]">Contact</a>
        </nav>
        <button className="rounded-full border border-[#C5A572]/30 p-2 text-[#0C2340] md:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
