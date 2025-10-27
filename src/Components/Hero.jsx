import React from 'react';

export default function Hero(){
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Build. Ship. Optimize.
        </h1>
        <p className="mt-4 text-slate-600 max-w-xl">
          I design and build scalable full‑stack applications, ML integrations, and high-performance APIs—focused on
          impact, clarity, and reliability.
        </p>

        <div className="mt-6 flex gap-4">
          <a href="#projects" className="inline-block px-4 py-2 bg-teal-500 text-white rounded-md shadow-sm">See Projects</a>
          <a href="#contact" className="inline-block px-4 py-2 border border-slate-200 rounded-md text-slate-700">Get in touch</a>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold">Quick summary</h3>
        <ul className="mt-3 text-sm text-slate-600 space-y-2">
          <li><strong>Stack:</strong> React, Node.js, Express</li>
          <li><strong>Databases:</strong> MongoDB, PostgreSQL</li>
          <li><strong>ML:</strong> PyTorch, Scikit-learn</li>
          <li><strong>Deploy:</strong> Vercel, cloud inference</li>
        </ul>
      </div>
    </section>
  );
}
