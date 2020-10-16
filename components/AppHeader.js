import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.fair}> Care</Text>
        <Text style={styles.two}> 2</Text>
        <Text style={styles.share}>Share</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  fair: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 2,
    width: 300,
    textAlign: 'center',
    backgroundColor: 'orange',
  },
  share: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 2,
    textAlign: 'center',
    backgroundColor: 'green',
    width : 300
  },
  two: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 2,
    width: 300,
    textAlign: 'center',
  },
});
