import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Modal, Pressable } from 'react-native';
import AddItem from './components/AddItem/AddItem';
import ItemList from './components/ItemList/ItemList';
import ConfirmModal from './components/ConfirmModal/ConfirmModal';

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
    <SafeAreaView style={[styles.container, styles.androidSafeArea]}>
      <ConfirmModal
        title={selectedItem.value}
        text='¿Esta seguro que desea eliminar el item?'
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleDeleteItem={handleDeleteItem}
      />
      <AddItem value={inputValue} onChangeText={setInputValue} handleAddItem={handleAddItem} />
      <ItemList itemList={itemList} handleConfirmDelete={handleConfirmDelete} />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CEE5D0',
  },
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
});
