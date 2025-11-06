import React from 'react';
import { Bike, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow">
            <Bike size={20} />
          </span>
          <span className="text-slate-800">KTM Vibes</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#comparison" className="hover:text-slate-900 transition">2-Stroke vs 4-Stroke</a>
          <a href="#designs" className="hover:text-slate-900 transition">Designs & Draws</a>
          <a href="#about" className="group inline-flex items-center gap-1 hover:text-slate-900 transition">
            <Star size={16} className="text-orange-500 group-hover:scale-110 transition" />
            <span>Why Orange</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
