import { acornRegular, acornLight } from "@/lib/fonts/font";
import {
  SiAndroidstudio,
  SiGooglecolab,
  SiVisualstudiocode,
  SiGithub,
  SiIntellijidea,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiC,
  SiLangchain,
  SiKotlin,
  SiHaskell,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTableau,
  SiJetpackcompose,
  SiMaterialdesign,
  SiPandas,
  SiWindows11,
  SiLinux,
  SiTensorflow,
  SiPytorch,
  SiFlask,
  SiExpress,
  SiPostman,
  SiJirasoftware,
  SiPrisma,
  SiVercel,
  SiGit,
  SiJenkins
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { MdDataExploration, MdAnalytics } from "react-icons/md";
import { IoLogoFirebase } from "react-icons/io5";

export default function Skills() {
  const iconClass = "grid grid-cols-6 sm:grid-cols-6 md:grid-cols-5 gap-4 mt-2 text-2xl";
  
  return (
    <div className="bg-charcoal-light rounded-lg h-full shadow-lg">
      <p className={acornRegular.className + " text-4xl mx-4 my-4 text-balance"}>
        Skills
      </p>
      <div className="px-4">
        {/* Languages */}
        <div>
          <p className={acornLight.className + " text-2xl text-customGreen"}>
            Languages
          </p>
          <div className={iconClass}>
            <FaJava title="Java" />
            <SiPython title="Python" />
            <SiJavascript title="JavaScript" />
            <SiTypescript title="TypeScript" />
            <SiCplusplus title="C++" />
            <SiC title="C" />
            <SiKotlin title="Kotlin" />
            <SiHaskell title="Haskell" />
          </div>
        </div>

        {/* Frameworks */}
        <div className="mt-8">
          <p className={acornLight.className + " text-2xl text-customGreen"}>
            Frameworks
          </p>
          <div className={iconClass}>
            <SiNextdotjs title="Next.js" />
            <SiReact title="React" />
            <SiNodedotjs title="Node.js" />
            <SiExpress title="Express.js" />
            <SiTailwindcss title="Tailwind CSS" />
            <SiFlask title="Flask" />
            <SiMaterialdesign title="Material Design" />
            <SiJetpackcompose title="Jetpack Compose" />
          </div>
        </div>

        {/* AI */}
        <div className="mt-8">
          <p className={acornLight.className + " text-2xl text-customGreen"}>
            Data Science & AI
          </p>
          <div className={iconClass}>
            <SiPandas title="Pandas" />
            <SiTensorflow title="TensorFlow" />
            <SiPytorch title="PyTorch" />
            <SiLangchain title="LangChain" />
            <MdDataExploration  title="Exploratory Data Analysis"/>
            <MdAnalytics title="Data Analytics" />
            <SiTableau title="Tableau"/>
            <SiGooglecolab title="Google Colab" />
          </div>
        </div>

        {/* Tools */}
        <div className="mt-8">
          <p className={acornLight.className + " text-2xl text-customGreen"}>
            Tools & Software
          </p>
          <div className={iconClass}>
            <SiVisualstudiocode title="Visual Studio Code" />
            <SiAndroidstudio title="Android Studio" />
            <SiIntellijidea title="Intellij Idea" />
            <SiPostgresql title="PostgreSQL" />
            <SiMongodb title="MongoDB" />
            <IoLogoFirebase title="Firebase" />
            <SiMysql title="MySQL" />
            <SiPostman title="Postman"/>
            <SiJirasoftware title="Atlassian JIRA" />
            <SiPrisma title="Prisma" />
          </div>
        </div>

        {/* Deployment */}
        <div className="mt-8">
          <p className={acornLight.className + " text-2xl text-customGreen"}>
            Deployment
          </p>
          <div className={iconClass}>
            <SiVercel title="Vercel" />
            <SiGit title="Git" />
            <SiGithub title="GitHub" />
          </div>
        </div>

        {/* OS */}
        <div className="my-8">
          <p className={acornLight.className + " text-2xl text-customGreen"}>
            Operating System
          </p>
          <div className={iconClass}>
            <SiWindows11 title="Windows" />
            <SiLinux title="Linux" />
          </div>
        </div>
      </div>
    </div>
  );
}