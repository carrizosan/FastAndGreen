import React from 'react';

import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Card from '../components/Card/Card';

const CartScreen = ({ handleShowCartScreen, cartItems, setCartItems }) => {
  const handleEndRequest = () => {
    handleShowCartScreen(false);
    setCartItems([]);
  };

  const getTotal = () => {
    let total = 0;
    cartItems.map((item) => (total += item.price * item.quantity));
    console.log(total);
    return total;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Su pedido:</Text>

      <FlatList
        data={cartItems}
        renderItem={(data) => (
          <Card style={styles.item}>
            <Text>
              {data.item.name} x{data.item.quantity}
            </Text>
            <Text>{data.item.price * data.item.quantity}</Text>
          </Card>
        )}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
      <Text style={styles.total}>Total del pedido: $ {getTotal()}</Text>
      <TouchableOpacity onPress={handleEndRequest}>
        <Card style={styles.button}>
          <Text style={styles.buttonText}>Finalizar Pedido</Text>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginVertical: 20,
  },
  flatList: {
    width: '100%',
    height: '65%',
  },
  item: {
    padding: 10,
    width: '90%',
    margin: 10,
  },
  button: {
    padding: 10,
    width: '50%',
    height: 50,
    backgroundColor: '#CCC',
    alignSelf: 'center',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
  total: {
    fontWeight: '800',
    fontSize: 16,
  },
});
export default CartScreen;
