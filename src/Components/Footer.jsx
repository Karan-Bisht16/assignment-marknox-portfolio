import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
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
        <footer className=" px-4 pt-10 pb-6 bg-gradient-to-t from-slate-500 via-slate-300 to-slate-100 dark:from-gray-950 dark:via-slate-900 dark:to-slate-800 w-full text-slate-800 dark:text-white">
            <p className="text-xl">- By Karan Bisht</p>
            <div className="flex gap-2 ml-3 mt-2">
                {socialLinks.map(({ icon, href }, index) => (
                    <a key={index} href={href} target="_blank" rel="noreferrer" className="text-3xl">
                        {icon}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;