import * as React from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View>
      <Image source={require('../assets/little-lemon-logo.png')} style={styles.image} resizeMode="contain" />
      <Text style={styles.text}>Little Lemon, your local Mediterranean Bistro</Text>
      <Pressable style={styles.button} onPress={() => {navigation.navigate('SubscribeScreen')}}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 210,
  },
  text: {
    textAlign: 'center',
    fontSize: 28,
    marginVertical: 80,
  },
  button: {
    backgroundColor: 'green',
    width: 350,
    alignSelf: 'center',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  }
})

export default WelcomeScreen;
