import { React } from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
    return(
        <View style={footerStyle.container}>
            <Text style={footerStyle.footerText}>All rights reserved by Little Lemon, 2022</Text>
        </View>
    );
}

const footerStyle = StyleSheet.create({
    container: { 
        backgroundColor: '#EE9972', 
        marginBottom: 10,
     },
    footerText: { 
        fontSize: 18, 
        textAlign: 'center', 
        padding: 10,
        fontStyle: 'italic',
        color: 'black'
    }

})