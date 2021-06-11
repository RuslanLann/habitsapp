import { isIphoneX } from 'react-native-iphone-x-helper';

export const isIphoneXTernary = <T, U>(iphoneXValue, value): T | U => (isIphoneX() ? iphoneXValue : value);
