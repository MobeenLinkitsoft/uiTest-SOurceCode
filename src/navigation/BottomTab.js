import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreens/HomeScreen';
import DashboardScreen from '../screens/HomeScreens/DashboardScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchScreen from '../screens/HomeScreens/SearchScreen';
import { View, Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#1E2A38',
        borderTopWidth: 0,
        elevation: 0,
        height: 70,
        borderRadius: 100,
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
        marginLeft: 20,
        marginRight: 20,
      },
      tabBarShowLabel: false, // hide label from default and add manually
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'HomeTab') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'SEARCH') {
          iconName = focused ? 'search' : 'search-outline';
        } else if (route.name === 'LIBRARY') {
          iconName = focused ? 'person' : 'grid-outline';
        } else if (route.name === 'PROFILE') {
          iconName = focused ? 'person' : 'person-circle-outline';
        } else if (route.name === 'SHOP') {
          iconName = focused ? 'person' : 'bag-handle-outline';
        }

        return (
          <View style={[styles.tabItem, focused && styles.activeTab]}>
            <Icon
              name={iconName}
              size={18}
              color="#fff" // white icon always
            />
            <Text style={[styles.tabLabel, { color: '#fff' }]}>
              {route.name === 'HomeTab' ? 'HOME' : route.name}
            </Text>
          </View>
        );
      },
    })}
  >
    <Tab.Screen
      name="HomeTab"
      component={HomeScreen}
      options={{ title: 'HOME' }}
    />
    <Tab.Screen name="SEARCH" component={SearchScreen} />
    <Tab.Screen name="LIBRARY" component={DashboardScreen} />
    <Tab.Screen name="PROFILE" component={DashboardScreen} />
    <Tab.Screen name="SHOP" component={DashboardScreen} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    width: 50,
    height: 50,
  },
  activeTab: {
    backgroundColor: '#FF5722',
    borderRadius: 100,
    width: 50,
    height: 50,
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 2,
    fontFamily: 'Poppins-Regular',
  },
});

export default BottomTabNavigator;
