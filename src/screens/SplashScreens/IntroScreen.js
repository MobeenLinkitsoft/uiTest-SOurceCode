import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import imagePath from '../../assets/images/imagePath';
import GradientButton from '../../components/GradientButton';

const { height } = Dimensions.get('window');

const IntroScreen = ({ navigation }) => {
  return (
    <ImageBackground source={imagePath.BgImg} style={styles.background}>
      <View style={styles.overlay2}></View>
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Image
            source={imagePath.logoWithText}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>

          <GradientButton
            title="Sign In"
            onPress={() => navigation.navigate('Login')}
          />

          <GradientButton
            title="Sign Up"
            isOutline
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '101%',
  },
  overlay2: {
    flex: 0.2,
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.15,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    color: '#eee',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.7,
    marginBottom:20
  },
});
