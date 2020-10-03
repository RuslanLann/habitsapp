import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const AddDataButton = () => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.text}>Add Data</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    marginTop: 30,
    backgroundColor: 'red',
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
