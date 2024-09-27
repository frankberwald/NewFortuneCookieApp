import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import AboutScreen from './screens/AboutScreen';
import CookieScreen from './screens/CookieScreen';
import FortuneScreen from './screens/FortuneScreen';
import ManyCookies from './screens/ManyCookies';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown: false}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} options={{headerShown: false}} />
        <Stack.Screen name="CookieScreen" component={CookieScreen} options={{headerShown: false}}/>
        <Stack.Screen name="FortuneScreen" component={FortuneScreen} options={{headerShown: false}} />
        <Stack.Screen name="ManyCookies" component={ManyCookies} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
