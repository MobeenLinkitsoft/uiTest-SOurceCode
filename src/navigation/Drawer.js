import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTab';
import Icon from 'react-native-vector-icons/Feather';
import CustomDrawerContent from './CustomDrawerContent';
import DashboardScreen from '../screens/HomeScreens/DashboardScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={props => <CustomDrawerContent {...props} />}
    screenOptions={{
      drawerStyle: { backgroundColor: '#1E2A38', width: 280 },
      headerShown: false,
      drawerType:'slide'
    }} 
  >
    <Drawer.Screen
      name="Home"
      component={BottomTabNavigator}
      options={{ drawerIcon: () => <Icon name="home" size={20} color="#FF7300" /> }}
    />
    <Drawer.Screen
      name="My Card"
      component={DashboardScreen}
      options={{ drawerIcon: () => <Icon name="credit-card" size={20} color="#FF7300" /> }}
    />
    <Drawer.Screen
      name="My Shop"
      component={DashboardScreen}
      options={{ drawerIcon: () => <Icon name="shopping-bag" size={20} color="#FF7300" /> }}
    />
    <Drawer.Screen
      name="My Downloads"
      component={DashboardScreen}
      options={{ drawerIcon: () => <Icon name="download" size={20} color="#FF7300" /> }}
    />
    <Drawer.Screen
      name="Help"
      component={DashboardScreen}
      options={{ drawerIcon: () => <Icon name="help-circle" size={20} color="#FF7300" /> }}
    />
    <Drawer.Screen
      name="Settings"
      component={DashboardScreen}
      options={{ drawerIcon: () => <Icon name="settings" size={20} color="#FF7300" /> }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
