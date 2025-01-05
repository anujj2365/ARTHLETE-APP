import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

// Import Signup Screen
import Signup from './signup';

// Create Stack Navigator
const Stack = createStackNavigator();

const LandingPage = ({ navigation }) => {
  // Animation value
  const logoPosition = useRef(new Animated.Value(300)).current; // Start off-screen (300 pixels below)

  useEffect(() => {
    // Start the animation
    Animated.timing(logoPosition, {
      toValue: 0, // End position (on-screen)
      duration: 1000, // Animation duration (1 second)
      useNativeDriver: true, // Use native driver for better performance
    }).start();

    // Navigate to Signup after 2 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Signup');
    }, 2000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, [navigation, logoPosition]);

  return (
    <View style={styles.container}>
      {/* Animated Logo */}
      <Animated.View style={{ transform: [{ translateY: logoPosition }] }}>
        <Image 
          source={require('./assets/logo.png')} // Replace with your logo's path
          style={styles.logo}
        />
      </Animated.View>
      {/* Text */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>E L E V A T I N G</Text>
        <Text style={styles.text}>F I T N E S S       </Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Landing Page */}
        <Stack.Screen name="LandingPage" component={LandingPage} />
        {/* Signup Page */}
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark mode background
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 350, // Logo width
    height: 350, // Logo height
    marginBottom: 40, // Space between the logo and the text
  },
  textContainer: {
    alignItems: 'center', // Align the text centrally
  },
  text: {
    color: '#FFFFFF', // White color for the text
    fontSize: 34, // Adjust text size as needed
    fontWeight: 'bold', // Bold text for emphasis
  },
});
