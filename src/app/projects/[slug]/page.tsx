import { projects } from "@/lib/projects";

export default function ProjectPage({ params }: any) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return <div className="section">Not found</div>;

  return (
    <div className="section">
      <h1 className="text-4xl font-bold">{project.title}</h1>

      <p className="mt-6 text-gray-400">{project.description}</p>

      <h2 className="mt-10 text-2xl font-semibold">Tech Stack</h2>
      <div className="flex gap-3 mt-3">
        {project.tech.map((t) => (
          <span key={t} className="bg-white/10 px-3 py-1 rounded">
            {t}
          </span>
        ))}
      </div>

      <h2 className="mt-10 text-2xl font-semibold">Results</h2>
      <p className="mt-2 text-green-400">{project.metrics}</p>
    </div>
  );
}