import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import imagePath from '../assets/images/imagePath';

const WrappedCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imageStack}>
        <Image source={imagePath.Img3} style={[styles.image, styles.image3]} />
        <Image source={imagePath.Img1} style={[styles.image, styles.image2]} />
        <Image source={imagePath.Img2} style={[styles.image, styles.image1]} />
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.title}>SEE WHO YOU LISTENED TO IN 2020</Text>
        <Text style={styles.sub}>Your top artists and songs of the year and more..</Text>
      </View>
    </View>
  );
};

export default WrappedCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E2A38',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  imageStack: {
    width: 80,
    height: 80,
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 70,
    borderRadius: 10,
    position: 'absolute',
  },
  image1: {
    zIndex: 3,
    left: 0,
  },
  image2: {
    zIndex: 2,
    left: 15,
  },
  image3: {
    zIndex: 1,
    left: 30,
  },
  textWrapper: {
    marginLeft: 60,
    flex: 1,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  sub: {
    color: '#ccc',
    fontSize: 12,
  },
});
