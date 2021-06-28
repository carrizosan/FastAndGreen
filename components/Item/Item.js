import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '../Card/Card';
const Item = ({ id, name, price, handleAddCartItem }) => {
  const [itemQuantity, setItemQuantity] = useState(0);

  const handleItemQuantity = (quantity) => {
    if (quantity >= 0) {
      setItemQuantity(quantity);
      handleAddCartItem({ id, name, price, quantity });
    }
  };

  return (
    <Card style={styles.container}>
      <View>
        <Text>{name}</Text>
        <Text>$ {price}</Text>
      </View>
      <View style={styles.itemControlsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleItemQuantity(itemQuantity - 1)}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={styles.itemCount}>{itemQuantity}</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleItemQuantity(itemQuantity + 1)}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
    height: 80,
  },
  itemControlsContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    width: 30,
    alignItems: 'center',
  },
  itemCount: {
    padding: 10,
  },
});

export default Item;
