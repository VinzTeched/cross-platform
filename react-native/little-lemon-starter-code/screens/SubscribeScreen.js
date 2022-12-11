import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  return (
    <View style={styles.container}>
      <Image source={require('../assets/little-lemon-logo-grey.png')} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  container: {
    alignContent: 'center',
    alignItems: 'center',
  },
})

export default SubscribeScreen;
