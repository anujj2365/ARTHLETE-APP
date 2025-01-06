import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSendOTP = () => {
    // Implement your send OTP logic here
    console.log('Send OTP pressed');
  };

  return (
    <ImageBackground
      source={require('./assets/signup-background.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>

      {/* Main Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          <Text style={styles.titleMain}>ELEVATING{ '\n'}</Text>
          <Text style={styles.titleSub}>FITNESS</Text>
        </Text>
      </View>

      {/* Grey Container */}
      <View style={styles.greyContainer}>
        <Text style={styles.signInHeader}>Reset Password</Text>

        {/* Input Fields */}
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
          />

          {/* Send OTP Button */}
          <TouchableOpacity style={styles.sendOTPButton} onPress={handleSendOTP}>
            <Text style={styles.sendOTPButtonText}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  titleContainer: {
    position: 'absolute',
    top: '20%',
    left: 20,
  },
  titleText: {
    marginBottom: 20,
  },
  titleMain: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(128, 128, 128, 0.9)',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 8,
  },
  titleSub: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    opacity: 0.5,
    textShadowColor: 'rgba(128, 128, 128, 0.9)',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 8,
  },
  greyContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '45%',
    backgroundColor: '#221E1E',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    paddingBottom: 30,
  },
  signInHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputsContainer: {
    gap: 20,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 18,
    fontSize: 16,
    shadowColor: '#666',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
  },
  sendOTPButton: {
    backgroundColor: '#FF6B00',
    borderRadius: 20,
    padding: 18,
    alignItems: 'center',
    marginTop: 40,
    shadowColor: '#666',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
  },
  sendOTPButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInScreen;

