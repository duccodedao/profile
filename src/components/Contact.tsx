import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../types';
import { Github, Facebook, Mail, ExternalLink, Globe, MessageCircle } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Github,
  Facebook,
  Mail,
  Globe,
  MessageCircle
};

export default function Contact() {
  const zaloLink = PORTFOLIO_DATA.socials.find(s => s.name === "Zalo")?.url || "#";

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-24 relative overflow-hidden mb-16">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
        
        <div className="relative z-10 text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">Sẵn sàng khởi đầu một dự án mới?</h3>
          <p className="text-gray-400 text-sm md:text-base mb-10 max-w-md mx-auto leading-relaxed">
            Tôi luôn tìm kiếm những cơ hội để tạo ra những sản phẩm kỹ thuật số đột phá. Hãy kết nối và bắt đầu hành trình của chúng ta.
          </p>
          <a href={zaloLink} target="_blank" rel="noopener noreferrer" className="group btn-premium inline-flex items-center justify-center gap-3 interactive w-full sm:w-auto px-10 py-5">
            Gửi tin nhắn
            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-4 md:gap-6 overflow-x-auto pt-10 pb-4 no-scrollbar">
        {PORTFOLIO_DATA.socials.map((social, index) => {
          const Icon = ICON_MAP[social.iconName];
          return (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              whileHover={{ 
                y: -8, 
                scale: 1.1, 
                transition: { type: "spring", stiffness: 400, damping: 10 } 
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group flex-shrink-0 w-12 h-12 md:w-16 md:h-16 glass rounded-2xl flex items-center justify-center text-gray-400 transition-all duration-500"
            >
              {/* Hover Glow Effect */}
              <div className="absolute -inset-3 bg-indigo-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 transform group-hover:text-white transition-colors duration-300">
                {Icon && <Icon size={22} className="md:w-7 md:h-7" />}
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

export function Footer() {
  const [address, setAddress] = useState<string>("Vietnam");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&accept-language=vi`);
            const data = await res.json();
            const addr = data.address;
            const parts = [];
            
            // Xã/Phường/Ấp/Khóm/Quận/Huyện/Tỉnh
            if (addr.hamlet) parts.push(addr.hamlet);
            if (addr.village) parts.push(addr.village);
            if (addr.suburb) parts.push(addr.suburb);
            if (addr.neighbourhood) parts.push(addr.neighbourhood);
            if (addr.quarter) parts.push(addr.quarter);
            
            if (addr.district) parts.push(addr.district);
            if (addr.city_district) parts.push(addr.city_district);
            
            if (addr.city || addr.town || addr.province || addr.state) {
              parts.push(addr.city || addr.town || addr.province || addr.state);
            }

            // Remove duplicates and join
            const location = parts.length > 0 ? Array.from(new Set(parts)).join(', ') : "Vietnam";
            setAddress(location);
          } catch (e) {
            setAddress("Vietnam");
          }
        },
        () => setAddress("Vietnam")
      );
    }
  }, []);

  return (
    <footer className="py-12 px-10 border-t border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-[11px] text-white/30 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} by {PORTFOLIO_DATA.nickname}
        </div>
        
        <div className="flex gap-16">
          <div className="flex flex-col">
            <span className="text-[9px] text-white/30 uppercase mb-1 tracking-widest">Địa chỉ</span>
            <span className="text-xs text-white uppercase">{address}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] text-white/30 uppercase mb-1 tracking-widest">Hợp tác</span>
            <span className="text-xs text-white">sonlyhongduc@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
