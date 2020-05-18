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
  visible: false,
  pessoa: [],
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
      await ServicePessoa.addData(text.nome, text.apelido ,text.telefone)
        .then(() => Alert.alert('Sucesso!', 'Cadastrado com Sucesso'))
        .then(this.allPessoa())
        .catch(error => Alert.alert('Erro',error));
    } catch (error) {
      console.log((error));
    }
  }

  onDetalhes = async (pessoa) => {
    //return console.log(pessoa)
    this.props.navigation.navigate('Details', pessoa); 
  }

  delPessoa = async(id) => {
    try {
      await ServicePessoa.deleteData(id)
        .then(() => Alert.alert('Sucesso!', 'Deletado com Sucesso'))
        .then(this.allPessoa())
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
    const validations = [];
    validations.push(this.state.nome && this.state.nome.length > 2);
    validations.push(this.state.apelido);
    validations.push(this.state.telefone && this.state.telefone.length == 11)

    const validForm = validations.reduce((total, atual) => total && atual);
    return (
      <View style={styles.container}>
        {this.state.visible ? this.onDetalhes(this.state.pessoa) : false}
        <View style={styles.box}>
          <Text style={styles.title}> Formulário de Clientes </Text>
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
            <TouchableOpacity style={[styles.button, validForm ? {} : 
              styles.buttonDisabled]}
              onPress={() => this.addPessoa(this.state)}
              disabled={!validForm}
            >
              <Text style={[styles.textButton, validForm ? {} : styles.textButtonDisabled]}>Gravar</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.title, styles.secondTitle]}>Clientes</Text>
          <FlatList data={this.state.pessoas}
            renderItem={({item}) => <Pessoa {...item} onDelete={() => this.delPessoa(item.id)} 
            onDetails={() => this.onDetalhes({...item})} />}
            keyExtractor={item => (item.id+'')}
          />
        </View>
      </View>
    );
  };
}
