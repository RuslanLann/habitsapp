import { Dimensions } from 'react-native';

import responsivePixels from './responsivePixels';

const { getHeightPx } = responsivePixels;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const padding = getHeightPx(5);
const borderRadius = 8;

export default {
  screenWidth,
  screenHeight,
  padding,
  borderRadius,
};
