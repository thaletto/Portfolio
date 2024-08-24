import { acornRegular } from "@/public/fonts/font";
import Timeline from "./Timeline";
import { prisma } from "@/lib/prisma";

export default async function Education() {
  const education = await prisma.education.findMany();

  return (
    <div className="bg-charcoal-light rounded-lg h-full shadow-lg">
      <p className={acornRegular.className + " text-4xl mx-4 my-4 text-balance"}>
        Education
      </p>
      <div className="relative px-4">
        {/* Vertical Line */}
        <div className="absolute top-0 left-11 w-px bg-customGreen h-full -z-1"></div>
        
        {education.map((item, index) => (
          <Timeline
          key={index}
          institution={item.institution}
          course={item.course}
          cgpa={item.cgpa || ""}
          location={item.location || ""}
          start={item.start_year?.toString() || ""}
          end={item.end_year?.toString() || ""}
          />
        ))}
      </div>
    </div>
  );
}