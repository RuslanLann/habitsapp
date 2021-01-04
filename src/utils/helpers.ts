import { isIphoneX } from 'react-native-iphone-x-helper';

const isIphoneXTernary = <T, U>(iphoneXValue, value): T | U => (isIphoneX() ? iphoneXValue : value);

export default {
  isIphoneXTernary,
};
