import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import CustomerScreen from './Components/CustomerScreen';
import PackageScreen from './Components/PackageScreen';
import AgentScreen from './Screens/AgentScreen';
import BookingScreen from './Components/BookingScreen';
import AppContentProvider from './store/AppContent';
import BookingListScreen from './Screens/BookingListScreen';
import ModifyBookingScreen from './Screens/ModifyBookingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppContentProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'HOME' }}
          />
          <Stack.Screen
            name="Customer"
            component={CustomerScreen}
            options={{ title: 'Customer Info' }}
          />
          <Stack.Screen
            name="Package"
            component={PackageScreen}
            options={{ title: 'Package Info' }}
          />

          <Stack.Screen
            name="Agent"
            component={AgentScreen}
            options={{ title: 'Agent Workplace' }}
          />

          <Stack.Screen
            name="Booking"
            component={BookingScreen}
            options={{ title: 'Final Booking' }}
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
  );
}

