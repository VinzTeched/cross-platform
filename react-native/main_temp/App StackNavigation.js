import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FeedbackForm from './components/Contact';
import LittleLemonFooter from './components/LittleLemonFooter';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonMenu from './components/LittleLemonMenu';
import LittleLemonWelcome from './components/LittleLemonWelcome';
import LoginScreen from './components/LoginScreen';
import MenuItems from './components/MenuItems';
import Opening from './components/Opening';
import Welcome from './components/Welcome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Menu'
        screenOptions={{headerStyle: {backgroundColor: '#FBDABB'}}}>
        <Stack.Screen 
          options={{title: 'Home'}}
          name="Welcome" component={Welcome} />
        <Stack.Screen name="Menu" component={MenuItems} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});
