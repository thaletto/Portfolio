import { acornRegular } from "@/public/fonts/font";
import certificateData from "@/data/Certificate.json";
import Certificate from "./Certificate";

export default function Certification() {
    return (
        <div className="bg-charcoal-light rounded-lg h-full shadow-lg">
            <p className={acornRegular.className + " text-4xl mx-4 my-4 text-balance"}>
                Certification
            </p>
            <div className="px-4">
                {certificateData.map((certificate, index)=> (
                    <Certificate
                        key={index}
                        name={certificate.name}
                        provider={certificate.provider}
                        date={certificate.date}
                        url={certificate.url}
                        skills={certificate.skills}
                    />
                ))}
            </div>
        </div>
    );
}