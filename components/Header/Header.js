import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = ({ title, itemsQuantity, handleShowCartScreen }) => {
  const cart = (
    <TouchableOpacity onPress={() => handleShowCartScreen(true)}>
      <FontAwesome5 name='shopping-cart' size={24} color='black' />
    </TouchableOpacity>
  );

  const showCart = itemsQuantity ? cart : null;

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      {showCart}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: Platform.OS === 'android' ? 36 : 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 30,
    backgroundColor: '#a5c7a9',
  },
  headerTitle: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'Manrope-Light',
  },
  // image: {
  //   flex: 1,
  //   // resizeMode: 'cover',
  //   justifyContent: 'center',
  //   width: '100%',
  //   height: '100%',
  // },
});

export default Header;
