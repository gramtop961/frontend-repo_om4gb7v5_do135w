import React from 'react';

const ktmPal = {
  primary: 'text-orange-600',
  accent: 'text-amber-600',
};

const designs = [
  {
    title: 'Minimal Line Art',
    desc: 'Clean contour drawing celebrating KTM geometry.',
    svg: (
      <svg viewBox="0 0 400 180" className="w-full h-40">
        <path d="M30 120 C80 60, 140 60, 200 120 S320 180, 360 120" stroke="currentColor" strokeWidth="3" fill="none" className={`${ktmPal.primary}`} />
        <circle cx="100" cy="130" r="28" stroke="currentColor" strokeWidth="3" fill="none" className="text-slate-900"/>
        <circle cx="290" cy="130" r="28" stroke="currentColor" strokeWidth="3" fill="none" className="text-slate-900"/>
        <path d="M120 100 L200 80 L260 96" stroke="currentColor" strokeWidth="3" fill="none" className={`${ktmPal.accent}`} />
        <path d="M160 70 L190 55 L210 58" stroke="currentColor" strokeWidth="3" fill="none" className={`${ktmPal.primary}`} />
      </svg>
    )
  },
  {
    title: 'Geometric Blocks',
    desc: 'Bold orange shapes with factory‑race energy.',
    svg: (
      <svg viewBox="0 0 400 180" className="w-full h-40">
        <rect x="60" y="90" width="90" height="40" className="fill-orange-500/20 stroke-orange-600" strokeWidth="3"/>
        <rect x="160" y="80" width="120" height="50" className="fill-amber-500/20 stroke-amber-600" strokeWidth="3"/>
        <polygon points="280,80 340,95 320,130 240,130" className="fill-orange-500/10" stroke="currentColor" strokeWidth="3"/>
        <circle cx="110" cy="135" r="26" stroke="currentColor" strokeWidth="3" fill="none"/>
        <circle cx="300" cy="135" r="26" stroke="currentColor" strokeWidth="3" fill="none"/>
      </svg>
    )
  },
  {
    title: 'Abstract Motion',
    desc: 'Fluid lines that feel like roost and flow.',
    svg: (
      <svg viewBox="0 0 400 180" className="w-full h-40">
        <path d="M20 100 Q120 40, 220 100 T420 100" stroke="currentColor" strokeWidth="2.5" fill="none" className={`${ktmPal.primary}`} />
        <path d="M40 120 Q140 70, 240 120 T440 120" stroke="currentColor" strokeWidth="2" fill="none" className={`${ktmPal.accent}`} />
        <path d="M60 140 Q160 100, 260 140 T460 140" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-slate-400" />
      </svg>
    )
  }
];

export default function DesignGallery() {
  return (
    <section id="designs" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Designs & Draws</h2>
        <p className="mt-3 text-slate-600 text-center max-w-3xl mx-auto">
          KTM‑inspired sketches and abstract shapes in a clean gallery.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {designs.map((d) => (
            <div key={d.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="mb-4 text-slate-900">{d.svg}</div>
              <h3 className="font-semibold text-slate-900">{d.title}</h3>
              <p className="text-sm text-slate-600">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
