import React, { useState } from 'react';
import Header from './components/Header/Header';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import AppLoading from 'expo-app-loading';

import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { products } from './mocks/products';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const [dataLoaded] = useFonts({
    Manrope: require('./assets/fonts/Manrope-Medium.ttf'),
    'Manrope-Light': require('./assets/fonts/Manrope-Light.ttf'),
    'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf'),
  });

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

  if (!dataLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <Header title={headerTitle} itemsQuantity={cartItems.length} handleShowCartScreen={setShowCart} />
      {screen}
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
