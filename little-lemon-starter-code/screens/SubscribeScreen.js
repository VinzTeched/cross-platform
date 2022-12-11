import * as React from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [newsletter, setNewsletter] = React.useState(false);
  const [email, onChangeEmail] = React.useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding": "position"}>
      <ScrollView style={styles.scrollView}>
      <Image source={require('../assets/little-lemon-logo-grey.png')} style={styles.image} resizeMode="contain" />
      <Text style={styles.text}>Subscribe to our newsletter for our latest delicious recipe</Text>
      <TextInput 
        value={email}
        placeholder='Type your email' 
        style={styles.textInput} 
        onChangeText={onChangeEmail}
        clearButtonMode="always"
        keyboardType='email-address'  />
      <Pressable 
        style={[styles.button, newsletter === true ? {backgroundColor: 'gray'} : {backgroundColor: 'green'} ]} 
        onPress={() => {
            if(validateEmail(email)){
              setNewsletter(!newsletter);
              Alert.alert('Thanks for subscribing, stay tuned!');
            } else {
              Alert.alert('Email is wrong');
            }
          }
        }>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  scrollView: {
    paddingTop: 100,
    paddingHorizontal: 0
  },
  container: {
    flex: 1,
    padding: 25,
  },
  text: {
    fontSize: 26,
    marginVertical: 40,
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 2,
    width: 350,
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: 'green',
    width: 350,
    alignSelf: 'center',
    padding: 15,
    marginTop: 30,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  }
})

export default SubscribeScreen;
