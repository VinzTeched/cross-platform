import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SectionList, Pressable } from 'react-native';

const green = "#495E57";
const yellow = "#F4CE14";

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const Separator = () => <View style={menuStyles.separator} />;

const Header = () => <Text style={menuStyles.headerText}>View Menu</Text>;

const Footer = () => (
    <Text style={menuStyles.footerText}>
        All Rights Reserved by Little Lemon 2022
    </Text>
);

const Item = ({ name, price }) => {
    return (
        <View style={menuStyles.innerContainer}>
            <Text style={menuStyles.itemText}>{name}</Text>
            <Text style={menuStyles.itemText}>{price}</Text>
        </View>
    )
}

const MenuItems = () => {
    const [showMenu, setShowMenu] = useState(false);

    const renderItem = ({item}) => <Item name={item.name} price={item.price} />;

    const renderSectionHeader = ({section: {title}}) => (
        <Text style={menuStyles.sectionHeader}>{title}</Text>
    );

    return (
        <View  style={menuStyles.container}>
            {!showMenu && (
              <Text style={menuStyles.infoSection}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
            )}

            <Pressable style={menuStyles.button} onPress={() => {
              setShowMenu(!showMenu);
            }} poi>
              <Text style={menuStyles.buttonText}>{showMenu ? 'Home': 'View Menu'}</Text>
            </Pressable>
            {showMenu && ( 
              <SectionList 
                  sections={menuItemsToDisplay}
                  keyExtractor={(item, index) => item + index}
                  renderItem={renderItem}
                  renderSectionHeader={renderSectionHeader} 
                  ItemSeparatorComponent={Separator}
                  ListFooterComponent={Footer} />
            )}
        </View>
    );
}

export default MenuItems;

const menuStyles = StyleSheet.create({
    container: {
        flex: 0.8
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: { 
        fontSize: 40, 
        flexWrap: 'wrap', 
        color: 'white'
    },
    footerText: { 
        fontSize: 18, 
        textAlign: 'center', 
        padding: 10,
        fontStyle: 'italic',
        color: '#EDEFEE'
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: '#898989',
    },
    sectionHeader: {
        textAlign: 'center',
        backgroundColor: 'yellow',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemText: { color: yellow, fontSize: 20, },
    infoSection: {
      color: '#EDEFEE',
      fontSize: 20,
      padding: 12,
      marginVertical: 8,
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#EDEFEE',
      width: 350,
      margin: 8,
      borderRadius: 10,
      paddingVertical: 15,
      alignSelf: 'center',
      borderColor: '#EDEFEE',
      borderWidth: 2,
      
    },
    buttonText: {
      fontSize: 24,
      textAlign: 'center',
      color: '#333',
    },
})