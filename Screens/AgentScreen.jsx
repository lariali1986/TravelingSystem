import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PackageCardGroup from '../Components/PackageCardGroup';
import { AppContent } from '../store/AppContent';
import PackageScreen from '../Components/PackageScreen';
import CustomerScreen from '../Components/CustomerScreen';
import BookingListScreen from '../Components/BookingScreen';
import CustomerCardGroup from '../Components/CustomerCardGroup';
import GenerateReport from '../Components/GenerateReport';
import { useNavigation } from '@react-navigation/native';
import ModifyBookingScreen from './ModifyBookingScreen';

class TravellingSystem {
  generateReport() {
    return 'Generate Report';
  }
  showBookingList() {
    return 'Booking List';
  }
  createPackage() {
    return 'Create Package';
  }
  showCustomerList() {
    return 'Customer List';
  }
  createCustomer() {
    return 'Create Customer';
  }
  showPackageList() {
    return 'Package List';
  }
  editBooking() {
    return 'Modify Booking List';
  }
}

const BUTTONS = [
  { label: 'Package List' },
  { label: 'Create Package' },
  { label: 'Create Customer' },
  { label: 'Customer List' },
  { label: 'Generate Report' },
  { label: 'Booking List' },
  { label: 'Modify Booking List' },
];

const predefinedPackages = require('../data/predefined_packages.json');

export default function AgentScreen() {
  const newTravellingSystem = new TravellingSystem();
  const [activeButton, setActiveButton] = useState('Package List');
  const { setFcn, storedInfo } = useContext(AppContent);
  const navigation = useNavigation();
  console.log(storedInfo.data);

  console.log('i am in the agent');

  const [packages, setPackages] = useState(predefinedPackages);
  const [customerList, setCustomerList] = useState();
  const [report, setReport] = useState();
  const [bookingList, setBookingList] = useState(storedInfo.bookingList);

  const handleButtonPress = (button) => {
    let activeBtn = '';
    switch (button) {
      case 'Create Package':
        activeBtn = newTravellingSystem.createPackage();
        setActiveButton(activeBtn);
        break;
      case 'Package List':
        activeBtn = newTravellingSystem.showPackageList();
        setActiveButton(activeBtn);
        setPackages(storedInfo.data);
        break;
      case 'Create Customer':
        activeBtn = newTravellingSystem.createCustomer();
        setActiveButton('Create Customer');
        setCustomerList(storedInfo.customerList);
        break;
      case 'Customer List':
        setCustomerList(storedInfo.customerList);
        activeBtn = newTravellingSystem.showCustomerList();
        setActiveButton(activeBtn);
        break;
      case 'Generate Report':
        activeBtn = newTravellingSystem.generateReport();
        setActiveButton(activeBtn);
        setReport(storedInfo.report);
        break;
      case 'Booking List':
        activeBtn = newTravellingSystem.showBookingList();
        setActiveButton(activeBtn);
        navigation.navigate(activeBtn);
        break;
      case 'Modify Booking List':
        activeBtn = newTravellingSystem.editBooking();
        setActiveButton(activeBtn);
        navigation.navigate('Modify Booking');
        setActiveButton('Package List');
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        {BUTTONS.map((button) => (
          <TouchableOpacity
            key={button.label}
            style={[
              styles.button,
              button.label === button.label && styles.activeButton,
            ]}
            onPress={() => handleButtonPress(button.label)}
          >
            <Text style={styles.buttonLabel}>{button.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.main}>
        <Text style={styles.header}>{activeButton}</Text>
        {activeButton == 'Package List' && (
          <PackageCardGroup data={packages} style={styles.item} />
        )}
        {activeButton == 'Create Package' && <PackageScreen />}
        {activeButton == 'Create Customer' && <CustomerScreen />}
        {activeButton == 'Customer List' && (
          <CustomerCardGroup data={customerList} style={styles.item} />
        )}
        {activeButton == 'Generate Report' && <GenerateReport data={report} />}
        {activeButton == 'Booking List' && (
          <PackageCardGroup data={packages} style={styles.item} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRightColor: '#cccccc',
    borderRightWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'stretch',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonLabel: {
    color: '#000000',
    fontSize: 16,
  },
  activeButton: {
    backgroundColor: '#ffffff',
  },
  main: {
    flex: 3,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
});
