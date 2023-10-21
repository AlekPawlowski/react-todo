import { createContext, useEffect, useState } from "react";
import { THEMES } from "../config";
import { ISingleTheme, IThemes } from "../interface/IThemes";
import { IThemeSelectContext } from "../interface/IThemeSelectContext";

export const ThemeSelectContext = createContext<IThemeSelectContext | null>(null);

const setCSSVariables = (theme: ISingleTheme) => {
    for (const value in theme) {
        document.documentElement.style.setProperty(`--${value}`, theme[value as keyof ISingleTheme]);
    }
};

export const ThemeSelectContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [themeName, setThemeName] = useState("dark");
    const [theme, setTheme] = useState(THEMES[themeName  as keyof IThemes]);

    const toogleTheme = () => {
        if( theme === THEMES.dark) {
            setTheme(THEMES.light)
            setThemeName("light");
        } else {
            setTheme(THEMES.dark)
            setThemeName("dark");
        }
    }
        
    useEffect(() => {
        setCSSVariables(theme);
    })

    return <ThemeSelectContext.Provider value={{ themeName, toogleTheme }}>
        {children}
    </ThemeSelectContext.Provider>
}
