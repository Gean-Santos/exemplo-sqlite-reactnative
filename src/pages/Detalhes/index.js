import React, { Component } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity,

} from 'react-native';

import styles from './styles';

export default function Detalhes({route, navigation}) {
  const {nome, apelido, telefone, id} = route.params;
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.header}>Detalhes do Cliente</Text>
        <Text style={styles.text}>ID: {id}</Text>
        <Text style={styles.text}>Nome: {nome}</Text>
        <Text style={styles.text}>Apelido: {apelido}</Text>
        <Text style={styles.text}>Telefone: {telefone}</Text>
      </View>
    </View>
  )
}
