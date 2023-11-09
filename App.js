import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import Home from './home';
import ListScreen from '../screens/list';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Camtion IT"
          component={Login}
          options={{ headerTitle: null }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={ListScreen} /> {/* Perbarui nama komponen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
