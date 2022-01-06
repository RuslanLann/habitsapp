import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const horizontalPixel = wp('0.283%');
export const verticalPixel = hp('0.125%');

export const getHeightPx = (pixel: number) => horizontalPixel * pixel;
export const getWidthPx = (pixel: number) => verticalPixel * pixel;
