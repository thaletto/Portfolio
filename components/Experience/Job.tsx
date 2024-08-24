import { calculateDuration } from "@/utils/utils";
import { acornLight } from "@/public/fonts/font";
import { MdLocationOn } from "react-icons/md";

interface JobProps {
  company: string;
  type: string;
  role: string;
  location: string;
  start: Date;
  end?: Date | null;
}

export default function Job({
  company,
  type,
  role,
  location,
  start,
  end,
}: JobProps) {
  const isPresent = !end;
  const startDate = new Date(start);
  const endDate = isPresent ? new Date() : new Date(end!);
  const duration = calculateDuration(startDate, endDate);
  const formattedStartDate = startDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
  const formattedEndDate = isPresent
    ? "Present"
    : endDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });

  return (
    <div className="bg-customGreen rounded-lg mb-8 p-4 text-charcoal">
      <p className={acornLight.className + " text-2xl"}>
        <strong>{company}</strong>
      </p>
      <p className="text-xl">
        {role} | {type}
      </p>
      <p className="text-xl">
        {formattedStartDate} - {formattedEndDate}
      </p>
      {duration !== "0 months" && <p className="text-xl">{duration}</p>}
      <p className="text-xl flex items-center">
        <MdLocationOn className="mr-1" /> {location}
      </p>
    </div>
  );
}