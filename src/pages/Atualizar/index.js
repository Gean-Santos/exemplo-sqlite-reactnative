import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from './styles';
const initialState = {
  nome: '',
  apelido: '',
  telefone: '',
}
export default class Atualizar extends Component {
  constructor(){
    super();
    this.state = {...initialState}
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Atualizar o Cliente </Text>
        <View style={styles.box}>
          <TextInput placeholder='Digite o nome: ' />
        </View>
      </View>
    )
  }
}
