import React from 'react';
import { Scan } from 'lucide-react';

interface HUDOverlayProps {
  activeText?: string;
  className?: string;
}

export const HUDOverlay: React.FC<HUDOverlayProps> = ({ activeText, className = "" }) => (
  <div className={`absolute inset-0 z-10 pointer-events-none p-6 font-mono text-[9px] ${className}`}>
    <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-zinc-950/20" />
    <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-zinc-950/20" />
    <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-zinc-950/20" />
    <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-zinc-950/20" />
    
    <div className="absolute top-10 left-10 flex flex-col gap-1 text-zinc-950/20">
      <div className="flex items-center gap-2">
        <Scan className="w-3 h-3 animate-pulse" />
        <span className="tracking-[0.2em] font-bold">ARC_STREAM_ONLINE</span>
      </div>
      <div className="h-[1px] w-24 bg-gradient-to-r from-zinc-950/20 to-transparent" />
    </div>
    
    {activeText && (
      <div className="absolute top-10 right-10 text-right">
        <div className="text-zinc-950/60 font-bold tracking-[0.3em] mb-1">{activeText}</div>
        <div className="text-zinc-950/20 text-[7px] uppercase font-bold">Synchronizing Optical Data...</div>
      </div>
    )}

    {/* Scanning line effect */}
    <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
       <div className="w-full h-[50%] bg-gradient-to-b from-hud-cyan to-transparent animate-scan-slow" />
    </div>
  </div>
);
