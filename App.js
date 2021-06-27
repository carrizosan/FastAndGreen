import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Modal, Pressable } from 'react-native';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import ItemList from './components/ItemList/ItemList';
import ProductsScreen from './screens/ProductsScreen';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [itemList, setItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddItem = () => {
    if (inputValue.trim().length > 0) {
      setItemList([
        ...itemList,
        {
          id: Math.random().toString(),
          value: inputValue,
        },
      ]);
      setInputValue('');
    }
  };

  const handleDeleteItem = () => {
    setItemList(itemList.filter((item) => item.id !== selectedItem.id));
    setSelectedItem({});
    setModalVisible(false);
  };

  const handleConfirmDelete = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <Header title='App' />
      <ProductsScreen />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {},
});
