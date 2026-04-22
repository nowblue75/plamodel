/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { useScroll, useMotionValue, useSpring } from 'motion/react';
import { BRAND } from './constants';

// Components
import { Hero } from './components/Hero';
import { OperationalRecords } from './components/OperationalRecords';
import { CardGallery } from './components/CardGallery';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Mouse tracking for global effects (e.g. Hero parallax)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  return (
    <div 
      ref={containerRef} 
      className="h-screen overflow-y-auto snap-y snap-mandatory bg-white select-none selection:bg-granzort-red/30 selection:text-zinc-950 scroll-smooth"
      onMouseMove={handleMouseMove}
    >
      {/* 01. Hero Section */}
      <Hero 
        scrollYProgress={scrollYProgress} 
        mouseX={springX} 
        mouseY={springY} 
      />

      {/* 02. Operational Records (Video/Cinema Grid) */}
      <OperationalRecords />

      {/* 03. Card Gallery (3D Card Deck) */}
      <CardGallery />

      {/* 04. Footer */}
      <footer className="py-24 border-t border-black/5 bg-white flex flex-col items-center snap-start">
         <span className="text-[11px] font-orbitron tracking-[0.8em] text-zinc-400 uppercase font-black opacity-80">
            Created by Studio One
         </span>
      </footer>

      {/* Global Aesthetics */}
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-20 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]" />
    </div>
  );
}
