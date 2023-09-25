import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import SigninScreen from '../screens/Signin/SigninScreen';
import SignupScreen from '../screens/Signup/SignupScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.ONBOARDING} component={OnboardingScreen} />
      <Stack.Screen name={Routes.SIGNIN} component={SigninScreen} />
      <Stack.Screen name={Routes.SIGNUP} component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
