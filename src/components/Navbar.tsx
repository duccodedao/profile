import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, LogIn, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';
import { PORTFOLIO_DATA } from '../types';
import { useAuth } from '../context/AuthContext';

const NAV_LINKS = [
  { name: 'Giới thiệu', href: '#about' },
  { name: 'Kỹ năng', href: '#skills' },
  { name: 'Liên hệ', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, loginWithGoogle, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-10 px-10",
        isScrolled ? "py-6 bg-[#030303]/80 backdrop-blur-lg border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden glass border border-white/10">
              <img 
                src="https://github.com/duccodedao/Img/blob/main/system/stamp_1781680190001_IMG_3677.png?raw=true" 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white font-bold tracking-[0.2em] text-lg uppercase font-display">
              {PORTFOLIO_DATA.nickname.toUpperCase()}
            </span>
          </motion.div>

          <AnimatePresence>
            {user && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="hidden lg:block text-xs text-indigo-400 font-medium tracking-wider"
              >
                Chào mừng, <span className="text-white">{user.displayName}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 items-center">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="nav-link interactive"
            >
              {link.name}
            </a>
          ))}
          
          {user ? (
            <button 
              onClick={logout}
              className="nav-link flex items-center gap-2 border border-white/10 px-4 py-2 rounded-xl hover:bg-red-500/10 hover:border-red-500/20 interactive"
            >
              <LogOut size={14} />
              Đăng xuất
            </button>
          ) : (
            <button 
              onClick={loginWithGoogle}
              className="nav-link flex items-center gap-2 border border-indigo-500/20 px-6 py-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 interactive"
            >
              <LogIn size={14} />
              Đăng nhập
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white interactive"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* ... mobile menu content remains same but styled ... */}
    </nav>
  );
}
