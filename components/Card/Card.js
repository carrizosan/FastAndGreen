import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

const Card = (props) => <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default Card;
