import { acornRegular } from "@/public/fonts/font";
import experienceData from "@/data/Experience.json";
import Job from "./Job";

export default function Experience() {
  return (
    <div className="bg-charcoal-light rounded-lg h-full shadow-lg">
      <p
        className={acornRegular.className + " text-4xl mx-4 my-4 text-balance"}
      >
        Experience
      </p>
      <div className="px-4">
        {experienceData.map((job, index) => (
          <Job
            key={index}
            company={job.company}
            type={job.type}
            role={job.role}
            location={job.location}
            start={job.start}
            end={job.end}
          />
        ))}
      </div>
    </div>
  );
}
