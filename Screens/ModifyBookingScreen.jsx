import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { AppContent } from '../store/AppContent';
import { useContext, useState } from 'react';

function Item({ customer, travelPackage, departureDate, handleCancel }) {
  return (
    <View
      style={{ padding: 10, backgroundColor: '#FFEFD5', flexDirection: 'row' }}
    >
      <View style={{ flex: 1 }}>
        <Text>Customer ID: {customer.customerId}</Text>
        <Text>Name: {customer.name}</Text>
        <Text>Last Name: {customer.lastName}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Package ID: {travelPackage.packageId}</Text>
        <Text>Destination City: {travelPackage.destinationCity}</Text>
        <Text>Destination Country: {travelPackage.destinationCountry}</Text>
        <Text>Number of Days: {travelPackage.numberOfDays}</Text>
        <Text>Number of Nights: {travelPackage.numberOfNights}</Text>
        <Text>Hotel Name: {travelPackage.hotelName}</Text>
        <Text>Price: ${travelPackage.price}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Departure Date: {departureDate}</Text>
      </View>
      <TouchableOpacity
        style={{ alignSelf: 'center' }}
        onPress={() =>
          handleCancel(customer.customerId, travelPackage.packageId)
        }
      >
        <Text style={{ color: 'red', fontWeight: 'bold' }}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function ModifyBookingScreen() {
  const { storedInfo, setFcn } = useContext(AppContent);
  const [bookingList, setBookingList] = useState(storedInfo.bookingList);

  const handleCancel = (customerId, packageId) => {
    const curBookingList = storedInfo.bookingList;
    const updatedBookingList = curBookingList.filter(
      (obj) =>
        obj.customer.customerId !== customerId ||
        obj.travelPackage.packageId !== packageId
    );
    console.log('this is: ', JSON.stringify(curBookingList));
    console.log(
      'this is updated book list: ' + JSON.stringify(updatedBookingList)
    );

    setBookingList(updatedBookingList);
    setFcn.updateBookingList(updatedBookingList);
  };

  const renderItem = ({ item }) => (
    <Item
      customer={item.customer}
      travelPackage={item.travelPackage}
      departureDate={item.departureDate}
      handleCancel={handleCancel}
    />
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={bookingList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
