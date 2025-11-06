import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        {/* 3D scene background */}
        <Spline scene="https://prod.spline.design/u8yQh1dUphK6P6N2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Dirt Bike Engines: 2‑Stroke vs 4‑Stroke
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
          Explore how these off‑road legends differ in feel, power delivery, maintenance, and sound — all wrapped in a clean, modern design with artistic touches.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#comparison" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition shadow">Compare Engines</a>
          <a href="#designs" className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 transition shadow-sm">See Designs</a>
        </div>
      </div>
    </section>
  );
}
