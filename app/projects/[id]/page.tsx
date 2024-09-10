import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { acornSemiBold } from "@/lib/fonts/font";
import VisitProject from "@/components/VisitProject";

export default async function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  const project = await prisma.pROJECTS.findFirst({
    where: {
      id: BigInt(params.id),
    },
  });

  const note = await prisma.nOTES.findFirst({
    where: {
      project_id: BigInt(params.id),
    },
  });

  if (!project) {
    return notFound();
  }

  return (
    <div className="mt-16 mx-4 sm:mx-8 mb-8">
      <h1
        className={`${acornSemiBold.className} text-customGreen text-5xl mb-4`}
      >
        {project.name}
      </h1>
      <p className="text-slate-300 text-lg mb-2">Date: {project.date}</p>
      <p className="bg-charcoal-light p-4 rounded-lg mb-6 text-pretty">{note?.note_text}</p>

      <h2
        className={`${acornSemiBold.className} text-2xl text-customGreen mb-4`}
      >
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

      <VisitProject url={project.url} />
    </div>
  );
}

// ISR
export async function generateStaticParams() {
  const projects = await prisma.pROJECTS.findMany({
    select: { id: true },
  });

  return projects.map((project) => ({ id: project.id.toString() }));
}

export async function generateMetadata() {
  return {
    revalidate: 60, // Revalidate this page every 60 seconds
  };
}