"use client";
import { useState } from "react";
import { Search, ShoppingCart, Menu, Globe } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  const [isRtl, setIsRtl] = useState(true);

  const toggleLang = () => {
    setIsRtl(!isRtl);
    document.documentElement.dir = isRtl ? "ltr" : "rtl";
    document.documentElement.lang = isRtl ? "en" : "ar";
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 dark:bg-black/80 border-b border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <img src="/mosaad-logo.png" alt="MOSAAD" className="h-10" />
          <div className="w-px h-8 bg-neutral-300 dark:bg-neutral-700" />
          <img src="/phoenix-logo.png" alt="PHOENIX" className="h-12" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link href="#categories" className="hover:text-primary transition-colors">الدراجات</Link>
          <Link href="#featured" className="hover:text-primary transition-colors">الأكثر مبيعاً</Link>
          <Link href="#why" className="hover:text-primary transition-colors">لماذا نحن؟</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={toggleLang} className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition">
            <Globe className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-0 right-0 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
          <button className="md:hidden p-2"><Menu className="w-6 h-6" /></button>
        </div>
      </div>
    </header>
  );
};
