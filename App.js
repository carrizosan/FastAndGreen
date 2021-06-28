import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import Header from './components/Header/Header';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import { StyleSheet, Text, SafeAreaView, View, Modal, Pressable } from 'react-native';
import { products } from './mocks/products';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddCartItem = (item) => {
    const filteredCart = cartItems.filter((element) => element.id !== item.id);

    if (item.quantity === 0) {
      setCartItems(filteredCart);
    } else {
      setCartItems([...filteredCart, item]);
    }
  };
  let headerTitle = showCart ? 'Carrito' : 'Productos';

  let screen = <ProductsScreen handleAddCartItem={handleAddCartItem} products={products} />;

  if (showCart) {
    screen = <CartScreen cartItems={cartItems} handleShowCartScreen={setShowCart} setCartItems={setCartItems} />;
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <Header title={headerTitle} itemsQuantity={cartItems.length} handleShowCartScreen={setShowCart} />
      {screen}
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {},
});
