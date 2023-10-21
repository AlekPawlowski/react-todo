import { useContext } from "react"
import { ThemeSelectContext } from "../../context/ThemeSelectContext"
import { IThemeSelectContext } from "../../interface/IThemeSelectContext";

export const ThemeSelect = () => {
    const {themeName, toogleTheme} = useContext(ThemeSelectContext) as IThemeSelectContext;

    return <button className="theme_select_btn" onClick={toogleTheme}>{themeName} mode</button>
}