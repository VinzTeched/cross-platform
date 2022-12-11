import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const green = "#495E57";
const yellow = "#F4CE14";

const menuItemsToDisplay = [
    ' Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Turkish Kerbab \n Smoked Salmon \n Fries \n Buttered Rice \n Bread Sticks \n Pita Bucket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta'
];

const MenuItems = () => {
    return (
        <View  style={{flex: 0.75}}>
            <ScrollView horizontal={false} indicatorStyle={'white'} style={menuStyles.innerContainer}>
                <Text style={menuStyles.headerText}>View Menu</Text>
                <Text style={menuStyles.itemText}>{menuItemsToDisplay[0]}</Text>
            </ScrollView>
        </View>
    );
}

export default MenuItems;

const menuStyles = StyleSheet.create({
    container: {
        flex: 0.75
    },
    innerContainer: {
        padding: 40,
        backgroundColor: green
    },
    headerText: { 
        fontSize: 40, 
        flexWrap: 'wrap', 
        color: 'white'
    },
    itemText: { color: yellow, fontSize: 23, lineHeight: 35}
})