export interface ISingleTheme {
    turquoiseColor: string; // secondary font color
    backgroudColor: string; // main backgroud color
    borderColor: string; // default border color
    mainFontColor: string; // main font color
}
export interface IThemes {
    dark: ISingleTheme;
    light: ISingleTheme;
}
