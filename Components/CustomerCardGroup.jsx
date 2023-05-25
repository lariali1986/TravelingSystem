import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomerCard from './customerCard';

export default function CustomerCardGroup({ data }) {
  const navigation = useNavigation();
  console.log('my type is: ', navigation);
  //const image1 = require('../assets/icon.png');

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={3}
      renderItem={({ item }) => <CustomerCard item={item} />}
      contentContainerStyle={styles.cardGroup}
    />
  );
}

const styles = {
  cardGroup: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
};
