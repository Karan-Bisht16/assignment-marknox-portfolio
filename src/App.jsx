import { useState, useEffect } from "react";

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

    return (
        <div className="text-blue-800 bg-slate-500 dark:bg-violet-900">
            hey
            <button className="border-red-200 font-thin" onClick={handleToggleTheme}>yo</button>
        </div>
    );
};

export default App;