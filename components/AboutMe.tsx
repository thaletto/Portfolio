import { IoSparkles } from "react-icons/io5";

export default function AboutMe() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-charcoal-light rounded-full mt-8 p-6 md:p-4 md:w-2/3 w-90p">
        <p className="text-pretty flex flex-row items-center">
          <IoSparkles className="mr-2 text-customGreen text-9xl md:text-9xl lg:text-7xl"/>
          Full Stack Developer with a flair for building both sleek front-ends and solid back-ends. I also dive deep into AI—working with deep learning, NLP, image processing, and machine learning. From clean code to complex algorithms, I'm all about solving problems, creating smooth user experiences, and exploring new possibilities in tech.
        </p>
    </div>
    </div>
  );
}