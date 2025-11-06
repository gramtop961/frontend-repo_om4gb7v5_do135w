import React from 'react';
import { Zap, Wrench, Flame, Gauge } from 'lucide-react';

const points = [
  {
    title: 'Power Delivery',
    two: 'Punchy mid‑range hit, lighter feel. Snappy throttle great for jumps and tight trails.',
    four: 'Linear, tractable torque from low RPM. Easier traction and corner drive.',
    icon: <Zap className="text-emerald-600" size={20} />,
  },
  {
    title: 'Maintenance',
    two: 'Simpler top‑end, fewer moving parts. More frequent top‑end refreshes.',
    four: 'More complex valvetrain. Longer service intervals when maintained.',
    icon: <Wrench className="text-sky-600" size={20} />,
  },
  {
    title: 'Sound & Feel',
    two: 'Distinct braaap with a lively vibe, light chassis flickability.',
    four: 'Deeper thump, planted stability, confidence in choppy sections.',
    icon: <Flame className="text-orange-600" size={20} />,
  },
  {
    title: 'Riding Style',
    two: 'Playful and aggressive. Rewards clutch work and momentum.',
    four: 'Composed and efficient. Rewards smooth throttle control.',
    icon: <Gauge className="text-purple-600" size={20} />,
  },
];

export default function Comparison() {
  return (
    <section id="comparison" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50/60 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">2‑Stroke vs 4‑Stroke</h2>
        <p className="mt-3 text-slate-600 text-center max-w-3xl mx-auto">
          A quick side‑by‑side of what you’ll feel on the trail, in the pits, and during maintenance days.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* 2‑Stroke Card */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-emerald-50 to-cyan-50">
              <h3 className="text-xl font-semibold text-slate-900">2‑Stroke</h3>
              <p className="text-sm text-slate-600">Light, lively, and famously fun.</p>
            </div>
            <ul className="divide-y divide-slate-100">
              {points.map((p, idx) => (
                <li key={idx} className="p-6 flex items-start gap-3">
                  <div className="shrink-0">{p.icon}</div>
                  <div>
                    <p className="font-medium text-slate-900">{p.title}</p>
                    <p className="text-slate-600 text-sm">{p.two}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 4‑Stroke Card */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-sky-50 to-indigo-50">
              <h3 className="text-xl font-semibold text-slate-900">4‑Stroke</h3>
              <p className="text-sm text-slate-600">Stable, tractable, and confidence‑inspiring.</p>
            </div>
            <ul className="divide-y divide-slate-100">
              {points.map((p, idx) => (
                <li key={idx} className="p-6 flex items-start gap-3">
                  <div className="shrink-0">{p.icon}</div>
                  <div>
                    <p className="font-medium text-slate-900">{p.title}</p>
                    <p className="text-slate-600 text-sm">{p.four}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
