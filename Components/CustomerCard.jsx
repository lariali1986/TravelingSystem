import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CustomerCard({ item }) {
  function pressHandler(item) {
    //future use
  }

  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{ uri: require('../assets/human.png') }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.city}>{'Id: ' + item.customerId}</Text>
        <Text style={styles.country}>{'Name: ' + item.name}</Text>
        <Text style={styles.city}>{'Last Name: ' + item.lastName}</Text>
        <Text style={styles.country}>
          {'Date of Birth: ' + item.dateOfBirth}
        </Text>
        <Text style={styles.city}>{'Email: ' + item.email}</Text>
        {false && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => pressHandler(item)}
          >
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    margin: 6,
    width: '30%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  textContainer: {
    padding: 6,
    alignItems: 'center',
  },
  country: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  city: {
    fontSize: 10,
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
};
