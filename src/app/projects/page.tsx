import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import Pipeline from "@/components/Pipeline";

export default function ProjectsPage() {
  return (
    <div className="section">
      
      <h1 className="text-4xl font-bold text-center mb-6">
        Projects
      </h1>

      {/* 🔥 PIPELINE FIRST */}
      <Pipeline />

      {/* spacing */}
      <div className="mt-16" />

      {/* PROJECTS */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            slug={p.slug}
            title={p.title}
            description={p.description}
            tags={p.tech}
            metrics={p.metrics}
            github={p.github}
            demo={p.demo}
          />
        ))}
      </div>

    </div>
  );
}