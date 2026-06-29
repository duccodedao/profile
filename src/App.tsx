/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Background3D from './components/Background3D';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact, { Footer } from './components/Contact';

export default function App() {
  return (
    <main className="relative min-h-screen selection:bg-primary selection:text-white">
      <Background3D />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <Contact />
        <Footer />
      </div>

      {/* Decorative Overlays */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>
    </main>
  );
}
