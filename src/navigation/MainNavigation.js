import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import auth from '@react-native-firebase/auth';

const MainNavigation = () => {
  const [initializing, setInitializing] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(authenticatedUser => {
      setCurrentUser(authenticatedUser);
      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      {currentUser ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigation;
