import { motion } from "framer-motion";
import { MdWeb } from "react-icons/md";
import { ButtonIcon } from "./TextSubComponents";
import { FaCode } from "react-icons/fa";

function ProjectCard({ project }) {
    const { title, date, src, websiteLink, githubRepositoryLink, content } = project;

    return (
        <motion.div
            initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}
            className="lg:grid grid-cols-4 border-2 border-slate-800 rounded-lg my-2"
        >
            <div className="select-none border-2 border-slate-800 rounded-lg md:border-none shadow-md hover:shadow-[0px_0px_20px_2.5px_#00000024]">
                <div className="group/card relative">
                    <img src={src} alt="project img" className="relative z-10 rounded-md rounded-tr-md lg:rounded-tr-none lg:rounded-br-none border-slate-800" />
                    <div className="absolute top-0 left-0 z-20 w-full h-full flex gap-10 justify-center items-center bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-75">
                        <ButtonIcon link={websiteLink} text="Website Demo" icon={<MdWeb />} sx="-left-[44px]" />
                        <ButtonIcon link={githubRepositoryLink} text="GitHub Repository" icon={<FaCode />} sx="-left-[57px]" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.1 }}
                        className="lg:hidden absolute top-0 left-0 w-full h-full hidden p-2 bg-gradient-to-b from-gray-200 to-violet-400 dark:from-slate-800 dark:to-black
                                lg:rounded-tr-lg lg:rounded-bl-none rounded-bl-lg rounded-br-lg 
                                lg:group-hover/card:translate-x-full group-hover/card:block group-hover/card:z-30 
                                lg:group-hover/card:hidden lg:group-hover/card:translate-y-0  group-hover/card:translate-y-[98%]"
                    >
                        {content}
                    </motion.div>
                </div>
            </div >
            <div className="hidden lg:flex col-span-3 items-center px-4 border-l-2 border-slate-800 rounded-tr-md rounded-br-md bg-slate-300 dark:bg-slate-700">
                <div>
                    <p className="lg:text-lg xl:text-2xl font-semibold">{title}</p>
                    <p className="lg:text-sm xl:text-lg font-normal">{date}</p>
                    <p className="lg:text-xs xl:text-sm">{content}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;