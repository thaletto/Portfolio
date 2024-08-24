import { acornSemiBold, acornLight } from "@/public/fonts/font";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Projects() {
  const projects = await prisma.projects.findMany();

  return (
    <div className="mt-16">
      <div className="flex flex-col items-center justify-center">
        <p
          className={
            acornSemiBold.className +
            " text-5xl md:text-7xl sm:text-6xl text-customGreen text-balance"
          }
        >
          My Projects.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 sm:mx-8 mb-8 gap-6 mt-10">
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <div
              className="cursor-pointer bg-charcoal-light p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 space-y-4 transform hover:scale-90 hover:bg-charcoal-dark"
            >
              <div>
                <a
                  className={`${acornLight.className} text-3xl font-bold text-customGreen`}
                >
                  {project.name}
                </a>
                <p className="text-slate-300">{project.date}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="md:text-sm sm:text-xs text-xs bg-customGreen p-2 text-charcoal rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}