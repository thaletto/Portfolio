import { acornRegular } from "@/lib/fonts/font";
import Certificate from "./Certificate";
import { prisma } from "@/lib/prisma";


export default async function Certification() {
    const certificates = await prisma.cERTIFICATES.findMany();

    return (
        <div className="bg-charcoal-light rounded-lg h-full shadow-lg">
        <p
            className={acornRegular.className + " text-4xl mx-4 my-4 text-balance"}
        >
            Certification
        </p>
        <div className="px-4">
            {certificates.map((certificate, index) => (
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
