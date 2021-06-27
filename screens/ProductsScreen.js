import React from 'react';
import Card from '../components/Card/Card';

import { products } from '../mocks/products';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';

const ProductsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={products}
          renderItem={(data) => (
            <TouchableOpacity style={styles.cardContainer}>
              <Card style={styles.card}>
                <Text>{data.item.name}</Text>
                <Text>$ {data.item.price}</Text>
              </Card>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}></FlatList>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
    flex: 1,
  },
  container: {
    marginTop: 40,
    marginBottom: 80,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardContainer: {
    width: '100%',
    height: 100,
    marginVertical: 10,
    alignItems: 'center',
  },
  card: {
    width: '90%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductsScreen;
