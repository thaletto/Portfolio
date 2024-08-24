import { notFound } from "next/navigation";
import { acornSemiBold } from "@/public/fonts/font";
import { prisma } from "@/lib/prisma";

export async function generateStaticParams() {
  const projects = await prisma.projects.findMany({
    select: { id: true }
  });

  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetail({ params }: { params: { id: string } }) {
  const project = await prisma.projects.findFirst({
    where: {
      id: params.id
    }
  });

  const note = await prisma.notes.findFirst({
    where: {
      project_id: params.id
    }
  });

  if (!project) {
    return notFound();
  }

  return (
    <div className="mt-16 mx-4 sm:mx-8 mb-8">
      <h1 className={`${acornSemiBold.className} text-customGreen text-5xl mb-4`}>
        {project.name}
      </h1>
      <p className="text-slate-300 text-lg mb-2">Date: {project.date}</p>
      <p className="text-slate-400 mb-6 text-pretty">
        {note?.note_text}
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