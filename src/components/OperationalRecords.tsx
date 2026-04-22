import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Play, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { CINEMATIC_SCENES } from '../constants';
import { CinematicEffect } from './common/CinematicEffect';

export const OperationalRecords: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [playingId, setPlayingId] = useState<number | null>(null);

  const activeScene = CINEMATIC_SCENES[selectedIdx];

  const handleNext = () => {
    setSelectedIdx(prev => (prev === CINEMATIC_SCENES.length - 1 ? 0 : prev + 1));
    setPlayingId(null);
  };

  const handlePrev = () => {
    setSelectedIdx(prev => (prev === 0 ? CINEMATIC_SCENES.length - 1 : prev - 1));
    setPlayingId(null);
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-white light-cyber-grid relative overflow-hidden border-y border-black/5 snap-start">
      <div className="max-w-7xl w-full mx-auto px-6 relative">
        {/* Section Header */}
        <div className="flex items-center gap-8 mb-12 card-deck-frame p-8 bg-white/90 backdrop-blur-2xl shadow-sm">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <Star className="w-4 h-4 text-granzort-gold fill-current" />
              <span className="text-[10px] font-orbitron text-granzort-red font-black tracking-[0.4em] uppercase">OPERATIONAL_RECORDS // PT-01</span>
            </div>
            <h2 className="text-6xl font-black font-orbitron tracking-tighter uppercase text-zinc-950">Deck_Log_01</h2>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-zinc-200 to-transparent" />
          <span className="text-zinc-950 font-orbitron text-5xl font-black italic opacity-10">PT-01</span>
        </div>

        <div className="flex flex-col gap-8">
          {/* Info Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col md:flex-row justify-between items-start gap-12"
            >
              <div className="max-w-3xl flex-1 px-4">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="bg-hud-cyan text-white text-[10px] font-orbitron font-black px-3 py-1 tracking-widest shadow-lg shadow-hud-cyan/20 rounded-sm">LIVE_FEED</div>
                    <span className="text-zinc-400 font-mono text-[10px] tracking-widest uppercase font-bold">{activeScene.sub}</span>
                 </div>
                 <h3 className="text-6xl font-black text-zinc-950 uppercase tracking-tighter mb-6 font-orbitron italic leading-none">{activeScene.title}</h3>
                 <p className="text-zinc-500 text-base leading-relaxed font-normal max-w-2xl pl-8 border-l-4 border-hud-cyan/30 italic">
                   {activeScene.desc}
                 </p>
              </div>
              
              <div className="grid grid-cols-2 gap-x-12 gap-y-6 card-deck-frame p-8 bg-zinc-50/50">
                 {[
                   { l: "SYNC_RATE", v: "98.5%", c: "text-hud-cyan" },
                   { l: "STATUS", v: "STABLE", c: "text-green-600" },
                   { l: "CH_ID", v: `DEV_0${selectedIdx + 1}`, c: "text-zinc-950" },
                   { l: "PHASE", v: "ACTIVE", c: "text-zinc-950" }
                 ].map((d, i) => (
                   <div key={i} className="flex flex-col">
                      <span className="text-[10px] font-orbitron text-zinc-400 mb-1.5 tracking-widest font-black">{d.l}</span>
                      <span className={`text-xl font-black font-orbitron ${d.c}`}>{d.v}</span>
                   </div>
                 ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Main Display Area */}
          <div className="relative w-full aspect-video md:aspect-[21/9] card-deck-frame overflow-hidden bg-zinc-100 shadow-3xl group">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIdx + (playingId ? '_video' : '_img')}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="absolute inset-0"
              >
                {playingId === activeScene.id ? (
                  <video 
                    src={activeScene.video} 
                    autoPlay 
                    onEnded={() => setPlayingId(null)}
                    playsInline
                    className="w-full h-full object-cover saturate-[1.2] contrast-[1.1]" 
                  />
                ) : (
                  <img 
                    src={activeScene.img} 
                    className="w-full h-full object-cover saturate-0 opacity-40 mix-blend-multiply group-hover:saturate-100 group-hover:opacity-100 transition-all duration-1000" 
                    referrerPolicy="no-referrer" 
                  />
                )}
                <div className="card-gloss opacity-30" />
                <CinematicEffect type={activeScene.effect} />
                
                {/* HUD Elements over Video */}
                <div className="absolute inset-0 pointer-events-none p-10 flex flex-col justify-between">
                   <div className="flex justify-between items-start opacity-40">
                      <div className="font-mono text-[8px] text-zinc-950 flex gap-4">
                         <span>SEC_LEVEL: ALPHA</span>
                         <span>CAM_ID: ARC_01</span>
                      </div>
                      <div className="w-12 h-0.5 bg-zinc-950/20" />
                   </div>
                   <div className="flex justify-between items-end opacity-40 font-mono text-[8px] text-zinc-950">
                      <div className="flex gap-4">
                         <span>REC ●</span>
                         <span>00:24:{selectedIdx}8:04</span>
                      </div>
                      <span>ENCRYPT_MODE_AES256</span>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {playingId !== activeScene.id && (
              <button 
                onClick={() => setPlayingId(activeScene.id)} 
                className="absolute inset-0 flex items-center justify-center z-30 group/play"
              >
                 <motion.div 
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.9 }}
                   className="w-28 h-28 rounded-full bg-white/60 border border-zinc-950/10 backdrop-blur-xl flex items-center justify-center text-zinc-950 shadow-2xl group-hover/play:bg-granzort-red group-hover/play:text-white group-hover/play:border-granzort-red transition-all duration-500"
                 >
                    <Play className="w-12 h-12 fill-current translate-x-1.5" />
                 </motion.div>
              </button>
            )}

            {/* Navigation Arrows */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between p-8 pointer-events-none z-40">
              <button 
                onClick={handlePrev}
                className="p-5 rounded-full bg-white/30 text-zinc-950 pointer-events-auto hover:bg-zinc-950 hover:text-white hover:scale-110 transition-all backdrop-blur-xl border border-black/5 shadow-xl"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button 
                onClick={handleNext}
                className="p-5 rounded-full bg-white/30 text-zinc-950 pointer-events-auto hover:bg-zinc-950 hover:text-white hover:scale-110 transition-all backdrop-blur-xl border border-black/5 shadow-xl"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-8 overflow-x-auto pb-4 px-4 no-scrollbar scrollbar-hide">
            {CINEMATIC_SCENES.map((scene, idx) => (
              <button
                key={scene.id}
                onClick={() => { setSelectedIdx(idx); setPlayingId(null); }}
                className={`flex-shrink-0 w-64 md:w-80 aspect-video card-deck-frame transition-all duration-500 relative group overflow-hidden ${
                  selectedIdx === idx 
                    ? 'ring-4 ring-granzort-red border-transparent shadow-2xl scale-105 z-10' 
                    : 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105'
                }`}
              >
                <img src={scene.img} className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {selectedIdx === idx && (
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="absolute top-3 right-3 bg-granzort-red p-1.5 rounded-sm shadow-xl"
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                )}
                
                <div className="absolute bottom-4 left-4 flex flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                   <span className="text-white font-orbitron font-black text-[9px] tracking-widest">{scene.title}</span>
                   <span className="text-white/60 font-mono text-[7px]">{scene.sub}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
  
