import Image from "next/image";
import { acornLight, acornRegular } from "@/public/fonts/font";
import { MdLocationOn, MdMail } from "react-icons/md";
import { SiTelegram, SiLinkedin, SiInstagram, SiFacebook, SiThreads, SiLetterboxd, SiGithub, SiLeetcode, SiHuggingface, SiMedium, SiVsco, SiPinterest, SiDribbble } from "react-icons/si";

export default function Contact() {
    return (
        <div>
            {/* Profile Photo */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-center space-y-4 sm:space-y-4 lg:space-y-0 space-x-4 mb-8">
                <div className="w-1/2">
                    <Image
                        src='/images/Profile.jpg'
                        alt="Laxman's photo"
                        width={480}
                        height={640}
                        className="rounded-full"
                    />
                </div>
                <div>
                    <p className={acornRegular.className + " text-4xl md:text-7xl text-customGreen"}>Laxman K R.</p>
                    <p className={acornRegular.className + " text-3xl md:text-5xl"}>a.k.a <span className="text-customGreen">thaletto</span>.</p>
                    <div className="mt-4 space-y-2">
                        <p className="flex items-center text-slate-300"><MdLocationOn className="mr-2 text-2xl text-customGreen"/> Chennai, TN, IN</p>
                        <p className="text-slate-300"><a href="mailto:krlaxman03@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center"><MdMail className="mr-2 text-2xl text-customGreen"/> krlaxman03@gmail.com</a></p>
                        <p className="text-slate-300"><a href="https://t.me/thaletto" target="_blank" rel="noopener noreferrer" className="flex items-center"><SiTelegram className="mr-2 text-2xl text-customGreen"/> thaletto</a></p>
                    </div>
                </div>
            </div>
            {/* Links */}


            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-8 mb-8 gap-6 mt-10 text-customGreen">
                {/* Follow */}
                <div className="bg-charcoal-light p-4 rounded-lg">
                    <p className={acornLight.className + " text-4xl"}>Follow on</p>
                    <div className="text-2xl space-y-2 my-2">
                        <a href="https://linkedin.com/in/laxmanramesh" target="_blank" rel="noopener noreferrer" className="flex items-center" title="LinkedIn"><SiLinkedin className="mr-2"/>laxmanramesh</a>
                        <a href="https://instagram.com/thaletto" target="_blank" rel="noopener noreferrer" className="flex items-center" title="Instagram"><SiInstagram className="mr-2"/>thaletto</a>
                        <a href="https://threads.net/thaletto" target="_blank" rel="noopener noreferrer" className="flex items-center" title="Threads"><SiThreads className="mr-2"/>thaletto</a>
                        <a href="https://facebook.com/100091307439115" target="_blank" rel="noopener noreferrer" className="flex items-center" title="Facebook"><SiFacebook className="mr-2"/>Laxman K R</a>
                        <a href="https://letterboxd.com/thaletto" target="_blank" rel="noopener noreferrer" className="flex items-center" title="Letterboxd"><SiLetterboxd className="mr-2"/>thaletto</a>
                        <a href="https://vsco.co/thaletto" target="_blank" rel="noopener noreferrer" className="flex items-center" title="VSCO"><SiVsco className="mr-2"/>thaletto</a>
                        <a href="https://www.pinterest.com/thaletto/" target="_blank" rel="noopener noreferrer" className="flex items-center" title="Pinterest"><SiPinterest className="mr-2"/>thaletto</a>
                    </div>
                </div>
                {/* Elsewhere */}
                <div className="bg-charcoal-light p-4 rounded-lg">
                    <p className={acornLight.className + " text-4xl"}>Elsewhere</p>
                    <div className="text-2xl space-y-2 my-2">
                        <a href="https://medium.com/@thaletto" target="_blank" rel="noopener noreferrer" className="flex items-center" title="Medium"><SiMedium className="mr-2"/> thaletto</a>
                        <a href="https://github.com/thaletto" target="_blank" rel="noopener noreferrer" className="flex items-center" title="GitHub"><SiGithub className="mr-2"/> thaletto</a>
                        <a href="https://leetcode.com/u/krlaxman03" target="_blank" rel="noopener noreferrer" className="flex items-center" title="Leetcode"><SiLeetcode className="mr-2"/> krlaxman03</a>
                        <a href="https://huggingface.co/thaletto" target="_blank" rel="noopener noreferrer" className="flex items-center" title="Hugging Face"><SiHuggingface className="mr-2"/> thaletto</a>
                        <a href="https://dribbble.com/thaletto" target="_blank" rel="noopener noreferrer" className="flex items-center" title="Dribble"><SiDribbble className="mr-2"/> thaletto</a>
                    </div>
                </div>
            </div>
        </div>
    );
}