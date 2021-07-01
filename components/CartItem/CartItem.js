import React from 'react';

import { StyleSheet, Text } from 'react-native';
import Card from '../Card/Card';

const CartItem = ({ name, quantity, price }) => {
  return (
    <Card style={styles.item}>
      <Text>
        {name} x{quantity}
      </Text>
      <Text></Text>
      <Text>$ {price * quantity}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
});

export default CartItem;
