import React from 'react';

import { StyleSheet, View, Text, FlatList } from 'react-native';
import CustomButton from '../components/Button/Button';
import CartItem from '../components/CartItem/CartItem';

const CartScreen = ({ handleShowCartScreen, cartItems, setCartItems }) => {
  const handleEndRequest = () => {
    handleShowCartScreen(false);
    setCartItems([]);
  };

  const getTotal = () => {
    let total = 0;
    cartItems.map((item) => (total += item.price * item.quantity));
    return total;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Su pedido:</Text>

      <FlatList
        data={cartItems}
        renderItem={(data) => <CartItem {...data.item} />}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
        contentContainerStyle={styles.containerFlatList}
      />
      <Text style={styles.total}>Total del pedido: $ {getTotal()}</Text>

      <View style={styles.buttonsContainer}>
        {/* <CustomButton text='Volver' style={styles.button} /> */}
        <CustomButton text='Finalizar Pedido' style={styles.button} onPress={handleEndRequest} />
      </View>
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
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    width: '40%',
    height: 50,
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
