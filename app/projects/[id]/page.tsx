import { notFound } from "next/navigation";
import projectsData from "@/data/Projects.json";
import { acornSemiBold, acornLight } from "@/public/fonts/font";

export async function generateStaticParams() {
  const ids = projectsData.map((item) => item.id);
  return ids.map((id) => ({ id }));
}


export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectsData.find((proj) => proj.id === params.id);

  if (!project) {
    return notFound();
  }

  return (
    <div className="mt-16 mx-8 mb-8">
      <h1 className={`${acornSemiBold.className} text-customGreen text-5xl mb-4`}>
        {project.name}
      </h1>
      <p className="text-slate-300 text-lg mb-2">Date: {project.date}</p>
      <p className="text-slate-400 mb-6 text-pretty">
        {project.notes}
      </p>

      <h2 className={`${acornSemiBold.className} text-2xl text-customGreen mb-4`}>
        Skills / Tools:
      </h2>
      <div className="flex flex-wrap gap-2">
        {project.skills.map((skill, index) => (
          <span
            key={index}
            className="md:text-sm sm:text-xs bg-customGreen p-2 text-charcoal rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {project.url && project.url !== "#" && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-customGreen underline"
        >
          Visit Project
        </a>
      )}
    </div>
  );
}