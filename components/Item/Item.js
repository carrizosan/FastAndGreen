import React, { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Card from '../Card/Card';
import CustomButton from '../Button/Button';

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
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>$ {price}</Text>
      </View>
      <View style={styles.itemControlsContainer}>
        <CustomButton style={styles.button} onPress={() => handleItemQuantity(itemQuantity - 1)} text='-' />
        <Text style={styles.itemCount}>{itemQuantity}</Text>
        <CustomButton style={styles.button} onPress={() => handleItemQuantity(itemQuantity + 1)} text='+' />
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
  productInfo: {
    width: '60%',
    height: '100%',
    padding: 5,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    fontFamily: 'Manrope',
  },
  productPrice: {
    fontWeight: '600',
  },
  itemControlsContainer: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    width: 35,
    alignItems: 'center',
  },
  itemCount: {
    padding: 10,
  },
});

export default Item;
