import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

const Item = ({ id, value, handleConfirmDelete }) => {
  const [itemComplete, setItemComplete] = useState(false);

  const touchStyles = {
    backgroundColor: itemComplete ? '#BEF202' : '#CEE5D0',
  };

  const buttonTouchStyles = {
    backgroundColor: itemComplete ? '#519548' : '#a5c7a9',
  };

  const textTouchStyles = {
    color: itemComplete ? '#f8f5f1' : '#000',
    fontWeight: itemComplete ? '600' : '800',
  };

  const handleItemComplete = () => {
    setItemComplete(!itemComplete);
  };

  return (
    <Pressable onPress={handleItemComplete} style={styles.container}>
      <View style={[styles.item, touchStyles]}>
        <Text style={styles.itemText}>{value}</Text>
        <TouchableOpacity
          style={[styles.deleteButton, buttonTouchStyles]}
          onPress={() => handleConfirmDelete({ id, value })}>
          <Text style={[styles.deleteButtonText, textTouchStyles]}>X</Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
  },
  item: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#CEE5D0',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    borderRadius: 15,
    alignSelf: 'center',
  },
  itemText: {
    fontSize: 18,
    fontWeight: '300',
    marginStart: 10,
  },
  deleteButton: {
    backgroundColor: '#a5c7a9',
    width: 40,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  deleteButtonText: {
    fontWeight: '800',
  },
});

export default Item;
