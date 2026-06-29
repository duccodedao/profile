import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../types';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = PORTFOLIO_DATA.title;
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between pt-32 pb-20 px-10 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col gap-6 z-10 text-left"
      >
        <div className="inline-block self-start px-4 py-1 rounded-full glass border border-indigo-500/20 text-indigo-400 text-[10px] font-semibold tracking-[0.2em] uppercase">
          Sẵn sàng cho công việc
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter text-gradient mb-4">
            Creative <br /> Developer <br /> & Architect
          </h1>
        </motion.div>

        <div className="min-h-[4rem]">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg md:text-xl text-gray-400 font-light max-w-md leading-relaxed"
          >
            {displayText}
            <span className="inline-block w-[2px] h-[1em] bg-indigo-500 ml-1 animate-pulse" />
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center gap-6 mt-8"
        >
          <a href="#contact" className="btn-premium interactive">
            Connect with {PORTFOLIO_DATA.nickname}
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 flex justify-end items-center mt-20 md:mt-0"
      >
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-teal-400/20 rounded-[35px] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative w-[320px] h-[400px] md:w-[380px] md:h-[480px] rounded-[30px] glass overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://raw.githubusercontent.com/duccodedao/Img/refs/heads/main/avatars/avatar_1779717007374_IMG_3958.jpeg" 
              alt={PORTFOLIO_DATA.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <p className="text-white font-semibold text-lg">{PORTFOLIO_DATA.name}</p>
              <p className="text-white/50 text-[10px] uppercase tracking-widest mt-1">Vietnamese 🇻🇳</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
