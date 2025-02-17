import { useContext } from "react"
import { ThemeSelectContext } from "../../context/ThemeSelectContext"
import { IThemeSelectContext } from "../../interface/IThemeSelectContext";
import './ThemeSelect.style.scss';

/**
 * Component that change theme based on context.
 */
export const ThemeSelect = () => {
    // get our theme context
    const {themeName, toogleTheme} = useContext(ThemeSelectContext) as IThemeSelectContext;
    // we want to show opposite of current theme
    const oppositeThemeName = themeName === "dark" ? "light" : "dark";
    return <section className="theme_select_container">
        <button className="theme_select_btn" onClick={toogleTheme}>{oppositeThemeName} mode</button>
    </section>
}