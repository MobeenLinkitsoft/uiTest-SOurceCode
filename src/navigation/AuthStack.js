import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SignupScreen from '../screens/AuthScreens/SignupScreen';
import IntroScreen from '../screens/SplashScreens/IntroScreen';

const Stack = createNativeStackNavigator();

const AuthStack = ({ handleLogin }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="IntroScreen" component={IntroScreen} />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      initialParams={{ handleLogin }}
    />
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
);

export default AuthStack;
