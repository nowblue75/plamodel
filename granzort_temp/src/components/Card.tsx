import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface CardProps {
  image: string;
  id: string;
  stats?: { atk: string; def: string };
  rarity?: number;
  label?: string;
  isSmall?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  image, 
  id, 
  stats = { atk: "8500", def: "9200" }, 
  rarity = 5,
  label = "TERRA_UNIT",
  isSmall = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group ${isSmall ? 'w-24 h-24' : 'w-full h-full'} card-deck-frame bg-white shadow-2xl overflow-hidden cursor-pointer selection:bg-transparent`}
    >
      <div className="absolute inset-0 card-gloss opacity-20" />

      {/* Main Image */}
      <div className="w-full h-full relative p-6 flex items-center justify-center">
         <img 
           src={image} 
           alt={id}
           className="max-w-full max-h-full object-contain mix-blend-multiply drop-shadow-[0_15px_35px_rgba(0,0,0,0.05)] transition-transform duration-700 group-hover:scale-105"
           referrerPolicy="no-referrer"
         />
      </div>

      {!isSmall && (
        <>
          {/* All bottom technical info removed for a cleaner look */}
        </>
      )}

      {/* Decorative Corners */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-zinc-950/10" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-zinc-950/10" />
    </motion.div>
  );
};
