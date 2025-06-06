// src/pages/Projects.jsx
import ProjectCard from "../components/ProjectCard";
export default function Projects() {
  const projects = [
    { title: "PureDrop", desc: "Portable water purifier startup idea.", link: "#" },
    { title: "Option Pricing Engine", desc: "Black-Scholes & Monte Carlo simulation.", link: "#" },
    { title: "Laundry App", desc: "Laundry automation system for hostels.", link: "#" },
  ];
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}