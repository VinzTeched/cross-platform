import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native"

const Welcome = () => {
    return (
        <ScrollView style={styles.container}>
            <Image 
                source={require('../assets/LittleLemonLogo.png')} 
                resizeMode={'contain'} 
                style={styles.logo}
                accessible={true}
                accessibilityLabel="Little Lemon Logo" />
            <ImageBackground source={require('../img/bg.png')} style={styles.imageBg} resizeMode="contain">
                <Text style={styles.title}>
                    Little Lemon, your local Meditarranean Bistro
                </Text>
                <Image 
                    source={require('../img/picture1.png')} 
                    resizeMode={'repeat'} 
                    style={styles.image}
                    accessible={true}
                    accessibilityLabel="Food Picture 1" />
                <Image 
                    source={require('../img/picture2.png')} 
                    resizeMode='cover' 
                    style={styles.image}
                    accessible={true}
                    accessibilityLabel="Food Picture 2" />
                <Image 
                    source={require('../img/picture3.png')} 
                    resizeMode={'stretch'} 
                    style={styles.image}
                    accessible={true}
                    accessibilityLabel="Food Picture 3" />
                <Image 
                    source={require('../img/picture4.png')} 
                    resizeMode='contain'
                    style={styles.image}
                    accessible={true}
                    accessibilityLabel="Food Picture 4" />
            </ImageBackground>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        marginTop: 25,
        backgroundColor: 'white',
    },
    title: {
        marginTop: 16,
        paddingVertical: 10,
        color: '#333333',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 30,
    },
    logo: {
        width: 300,
        height: 100,
        alignSelf: 'center',
    },
    image: {
        width: 350,
        height: 250,
        alignSelf: 'center',
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 10,
        borderColor: '#dedede'
    },
    imageBg: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default Welcome;