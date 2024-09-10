import { acornRegular } from "@/lib/fonts/font";
import Job from "./Job";
import { prisma } from "@/lib/prisma";

export default async function Experience() {
  const experience = await prisma.eXPERIENCE.findMany();
  return (
    <div className="bg-charcoal-light rounded-lg h-full shadow-lg">
      <p
        className={acornRegular.className + " text-4xl mx-4 my-4 text-balance"}
      >
        Experience
      </p>
      <div className="px-4">
        {experience.map((job, index) => (
          <Job
            key={index}
            company={job.company}
            type={job.type}
            role={job.role}
            location={job.location || ""}
            start={job.start_date}
            end={job.end_date || null}
          />
        ))}
      </div>
    </div>
  );
}