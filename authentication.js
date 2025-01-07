import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo.png')} // Replace with your logo path
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Content */}
      <Text style={styles.title}>Continue to sign up for free</Text>
      <Text style={styles.subtitle}>
        If you already have an account, we’ll log you in.
      </Text>

      {/* Google Sign Up Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Email Sign Up Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue with Email</Text>
      </TouchableOpacity>

      {/* Terms and Privacy */}
      <Text style={styles.footerText}>
        By continuing, you agree to Arthlete's{' '}
        <Text style={styles.linkText}>Terms of Use</Text>. Read our{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark mode background
    padding: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logo: {
    width: 120,
    height: 120, // Adjust size as needed
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#b0b0b0',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#1f1f1f', // Dark button
    borderRadius: 8,
    paddingVertical: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  footerText: {
    color: '#b0b0b0',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 30,
  },
  linkText: {
    color: '#1e90ff', // Link color
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;