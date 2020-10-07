import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, constants, sizes } from '../../constants';

const AddDataButton = () => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.text}>Add Data</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: 50,
    marginTop: 30,
    position: 'absolute',
    bottom: constants.isIos ? 5 : 15,
    right: sizes.PADDING_HORIZONTAL,
    left: sizes.PADDING_HORIZONTAL,
    backgroundColor: colors.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default AddDataButton;
