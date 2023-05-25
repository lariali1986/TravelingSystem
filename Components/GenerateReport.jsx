import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useContext } from 'react';
import { AppContent } from '../store/AppContent';

const data = [
  { packageId: 1, price: 1200, numOfBooking: 1 },
  { packageId: 2, price: 1500, numOfBooking: 2 },
  { packageId: 3, price: 1800, numOfBooking: 3 },
];

const Item = ({ packageId, price, numOfBooking, packageRevenue }) => (
  <View style={{ padding: 10 }}>
    <Text>Package ID: {packageId}</Text>
    <Text>Price: ${price}</Text>
    <Text>Number of Bookings: {numOfBooking}</Text>
    <Text>Package Revenue: {packageRevenue + ' $'}</Text>
  </View>
);

export default function GenerateReport() {
  const { storedInfo } = useContext(AppContent);

  const lastBookingList = storedInfo.bookingList;

  ///spars the last booking list to find the package informaiton and the numbre of booking
  const reportArray = [];
  for (let index in lastBookingList) {
    const singleTravelPackage = lastBookingList[index].travelPackage;
    const tempObj = {
      packageId: singleTravelPackage.packageId,
      price: singleTravelPackage.price,
      numOfBooking: 1,
    };
    reportArray.push(tempObj);
  }
  //count the number of repeated IDs
  const idCount = {};
  for (let i = 0; i < reportArray.length; i++) {
    const id = reportArray[i].packageId;

    if (idCount[id]) {
      idCount[id]++;
    } else {
      idCount[id] = 1;
    }
  }
  console.log('This is idCont' + JSON.stringify(idCount));
  const finalReportArray = [];

  for (let i = 0; i < reportArray.length; i++) {
    const object = reportArray[i];
    const id = object.packageId;
    const price = object.price;
    const numOfBooking = idCount[id];
    const packageRevenue = price * numOfBooking;

    if (!finalReportArray.find((item) => item.packageId === id)) {
      finalReportArray.push({
        packageId: id,
        numOfBooking: numOfBooking,
        price: price,
        packageRevenue: packageRevenue,
      });
    }
  }
  //////////////

  const renderItem = ({ item }) => (
    <Item
      packageId={item.packageId}
      price={item.price}
      numOfBooking={item.numOfBooking}
      packageRevenue={item.packageRevenue}
    />
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={finalReportArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.packageId.toString()}
      />
    </View>
  );
}
