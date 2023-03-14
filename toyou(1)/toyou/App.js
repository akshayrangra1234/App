import React from 'react';

import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { colors } from './src/global/styles';
import SignInScreen from './src/screens/authScreens/SigninScreen';
import HomeScreen from './src/components/Header';
import RootNavigator from './src/navigation.js/RootNavigator';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      <RootNavigator />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
