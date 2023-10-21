import { IThemes } from "./interface/IThemes";

/**
 * name of the location of task element in localStorage
 */
export const LOCALSTORAGE_DATA_NAME = "tasks";

export const THEMES: IThemes = {
    dark: {
        turquoiseColor: "#12e1b9",
        backgroudColor: "#0a192f",
        borderColor: "black",
        mainFontColor: "#f3f4f4",
    },
    light: {
        turquoiseColor: "#0a192f",
        backgroudColor: "#f3f4f4",
        borderColor: "white",
        mainFontColor: "#0a192f",
    }
}