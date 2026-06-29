import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../types';
import { Code2, Palette, Globe, Layers } from 'lucide-react';

const CATEGORY_ICONS: Record<string, any> = {
  Tech: Code2,
  Design: Palette,
  Creative: Globe,
  default: Layers
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-primary font-mono text-xs tracking-[0.4em] uppercase mb-4">Chuyên môn</h2>
            <h3 className="text-4xl md:text-6xl font-bold">Kỹ năng & <br /> Thế mạnh</h3>
          </div>
          <p className="text-gray-500 max-w-sm text-right">
            Sử dụng những công nghệ tiên tiến nhất để giải quyết các vấn đề phức tạp và kiến tạo tương lai.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {PORTFOLIO_DATA.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="skill-tag interactive"
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
