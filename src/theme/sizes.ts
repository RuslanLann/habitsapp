import { Dimensions } from 'react-native';

import { getHeightPx, getWidthPx } from './responsivePixels';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
export const minPadding = getHeightPx(5);
export const borderRadius = 8;

export const buttonHeight = getHeightPx(40);
export const buttonMarginBottom = getHeightPx(15);

export const smallFontSize = getWidthPx(12);
export const mediumFontSize = getWidthPx(16);

export const mediumBigFontSize = getWidthPx(18);
export const bigFontSize = getWidthPx(20);
export const largeFontSize = getWidthPx(24);

export const smallVerticalMargin = getWidthPx(5);
export const mediumVerticalMargin = getWidthPx(10);
export const mediumBigVerticalMargin = getWidthPx(15);
export const bigVerticalMargin = getWidthPx(20);
export const largeVerticalMargin = getWidthPx(30);
