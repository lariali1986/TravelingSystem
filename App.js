import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
<<<<<<< HEAD
import CustomerScreen from './Components/CustomerScreen';
import PackageScreen from './Components/PackageScreen';
import AgentScreen from './Screens/AgentScreen';
import BookingScreen from './Components/BookingScreen';
import AppContentProvider from './store/AppContent';
import BookingListScreen from './Screens/BookingListScreen';
import ModifyBookingScreen from './Screens/ModifyBookingScreen';
=======
import AppContentProvider from './store/AppContent';
import SignUpScreen from './Screens/SignupScreen';
import LoginScreen from './Components/LoginScreen';
import FlightBookingScreen from './Screens/FlightBookingScreen';
import { NativeBaseProvider, Text, Box } from "native-base";
>>>>>>> 1aece17de39255c238a1ceb91c91491a667534c0

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
    <AppContentProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          

          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Login' }}
          />

<Stack.Screen
            name="Flight Booking"
            component={FlightBookingScreen}
            options={{ title: 'Flight Booking' }}
          />


          <Stack.Screen
            name="Sign Up"
            component={SignUpScreen}
            options={{ title: 'Sign Up' }}
          />

          <Stack.Screen
            name="Modify Booking"
            component={ModifyBookingScreen}
            options={{ title: 'Modify Booking' }}
          />

          <Stack.Screen
            name="Booking List"
            component={BookingListScreen}
            options={{ title: 'Booking List' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContentProvider>
    </NativeBaseProvider>
  );
}

