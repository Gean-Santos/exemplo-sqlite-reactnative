import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Pessoa = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.id} - </Text>
      <Text style={styles.text}>{props.nome} - </Text>
      <Text style={styles.text}>{props.telefone} - </Text>
    </View>
  );
}

export default Pessoa;