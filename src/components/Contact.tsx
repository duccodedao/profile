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
      <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
        
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Hãy cùng nhau kiến tạo <span className="text-gradient">tương lai</span></h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            Bạn có một ý tưởng tuyệt vời? Hãy cùng nhau biến nó thành hiện thực. 
            Tôi luôn sẵn sàng cho những dự án đầy thách thức.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {PORTFOLIO_DATA.socials.map((social, index) => {
              const Icon = ICON_MAP[social.iconName];
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all interactive"
                >
                  {Icon && <Icon size={24} />}
                </motion.a>
              );
            })}
          </div>

          <a href={zaloLink} target="_blank" rel="noopener noreferrer" className="group btn-premium inline-flex items-center gap-3 interactive">
            Gửi tin nhắn trực tiếp
            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
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
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
            const data = await res.json();
            const location = data.address.city || data.address.town || data.address.state || "Vietnam";
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
