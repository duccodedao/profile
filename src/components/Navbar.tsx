import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, LogIn, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';
import { PORTFOLIO_DATA } from '../types';
import { useAuth } from '../context/AuthContext';

const NAV_LINKS = [
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
        "absolute top-0 left-0 w-full z-50 transition-all duration-500 py-10 px-6 md:px-10"
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
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#030303] flex flex-col md:hidden"
          >
            <div className="flex justify-between items-center py-10 px-6">
              <div className="flex items-center gap-3">
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
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 gap-12">
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-5xl font-black text-white hover:text-indigo-400 transition-colors tracking-tighter"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-12 border-t border-white/5 flex flex-col gap-8"
              >
                {user ? (
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden glass border border-white/10">
                        <img src={user.photoURL || ''} alt={user.displayName || ''} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white/40 uppercase tracking-widest">Logged in as</span>
                        <span className="text-lg font-bold text-white">{user.displayName}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-center gap-3 border border-white/10 py-5 rounded-2xl text-white font-bold hover:bg-red-500/10 transition-colors"
                    >
                      <LogOut size={20} />
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => {
                      loginWithGoogle();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-3 bg-white text-black py-5 rounded-2xl font-bold hover:bg-gray-200 transition-colors"
                  >
                    <LogIn size={20} />
                    Login with Google
                  </button>
                )}
              </motion.div>
            </div>
            
            <div className="p-10 text-[10px] text-white/20 uppercase tracking-[0.2em] text-center">
              © {new Date().getFullYear()} by {PORTFOLIO_DATA.nickname} • Digital Experience
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
