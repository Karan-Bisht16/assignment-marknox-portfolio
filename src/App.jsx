import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import TechStack from "./Components/TechStack";
import Footer from "./Components/Footer";

function App() {
    // State to manage the theme (dark or light mode)
    const [theme, setTheme] = useState(localStorage.getItem("portfolio-theme"));
    useEffect(() => {
        // Retrieve theme from local storage on initial load
        const localStorageTheme = localStorage.getItem("portfolio-theme");
        if (localStorageTheme) {
            setTheme(localStorageTheme);
        } else {
            // If no theme in local storage, check user's system preference
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setTheme("dark");
            } else {
                setTheme("light")
            }
        }
    }, []);
    useEffect(() => {
        // Update the classList of the document element based on theme changes
        if (theme === "dark") { document.documentElement.classList.add("dark") }
        else if (theme === "light") { document.documentElement.classList.remove("dark") }
    }, [theme]);
    // Function to toggle between light and dark themes
    function handleToggleTheme() {
        const tempTheme = theme;
        setTheme(theme === "light" ? "dark" : "light");
        localStorage.setItem("portfolio-theme", tempTheme === "dark" ? "light" : "dark");
    }
    // Add scroll event listener to animate header on scroll
    useEffect(() => {
        let lastScrollTop;
        const headerContainer = document.getElementById("headerContainer");
        window.addEventListener("scroll", function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                headerContainer.style.top = "-80px";
            } else {
                headerContainer.style.top = "0";
            }
            lastScrollTop = scrollTop;
        });
    });

    return (
        <div className={theme}>
            <div id="headerContainer" className="fixed top-0 left-0 z-10">
                <Header theme={theme} handleToggleTheme={handleToggleTheme} />
            </div>
            <div className="bg-slate-300 dark:bg-black">
                <div className="pt-24 sm:pt-18 mx-4 sm:mx-20 text-slate-800 dark:text-white">
                    <ol className="relative border-s-2 pb-2 lg:py-24 border-violet-700">
                        <Home theme={theme} />
                    </ol>
                </div>
            </div>
            <div className="flex justify-center align-middle relative z-0 bg-gradient-to-b from-gray-200 to-gray-100 dark:from-gray-900 dark:to-indigo-950">
                <div className="mx-4 sm:mx-20 w-screen text-slate-800 dark:text-white">
                    <ol className="pt-4 relative border-s-2 border-violet-700">
                        <About />
                        <Projects />
                        <TechStack />
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;