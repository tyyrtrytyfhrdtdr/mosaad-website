"use client";
import { LayoutDashboard, Package, ShoppingCart, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="flex h-screen bg-neutral-950 text-white overflow-hidden">
      <aside className="w-64 border-r border-neutral-800 bg-black flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-neutral-800">
          <img src="/phoenix-logo.png" alt="Admin" className="h-8" />
          <span className="ml-3 font-bold text-lg tracking-wider text-primary">ADMIN</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-900 transition text-neutral-400 hover:text-white">
            <LayoutDashboard className="w-5 h-5" /> نظرة عامة
          </Link>
          <Link href="/admin/products" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-900 transition text-neutral-400 hover:text-white">
            <Package className="w-5 h-5" /> المنتجات
          </Link>
          <Link href="/admin/orders" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-900 transition text-neutral-400 hover:text-white">
            <ShoppingCart className="w-5 h-5" /> الطلبات
          </Link>
        </nav>
        <div className="p-4 border-t border-neutral-800">
          <button onClick={() => router.push("/")} className="flex items-center gap-3 px-4 py-3 rounded-xl w-full text-left text-red-500 hover:bg-red-500/10 transition">
            <LogOut className="w-5 h-5" /> تسجيل الخروج
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}
