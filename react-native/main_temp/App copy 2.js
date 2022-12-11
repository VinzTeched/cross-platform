import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FeedbackForm from './components/Contact';
import LittleLemonFooter from './components/LittleLemonFooter';

import LittleLemonHeader from './components/LittleLemonHeader';
import LoginScreen from './components/LoginScreen';
import MenuItems from './components/MenuItems';
import Opening from './components/Opening';
import Welcome from './components/Welcome';
import WelcomeScreen from './components/WelcomeScreen';
import MenuScreen from './components/MenuScreen';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image 
      style={{ height: 40, width: 300, resizeMode: 'contain', alignSelf: 'center',}} 
      source={require('./assets/LittleLemonLogo.png')} />
  )
}

export default function App() {
  return (
    <NavigationContainer >
      <View style={styles.container}>
      <Stack.Navigator 
        initialRouteName='Login'
        screenOptions={{
          headerStyle: {backgroundColor: '#333'},
          headerTintColor: '#fff',
          headerTintStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen 
          options={{
            title: 'Home',
            headerTitle: (props) => <LogoTitle {...props} />
          }}
          name="Welcome"
          component={WelcomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </NavigationContainer>
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
