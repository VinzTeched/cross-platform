import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={headerStyle.container}>
            <Text style={headerStyle.outerText} numberOfLines={3}>Little
                <Text style={headerStyle.innerText}> Lemon </Text> {' '}
            </Text>
        </View>
    );
}

const headerStyle = StyleSheet.create({
    container: { flex: 0.13, backgroundColor: '#EE9972' },
    outerText: {paddingTop: 60, fontSize: 30, color: '#000', textAlign: 'center'},
    innerText: {fontWeight: 'bold'}
})