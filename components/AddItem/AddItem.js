import React from 'react';

import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

const AddItem = ({ value, onChangeText, handleAddItem }) => {
  return (
    <View style={styles.addItemContainer}>
      <TextInput style={styles.textInput} value={value} onChangeText={onChangeText} placeholder='Agregar Item...' />
      <TouchableOpacity onPress={handleAddItem} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  textInput: {
    backgroundColor: '#f8f5f1',
    padding: 15,
    width: '70%',
    borderRadius: 15,
    color: '#346751',
    marginLeft: 10,
  },
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

export default AddItem;
