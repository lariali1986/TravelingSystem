import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { AppContent } from '../store/AppContent';

class TravelPackage {
  constructor() {
    this.packageId = '';
    this.destinationCity = '';
    this.destinationCountry = '';
    this.numberOfDays = 0;
    this.numberOfNights = 0;
    this.hotelName = '';
    this.price = '';
    this.activities = '';
  }
  setPackageId(packageId) {
    this.packageId = packageId;
  }
  setDestinationCity(city) {
    this.destinationCity = city;
  }

  setDestinationCountry(country) {
    this.destinationCountry = country;
  }

  setNumberOfDays(days) {
    this.numberOfDays = days;
  }

  setNumberOfNights(nights) {
    this.numberOfNights = nights;
  }

  setHotelName(hotelName) {
    this.hotelName = hotelName;
  }

  setPrice(price) {
    this.price = price;
  }

  setActivities(activities) {
    this.activities = activities;
  }
}

const predefinedPackages = require('../data/predefined_packages.json');
const PackageScreen = () => {
  const navigation = useNavigation();
  const newTravelPackage = new TravelPackage();
  const [travelPackage, setTravelPackage] = useState(newTravelPackage);
  const { setFcn, storedInfo } = useContext(AppContent);

  const handlePackageIdChange = (packageId) => {
    newTravelPackage.setPackageId(packageId);
    setTravelPackage(newTravelPackage);
  };

  const handleDestinationCityChange = (city) => {
    newTravelPackage.setDestinationCity(city);
    setTravelPackage(newTravelPackage);
  };

  const handleDestinationCountryChange = (country) => {
    newTravelPackage.setDestinationCountry(country);
    setTravelPackage(newTravelPackage);
  };

  const handleNumberOfDaysChange = (days) => {
    newTravelPackage.setNumberOfDays(parseInt(days));
    setTravelPackage(newTravelPackage);
  };

  const handleNumberOfNightsChange = (nights) => {
    newTravelPackage.setNumberOfNights(parseInt(nights));
    setTravelPackage(newTravelPackage);
  };

  const handleHotelNameChange = (hotelName) => {
    newTravelPackage.setHotelName(hotelName);
    setTravelPackage(newTravelPackage);
  };

  const handlePriceChange = (price) => {
    newTravelPackage.setPrice(parseInt(price));
    setTravelPackage(newTravelPackage);
  };

  const handleActivitiesChange = (activities) => {
    newTravelPackage.setActivities(activities);
    setTravelPackage(newTravelPackage);
  };

  const handleSubmit = () => {
    //setTravelPackage(travelPackage)

    setFcn.updateData([
      {
        packageId: travelPackage.packageId,
        destinationCity: travelPackage.destinationCity,
        destinationCountry: travelPackage.destinationCountry,
        numberOfDays: travelPackage.numberOfDays,
        numberOfNights: travelPackage.numberOfNights,
        hotelName: travelPackage.hotelName,
        price: travelPackage.price,
        activities: travelPackage.activities,
      },
    ]);
    console.log('this is the list for pakagessssss ' + storedInfo.data);
    //navigation.navigate('Agent');
  };

  return (
    <View style={styles.container}>
      <TextInput
        editable={true}
        style={styles.input}
        placeholder="Package Id"
        onChangeText={handlePackageIdChange}
      />

      <TextInput
        editable={true}
        style={styles.input}
        placeholder="Destination Country"
        onChangeText={handleDestinationCountryChange}
      />

      <TextInput
        editable={true}
        style={styles.input}
        placeholder="Destination City"
        onChangeText={handleDestinationCityChange}
      />

      <TextInput
        style={styles.input}
        placeholder="Number of Days"
        onChangeText={handleNumberOfDaysChange}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Nights"
        onChangeText={handleNumberOfNightsChange}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Hotel Name"
        onChangeText={handleHotelNameChange}
      />

      <TextInput
        style={styles.input}
        placeholder="Price"
        onChangeText={handlePriceChange}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Activities"
        onChangeText={handleActivitiesChange}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
});

export default PackageScreen;
