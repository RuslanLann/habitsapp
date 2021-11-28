import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const horizontalPixel = wp('0.283%');
const verticalPixel = hp('0.125%');

const getHeightPx = (pixel: number) => horizontalPixel * pixel; // вопрос: дефолтный экспорт против именного
const getWidthPx = (pixel: number) => verticalPixel * pixel;

export default {
  // вопрос: дефолтный экспорт против именного
  getHeightPx,
  getWidthPx,
};
