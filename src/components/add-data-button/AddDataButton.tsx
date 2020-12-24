import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import { sizes, themeProvider } from '../../theme';
import { constants } from '../../constants';

const BUTTON_SIZE = 50;
const ICON_SIZE = 30;

const AddDataButton = () => (
  <TouchableOpacity style={styles.button}>
    <Icon name="add-outline" size={ICON_SIZE} color="#ffffff" style={styles.icon} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE,
    position: 'absolute',
    bottom: constants.isIos ? 5 : 15,
    left: sizes.screenWidth / 2 - BUTTON_SIZE / 2,
    backgroundColor: themeProvider.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
  },
});

export default AddDataButton;
