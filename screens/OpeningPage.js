// screens/OpeningPage.js
import { useEffect } from 'react';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
export default function OpeningScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SignUP');
    }, 3000); // Delay before going to SignUp

    return () => clearTimeout(timer);
  }, []);
  return (

    <View style={styles.container}>
      <Image
        source={require('../assets/logo.jpg')} 
        style={styles.logo}
      />
    
    </View>
  ) 
}
const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain', // keeps image from stretching
  }})
