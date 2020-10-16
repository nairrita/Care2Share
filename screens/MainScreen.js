import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import firebase from 'firebase';
import db from '../config';

export default class Main extends React.Component {
  goFood = () => {
    this.props.navigation.navigate('Food');
  };
  goMedicine = () => {
    this.props.navigation.navigate('Medicines');
  };
  goBook = () => {
    this.props.navigation.navigate('Book');
  };
  goGroceries = () => {
    this.props.navigation.navigate('Groceries');
  };
  goClothes = () => {
    this.props.navigation.navigate('Clothes');
  };
  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            height: 59,
          }}>
          <AppHeader />
        </View>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            this.goFood();
          }}>
          <Text style={styles.text1}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            this.goGroceries();
          }}>
          <Text style={styles.text2}>Groceries and Vegetables</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            this.goBook();
          }}>
          <Text style={styles.text1}>Books</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button4}
          onPress={() => {
            this.goClothes();
          }}>
          <Text style={styles.text1}>Clothes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button5}
          onPress={() => {
            this.goMedicine();
          }}>
          <Text style={styles.text1}>Medicines</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button1: {
    marginTop: 100,
    width: 150,
    marginLeft: 130,
    backgroundColor: 'pink',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'pink',
    borderRadius: 30,
  },
  text1: { fontWeight: 'bold', fontSize: 20 },
  button2: {
    marginTop: 50,
    width: 200,
    marginLeft: 100,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#00ff00',
    borderRadius: 30,
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  button3: {
    marginTop: 50,
    width: 150,
    marginLeft: 130,
    backgroundColor: 'orange',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 30,
  },

  button4: {
    marginTop: 50,
    width: 150,
    marginLeft: 130,
    backgroundColor: 'yellow',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'yellow',
    borderRadius: 30,
    justifyContent: 'center',
  },
  button5: {
    marginTop: 50,
    width: 150,
    marginLeft: 130,
    backgroundColor: '#ff1493',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ff1493',
    borderRadius: 30,
  },
});
