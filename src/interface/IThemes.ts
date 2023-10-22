export interface ISingleTheme {
    backgroudColor: string; // main backgroud color
    borderColor: string; // default border color
    mainFontColor: string; // main font color
    secondaryFontColor: string; //secondary font color
}
export interface IThemes {
    dark: ISingleTheme;
    light: ISingleTheme;
}
