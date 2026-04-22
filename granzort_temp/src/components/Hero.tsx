import React from 'react';
import { motion, useTransform, MotionValue } from 'motion/react';
import { HUDOverlay } from './common/HUDOverlay';
import { MagicalCircle } from './common/MagicalCircle';

interface HeroProps {
  scrollYProgress: MotionValue<number>;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export const Hero: React.FC<HeroProps> = ({ scrollYProgress, mouseX, mouseY }) => {
  const opacityFade = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scaleZoom = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);
  
  const bgTranslateX = useTransform(mouseX, [-500, 500], [25, -25]);
  const bgTranslateY = useTransform(mouseY, [-500, 500], [25, -25]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-white snap-start">
      <motion.div 
        style={{ x: bgTranslateX, y: bgTranslateY, scale: scaleZoom }}
        className="absolute inset-0 z-0"
      >
        <motion.img 
          src="/assets/그랑죠 덱 통합_20260421 (12).jpg" 
          alt="Hero" 
          animate={{ scale: [1.1, 1.15, 1.1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full object-cover object-bottom saturate-[1.2] contrast-[1.1] opacity-30 mix-blend-multiply" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
        <div className="absolute inset-0 light-cyber-grid opacity-25" />
      </motion.div>

      <HUDOverlay />

      <div className="absolute left-6 md:left-24 bottom-24 z-20 hidden lg:flex flex-col gap-12">
        <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-granzort-red text-white text-[10px] font-orbitron font-black px-2.5 py-1 rounded-sm shadow-lg shadow-granzort-red/20">MASTER_DECK</span>
            <span className="text-zinc-400 font-orbitron text-[10px] tracking-widest font-bold uppercase">Reg_Number</span>
          </div>
          <span className="text-zinc-950 font-orbitron text-6xl font-black italic tracking-tighter drop-shadow-sm">MG-GRZ-001</span>
        </motion.div>

        <div className="space-y-6">
          {[
            { label: "CLASS", val: "MADO_KING_TERRA" },
            { label: "HEIGHT", val: "8.0M (BATTLE) / 5.0M (FACE)" },
            { label: "WEIGHT", val: "35.2 TONS" },
            { label: "PRIMARY", val: "ERDE KAISER (엘디카이저)", color: "text-granzort-red" }
          ].map((spec, i) => (
            <motion.div 
              key={spec.label}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + 0.1 * i, duration: 0.5 }}
              className="flex items-start gap-8 border-l-4 border-zinc-950 pl-8 py-1.5"
            >
              <div className="flex flex-col">
                <span className="text-zinc-400 font-orbitron text-[9px] font-black uppercase mb-1.5 tracking-wider">{spec.label}</span>
                <span className={`${spec.color || 'text-zinc-900'} font-orbitron text-base font-black italic`}>{spec.val}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div style={{ opacity: opacityFade }} className="z-30 text-center flex flex-col items-center pointer-events-none">
        <div className="relative mb-0 scale-110 lg:scale-125">
          <MagicalCircle className="w-96 h-96" />
          <div className="absolute inset-0 flex items-center justify-center pt-10">
            <h2 className="text-zinc-950/20 font-mono text-[10px] tracking-[1.8em] font-bold">OPERATIONAL MANUAL</h2>
          </div>
        </div>
        
        <div className="flex flex-col items-center -mt-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-zinc-400 font-orbitron text-sm tracking-[0.6em] mb-3 font-bold block translate-x-[0.3em]"
          >
            魔動王グランゾート
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
            className="text-8xl md:text-[11rem] font-black tracking-tighter mb-8 text-zinc-950 uppercase leading-none"
          >
            그랑죠
          </motion.h1>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
         <span className="text-zinc-300 font-orbitron text-[9px] font-black tracking-widest uppercase">Scroll to Access</span>
         <div className="w-0.5 h-12 bg-gradient-to-b from-granzort-red to-transparent" />
      </motion.div>
    </section>
  );
};
  
