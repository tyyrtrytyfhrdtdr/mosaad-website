"use client";
import { motion } from "framer-motion";
import { DollarSign, ShoppingBag, Users, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "إجمالي المبيعات", value: "145,200 EGP", icon: DollarSign, color: "text-green-500" },
    { label: "الطلبات الجديدة", value: "34", icon: ShoppingBag, color: "text-blue-500" },
    { label: "العملاء", value: "1,204", icon: Users, color: "text-purple-500" },
    { label: "معدل النمو", value: "+12.5%", icon: TrendingUp, color: "text-primary" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">لوحة التحكم</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex items-center justify-between"
          >
            <div>
              <p className="text-neutral-400 text-sm mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </div>
            <div className={`p-4 rounded-xl bg-neutral-950 ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-neutral-900 rounded-2xl border border-neutral-800 p-6">
        <h2 className="text-xl font-bold mb-4">أحدث الطلبات</h2>
        <div className="text-center py-10 text-neutral-500">
          سيتم عرض البيانات هنا بعد ربط قاعدة البيانات (Supabase).
        </div>
      </div>
    </div>
  );
}
