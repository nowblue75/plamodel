import React from 'react';
import { motion } from 'motion/react';

interface CinematicEffectProps {
  type: string;
}

export const CinematicEffect: React.FC<CinematicEffectProps> = ({ type }) => {
  switch (type) {
    case 'SCAN_SWEEP':
      return (
        <motion.div 
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-hud-cyan shadow-[0_0_15px_rgba(33,158,188,0.8)] z-10"
        />
      );
    case 'EYE_GLOW':
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-1/2 h-1/2 bg-hud-cyan/10 blur-[60px] rounded-full"
          />
        </div>
      );
    case 'ENERGY_PULSE':
      return (
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 bg-hud-cyan/5 rounded-lg z-10"
        />
      );
    case 'CENTER_PULSE':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [0.2, 2.5], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-24 h-24 border border-hud-cyan/40 rounded-full"
          />
          <motion.div 
            animate={{ scale: [0.2, 1.8], opacity: [0.4, 0] }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
            className="w-24 h-24 border border-hud-cyan/30 rounded-full"
          />
        </div>
      );
    default:
      return null;
  }
};
