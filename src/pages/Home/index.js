import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

const initialState = {
  nome: '',
  apelido: '',
  telefone: '', 
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {...initialState}
  }
  
  componentDidMount() {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
        <Text style={styles.title}> Sabosta </Text>
        <TextInput placeholder='Nome: ' 
          style={styles.input}
          value={this.state.nome}
        />
        <TextInput placeholder='Apelido: ' 
          style={styles.input}
          value={this.state.apelido}
        />
        <TextInput placeholder='Telefone: ' 
          style={styles.input}
          value={this.state.telefone}
        />
        <View style={styles.panel}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Limpar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Gravar</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    )
  }
}
