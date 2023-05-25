import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContent } from '../store/AppContent';

class BookingSystem {
  constructor() {
    this.customer = '';
    this.travalPackage = '';
    this.departureDate = '';
  }
  setCustomer(customer) {
    this.customer = customer;
  }
  setTravelPackage(travelPackage) {
    this.travalPackag = travelPackage;
  }

  setDepartureDate(departureDate) {
    this.departureDate = departureDate;
  }
}

export default function BookingScreen({ route }) {
  const { setFcn, storedInfo } = useContext(AppContent);
  const navigation = useNavigation();
  const [customerId, setCustomerId] = useState('');
  const [packageId, setPackageId] = useState('');
  const newBookingSystem = new BookingSystem();
  const [booking, setBooking] = useState(newBookingSystem);
  
  console.log('The report are ' + JSON.stringify(storedInfo.report));
  let a=JSON.stringify(storedInfo.data[0]);
  let b=JSON.parse(a);
  console.log(b.destinationCity)


  const handleCustomerIdChange = (customerId) => {
    let customerArray=JSON.parse(JSON.stringify(storedInfo.customerList));
    const customer = customerArray.find(
      (obj) => obj.customerId === customerId
    );
    newBookingSystem.setCustomer(customer);
    setBooking(newBookingSystem);
  };

  const handleDepartureDateChange = (departureDate) => {
    newBookingSystem.setDepartureDate(departureDate);
    setBooking(newBookingSystem);
  };


  console.log('the route is: ' + route);
  const { id } = route.params;

  const handleSubmit = () => {

    let packageArray=JSON.parse(JSON.stringify(storedInfo.data));

    const travelPackage = packageArray.find(
      (obj) => obj.packageId === id
    );
    newBookingSystem.setTravelPackage(travelPackage);
    setFcn.bookingListAdd([{customer:newBookingSystem.customer, travelPackage:newBookingSystem.travalPackag,
    departureDate:newBookingSystem.departureDate}]);

    navigation.navigate('Booking List');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {'Enter the Customer Id for Package Id: ' + id}
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Customer ID"
          onChangeText={handleCustomerIdChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Departure Date"
          onChangeText={handleDepartureDateChange}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  form: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
});
