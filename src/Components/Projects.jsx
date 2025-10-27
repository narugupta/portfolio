import React from 'react';
import ProjectCard from './ProjectCard';

const data = [
  {
    title: 'SnapTrack',
    subtitle: 'Scalable SaaS Collaboration Platform',
    date: 'Oct 2025',
    bullets: [
      'Managed 50+ projects and tasks via a full-stack SaaS app using React, Node.js, Express, and MongoDB.',
      'Integrated secure auth, role-based access, and Stripe payments; automated onboarding emails with Nodemailer — onboarding efficiency +30%.',
      'Designed responsive UI with TailwindCSS, improving cross-device usability and retention.',
      'Deployed end-to-end to cloud ensuring availability and reliability.'
    ],
    tags: ['SaaS','Stripe','React','MongoDB']
  },
  {
    title: 'Fleet Flow',
    subtitle: 'AI-Powered Fleet Management',
    date: 'Jul 2025',
    bullets: [
      'Architected logistics platform integrating ML models to optimize dispatch across 31 city zones.',
      'Shipped demand forecasting (MAE 15%) and shipment classification (92% accuracy), reducing idle fleet time by 18%.',
      'Deployed frontend on Vercel and hosted ML inference via Hugging Face (Gradio).'
    ],
    tags: ['ML','Logistics','PyTorch','Vercel']
  },
  {
    title: 'InsightDash',
    subtitle: 'Data-Driven CRM Dashboard',
    date: 'Apr 2025',
    bullets: [
      'Built React + Node.js + PostgreSQL dashboard to manage 1000+ customer interactions and automate sales tracking.',
      'Designed relational schema with many-to-many relationships and real-time CRUD operations.',
      'Created interactive Chart.js dashboards visualizing lead conversion and team performance — efficiency +25%.'
    ],
    tags: ['PostgreSQL','Charts','React']
  },
  {
    title: 'EquiFlow',
    subtitle: 'Game-Theoretic Traffic Simulator (GitHub)',
    date: '2025',
    bullets: [
      'High-performance C++ simulator to compute Nash equilibria in selfish routing.',
      'Applied MSA and optimized Dijkstra implementations to model BPR congestion.',
      'Replicated Braess’s Paradox demonstrating counter-intuitive network behavior.'
    ],
    tags: ['C++','Simulation','Research']
  }
];

export default function Projects(){
  return (
    <section id="projects">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <p className="mt-2 text-slate-600">Selected projects showcasing full-stack systems, ML integrations, and simulation work.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {data.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  );
}
