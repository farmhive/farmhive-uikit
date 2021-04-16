import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#31572C",
  primaryBright: "#4F772D",
  primaryDark: "#132A13",
  secondary: "#90A955",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ECF39E",
  backgroundDisabled: "#c4d1dd",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#46557d",
  tertiary: "#EFF4F5",
  text: "#31572C",
  textDisabled: "#828b93",
  textSubtle: "#46557d",
  borderColor: "#98a3ac",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #4F772D 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#90A955",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#132A13",
  tertiary: "#353547",
  text: "#31572C",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #132A13 0%, #191326 100%)",
  },
};
