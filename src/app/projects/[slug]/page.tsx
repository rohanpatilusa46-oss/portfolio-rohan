import { projects } from "@/lib/projects";
import ProjectClient from "./ProjectClient";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Required in latest Next.js
  const { slug } = await params;

  // 🔍 Find project
  const project = projects.find((p) => p.slug === slug);

  // ❌ If not found
  if (!project) {
    return <div className="section">Not found</div>;
  }

  // ✅ Pass everything to client component
  return <ProjectClient project={project} />;
}