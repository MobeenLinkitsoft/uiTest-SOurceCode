// components/GradientButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CustomColors } from '../theme/colors';

const GradientButton = ({ title, onPress, isOutline = false }) => {
  if (isOutline) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.outlineButton}>
        <Text style={styles.outlineText}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[CustomColors.ORANGE, CustomColors.PURPLE]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradientButton}
      >
        <Text style={styles.gradientText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradientButton: {
    width: 320,
    borderRadius: 14,
    alignItems: 'center',
    height: 55,
    justifyContent:'center'
  },
  gradientText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  outlineButton: {
    paddingVertical: 14,
    width: '80%',
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    marginVertical: 10,
  },
  outlineText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default GradientButton;
