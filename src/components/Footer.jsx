import React from 'react';

export default function Footer() {
  return (
    <footer id="about" className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h4 className="text-lg font-semibold text-slate-900">About this KTM‑inspired mini‑site</h4>
          <p className="mt-2 text-slate-600">
            A tribute to the orange spirit — celebrating both 2‑stroke and 4‑stroke character with clean visuals and simple sketches.
          </p>
        </div>
        <div className="md:justify-self-end text-sm text-slate-500">
          <p>Ride safe. Maintain often. Respect the trails.</p>
        </div>
      </div>
    </footer>
  );
}
