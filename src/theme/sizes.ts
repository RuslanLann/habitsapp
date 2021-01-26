import { Dimensions } from 'react-native';

import responsivePixels from './responsivePixels';

const { getHeightPx } = responsivePixels;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const padding = getHeightPx(5);
const borderRadius = 8;

const buttonHeight = responsivePixels.getHeightPx(40);
const buttonMarginBottom = responsivePixels.getHeightPx(15);

const smallFontSize = responsivePixels.getWidthPx(12);
const mediumFontSize = responsivePixels.getWidthPx(16);
const mediumBigFontSize = responsivePixels.getWidthPx(18);
const bigFontSize = responsivePixels.getWidthPx(20);
const largeFontSize = responsivePixels.getWidthPx(24);

export default {
  screenWidth,
  screenHeight,
  padding,
  borderRadius,
  buttonHeight,
  buttonMarginBottom,
  smallFontSize,
  mediumFontSize,
  mediumBigFontSize,
  bigFontSize,
  largeFontSize,
};
