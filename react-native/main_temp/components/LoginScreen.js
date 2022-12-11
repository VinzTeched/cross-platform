import React, {useState} from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable } from "react-native";

export default function LoginScreen({navigation}) {

    const [login, setLogin] = useState(false);
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            {!login && (
            <Text style={styles.regularText}>Login to continue</Text>
            )}
            {!login && (
            <TextInput 
                onChangeText={onChangeEmail} 
                value={email} 
                style={styles.input} 
                placeholder={"Email"} 
                keyboardType="email-address" />
            )}
            {!login && (
            <TextInput 
                style={styles.input} 
                value={password} 
                onChangeText={onChangePassword} 
                placeholder={"Password"} 
                secureTextEntry={true} />
            )}
            {!login && (
            <Pressable style={styles.button} onPress={() => {
                //setLogin(!login)
                navigation.navigate('Welcome')
            }}>
                <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
            )}
            {login && (
                <Text style={styles.regularText}>You are logged in</Text>
            )}
        </ScrollView>  
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '342323',
        backgroundColor: '#EDEFEE',
    },
    button: {
        backgroundColor: '#EE9972',
        width: 150,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#421',
        alignSelf: 'center',
        padding: 10,
        marginVertical: 12,
    },
    buttonText: {
        fontSize: 23,
        textAlign: 'center',
        color: '#323'
    }
});