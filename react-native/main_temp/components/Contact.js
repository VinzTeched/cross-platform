import * as React from 'react';
import { View, StyleSheet, TextInput, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

export default function FeedbackForm() {
    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [phoneNumber, onChangePhoneNumber] = React.useState('');
    const [message, onChangeMessage] = React.useState('');
    
    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding": "height"}>
            <ScrollView keyboardDismissMode="on-drag">
                <Text style={styles.headerSection}>
                    How was your visit to Little Lemon?
                </Text>
                <Text style={styles.infoSection}>
                    Little Lemon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual enviroment. We would love to hear your experience with us!
                </Text>
                <TextInput 
                    value={firstName} 
                    onChangeText={onChangeFirstName}
                    style={styles.input}
                    placeholder={"First Name"} />
                <TextInput 
                    value={lastName} 
                    onChangeText={onChangeLastName}
                    style={styles.input}
                    maxLength={250}
                    placeholder={"Last Name"} />
                <TextInput 
                    value={phoneNumber} 
                    onChangeText={onChangePhoneNumber}
                    style={styles.input}
                    maxLength={250}
                    keyboardType={"phone-pad"}
                    placeholder={"Phonenumber"} />
                <TextInput 
                    value={message} 
                    onChangeText={onChangeMessage}
                    style={styles.messageInput}
                    multiline={true}
                    placeholder={"Message"} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#495E57",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#F4CE14',
    },
    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#F4CE14',
    },
    infoSection: {
        fontSize: 20,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center'
    },
    headerSection: {
        fontSize: 28,
        padding: 0,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    }
})