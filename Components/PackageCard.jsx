import React from 'react';
<<<<<<< HEAD
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
=======
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, } from '@react-navigation/native';
import { useContext, useState } from 'react';
>>>>>>> 1aece17de39255c238a1ceb91c91491a667534c0
import { AppContent } from '../store/AppContent';

export default function PackageCard({ item }) {
  const navigation = useNavigation();
  const { storedInfo, setFcn } = useContext(AppContent);
<<<<<<< HEAD

  function pressHandler(item) {
    let report = storedInfo.report;

    const objectToUpdate = report.find(
      (obj) => obj.packageId === item.packageId
    );
    console.log('this is the package id' + item.packageId);

    if (objectToUpdate) {
      console.log('I am here and the object exists');
      console.log('this is object to updateId' + objectToUpdate.packageId);
      // Update the value of the property
      objectToUpdate.numOfBooking += 1;
      setFcn.updateReport(report);

    } else {
      console.log('I am here and the object doesnot exist');

      setFcn.addReport([
        { packageId: item.packageId, price: item.price, numOfBooking: 1 },
      ]);
    }

    console.log(item.destinationCity);
    navigation.navigate('Booking', { id: item.packageId });
=======
  const [isLogin, setIsLogin]=useState(false);

  function pressHandler() {
    if (!isLogin){
      alert("Please Login First")
    }
>>>>>>> 1aece17de39255c238a1ceb91c91491a667534c0
  }

  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{ uri: require('../assets/icon.png') }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
<<<<<<< HEAD
        <Text style={styles.country}>{item.packageId}</Text>
        <Text style={styles.country}>{item.destinationCountry}</Text>
        <Text style={styles.city}>{item.destinationCity}</Text>
        <Text style={styles.city}>{item.numberOfDays + ' Days'}</Text>
        <Text style={styles.city}>{item.numberOfNights + ' Nights'}</Text>
        <Text style={styles.city}>{'Hotel ' + item.hotelName}</Text>
        <Text style={styles.city}>{item.price + ' $'}</Text>
        <Text style={styles.city}>{'Activities: ' + item.activities}</Text>
=======
        <Text style={styles.textBold}>
          {item.destinationCountry + ', ' + item.destinationCity}
        </Text>
        <Text style={styles.textNotBold}>
          {item.numberOfDays + ' Days, ' + item.numberOfNights + ' Nights'}
        </Text>
        <Text style={styles.textBold}>{'Hotel ' + item.hotelName}</Text>
        <Text style={styles.textNotBold}>{item.price + ' $'}</Text>
        <Text style={styles.textNotBold}>
          {'Activities: ' + item.activities}
        </Text>
>>>>>>> 1aece17de39255c238a1ceb91c91491a667534c0
        <TouchableOpacity
          style={styles.button}
          onPress={() => pressHandler(item)}
        >
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    margin: 8,
    width: '100%',
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
    width: '40%',
    height: 120,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 6,
    alignItems: 'center',
    width: '60%',
  },
  textBold: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  textNotBold: {
    fontSize: 10,
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 8,
  },
};
