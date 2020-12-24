import { Dimensions } from 'react-native';

import responsivePixels from './responsivePixels';

const { responsiveWidth } = responsivePixels;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const paddingHorizontal = responsiveWidth(15);

export default {
  screenWidth,
  screenHeight,
  paddingHorizontal,
};
