import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Database, ImageIcon, Layers, ChevronRight, ChevronLeft } from 'lucide-react';
import { PROCESS_ARCHIVE } from '../constants';
import { Card } from './Card';

export const CardGallery: React.FC = () => {
  const [activeCat, setActiveCat] = useState(PROCESS_ARCHIVE[0].id);
  const [slideIdx, setSlideIdx] = useState(0);

  const currentCatData = PROCESS_ARCHIVE.find(c => c.id === activeCat)!;
  const currentImgs = currentCatData.images;

  const handleNext = () => {
    if (slideIdx < currentImgs.length - 1) {
      setSlideIdx(slideIdx + 1);
    }
  };

  const handlePrev = () => {
    if (slideIdx > 0) {
      setSlideIdx(slideIdx - 1);
    }
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'wip': return <Database className="w-4 h-4" />;
      case 'complete': return <ImageIcon className="w-4 h-4" />;
      case 'synth': return <Layers className="w-4 h-4" />;
      default: return <Terminal className="w-4 h-4" />;
    }
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-white light-cyber-grid overflow-hidden border-b border-black/5 snap-start">
      <div className="max-w-7xl w-full mx-auto px-6 mb-12 flex justify-between items-end">
         <div className="flex flex-col gap-2">
            <div className="flex items-center gap-5 text-granzort-red font-black font-orbitron text-[11px] tracking-[0.5em]">
               <Terminal className="w-5 h-5" />
               <span>DECK_COLLECTION // COLLECTION_02</span>
            </div>
            <h2 className="text-6xl font-black font-orbitron tracking-tighter uppercase text-zinc-950">Card_Gallery</h2>
         </div>
         {/* Page Counter */}
         <div className="bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-black/5 shadow-sm mb-2">
            <span className="font-orbitron font-black text-[10px] text-zinc-950">
               {slideIdx + 1} <span className="text-zinc-300 mx-2">/</span> {currentImgs.length}
            </span>
         </div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 flex flex-col lg:flex-row gap-12">
        {/* Sidebar Menu */}
        <div className="w-full lg:w-96 flex-shrink-0">
           <div className="sticky top-12 space-y-8">
              <div className="card-deck-frame bg-white p-6 border-l-8 border-l-granzort-red shadow-xl">
                 <span className="text-zinc-400 font-orbitron text-[10px] font-black tracking-[0.5em] uppercase">ACCESS TERMINAL</span>
                 <h2 className="text-2xl font-black font-orbitron tracking-tighter uppercase mt-2 text-zinc-950">Tech_Manual</h2>
              </div>
              
              <nav className="flex flex-col gap-3">
                 {PROCESS_ARCHIVE.map((cat, idx) => (
                    <button
                      key={cat.id}
                      onClick={() => { setActiveCat(cat.id); setSlideIdx(0); }}
                      className={`group relative flex items-center justify-between p-5 card-deck-frame transition-all duration-500 text-left ${
                        activeCat === cat.id 
                          ? 'bg-zinc-950 text-white shadow-2xl translate-x-4' 
                          : 'bg-white text-zinc-400 hover:bg-zinc-50 hover:translate-x-2'
                      }`}
                    >
                       <div className="flex items-center gap-4">
                          <span className={`font-orbitron font-black text-sm ${activeCat === cat.id ? 'text-hud-cyan' : 'text-zinc-200'}`}>0{idx + 1}</span>
                          <div className="flex flex-col">
                             <span className={`text-[11px] font-orbitron font-black tracking-widest uppercase ${activeCat === cat.id ? 'text-white' : 'text-zinc-500'}`}>{cat.label}</span>
                             <span className="text-[9px] font-mono opacity-40 mt-0.5 uppercase">Ref: {cat.id}_SEC_99</span>
                          </div>
                       </div>
                       <div className={`${activeCat === cat.id ? 'bg-hud-cyan text-white' : 'bg-zinc-100 text-zinc-400'} p-1.5 rounded-full transition-colors`}>
                          {getIcon(cat.id)}
                       </div>
                    </button>
                 ))}
              </nav>

              <div className="p-6 bg-zinc-900 text-white/70 card-deck-frame shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-hud-cyan/5 -translate-y-16 translate-x-16 rounded-full blur-3xl group-hover:bg-hud-cyan/10 transition-colors" />
                 <div className="flex items-center gap-3 mb-4">
                    <Terminal className="w-4 h-4 text-hud-cyan" />
                    <span className="text-[10px] font-orbitron font-black text-hud-cyan tracking-[0.3em] uppercase">Tactical_Intelligence</span>
                 </div>
                 <p className="text-[10px] leading-relaxed font-mono italic opacity-60">
                    {currentCatData.desc}
                 </p>
                 <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[9px] font-orbitron text-zinc-500">RESONANCE: 100%</span>
                    <span className="text-[9px] font-orbitron text-hud-cyan">ENCRYPTED</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Card View Area */}
        <div className="flex-1 min-w-0 relative flex flex-col gap-8">
           <div className="relative group">
              <div className="absolute inset-x-8 inset-y-8 bg-zinc-200/40 rounded-3xl transform translate-y-6 translate-x-3 -rotate-2 blur-sm" />
              
              <div className="relative aspect-video lg:aspect-[3/2] xl:aspect-[16/10] overflow-hidden rounded-3xl bg-zinc-50 border border-black/5 shadow-2xl">
                 <AnimatePresence mode="wait">
                    <motion.div
                       key={activeCat + slideIdx}
                       initial={{ opacity: 0, scale: 0.98, y: 5 }}
                       animate={{ opacity: 1, scale: 1, y: 0 }}
                       exit={{ opacity: 0, scale: 1.02, y: -5 }}
                       transition={{ duration: 0.4, ease: "easeOut" }}
                       className="w-full h-full"
                    >
                       <Card 
                          image={currentImgs[slideIdx]} 
                          id={`${activeCat.toUpperCase()}_LOG_0${slideIdx + 1}`}
                          label={currentCatData.label}
                       />
                    </motion.div>
                 </AnimatePresence>

                 {/* Navigation Overlay */}
                 <div className="absolute inset-0 flex items-center justify-between p-6 pointer-events-none z-30">
                    <button 
                      onClick={handlePrev} 
                      disabled={slideIdx === 0}
                      className={`p-4 rounded-full bg-white/90 text-zinc-950 pointer-events-auto transition-all shadow-xl backdrop-blur-md border border-black/5 ${slideIdx === 0 ? 'opacity-0 scale-50' : 'hover:scale-110 hover:bg-granzort-red hover:text-white'}`}
                    >
                       <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={handleNext} 
                      disabled={slideIdx === currentImgs.length - 1}
                      className={`p-4 rounded-full bg-white/90 text-zinc-950 pointer-events-auto transition-all shadow-xl backdrop-blur-md border border-black/5 ${slideIdx === currentImgs.length - 1 ? 'opacity-0 scale-50' : 'hover:scale-110 hover:bg-granzort-red hover:text-white'}`}
                    >
                       <ChevronRight className="w-6 h-6" />
                    </button>
                 </div>
              </div>
           </div>

           {/* Thumbnails Strip */}
           <div className="flex gap-4 overflow-x-auto pb-4 px-2 no-scrollbar scrollbar-hide">
              {currentImgs.map((img, i) => (
                 <button 
                   key={i} 
                   onClick={() => setSlideIdx(i)} 
                   className={`flex-shrink-0 w-24 h-24 rounded-xl card-deck-frame overflow-hidden transition-all duration-300 shadow-md ${
                     slideIdx === i 
                       ? 'ring-4 ring-hud-cyan scale-105 shadow-xl z-10 opacity-100' 
                       : 'opacity-40 grayscale hover:opacity-80 hover:grayscale-0'
                   }`}
                 >
                    <img src={img} className="w-full h-full object-cover mix-blend-multiply" referrerPolicy="no-referrer" />
                 </button>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
