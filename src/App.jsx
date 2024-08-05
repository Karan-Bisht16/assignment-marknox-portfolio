import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import TechStack from "./Components/TechStack";

function App() {
    // setting up dark and light mode
    const [theme, setTheme] = useState(localStorage.getItem("portfolio-theme"));
    useEffect(() => {
        // check in local storage;
        const localStorageTheme = localStorage.getItem("portfolio-theme");
        if (localStorageTheme) {
            setTheme(localStorageTheme);
        } else {
            // else check user prefferece
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setTheme("dark");
            } else {
                setTheme("light")
            }
        }
    }, []);
    useEffect(() => {
        // update classList if any modification to theme happens
        if (theme === "dark") { document.documentElement.classList.add("dark") }
        else if (theme === "light") { document.documentElement.classList.remove("dark") }
    }, [theme]);
    function handleToggleTheme() {
        const tempTheme = theme;
        setTheme(theme === "light" ? "dark" : "light");
        localStorage.setItem("portfolio-theme", tempTheme === "dark" ? "light" : "dark");
    }
    // for smooth animate on scroll 
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
            <div className="bg-slate-300 dark:bg-slate-900">
                <div className="pt-24 sm:pt-36 mx-4 sm:mx-20 text-slate-800 dark:text-white">
                    <ol className="relative border-s-2 py-24 border-violet-700">
                        <Home />
                    </ol>
                </div>
            </div>
            <div className="flex justify-center align-middlerelative z-0 bg-slate-100 dark:bg-gray-800">
                <div className="mx-4 sm:mx-20 w-screen text-slate-800 dark:text-white">
                    <ol className="pt-10 relative border-s-2 border-violet-700">
                        <About />
                        <Projects />
                        <TechStack />
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default App;