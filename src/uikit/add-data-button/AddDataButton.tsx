import React, { FC, ReactElement } from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import { sizes, themeProvider } from '../../theme';
import { isIphoneXTernary } from '../../utils/helpers/commonHelpers';

const BUTTON_SIZE = 50;
const ICON_SIZE = 30;

interface IAddDataButton {
  onPress: () => void;
}

const AddDataButton: FC<IAddDataButton> = ({ onPress }): ReactElement => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name="add-outline" size={ICON_SIZE} color="#ffffff" style={styles.icon} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    position: 'absolute',
    bottom: isIphoneXTernary(25, 15),
    left: sizes.screenWidth / 2 - BUTTON_SIZE / 2,
    ...themeProvider.boxShadow,
    shadowColor: themeProvider.colors.primary,
    zIndex: 99,
  } as ViewStyle,
  button: {
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE,
    backgroundColor: themeProvider.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  } as ViewStyle,
  icon: {
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    paddingLeft: 1,
    lineHeight: BUTTON_SIZE,
    textAlign: 'center',
  } as ViewStyle,
});

export default AddDataButton;
