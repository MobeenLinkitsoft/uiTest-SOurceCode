import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RecentlyPlayedItem = ({ name, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.avatar} />
      <Text style={styles.label}>{name}</Text>
    </View>
  );
};

export default RecentlyPlayedItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 16,
  },
  avatar: {
    width: 118,
    height: 118,
    borderRadius: 100,
    marginBottom: 6,
  },
  label: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 2.4,
    fontFamily: 'Poppins-Regular',
  },
});
