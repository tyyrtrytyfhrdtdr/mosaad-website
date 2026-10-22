"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=2000&auto=format&fit=crop" alt="Cycling" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block">الوكيل الرسمي في مصر</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            MOSAAD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              أكبر مستورد للدراجات
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10">
            اكتشف مجموعة حصرية من دراجات PHOENIX العالمية. جودة لا مثيل لها، أسعار تنافسية، وخدمة ما بعد البيع تضمن لك تجربة قيادة استثنائية.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-primary-dark transition shadow-[0_0_30px_rgba(230,0,0,0.4)] mx-auto"
          >
            تسوق الآن <ArrowLeft className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
