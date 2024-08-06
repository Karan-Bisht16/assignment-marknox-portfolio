import { FaNodeJs, FaHtml5, FaJs, FaCss3Alt, FaReact, FaJava, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Dot from "./SubComponents/Dot";
import SkillCard from "./SubComponents/SkillCard";
import backgroundImage from "../assets/img-background.jpg"
import { Heading, Paragraph } from "./SubComponents/TextSubComponents";

function TechStack() {
    const techs = [
        { src: <FaHtml5 />, title: "HTML", color: "text-orange-500", shadow: "shadow-orange-500" },
        { src: <FaCss3Alt />, title: "CSS", color: "text-[#214ce5]", shadow: "shadow-[#214ce5]" },
        { src: <FaJs />, title: "JavaScript", color: "text-yellow-400", shadow: "shadow-yellow-400" },
        { src: <FaBootstrap />, title: "Bootstrap", color: "text-[#8d1aff]", shadow: "shadow-[#8d1aff]" },
        { src: <SiMongodb />, title: "MongoDB", color: "text-green-500", shadow: "shadow-green-500" },
        { src: <SiExpress />, title: "Express", color: "text-gray-400", shadow: "shadow-gray-400" },
        { src: <FaReact />, title: "React", color: "text-[#58d2f3]", shadow: "shadow-[#58d2f3]" },
        { src: <FaNodeJs />, title: "Node JS", color: "text-[#7fc728]", shadow: "shadow-[#7fc728]" },
        { src: <FaGitAlt />, title: "Git", color: "text-[#f05639]", shadow: "shadow-[#f05639]" },
        { src: <FaGithub />, title: "GitHub", color: "text-black", shadow: "shadow-black" },
        { src: <RiTailwindCssFill />, title: "Tailwind CSS", color: "text-[#3ebff8]", shadow: "shadow-[#3ebff8]" },
        { src: <FaJava />, title: "JAVA", color: "text-[#ed272c]", shadow: "shadow-[#ed272c]" },
    ];

    return (
        <li name="tech stack" className="pt-4 sm:pt-16 ms-4">
            <Dot />
            <div className="relative -top-4">
                <Heading title="Tech Stack" />
                <Paragraph content=
                    {`These are the technologies I've worked with:`}
                />
                <div className="max-w-screen-lg mx-auto w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ src, title, color, shadow }, index) => (
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            key={index}
                            className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${shadow}`}
                        >
                            <SkillCard title={title} src={src} color={color} />
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center sm:mt-24">
                <motion.img
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    src={backgroundImage}
                    alt="my profile"
                    className="rounded-2xl resize-none mx-auto w-11/12"
                />
                <p className="text-xl font-semibold">Thanks for stopping by !</p>
            </div>
            <Dot />
            <time className="text-md font-normal leading-none text-gray-800 dark:text-gray-400">&lt;end/&gt;</time>
        </li>
    );
};

export default TechStack;
