import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Alert, useColorScheme, Pressable } from 'react-native';

const WelcomeScreen = ({navigation}) => {

    const colorScheme = useColorScheme();

    return (
        <KeyboardAvoidingView style={[welcomeStyle.container, colorScheme === 'dark' ? {backgroundColor: '#333333'} : {backgroundColor: '#fff'}]} behavior={Platform.OS === "ios" ? "padding": "position"} >  
            <ScrollView style={welcomeStyle.innerView} keyboardDismissMode={"on-drag"}>
                <View style={welcomeStyle.logoWrapper}>
                    <Image
                        source={require("../img/bg.png")} 
                        style={welcomeStyle.image}
                        resizeMode="cover"
                        accessible={true}
                        accessibilityLabel={'Little Lemon Logo'}
                        />
                    <Text style={[welcomeStyle.textLogo, colorScheme === 'dark' ? {color: '#fff'} : {color: '#333'}]}>
                        Little Lemon
                    </Text>
                </View>
                <Text style={[welcomeStyle.detailText, colorScheme === 'dark' ? {color: '#fff'} : {color: '#333'}]}>
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
                </Text>
                <Pressable onPress={() => {navigation.navigate('Menu')}}>
                    <Text style={welcomeStyle.goText}>Go to Menu</Text>
                </Pressable>
            </ScrollView> 
       </KeyboardAvoidingView>
    );
}

export default WelcomeScreen;

const welcomeStyle = StyleSheet.create({
    container: {flex: 0.88, padding: 25,  },
    innerView: {paddingHorizontal: 0, paddingVertical: 40},
    headerText: { color: '#EDEFEE', fontSize: 36, textAlign: 'center', marginBottom: 40 },
    detailText: { color: '#EDEFEE', fontSize: 26, textAlign: 'center'},
    input: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 40,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#342323',
    },
    logoWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10, 

    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    textLogo: {
        fontSize: 23,
        paddingTop: 30,
        paddingLeft: 20,
        color: '#fff',
        fontWeight: 'bold'

    },
    goText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        color: '#3434ff',
    }

})