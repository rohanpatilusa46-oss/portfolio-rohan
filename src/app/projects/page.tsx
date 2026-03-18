import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-white">
      <h1 className="text-3xl font-semibold mb-8">Projects</h1>

      <div className="grid grid-cols-3 gap-6">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`}>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-white/60 mt-2">
                {p.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}