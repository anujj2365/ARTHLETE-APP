import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    // Implement your sign-in logic here
    console.log('Sign in pressed');
  };

  const handleForgotPassword = () => {
    // Navigate to Forgot Password Screen
    console.log('Forgot Password pressed');
    navigation.navigate('ForgotPassword'); // Add your Forgot Password screen here
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
          <Text style={styles.titleMain}>ELEVATING{'\n'}</Text>
          <Text style={styles.titleSub}>FITNESS</Text>
        </Text>
      </View>

      {/* Grey Container */}
      <View style={styles.greyContainer}>
        <Text style={styles.signInHeader}>Sign In</Text>

        {/* Input Fields */}
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              <Text>👁</Text>
            </TouchableOpacity>
          </View>

          {/* Forgot Password Link */}
          <TouchableOpacity
            onPress={handleForgotPassword}
            style={styles.forgotPasswordContainer}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Sign-In Button */}
          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>

          {/* Sign-Up Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signUpLink}>Sign up</Text>
            </TouchableOpacity>
          </View>
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
    top: 40,
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
    fontSize: 36,
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
    height: '50%',
    backgroundColor: '#221E1E',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    paddingBottom: 30,
  },
  signInHeader: {
    fontSize: 30,
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
    padding: 20,
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    shadowColor: '#666',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
  },
  passwordInput: {
    flex: 1,
    padding: 18,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 15,
  },
  forgotPasswordContainer: {
    marginTop: 8,
    marginLeft: 5, // Align to the left
  },
  forgotPasswordText: {
    color: '#FF6B00',
    fontSize: 14,
    fontWeight: 'bold',
  },
  signInButton: {
    backgroundColor: '#FF6B00',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginTop: 5,
    shadowColor: '#666',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  signUpText: {
    color: '#FFFFFF',
  },
  signUpLink: {
    color: '#FF6B00',
    fontWeight: 'bold',
  },
});

export default SignInScreen;