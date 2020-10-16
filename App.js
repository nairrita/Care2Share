import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import AppHeader from './components/AppHeader.js';
import Food from './screens/FoodScreen.js';
import Main from './screens/MainScreen.js';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Book from './screens/BooksScreen';
import Clothes from './screens/ClothesScreen';
import Groceries from './screens/GroceriesScreen';
import Medicines from './screens/MedicinesScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  Signup : SignupScreen,
  Login : LoginScreen,
  Main: Main,
  Food: Food,
  Groceries: Groceries,
  Book: Book,
  Clothes: Clothes,
  Medicines: Medicines,
});
const AppContainer = createAppContainer(AppNavigator);
