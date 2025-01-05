import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Image Section */}
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('./assets/gym-background.jpg')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
      </View>

      {/* Main Content Container */}
      <View style={styles.gradientContainer}>
        {/* Navigation Buttons Container */}
<View style={styles.navigationWrapper}>
  <TouchableOpacity style={[styles.navButton, styles.navButtonLeft]}>
    <Text style={[styles.navButtonText, { color: '#FFFFFF' }]}>≪</Text>
  </TouchableOpacity>
  <TouchableOpacity style={[styles.navButton, styles.navButtonRight]}>
    <Text style={[styles.navButtonText, { color: '#FFFFFF' }]}>≫</Text>
  </TouchableOpacity>
</View>



        {/* Quote Container */}
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>
            PERFECT{'\n'}
            YOUR MOVES{'\n'}
            WITH <Text style={styles.aiText}>AI</Text>
          </Text>
        </View>

        {/* Feature Boxes */}
        <View style={styles.featureBoxesContainer}>
          <View style={styles.featureBox}>
            <Text style={styles.featureText}>Precise</Text>
          </View>
          <View style={styles.featureBox}>
            <Text style={styles.featureText}>Safety</Text>
          </View>
          <View style={styles.featureBox}>
            <Text style={styles.featureText}>Better Result</Text>
          </View>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressIndicator, styles.progressActive]} />
            <View style={styles.progressIndicator} />
            <View style={styles.progressIndicator} />
            <View style={styles.progressIndicator} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: '55%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  navigationWrapper: {
    position: 'absolute',
    top: 120,
    left: 15,
    right: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  navButton: {
    width: 80,
    height: 80,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  navButtonLeft: {
    left: -31,
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
  },
  navButtonRight: {
    right: -31,
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
  },
  navButtonText: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
  },
  gradientContainer: {
    flex: 1,
    backgroundColor: '#E06714',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: -30,
  },
  quoteContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 15,
    padding: 15,
    marginTop: 40,
  },
  quoteText: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  aiText: {
    color: '#FF6B00',
  },
  featureBoxesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flex: 1,
    alignItems: 'center',
  },
  featureBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 15,
    width: '30%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  progressContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  progressIndicator: {
    width: 20,
    height: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    opacity: 0.3,
  },
  progressActive: {
    opacity: 1,
  },
});

export default OnboardingScreen;