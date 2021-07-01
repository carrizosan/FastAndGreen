import React from 'react';

import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ text, ...props }) => {
  return (
    <TouchableOpacity {...props} style={[styles.button, props.style]}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a5c7a9',
    padding: 12,
    borderRadius: 15,
    width: '15%',
    marginEnd: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 5,
  },
  buttonText: {
    color: '#346751',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CustomButton;
