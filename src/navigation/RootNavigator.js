import React, { useEffect, useState } from 'react';
import SplashScreen from '../screens/SplashScreens/SplashScreen';
import DrawerNavigator from './Drawer';
import AuthStack from './AuthStack';

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (isLoading) return <SplashScreen />;

  return isLoggedIn ? (
    <DrawerNavigator />
  ) : (
    <AuthStack handleLogin={handleLogin} />
  );
};

export default RootNavigator;
