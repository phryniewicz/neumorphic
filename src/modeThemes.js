import { computeColor, colorCodes } from './constants';

export const lightTheme = {
    body: computeColor(colorCodes.white.light, 1),
    text: computeColor(colorCodes.black.light, 1),
    toggleBorder: computeColor(colorCodes.white.lightest, 1)
  };
  
  export const darkTheme = {
    body: computeColor(colorCodes.black.light, 1),
    text: computeColor(colorCodes.white.light, 1),
    toggleBorder: computeColor(colorCodes.blue.lightest, 1),
  };
  