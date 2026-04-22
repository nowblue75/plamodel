import React from 'react';
import { motion } from 'motion/react';

interface MagicalCircleProps {
  className?: string;
  color?: string;
}

export const MagicalCircle: React.FC<MagicalCircleProps> = ({ 
  className = "", 
  color = "zinc-950" 
}) => (
  <div className={`relative ${className}`}>
    <motion.div 
      animate={{ rotate: 360, scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
      transition={{ 
        rotate: { duration: 25, repeat: Infinity, ease: "linear" }, 
        scale: { duration: 5, repeat: Infinity }, 
        opacity: { duration: 5, repeat: Infinity } 
      }}
      className={`absolute inset-0 border-[1.5px] border-dashed border-${color}/20 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.05)]`}
    />
    <motion.div 
      animate={{ rotate: -360 }}
      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      className={`absolute inset-4 border-[0.5px] border-${color}/10 rounded-full`}
    />
    <motion.div 
       animate={{ rotate: 360 }}
       transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
       className="absolute inset-[15%] border-[1px] border-zinc-950/5 rounded-full flex items-center justify-center font-mono text-[6px] tracking-[2em] text-zinc-950/10"
    >
       GRANZORT_RESONANCE_SYSTEM_ACTIVE
    </motion.div>
    <div className="absolute inset-0 flex items-center justify-center">
       <div className={`w-px h-full bg-gradient-to-b from-transparent via-${color}/10 to-transparent rotate-45`} />
       <div className={`w-px h-full bg-gradient-to-b from-transparent via-${color}/10 to-transparent -rotate-45`} />
       <div className={`w-px h-full bg-gradient-to-b from-transparent via-${color}/10 to-transparent rotate-90`} />
       <div className={`w-px h-full bg-gradient-to-b from-transparent via-${color}/10 to-transparent 0`} />
    </div>
  </div>
);
