import React from 'react';

export default function ProjectCard({project}){
  return (
    <article className="card">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-slate-500">{project.subtitle}</p>
        </div>
        <div className="text-sm text-slate-400">{project.date}</div>
      </div>

      <ul className="mt-4 text-sm text-slate-700 space-y-2">
        {project.bullets.map((b, i) => <li key={i}>• {b}</li>)}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map(t => (
          <span key={t} className="text-xs px-2 py-1 border rounded-full text-slate-600 bg-slate-50">{t}</span>
        ))}
      </div>
    </article>
  );
}
