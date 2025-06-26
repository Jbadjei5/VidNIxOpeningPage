// App.js
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OpeningPage from './screens/OpeningPage'; 
import SignupPage from './screens/SignupPage';
import LoginScreen from './screens/loginPage';
import HomeScreen from './screens/HomeScreen';
import ForgotPasswordScreen from './screens/Forgot';
import SelectVideosScreen from './screens/MediaScreen';
import Settings from './screens/Settings';
import loginScreen from './screens/loginPage';
import VerifyScreen from './screens/Verify';
import ForgotVerifyScreen from './screens/ForgotVerify';
import NewPasswordScreen from './screens/NewPassword';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Opening" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Opening" component={OpeningPage} />
        <Stack.Screen name="SignUP" component={SignupPage} />
        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
         <Stack.Screen name="Media" component={SelectVideosScreen} />
          <Stack.Screen name="Settings" component={Settings} />
           <Stack.Screen name="Verify" component={VerifyScreen} />
            <Stack.Screen name="ForgotVerify" component={ForgotVerifyScreen} />
             <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}


  


const styles = StyleSheet.create({
  
  },
);
