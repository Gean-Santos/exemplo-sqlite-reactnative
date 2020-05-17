import React, { Component } from 'react';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';

import ServicePessoa from '../../services/pessoa';

import styles from './styles';

import Pessoa from '../../components/Pessoa';

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
  
  async componentDidMount() {
    this.allPessoa();
  }

   addPessoa = async(text) => {
    try {
      console.log(text.nome, text.apelido, text.telefone)
      const res = await ServicePessoa.addData(text.nome, text.apelido ,text.telefone)
      .then(() => Alert.alert('Foi'))
      .then(this.allPessoa())
      .catch(error => console.log(error));
    } catch (error) {
      console.log((error));
    }
    
    
  }

  clearInputs() {
    this.setState({...initialState});
  }

  allPessoa = async () => {
      this.setState({...initialState})
      this.setState({pessoas: []})
      await ServicePessoa.findAll()
      .then((response) => {
        this.setState({
          pessoas: response._array,
        })
      }), error => {
        console.log(error);
      }
    
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}> Sabosta </Text>
          <TextInput placeholder='Nome: ' 
            style={styles.input}
            value={this.state.nome}
            onChangeText={text => this.setState({nome: text})}
          />
          <TextInput placeholder='Apelido: ' 
            style={styles.input}
            value={this.state.apelido}
            onChangeText={text => this.setState({apelido: text})}
          />
          <TextInput placeholder='Telefone: ' 
            style={styles.input}
            value={this.state.telefone}
            onChangeText={text => this.setState({telefone: text})}
          />
          <View style={styles.panel}>
            <TouchableOpacity style={styles.button}
              onPress={() => this.clearInputs()}>
              <Text style={styles.textButton}>Limpar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
              onPress={() => this.addPessoa(this.state)}>
              <Text style={styles.textButton}>Gravar</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.title, {paddingTop: 10}]}>Clientes</Text>
          <FlatList data={this.state.pessoas}
            renderItem={({item}) => <Pessoa {...item} />}
            keyExtractor={item => (item.id+'')}
          />
        </View>
      </View>
    );
  };
}
