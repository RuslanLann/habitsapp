import { Platform } from 'react-native';
import { isIphoneX as defineIsIphoneX } from 'react-native-iphone-x-helper';

export const isIos = Platform.OS === 'ios';
export const isIphoneX = defineIsIphoneX();
