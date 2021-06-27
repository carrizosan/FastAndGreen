import React from 'react';
import Card from '../components/Card/Card';

import { categories } from '../mocks/categories';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      {categories?.map((item) => (
        <TouchableOpacity style={styles.cardContainer}>
          <Card key={item.id} style={styles.card}>
            <Text>{item.name}</Text>
          </Card>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardContainer: {
    width: '40%',
    height: 150,
    margin: 10,
  },
  card: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
