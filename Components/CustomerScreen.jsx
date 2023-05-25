import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { AppContent } from '../store/AppContent';
import { useNavigation } from '@react-navigation/native';

class Customer {
  constructor() {
    this.customerId = '';
    this.name = '';
    this.lastName = '';
    this.dateOfBirth = '';
    this.email = '';
  }
  setId(customerId) {
    this.customerId = customerId;
  }
  setName(name) {
    this.name = name;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  setDateOfBirth(dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  setEmail(email) {
    this.email = email;
  }
}

const CustomerScreen = () => {
  const navigation = useNavigation();
  const { setFcn, storedInfo } = useContext(AppContent);
  const newCustomer = new Customer();
  const [customer, setCustomer] = useState(newCustomer);

  const handleCustomerIdChange = (customerId) => {
    newCustomer.setId(customerId);
    setCustomer(newCustomer);
  };

  const handleNameChange = (name) => {
    newCustomer.setName(name);
    setCustomer(newCustomer);
  };

  const handleLastNameChange = (lastName) => {
    newCustomer.setLastName(lastName);
    setCustomer(newCustomer);
  };

  const handleDateOfBirthChange = (dateOfBirth) => {
    newCustomer.setDateOfBirth(dateOfBirth);
    setCustomer(newCustomer);
  };

  const handleEmailChange = (email) => {
    newCustomer.setEmail(email);
    setCustomer(newCustomer);
  };

  const handleSubmit = () => {
    //setFcn.updateCustomerList([{ name: "aliw" }]);
    console.log('the name is ' + customer.dateOfBirth);
    console.log(
      'this is the list for customersssss ' + storedInfo.customerList
    );
    setFcn.updateCustomerList([
      {
        customerId:customer.customerId,
        name: customer.name,
        lastName: customer.lastName,
        dateOfBirth: customer.dateOfBirth,
        email: customer.email,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Customer Id"
        onChangeText={handleCustomerIdChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={handleNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={handleLastNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        onChangeText={handleDateOfBirthChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={handleEmailChange}
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

export default CustomerScreen;
