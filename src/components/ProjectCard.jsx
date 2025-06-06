// src/components/ProjectCard.jsx
export default function ProjectCard({ title, desc, link }) {
    return (
      <a href={link} className="block border p-4 rounded-xl shadow hover:bg-gray-100">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{desc}</p>
      </a>
    );
  }
  