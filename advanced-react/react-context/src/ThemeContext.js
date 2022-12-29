import React from 'react';

const ThemeContext = React.createContext(undefined);

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = React.useState("light");

    const toggleTheme = () => {
        theme === "dark" ? theme = "light" : theme = "dark";
        setTheme(theme);
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark" )}}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => React.useContext(ThemeContext);
