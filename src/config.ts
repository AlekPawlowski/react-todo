import { IThemes } from "./interface/IThemes";

/**
 * name of the location of task element in localStorage
 */
export const LOCALSTORAGE_DATA_NAME = "tasks";

export const THEMES: IThemes = {
    dark: {
        backgroudColor: "#0a192f",
        borderColor: "black",
        mainFontColor: "#12e1b9",
        secondaryFontColor: "#f3f4f4",
    },
    light: {
        backgroudColor: "beige",
        borderColor: "white",
        mainFontColor: "#3E2723",
        secondaryFontColor: "#3E2723",
    }
}