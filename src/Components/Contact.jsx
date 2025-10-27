import React from 'react';

export default function Contact(){
  return (
    <section id="contact">
      <h2 className="text-2xl font-semibold">Get in touch</h2>
      <p className="mt-3 text-slate-700 max-w-2xl">
        I’m open to discussing new opportunities, collaborations, or project ideas. 
        If you have a role or project where I can contribute, please reach out.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <a href="mailto:you@example.com" className="px-4 py-2 bg-teal-500 text-white rounded-md">Email</a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-md">GitHub</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-md">LinkedIn</a>
      </div>
    </section>
  );
}
