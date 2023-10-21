import { useContext } from "react"
import { ThemeSelectContext } from "../../context/ThemeSelectContext"
import { IThemeSelectContext } from "../../interface/IThemeSelectContext";
import './ThemeSelect.style.scss';

export const ThemeSelect = () => {
    const {themeName, toogleTheme} = useContext(ThemeSelectContext) as IThemeSelectContext;

    return <section className="theme_select_container">
        <button className="theme_select_btn" onClick={toogleTheme}>{themeName} mode</button>
    </section>
}