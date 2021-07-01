import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Item from '../Item/Item';

const ItemList = ({ itemList, handleConfirmDelete }) => {
  return (
    <View style={styles.itemsContainer}>
      <FlatList
        style={styles.flatList}
        data={itemList}
        renderItem={(data) => <Item {...data.item} handleConfirmDelete={handleConfirmDelete}></Item>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
    flex: 1,
  },
  itemsContainer: {
    marginTop: 40,
    paddingBottom: 100,
    width: '100%',
    height: '100%',
    paddingTop: 40,
    backgroundColor: '#f8f5f1',
  },
});

export default ItemList;
