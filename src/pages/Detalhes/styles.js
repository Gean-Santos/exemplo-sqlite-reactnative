import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  container: {
    backgroundColor: '#FFF',
  },
  header: {
    textAlign: 'center',
    padding: 15,
    fontSize: 18,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40, 
    margin: 15,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E3E3E3', 
    borderRadius: 6,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    margin: 20, 
    marginRight: 30,
  },
  date: {
    fontSize: 20,
    marginLeft: 15,
  },
})