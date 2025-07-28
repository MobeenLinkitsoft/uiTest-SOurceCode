import React from 'react';
import { StyleSheet, Image } from 'react-native';
import imagePath from '../../assets/images/imagePath';
import LinearGradient from 'react-native-linear-gradient';
import { CustomColors } from '../../theme/colors';

const SplashScreen = () => {
  return (
    <LinearGradient
      colors={[CustomColors?.ORANGE, CustomColors?.PURPLE]}
      style={styles.container}
    >
      <Image source={imagePath.logoWithText} style={styles.logo} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 220,
    height: 135,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  quicksandLight: {
    fontFamily: 'Poppins-Light',
    fontSize: 20,
  },
  quicksandRegular: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  ralewayItalic: {
    fontFamily: 'Poppins-Italic',
    fontSize: 20,
  },
  ralewayThin: {
    fontFamily: 'Poppins-ThinItalic',
    fontSize: 20,
  },
});

export default SplashScreen;
