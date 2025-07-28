import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import imagePath from '../assets/images/imagePath';

const drawerItems = [
  { label: 'Home', icon: 'home', route: 'Home' },
  { label: 'My Card', icon: 'credit-card', route: 'My Card' },
  { label: 'My Shop', icon: 'shopping-bag', route: 'My Shop', badge: true },
  { label: 'My Downloads', icon: 'download', route: 'My Downloads' },
  { label: 'Help', icon: 'help-circle', route: 'Help' },
  { label: 'Settings', icon: 'zap', route: 'Settings' },
  { label: 'Suggest Us', icon: 'settings', route: 'Suggest Us' },
  { label: 'Log Out', icon: 'log-out', route: 'Log Out' },
];

const CustomDrawerContent = props => {
  const { navigation } = props;

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, backgroundColor: '#1E2A38' }}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Rabecca Spade!</Text>
        <Text style={styles.greeting}>Good Morning</Text>
        <View style={styles.divider} />

        <TouchableOpacity style={styles.profile}>
          <Image source={imagePath.Img2} style={styles.avatar} />
          <View style={styles.profileText}>
            <Text style={styles.profileName}>Rabecca</Text>
            <Text style={styles.profileEmail}>rabecca@gmail.com</Text>
          </View>
          <Icon name="chevron-right" color="#FF7300" size={18} />
        </TouchableOpacity>
      </View>

      {/* Drawer Menu Items */}
      <View style={styles.menu}>
        {drawerItems.map((item, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => navigation.navigate(item.route)}
              style={styles.drawerItem}
            >
              <Icon
                name={item.icon}
                size={25}
                color="#FF7300"
                style={styles.icon}
              />
              <Text style={styles.drawerLabel}>{item.label}</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
          </View>
        ))}
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 5,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  greeting: {
    color: '#ccc',
    marginTop: 10,
  },
  divider: {
    backgroundColor: '#fff9',
    width: '100%',
    height: 1,
    marginTop: 20,
    marginBottom: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 10,
  },
  profileText: {
    flex: 1,
  },
  profileName: {
    color: '#000',
    fontWeight: '600',
  },
  profileEmail: {
    color: '#0007',
    fontSize: 12,
  },
  menu: {
    flex: 1,
    paddingTop: 10,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 5,
    position: 'relative',
  },
  icon: {
    marginRight: 20,
  },
  drawerLabel: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  separator: {
    height: 1,
    backgroundColor: '#444',
    marginHorizontal: 20,
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#64ff4c',
    position: 'absolute',
    right: 25,
    top: 18,
  },
  footer: {
    padding: 20,
    borderTopColor: '#333',
    borderTopWidth: 1,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  footerText: {
    color: '#fff',
    marginLeft: 10,
  },
});

export default CustomDrawerContent;
