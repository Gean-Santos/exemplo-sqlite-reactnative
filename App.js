import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import databaseInit from './src/database/init-database';

import Home from './src/pages/Home';

export default class App extends Component {
  constructor(props) {
    super(props);
    new databaseInit;
    console.log("initialize database");
  }
  render(){
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
