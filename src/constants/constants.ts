import { Platform } from 'react-native';
import { isIphoneX as defineIsIphoneX } from 'react-native-iphone-x-helper';

const isIos = Platform.OS === 'ios';
const isIphoneX = defineIsIphoneX();

export default {
  isIos,
  isIphoneX,
};
