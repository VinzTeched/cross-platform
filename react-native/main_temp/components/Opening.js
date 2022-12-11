import { useClipboard, useDeviceOrientation } from "@react-native-community/hooks";
import { Button, Image, ScrollView, StyleSheet, Text, useColorScheme, useWindowDimensions } from "react-native";

const Opening = () => {
    const colorScheme = useColorScheme();
    const {width, height, fontScale} = useWindowDimensions();
    const orientation = useDeviceOrientation();
    const [data, setString] = useClipboard();
    return (
        <ScrollView style={[
            styles.container, 
            colorScheme === 'light' ? {backgroundColor: '#fff'} : {backgroundColor: '#333333'}, 
        ]}>
            <Image 
                source={require('../assets/LittleLemonLogo.png')} 
                resize="contain" 
                style={styles.image}
                accessible={true}
                accessibilityLabel="Little Lemon Logo" />
            <Text style={styles.text}>Color Scheme: {colorScheme}</Text>
            <Text style={[styles.text, styles.title]}>Windows Dimensions</Text>
            <Text style={styles.text}>Height: {height}</Text>
            <Text style={styles.text}>Width: {width}</Text>
            <Text style={styles.text}>Font Scale: {fontScale}</Text>
            <Text style={styles.text}>Is orientation portrait? {orientation.portrait === true ? "true": "false"}</Text> 
            <Text style={styles.text}>Is orientation landscape? {orientation.landscape === true ? "true": "false"}</Text>
            <Text style={styles.text}>{data}</Text>
            <Button title="Update Clipboard" onPress={() => setString('New clipboard data')}>Set Clipboard</Button>
        </ScrollView> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    image: {
        width: 350,
        height: 95,
        alignSelf: 'center'
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 6,
    },
    title: {
        fontWeight: 'bold',
    },
});

export default Opening;