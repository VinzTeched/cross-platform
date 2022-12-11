import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'

import WelcomeScreen from './components/WelcomeScreen';
import MenuScreen from './components/MenuScreen';
import LoginScreen from './components/LoginScreen';

import LittleLemonHeader from './components/LittleLemonHeader'
import LittleLemonFooter from './components/LittleLemonFooter';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Drawer.Navigator useLegacyImplementation initialRouteName="Login">
            <Drawer.Screen name="Welcome" component={WelcomeScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
          </Drawer.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  footerContainer: {
    backgroundColor: "#333"
  }
});
