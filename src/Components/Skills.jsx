import React from 'react';

const skills = [
  'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
  'TailwindCSS', 'PyTorch', 'Scikit-learn', 'Docker', 'Stripe', 'Git'
];

export default function Skills(){
  return (
    <section id="skills">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <p className="mt-2 text-slate-600">Core technologies and tools I use to build production-ready applications.</p>

      <div className="mt-4 flex flex-wrap gap-3">
        {skills.map(s => (
          <span key={s} className="px-3 py-1 rounded-full border text-sm text-slate-700 bg-white">{s}</span>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="font-medium">More About My Skills</h3>
        <div className="text-slate-700 mt-3 space-y-3">
          <p>I specialize in building scalable full-stack web applications with seamless integration across frontend, backend, databases, and cloud infrastructure.</p>
          <p>I’m proficient in React, Node.js, Express, MongoDB, PostgreSQL, and TailwindCSS, with hands-on experience in machine learning (PyTorch, Scikit-learn) and API design.</p>
          <p>Combining engineering fundamentals with analytical problem-solving, I focus on reliable systems that drive measurable impact.</p>
        </div>
      </div>
    </section>
  );
}
