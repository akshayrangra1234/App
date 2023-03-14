import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInScreenWelcome';
import SignInScreen from '../screens/authScreens/SigninScreen';
import HomeScreen from '../screens/HomeScreen';

const Auth = createStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SignInWelcomeScreen"
        component={SignInWelcomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFormbottomAndroid,
        }}
      />
      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFormbottomAndroid,
        }}
      />
      <Auth.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFormbottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
}
