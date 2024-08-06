import { FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
    // Array of social media links with icons and URLs
    const socialLinks = [
        {
            icon: <FaInstagram />,
            href: "https://instagram.com/karan_b1603"
        },
        {
            icon: <FaTwitter />,
            href: "https://twitter.com/karan_b1603"
        },
        {
            icon: <FaGithub />,
            href: "https://github.com/Karan-Bisht16"
        },
        {
            icon: <FaLinkedin />,
            href: "https://www.linkedin.com/in/karan-bisht-583918254/"
        },
    ];

    return (
        <footer className="px-6 pt-10 pb-6 w-full text-slate-800 dark:text-white bg-gradient-to-t from-slate-400 to-gray-100 dark:from-black dark:to-indigo-950">
            <div className="flex justify-between items-center">
                <div>
                    <div className=" w-[60px] text-3xl sm:text-5xl p-2 rounded-xl bg-white select-none flex align-middle">
                        <span className="font-bold text-black">K
                            <span className="font-extrabold text-violet-700">.</span>
                        </span>
                    </div>
                    &copy; {new Date().getFullYear()} Karan Bisht
                    <p className="flex gap-1 items-center">Made with <FaHeart className="text-red-700" /></p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-xl font-semibold text-right">Contact</p>
                    <div className="flex gap-2">
                        {socialLinks.map(({ icon, href }, index) => (
                            <a key={index} href={href} target="_blank" rel="noreferrer" className="text-3xl">
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;