import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../types';
import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 text-primary/10 select-none">
              <Sparkles size={200} />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-[1.1] tracking-tighter text-gradient">
              Kiến tạo <br />
              trải nghiệm số
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                {PORTFOLIO_DATA.about}
              </p>
              <p>
                Tôi đam mê việc kết hợp giữa nghệ thuật và công nghệ để tạo ra những sản phẩm có giá trị thực tế và cảm xúc cao thông qua kỹ thuật chính xác và các nguyên tắc thẩm mỹ tiên phong.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative grid grid-cols-2 gap-4"
          >
            {/* Stats or feature cards */}
            {[
              { label: "Kinh nghiệm", value: "5+ Năm" },
              { label: "Bệnh nhân", value: "1000+" },
              { label: "Chứng chỉ", value: "10+" },
              { label: "Tâm huyết", value: "100%" }
            ].map((item, index) => (
              <div 
                key={index}
                className="glass p-8 rounded-3xl text-center hover:bg-white/10 transition-colors group interactive"
              >
                <div className="text-3xl font-black mb-2 text-gradient group-hover:scale-110 transition-transform">
                  {item.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-500">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
