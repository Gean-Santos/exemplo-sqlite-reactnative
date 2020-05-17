import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Pessoa = props => {
  return (
    <TouchableOpacity style={styles.button} onLongPress={props.onDelete}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.id} -</Text>
        <Text style={styles.text}>{props.nome}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Pessoa;