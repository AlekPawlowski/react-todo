export interface ISingleTheme {
    backgroudColor: string; // main backgroud color
    borderColor: string; // default border color
    mainFontColor: string; // secondary font color
    secondaryFontColor: string; // main font color
}
export interface IThemes {
    dark: ISingleTheme;
    light: ISingleTheme;
}
