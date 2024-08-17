import { acornLight } from "@/public/fonts/font";
import { MdLocationOn } from "react-icons/md";
import { FaUniversity } from "react-icons/fa"; // Add this import for the circle icon

interface TimelineProps {
    institution: string,
    course: string,
    cgpa: string,
    location: string,
    start: string,
    end: string
}

export default function Timeline({ institution, course, cgpa, location, start, end }: TimelineProps) {
    return (
        <div className="mb-8 flex items-start relative">
            {/* Circle icon representing timeline point */}
            <div className="flex flex-col items-center bg-customGreen p-2 rounded-full">
                <p className="text-l text-balance text-charcoal">{end}</p>
            </div>
            
            {/* Content section */}
            <div className="ml-8">
                <p className={acornLight.className + " flex items-center text-2xl text-balance text-customGreen mb-1"}>
                    <FaUniversity className="mr-2 md:text-lg mb-1"/> <strong>{institution}</strong>
                </p>
                <p className="text-l text-slate-300 text-balance">{course} | {cgpa}</p>
                <p className="text-l text-slate-300 flex items-center text-balance">
                    <MdLocationOn className="mr-1"/> {location}
                </p>
            </div>
        </div>
    );
}